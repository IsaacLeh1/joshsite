# TalentMatch Database Schema

## Overview
This document defines the database structure for storing quiz results and user data on Wix.

---

## Primary Collection: QuizResults

**Purpose**: Store individual quiz submissions and calculated talent profiles

### Collection Name
```
QuizResults
```

### Fields

| Field Name | Type | Length | Required | Description | Example |
|-----------|------|--------|----------|-------------|---------|
| _id | ObjectId | - | Auto | Wix system ID | (auto-generated) |
| sessionId | Text | 50 | Yes | Unique session identifier | "16hk8x7nw3" |
| creative | Number | - | Yes | Score for Creative Thinker talent (0-15) | 8 |
| analytical | Number | - | Yes | Score for Analytical Problem Solver (0-15) | 12 |
| practical | Number | - | Yes | Score for Practical Builder (0-15) | 5 |
| people | Number | - | Yes | Score for People-Oriented Helper (0-15) | 7 |
| leader | Number | - | Yes | Score for Leadership & Visionary (0-15) | 6 |
| organizer | Number | - | Yes | Score for Detail-Oriented Organizer (0-15) | 9 |
| resultType | Text | 20 | Yes | Dominant talent type | "analytical" |
| timestamp | Date | - | Yes | Quiz completion time | 2026-02-18T10:30:00Z |
| userEmail | Text | 100 | No | Optional user email for follow-up | user@example.com |
| userName | Text | 100 | No | Optional user name | "John Doe" |
| userAge | Number | - | No | Optional: user's age range (0-65+) | 25 |
| referralSource | Text | 50 | No | How user found the site | "google", "social", "direct" |

### Indexes

Create these indexes for optimal performance:

```
Primary Key: sessionId (Unique)
Indexes:
  - resultType (for filtering/analytics)
  - timestamp (for sorting, newest first)
  - userEmail (for finding user results)
```

### Sample Document

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "sessionId": "16hk8x7nw3",
  "creative": 8,
  "analytical": 12,
  "practical": 5,
  "people": 7,
  "leader": 6,
  "organizer": 9,
  "resultType": "analytical",
  "timestamp": "2026-02-18T10:30:00.000Z",
  "userEmail": "john.doe@example.com",
  "userName": "John Doe",
  "userAge": 28,
  "referralSource": "google"
}
```

---

## Optional: Users Collection

**Purpose**: Store user accounts if implementing member system

### Fields

| Field Name | Type | Length | Required | Description |
|-----------|------|--------|----------|-------------|
| _id | ObjectId | - | Auto | Wix system ID |
| email | Text | 100 | Yes | User email (unique) |
| userName | Text | 100 | Yes | Display name |
| dateJoined | Date | - | Yes | Account creation date |
| lastQuizDate | Date | - | No | Most recent quiz completion |
| quizCount | Number | - | No | Number of quizzes taken |
| savedResults | Array | - | No | Array of sessionIds from past quizzes |

---

## Optional: Analytics Collection

**Purpose**: Track aggregated data for insights

### Fields

| Field Name | Type | Description |
|-----------|------|-------------|
| _id | ObjectId | System ID |
| date | Date | Date of analytics snapshot |
| totalQuizzes | Number | Total quizzes completed |
| averageCreative | Number | Average creative score |
| averageAnalytical | Number | Average analytical score |
| averagePractical | Number | Average practical score |
| averagePeople | Number | Average people score |
| averageLeader | Number | Average leader score |
| averageOrganizer | Number | Average organizer score |
| dominantType | Text | Most common talent type |
| returnVisitors | Number | Users who took quiz more than once |

---

## Scoring System

### Score Range
- Each talent type: **0-15 points**
- Total possible points: **90** (15 questions × 6 types)
- Actual maximum: **15** (one type per question)

### Question-to-Talent Mapping

| Question | Talent Types Being Tested |
|----------|--------------------------|
| 1. Problem-solving approach | Creative, Analytical, Practical, People |
| 2. Team role preference | Leader, Analytical, People, Organizer |
| 3. Ideal work environment | Creative, Analytical, Practical, People |
| 4. What energizes you | Creative, Analytical, Practical, People |
| 5. Under deadline | Leader, Organizer, Practical, Analytical |
| 6. Greatest strength | Creative, Analytical, Practical, People |
| 7. Work feedback | Creative, Analytical, Organizer, Leader |
| 8. Learning preference | Practical, Analytical, People, Creative |
| 9. Work burden | Analytical, Practical, People, Creative |
| 10. Success conditions | Leader, Organizer, People, Creative |
| 11. Solo work style | Analytical, Practical, Creative, People |
| 12. Ideal outcome | Leader, Analytical, People, Practical |
| 13. Response to change | Creative, Analytical, Practical, Organizer |
| 14. Work description | Creative, Analytical, Organizer, Leader |
| 15. Perfect job characteristics | Creative, Analytical, Practical, People |

### Result Calculation Example

**User Answers:**
- Q1: analytical
- Q2: analytical
- Q3: practical
- Q4: analytical
- Q5: organizer
- Q6: practical
- Q7: analytical
- Q8: practical
- Q9: people
- Q10: creative
- Q11: practical
- Q12: analytical
- Q13: creative
- Q14: analytical
- Q15: practical

**Scores:**
- Creative: 2
- Analytical: 5 ← **Dominant**
- Practical: 5
- People: 1
- Leader: 0
- Organizer: 1

**Result Type:** "analytical"

---

## Data Validation Rules

### When Saving Quiz Results

1. **sessionId**: Must be unique and non-empty
2. **Scores**: Must be integers between 0-15
3. **resultType**: Must match one of: creative, analytical, practical, people, leader, organizer
4. **timestamp**: Must be a valid date/time
5. **userEmail** (if provided): Must be valid email format
6. **Sum of all scores**: Must equal 15 (one point per question)

### Validation Code (Velo)

```javascript
function validateQuizResult(result) {
  const errors = [];
  
  // Check required fields
  if (!result.sessionId || result.sessionId.trim().length === 0) {
    errors.push("sessionId is required");
  }
  
  // Check score ranges
  const talentTypes = ['creative', 'analytical', 'practical', 'people', 'leader', 'organizer'];
  let totalScore = 0;
  
  talentTypes.forEach(type => {
    const score = result[type];
    if (typeof score !== 'number' || score < 0 || score > 15) {
      errors.push(`${type} score must be 0-15`);
    }
    totalScore += score;
  });
  
  if (totalScore !== 15) {
    errors.push("Total score must equal 15");
  }
  
  // Check result type
  if (!talentTypes.includes(result.resultType)) {
    errors.push("resultType is invalid");
  }
  
  // Check email format (if provided)
  if (result.userEmail && !isValidEmail(result.userEmail)) {
    errors.push("userEmail is not valid");
  }
  
  return errors.length === 0 ? true : errors;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
```

---

## Data Retention & Privacy

### Data Retention
- First-time quiz results: **2 years**
- User accounts: **As long as account is active**
- Analytics data: **Retained indefinitely** (anonymized)

### Privacy Considerations
- Never store passwords (use Wix Members)
- Email is optional; not required for anonymity
- Anonymize data before exporting for analysis
- GDPR: Implement "delete my data" functionality

### Delete Functionality (Velo)

```javascript
export async function deleteUserData(sessionId) {
  return await collection('QuizResults').removeItem(sessionId);
}

export async function deleteUserByEmail(email) {
  return await collection('QuizResults')
    .query()
    .eq('userEmail', email)
    .remove();
}
```

---

## API Endpoints (For Future Mobile App)

### POST /save-quiz-results
**Saves a completed quiz to database**

Request:
```json
{
  "sessionId": "16hk8x7nw3",
  "creative": 8,
  "analytical": 12,
  "practical": 5,
  "people": 7,
  "leader": 6,
  "organizer": 9,
  "resultType": "analytical",
  "userEmail": "user@example.com"
}
```

Response:
```json
{
  "success": true,
  "sessionId": "16hk8x7nw3",
  "message": "Results saved successfully"
}
```

### GET /results/:sessionId
**Retrieves saved results**

Response:
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "sessionId": "16hk8x7nw3",
    "resultType": "analytical",
    // ... rest of data
  }
}
```

### GET /analytics
**Retrieves aggregated analytics**

Response:
```json
{
  "success": true,
  "data": {
    "totalQuizzes": 1250,
    "dominantType": "analytical",
    "talentDistribution": {
      "creative": 0.15,
      "analytical": 0.28,
      "practical": 0.18,
      "people": 0.17,
      "leader": 0.12,
      "organizer": 0.10
    }
  }
}
```

---

## Backup & Recovery

### Backup Strategy
- Wix automatically backs up all data
- Manual export: Use Wix Data Export feature
- Frequency: Weekly automated backups

### Export Instructions
1. Wix Editor → Wix Data
2. Right-click Collection → **Export**
3. Choose CSV or JSON format
4. Save to secure location

---

## Future Scalability

### When to Scale
- Quiz completions exceed 10,000/month
- Need real-time analytics
- Implementing multiple assessments

### Scaling Options
1. **Wix Premium**: Higher data storage limits
2. **Custom Backend**: Use external database (Firebase, MongoDB)
3. **Data Warehouse**: Implement analytics database for historical data

---

**Last Updated:** February 2026
