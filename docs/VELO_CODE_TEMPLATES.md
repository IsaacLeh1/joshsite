# Wix Velo Code Templates

This document contains ready-to-use Velo JavaScript code that you can directly copy-paste into your Wix pages.

---

## Table of Contents
1. [Quiz Page Code](#quiz-page-code)
2. [Results Page Code](#results-page-code)
3. [Backend Code](#backend-code)
4. [Integration Notes](#integration-notes)

---

## Quiz Page Code

### Location
**Wix Editor → Dev Mode → /pages/quiz.js**

### Full Code

```javascript
/**
 * TalentMatch Quiz Page (Wix Velo)
 * Handles quiz form submission, scoring, and result saving
 * 
 * Page Elements Required:
 * - quizForm (Form element)
 * - progressFill (Progress bar fill)
 * - currentQuestion (Text showing current question #)
 * 
 * Radio Button Groups (one per question):
 * - q1, q2, q3, ... q15
 */

import { submitQuizResults } from 'backend/quiz-backend';

// Talent types for reference
const TALENT_TYPES = ['creative', 'analytical', 'practical', 'people', 'leader', 'organizer'];

// Initialize page
$w.onReady(function () {
  setupProgressBar();
  setupFormValidation();
  
  $w('#quizForm').onSubmit((event) => {
    handleQuizSubmit(event);
  });
});

/**
 * Setup progress bar to update as user answers questions
 */
function setupProgressBar() {
  // Get all questions
  const questions = [];
  for (let i = 1; i <= 15; i++) {
    const radioGroup = $w(`#q${i}`);
    if (radioGroup) {
      questions.push(radioGroup);
    }
  }
  
  // Listen for changes
  questions.forEach((question, index) => {
    question.onChange(() => {
      updateProgressBar(questions);
    });
  });
}

/**
 * Update progress bar
 */
function updateProgressBar(questions) {
  let answered = 0;
  
  questions.forEach(question => {
    if (question.value) {
      answered++;
    }
  });
  
  const progress = (answered / 15) * 100;
  $w('#progressFill').style.width = progress + '%';
  $w('#currentQuestion').text = answered.toString();
}

/**
 * Setup form validation
 */
function setupFormValidation() {
  // Optional: Add validation for each question
  for (let i = 1; i <= 15; i++) {
    $w(`#q${i}`).setCustomValidity('');
  }
}

/**
 * Handle quiz form submission
 */
function handleQuizSubmit(event) {
  event.preventDefault();
  
  // Collect answers
  const answers = {};
  for (let i = 1; i <= 15; i++) {
    const value = $w(`#q${i}`).value;
    if (value) {
      answers[`q${i}`] = value;
    }
  }
  
  // Validate all questions answered
  if (Object.keys(answers).length < 15) {
    $w('#submitButton').label = 'Please answer all questions';
    return;
  }
  
  // Calculate scores
  const scores = calculateScores(answers);
  const dominantType = findDominantType(scores);
  
  // Save to backend
  $w('#submitButton').disable();
  $w('#submitButton').label = 'Processing...';
  
  submitQuizResults({
    answers: answers,
    scores: scores,
    resultType: dominantType
  })
  .then((result) => {
    // Navigate to results page with talent type
    $w.navigateTo(`/results?type=${dominantType}&sessionId=${result.sessionId}`);
  })
  .catch((error) => {
    console.error('Error submitting quiz:', error);
    $w('#submitButton').enable();
    $w('#submitButton').label = 'See My Results';
    alert('An error occurred. Please try again.');
  });
}

/**
 * Calculate talent scores from answers
 * @param {Object} answers - Object with q1-q15 values
 * @returns {Object} - Scores for each talent type
 */
function calculateScores(answers) {
  const scores = {
    creative: 0,
    analytical: 0,
    practical: 0,
    people: 0,
    leader: 0,
    organizer: 0
  };
  
  // Count votes for each talent type
  Object.values(answers).forEach(talentType => {
    if (scores[talentType] !== undefined) {
      scores[talentType]++;
    }
  });
  
  return scores;
}

/**
 * Find dominant talent type (highest score)
 */
function findDominantType(scores) {
  return Object.keys(scores).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  );
}

/**
 * Utility: Get all answers as array
 */
function getAnswersArray() {
  const answers = [];
  for (let i = 1; i <= 15; i++) {
    answers.push($w(`#q${i}`).value);
  }
  return answers;
}
```

---

## Results Page Code

### Location
**Wix Editor → Dev Mode → /pages/results.js**

### Full Code

```javascript
/**
 * TalentMatch Results Page (Wix Velo)
 * Displays personalized talent profile based on quiz results
 * 
 * Page Elements Required:
 * - talentTypeName (Text)
 * - talentTypeDescription (Text)
 * - strengthsList (List)
 * - environmentList (List)
 * - drainsList (List)
 * - careersList (Text/HTML for tags)
 * - nextStepsList (List)
 * - retakeButton (Button)
 */

import { getTalentData } from 'backend/talent-data';

// Initialize page
$w.onReady(function () {
  // Get talent type from URL parameter
  const talentType = $w.query.get('type') || 'analytical';
  
  // Load talent data
  getTalentData(talentType)
    .then(data => {
      displayResults(data);
    })
    .catch(error => {
      console.error('Error loading talent data:', error);
      displayDefaultResults();
    });
  
  // Setup retake button
  $w('#retakeButton').onClick(() => {
    $w.navigateTo('/quiz');
  });
});

/**
 * Display personalized results
 */
function displayResults(data) {
  // Talent type headline
  $w('#talentTypeName').text = data.name;
  $w('#talentTypeDescription').text = data.description;
  
  // Strengths list
  displayList('#strengthsList', data.strengths);
  
  // Work environments
  displayList('#environmentList', data.environments);
  
  // What drains you
  displayList('#drainsList', data.drains);
  
  // Career tags
  displayCareerTags('#careersList', data.careers);
  
  // Next steps
  const nextSteps = getDefaultNextSteps();
  displayList('#nextStepsList', nextSteps);
}

/**
 * Display list items
 */
function displayList(elementId, items) {
  const element = $w(elementId);
  
  // Convert array to list format
  const listData = items.map(item => ({
    '#title': item
  }));
  
  element.rows = listData;
}

/**
 * Display career tags
 */
function displayCareerTags(elementId, careers) {
  const element = $w(elementId);
  
  const html = careers
    .map(career => `<span class="career-tag">${career}</span>`)
    .join(' ');
  
  element.html = html;
}

/**
 * Get default next steps
 */
function getDefaultNextSteps() {
  return [
    "Explore online courses in your areas of interest (Coursera, Udacity, etc.)",
    "Look for internships or entry roles in your target fields",
    "Build a portfolio or showcase of your best work and achievements",
    "Connect with professionals in careers that interest you on LinkedIn",
    "Consider relevant certifications for your target field"
  ];
}

/**
 * Display default results (fallback)
 */
function displayDefaultResults() {
  $w('#talentTypeName').text = "Analytical Problem Solver";
  $w('#talentTypeDescription').text = "Please refresh the page and try again.";
}
```

---

## Backend Code

### File 1: /backend/quiz-backend.js

```javascript
/**
 * Backend Quiz Handler (Wix Velo)
 * Handles quiz submission and result saving
 */

import { collection } from 'wix-data';

/**
 * Submit quiz results to database
 */
export async function submitQuizResults(data) {
  const sessionId = generateSessionId();
  
  // Build item for database
  const item = {
    'sessionId': sessionId,
    'creative': data.scores.creative,
    'analytical': data.scores.analytical,
    'practical': data.scores.practical,
    'people': data.scores.people,
    'leader': data.scores.leader,
    'organizer': data.scores.organizer,
    'resultType': data.resultType,
    'timestamp': new Date().toISOString()
  };
  
  // Validate
  const validationErrors = validateQuizResult(item);
  if (validationErrors.length > 0) {
    throw new Error(`Validation failed: ${validationErrors.join(', ')}`);
  }
  
  // Save to database
  try {
    const result = await collection('QuizResults').insertItem(item);
    return {
      success: true,
      sessionId: sessionId,
      resultType: data.resultType
    };
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to save quiz results');
  }
}

/**
 * Get quiz results by session ID
 */
export async function getQuizResults(sessionId) {
  try {
    return await collection('QuizResults').getItem(sessionId);
  } catch (error) {
    console.error('Error retrieving results:', error);
    return null;
  }
}

/**
 * Validate quiz result data
 */
function validateQuizResult(result) {
  const errors = [];
  const talentTypes = ['creative', 'analytical', 'practical', 'people', 'leader', 'organizer'];
  
  // Check required fields
  if (!result.sessionId || result.sessionId.trim().length === 0) {
    errors.push('sessionId is required');
  }
  
  // Check score ranges and sum
  let totalScore = 0;
  talentTypes.forEach(type => {
    const score = result[type];
    if (typeof score !== 'number' || score < 0 || score > 15) {
      errors.push(`${type} score must be 0-15`);
    }
    totalScore += score;
  });
  
  if (totalScore !== 15) {
    errors.push(`Total score must equal 15 (got ${totalScore})`);
  }
  
  // Check result type
  if (!talentTypes.includes(result.resultType)) {
    errors.push('resultType is invalid');
  }
  
  return errors;
}

/**
 * Generate unique session ID
 */
function generateSessionId() {
  // Combine timestamp and random string
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${random}`;
}

/**
 * Get analytics summary
 */
export async function getAnalyticsSummary() {
  try {
    const results = await collection('QuizResults').query().find();
    
    const talentCounts = {
      creative: 0,
      analytical: 0,
      practical: 0,
      people: 0,
      leader: 0,
      organizer: 0
    };
    
    results.forEach(result => {
      talentCounts[result.resultType]++;
    });
    
    return {
      totalQuizzes: results.length,
      talentDistribution: talentCounts,
      dominantType: Object.keys(talentCounts).reduce((a, b) =>
        talentCounts[a] > talentCounts[b] ? a : b
      )
    };
  } catch (error) {
    console.error('Error getting analytics:', error);
    return null;
  }
}
```

### File 2: /backend/talent-data.js

```javascript
/**
 * Talent Archetype Definitions
 * Contains all talent type data for results page
 */

const talentTypes = {
  creative: {
    name: "Creative Thinker",
    description: "You're a natural innovator who sees possibilities everywhere. You thrive when you can experiment, think outside the box, and bring fresh ideas to life.",
    strengths: [
      "Generating innovative ideas and solutions",
      "Seeing hidden possibilities and connections",
      "Thinking outside conventional boundaries",
      "Inspiring others with your vision",
      "Adaptability and flexibility"
    ],
    environments: [
      "Environments that encourage experimentation",
      "Freedom to try new approaches and fail safely",
      "Collaborative brainstorming sessions",
      "Work with variety and constant change",
      "Minimal micromanagement and autonomy"
    ],
    drains: [
      "Repetitive, routine work with no variation",
      "Rigid processes and strict procedures",
      "Excessive rules and constraints on thinking",
      "Micromanagement and lack of autonomy",
      "Work that feels meaningless or uninspiring"
    ],
    careers: [
      "Product Designer",
      "UX Designer",
      "Marketing Director",
      "Entrepreneur",
      "Architect",
      "Creative Director",
      "Innovation Manager",
      "Strategy Consultant"
    ]
  },

  analytical: {
    name: "Analytical Problem Solver",
    description: "You excel at breaking down complexity and finding solutions through logic and data. You love understanding how things work and diving deep into problems.",
    strengths: [
      "Breaking down complex problems systematically",
      "Logical and critical thinking",
      "In-depth research and investigation",
      "Data analysis and pattern recognition",
      "Attention to detail and precision"
    ],
    environments: [
      "Complex problems that need solving",
      "Evaluation based on quality and accuracy",
      "Time for deep focus and thinking",
      "Research and continuous learning opportunities",
      "Data-driven decision making processes"
    ],
    drains: [
      "Constant interruptions and shallow tasks",
      "Making decisions without sufficient information",
      "High-pressure social or emotional work",
      "Repetitive tasks with no learning",
      "Fuzzy requirements and unclear objectives"
    ],
    careers: [
      "Software Engineer",
      "Data Scientist",
      "Research Analyst",
      "Systems Architect",
      "Financial Analyst",
      "UX Researcher",
      "Product Manager",
      "Management Consultant"
    ]
  },

  practical: {
    name: "Practical Builder",
    description: "You're resourceful and action-oriented. You prefer getting things done and seeing tangible results. You solve problems directly and efficiently.",
    strengths: [
      "Getting things done efficiently and effectively",
      "Working with tangible, hands-on projects",
      "Practical problem-solving with real results",
      "Resourcefulness and creative problem-solving",
      "Quick decision-making and implementation"
    ],
    environments: [
      "Hands-on work with visible results",
      "Autonomy to make decisions and act",
      "Working on real-world, tangible problems",
      "Clear objectives and measurable goals",
      "Minimal unnecessary processes and red tape"
    ],
    drains: [
      "Excessive theory without practical application",
      "Analysis paralysis and endless planning",
      "Bureaucratic processes and slow-moving systems",
      "Micro-management and tight control",
      "Work disconnected from real-world impact"
    ],
    careers: [
      "Project Manager",
      "Operations Manager",
      "Construction Manager",
      "Mechanical Engineer",
      "Maintenance Technician",
      "Site Manager",
      "Contractor",
      "Field Operations Lead"
    ]
  },

  people: {
    name: "People-Oriented Helper",
    description: "You're naturally empathetic and energized by connecting with others. You're driven to help, support, and make a positive difference in people's lives.",
    strengths: [
      "Connecting with and understanding others",
      "Empathy and emotional intelligence",
      "Listening deeply and providing support",
      "Building trust and strong relationships",
      "Teaching, mentoring and developing others"
    ],
    environments: [
      "Collaborative team settings and interactions",
      "Direct connection and relationship building",
      "Work that impacts people positively",
      "Supportive and inclusive culture",
      "Opportunities to help others develop"
    ],
    drains: [
      "Isolated, solo-only work with no interaction",
      "Rigid hierarchies and impersonal relationships",
      "Work misaligned with personal values",
      "High-conflict environments",
      "Being undervalued or unappreciated"
    ],
    careers: [
      "Counselor / Therapist",
      "Teacher",
      "Nurse / Healthcare Provider",
      "HR Manager",
      "Sales Professional",
      "Coach / Mentor",
      "Social Worker",
      "Customer Success Manager"
    ]
  },

  leader: {
    name: "Leadership & Visionary",
    description: "You naturally take charge and inspire others. You see the big picture, set direction, and drive teams toward ambitious goals with confidence.",
    strengths: [
      "Taking charge and providing clear direction",
      "Strategic thinking and big-picture vision",
      "Inspiring and motivating others",
      "Making decisive decisions under pressure",
      "Driving results and accountability"
    ],
    environments: [
      "Leadership roles with real authority",
      "Strategic decision-making input",
      "Building and leading high-performing teams",
      "Setting and achieving ambitious goals",
      "Opportunities for growth and organizational impact"
    ],
    drains: [
      "Being managed too closely or micromanaged",
      "Lack of strategic influence and voice",
      "No opportunity to lead or direct others",
      "Slow-moving, indecisive cultures",
      "Environments that lack clear vision"
    ],
    careers: [
      "CEO / Executive Director",
      "Founder / Entrepreneur",
      "General Manager",
      "Director / Head of Department",
      "Vice President",
      "Executive Coach",
      "Chief Product Officer",
      "Strategic Consultant"
    ]
  },

  organizer: {
    name: "Detail-Oriented Organizer",
    description: "You're systematic and methodical. You create order, establish processes, and ensure excellence through precision and attention to detail.",
    strengths: [
      "Creating systems and processes",
      "Organization and project planning",
      "Quality assurance and precision",
      "Attention to detail and thoroughness",
      "Following through systematically"
    ],
    environments: [
      "Clear systems and well-defined processes",
      "Work evaluated on quality and accuracy",
      "Defined roles and responsibilities",
      "Structured, organized environments",
      "Opportunities to improve and optimize systems"
    ],
    drains: [
      "Chaos and constant change with no structure",
      "Lack of clear process or documented procedures",
      "Sloppy, low-quality work from others",
      "Ambiguous or constantly shifting priorities",
      "Work without standards or quality measures"
    ],
    careers: [
      "Project Administrator",
      "Quality Assurance Manager",
      "Accountant / Financial Analyst",
      "Lawyer",
      "Logistics Manager",
      "Compliance Officer",
      "Operations Analyst",
      "Documentation Specialist"
    ]
  }
};

/**
 * Get talent data by type
 */
export async function getTalentData(talentType) {
  const data = talentTypes[talentType];
  
  if (!data) {
    console.warn(`Unknown talent type: ${talentType}, returning analytical`);
    return talentTypes.analytical;
  }
  
  return data;
}

/**
 * Get all talent types
 */
export async function getAllTalentTypes() {
  return Object.keys(talentTypes);
}
```

---

## Integration Notes

### Step-by-Step Integration

1. **Create Backend Files**
   - Go to Dev Mode → Code
   - Click **Create New** → File
   - Name: `backend/quiz-backend.js` → Paste code
   - Name: `backend/talent-data.js` → Paste code

2. **Create Page Code**
   - Select **Quiz page** → Go to Code tab
   - Paste code from [Quiz Page Code](#quiz-page-code)
   - Select **Results page** → Go to Code tab
   - Paste code from [Results Page Code](#results-page-code)

3. **Update Page Element IDs**
   - Quiz page: Ensure form has ID `quizForm`, button has ID `submitButton`
   - Results page: Match all element IDs in the code

4. **Create Database Collection**
   - Wix Data → Create Collection
   - Name: `QuizResults`
   - Fields: See DATABASE_SCHEMA.md

5. **Test**
   - Preview page
   - Take quiz
   - Submit
   - Check results page

---

## Troubleshooting

### Quiz Not Submitting
- Check browser console for errors
- Verify form ID is `quizForm`
- Ensure all radio buttons have values (creative, analytical, etc.)

### Results Not Displaying
- Verify URL has `?type=analytical` parameter
- Check backend file `talent-data.js` exists
- Inspect element IDs match the code

### Database Error
- Verify collection exists and is named exactly `QuizResults`
- Check field names match exactly (no spaces)
- Ensure permissions are set correctly

### Import Errors
- Verify backend file names are correct
- Use exact paths: `backend/quiz-backend`, `backend/talent-data`
- Check for typos in import statements

---

**Last Updated**: February 2026
