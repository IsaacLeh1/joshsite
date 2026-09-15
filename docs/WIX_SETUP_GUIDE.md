# Wix Setup Guide for TalentMatch

## Overview
This guide walks you through implementing the TalentMatch talent discovery quiz on Wix. The site consists of 5 pages, a Velo-powered quiz system, and optional database integration.

---

## Step 1: Wix Editor Setup

### Enable Velo (Developer Mode)
1. Open your Wix Editor
2. Click **Dev Mode** (top right) to enable code editing
3. You now have access to JavaScript files and backend code

---

## Step 2: Create Pages

Create these 5 pages in Wix:

| Page | Slug | Purpose |
|------|------|---------|
| Home | / | Hero + How it works overview |
| How It Works | /how-it-works | Detailed 3-step explanation |
| Talent Quiz | /quiz | The main quiz (15 questions) |
| Results | /results | Personalized talent profile |
| About | /about | Mission and talent archetypes |

### Import Pages from HTML
1. In Wix Editor, create a blank page
2. Copy the HTML content from `/pages/home.html` (use custom elements or native Wix elements)
3. Paste styling from `/css/styles.css`
4. Repeat for other pages

---

## Step 3: Design the Pages

### Recommended Wix Elements

**Home Page:**
- Hero Image Box
- Heading (H1)
- Text Box
- Button (CTA)
- 3-Column Container (How It Works cards)

**Quiz Page:**
- Progress Bar
- Form/Fields for each question
- Multiple choice radio buttons
- Submit Button

**Results Page:**
- Heading (Talent Type)
- Text boxes (description)
- Multiple Lists (strengths, environments, careers)
- Tags (for career suggestions)

### Apply Styling
Copy the CSS from `styles.css` and apply through:
- Wix Design Panel
- Custom CSS in Site Settings > Custom CSS
- Inline styles on elements

**Color Scheme:**
- Primary: `#1E293B` (dark blue)
- Accent: `#38BDF8` (soft blue)
- Light background: `#F8FAFC`

---

## Step 4: Database Setup (Optional but Recommended)

### Create Wix Collection: "QuizResults"

1. Go to **Wix Data** (left sidebar)
2. Create a new collection named: **QuizResults**
3. Add these fields:

| Field Name | Type | Description |
|-----------|------|-------------|
| sessionId | Text | Unique session identifier |
| creative | Number | Score for Creative Thinker |
| analytical | Number | Score for Analytical Problem Solver |
| practical | Number | Score for Practical Builder |
| people | Number | Score for People-Oriented Helper |
| leader | Number | Score for Leadership & Visionary |
| organizer | Number | Score for Detail-Oriented Organizer |
| resultType | Text | Dominant talent type (e.g., "analytical") |
| timestamp | Date | When the quiz was completed |
| userEmail | Text | Optional: user email for follow-up |

### Index Settings
- Set `sessionId` as the primary key (unique identifier)
- Enable `timestamp` for sorting (newest first)

---

## Step 5: Quiz Implementation (Velo Code)

### File: `/public/pages/quiz.js`

This is the client-side quiz handler that:
1. Captures form answers
2. Calculates talent scores
3. Saves results to database
4. Redirects to results page

```javascript
// Import backend functions
import { submitQuizAnswers } from 'backend/quiz-handler';

// Handle Quiz Submission
$w('#quizForm').onSubmit((event) => {
  const answers = getFormAnswers();
  const scores = calculateScores(answers);
  const dominantType = findDominant(scores);
  
  // Save to database
  submitQuizAnswers({
    scores: scores,
    resultType: dominantType
  }).then(() => {
    // Redirect to results
    $w.navigate('/results?type=' + dominantType);
  });
});

// Calculate talent scores from answers
function calculateScores(answers) {
  const scores = {
    creative: 0,
    analytical: 0,
    practical: 0,
    people: 0,
    leader: 0,
    organizer: 0
  };
  
  // Tally answers by talent type
  Object.values(answers).forEach(answerValue => {
    if (scores[answerValue] !== undefined) {
      scores[answerValue]++;
    }
  });
  
  return scores;
}

// Find dominant talent type
function findDominant(scores) {
  return Object.keys(scores).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  );
}
```

### File: `/backend/quiz-handler.js`

This backend code saves quiz results to the database:

```javascript
import { collection } from 'wix-data';

export async function submitQuizAnswers(data) {
  const sessionId = generateSessionId();
  
  const item = {
    'sessionId': sessionId,
    'creative': data.scores.creative,
    'analytical': data.scores.analytical,
    'practical': data.scores.practical,
    'people': data.scores.people,
    'leader': data.scores.leader,
    'organizer': data.scores.organizer,
    'resultType': data.resultType,
    'timestamp': new Date()
  };
  
  return await collection('QuizResults').insertItem(item);
}

function generateSessionId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
```

---

## Step 6: Results Page Implementation

### File: `/public/pages/results.js`

Fetches and displays personalized results:

```javascript
import { getTalentData } from 'backend/talent-data';

$w.onReady(function() {
  const talentType = $w.query.get('type') || 'analytical';
  
  getTalentData(talentType).then(data => {
    $w('#talentTypeName').text = data.name;
    $w('#talentTypeDescription').text = data.description;
    
    // Populate strengths list
    $w('#strengthsList').rows = data.strengths.map(s => ({
      '#title': s
    }));
    
    // Populate environments
    $w('#environmentList').rows = data.environments.map(e => ({
      '#title': e
    }));
    
    // Populate drains
    $w('#drainsList').rows = data.drains.map(d => ({
      '#title': d
    }));
    
    // Populate careers
    $w('#careersList').html = data.careers
      .map(c => `<span class="career-tag">${c}</span>`)
      .join('');
  });
});
```

### File: `/backend/talent-data.js`

Contains talent archetype definitions:

```javascript
const talentTypes = {
  creative: {
    name: "Creative Thinker",
    description: "You're a natural innovator who sees possibilities everywhere...",
    strengths: ["Generating innovative ideas", "Adaptability", ...],
    environments: ["Freedom to experiment", ...],
    drains: ["Repetitive work", ...],
    careers: ["Product Designer", "UX Designer", ...]
  },
  // ... other 5 talent types
};

export async function getTalentData(type) {
  return talentTypes[type] || talentTypes.analytical;
}
```

---

## Step 7: Navigation Menu

### Create Sticky Header

1. Add a **Header Container** at top of each page
2. Add **Logo** (text or image)
3. Add **Horizontal Menu** with links:
   - Home (/)
   - How It Works (/how-it-works)
   - Take the Quiz (/quiz)
   - About (/about)

4. Set header to **Sticky on Scroll**:
   - Select header → Design Panel → **Behavior** → Enable **Sticky**

---

## Step 8: Mobile Optimization

Wix handles responsive design automatically, but optimize:

### Mobile Settings
1. Switch to **Mobile Preview** mode (bottom of editor)
2. Adjust element sizing:
   - Button height: minimum 48px
   - Text: readable without zooming
   - Spacing: appropriate padding

3. Stack multi-column layouts vertically on mobile:
   - Use Wix responsive containers
   - Test on multiple device sizes

---

## Step 9: SEO & Metadata

### Per-Page SEO

**Home Page:**
- Title: "Discover Your Natural Talents | TalentMatch Quiz"
- Description: "Find your talent type and discover careers you'll actually enjoy. Take our quick quiz."

**Quiz Page:**
- Title: "Talent Discovery Quiz | Find Your Perfect Career"
- Description: "15-question quiz reveals your natural strengths. Get personalized career recommendations."

**Results Page:**
- Title: "Your Talent Profile Results | TalentMatch"
- Description: "Your personalized talent analysis and recommended careers."

### Setup in Wix
1. Each page → **Settings** (gear icon)
2. Add title and meta description
3. Enable "Index this page" for SEO

---

## Step 10: Testing

### Desktop Testing
- [ ] All pages load correctly
- [ ] Quiz questions display properly
- [ ] Form submission works
- [ ] Results page populates correctly
- [ ] Navigation menu works on all pages
- [ ] Links to external resources work

### Mobile Testing
- [ ] Pages are readable without zoom
- [ ] Buttons are easily tappable (48px+)
- [ ] Forms are easy to fill on mobile
- [ ] Results page is scannable on small screens

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## Step 11: Publishing

1. Click **Publish** (top right)
2. Connect your domain (if not already done)
3. Share the link: `yourdomain.com`

---

## File Structure Reference

```
Your Wix Site:
├── public/
│   ├── pages/
│   │   ├── quiz.js
│   │   └── results.js
│   └── styles.css
│
├── backend/
│   ├── quiz-handler.js
│   ├── talent-data.js
│   └── data.js
│
├── Wix Collections/
│   └── QuizResults
│
└── Pages (in Wix Editor):
    ├── Home
    ├── How It Works
    ├── Talent Quiz
    ├── Results
    └── About
```

---

## Troubleshooting

### Quiz form not submitting
- Check browser console for errors
- Verify all radio buttons have unique names
- Ensure submit button is type="submit"

### Results not displaying
- Check that sessionId is being saved to database
- Verify URL parameter is correct (?type=analytical)
- Check that talentTypes object includes the type

### Database connection issues
- Verify collection is named exactly "QuizResults"
- Check field names match code exactly
- Ensure permissions allow public reads/writes

### Mobile layout issues
- Use Wix responsive containers, not fixed widths
- Test in mobile preview mode frequently
- Stack columns vertically on small screens

---

## Optional Enhancements

1. **User Accounts**: Add Wix Members to email results
2. **Analytics**: Track which talent types are most common
3. **Social Sharing**: Add buttons to share results
4. **PDF Export**: Generate downloadable talent profile
5. **Email Notifications**: Auto-email results to users

---

## Contact & Support

For questions about Wix implementation:
- Wix Editor Help: help.wix.com
- Velo Documentation: dev.wix.com/docs
- Wix Forum: forum.wix.com

---

**Last Updated:** February 2026
