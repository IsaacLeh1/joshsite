/**
 * QUIZ.JS - Handles quiz logic and score calculation
 * Integration: This file works standalone for HTML prototype
 * For Wix: Convert to Velo code in the quiz page editor
 */

// Talent type definitions
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
      "Freedom to try new approaches",
      "Collaborative brainstorming sessions",
      "Work with variety and change",
      "Minimal micromanagement"
    ],
    drains: [
      "Repetitive, routine work with no variation",
      "Rigid processes and strict procedures",
      "Excessive rules and constraints",
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
      "Consultant"
    ],
    industries: [
      "Technology & Startups",
      "Marketing & Advertising",
      "Design & Architecture",
      "Entertainment & Media",
      "Consulting",
      "Education & Training"
    ]
  },

  analytical: {
    name: "Analytical Problem Solver",
    description: "You excel at breaking down complexity and finding solutions through logic and data. You love understanding how things work and diving deep into problems.",
    strengths: [
      "Breaking down complex problems systematically",
      "Logical and critical thinking",
      "Research and investigation",
      "Data analysis and pattern recognition",
      "Attention to detail and precision"
    ],
    environments: [
      "Complex problems that need solving",
      "Evaluation based on quality and accuracy",
      "Time for deep focus and thinking",
      "Research and learning opportunities",
      "Data-driven decision making"
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
      "Consultant"
    ],
    industries: [
      "Technology",
      "Finance & Investment",
      "Research & Development",
      "Healthcare Analytics",
      "Education & Academia",
      "Consulting"
    ]
  },

  practical: {
    name: "Practical Builder",
    description: "You're resourceful and action-oriented. You prefer getting things done and seeing tangible results. You solve problems directly and efficiently.",
    strengths: [
      "Getting things done efficiently",
      "Working with tangible, hands-on projects",
      "Practical problem-solving",
      "Resourcefulness and adaptability",
      "Quick decision-making and implementation"
    ],
    environments: [
      "Hands-on work with visible results",
      "Autonomy to make decisions",
      "Working on real-world problems",
      "Clear objectives and goals",
      "Minimal unnecessary processes"
    ],
    drains: [
      "Excessive theory without application",
      "Analysis paralysis and endless planning",
      "Bureaucratic processes",
      "Micro-management and control",
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
    ],
    industries: [
      "Construction & Engineering",
      "Manufacturing",
      "Operations & Logistics",
      "Skilled Trades",
      "Facilities & Maintenance",
      "Project Management"
    ]
  },

  people: {
    name: "People-Oriented Helper",
    description: "You're naturally empathetic and energized by connecting with others. You're driven to help, support, and make a positive difference in people's lives.",
    strengths: [
      "Connecting with and understanding others",
      "Empathy and emotional intelligence",
      "Listening and providing support",
      "Building trust and relationships",
      "Teaching and mentoring"
    ],
    environments: [
      "Collaborative team settings",
      "Direct interaction and relationship building",
      "Work that impacts people positively",
      "Supportive and inclusive culture",
      "Opportunities to help and develop others"
    ],
    drains: [
      "Isolated, solo-only work",
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
    ],
    industries: [
      "Healthcare & Wellness",
      "Education",
      "Human Resources",
      "Non-profit & Social Services",
      "Sales & Customer Success",
      "Training & Development"
    ]
  },

  leader: {
    name: "Leadership & Visionary",
    description: "You naturally take charge and inspire others. You see the big picture, set direction, and drive teams toward ambitious goals with confidence.",
    strengths: [
      "Taking charge and providing direction",
      "Strategic thinking and vision",
      "Inspiring and motivating others",
      "Making decisive decisions",
      "Driving results and accountability"
    ],
    environments: [
      "Leadership roles with authority",
      "Strategic decision-making input",
      "Building and leading teams",
      "Setting and achieving ambitious goals",
      "Opportunities for growth and expansion"
    ],
    drains: [
      "Being managed too closely",
      "Lack of strategic influence",
      "No opportunity to lead or direct",
      "Slow-moving, indecisive cultures",
      "Environments that lack clear vision"
    ],
    careers: [
      "CEO / Executive Director",
      "Founder",
      "General Manager",
      "Director",
      "Vice President",
      "Executive Coach",
      "Strategy Director",
      "Chief Product Officer"
    ],
    industries: [
      "Executive Leadership",
      "Startups & Entrepreneurship",
      "Management Consulting",
      "Corporate Strategy",
      "Business Development",
      "Executive Coaching"
    ]
  },

  organizer: {
    name: "Detail-Oriented Organizer",
    description: "You're systematic and methodical. You create order, establish processes, and ensure excellence through precision and attention to detail.",
    strengths: [
      "Creating systems and processes",
      "Organization and planning",
      "Quality assurance and precision",
      "Attention to detail",
      "Following through systematically"
    ],
    environments: [
      "Clear systems and processes",
      "Work evaluated on quality and accuracy",
      "Defined roles and responsibilities",
      "Structured environments",
      "Opportunities to improve systems"
    ],
    drains: [
      "Chaos and constant change",
      "Lack of clear process or structure",
      "Sloppy, low-quality work from others",
      "Ambiguous or constantly shifting priorities",
      "Work without standards or procedures"
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
    ],
    industries: [
      "Accounting & Finance",
      "Legal Services",
      "Quality Assurance",
      "Compliance & Audit",
      "Logistics & Supply Chain",
      "Healthcare Administration"
    ]
  }
};

// Quiz form handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quizForm");
  
  if (form) {
    form.addEventListener("submit", handleQuizSubmit);
    setupQuizInteractivity();
    updateProgressBar();
  }
});

// Update progress bar as user progresses
function updateProgressBar() {
  const form = document.getElementById("quizForm");
  if (!form) return;

  const questions = form.querySelectorAll(".quiz-question");
  const totalQuestions = questions.length;
  let answeredQuestions = 0;

  // Count answered questions
  questions.forEach((q, index) => {
    const radioButtons = q.querySelectorAll('input[type="radio"]');
    const isAnswered = Array.from(radioButtons).some(rb => rb.checked);
    if (isAnswered) answeredQuestions++;
  });

  // Update progress bar
  const progress = (answeredQuestions / totalQuestions) * 100;
  const progressFill = document.getElementById("progressFill");
  const currentQuestion = document.getElementById("currentQuestion");
  
  if (progressFill) progressFill.style.width = progress + "%";
  if (currentQuestion) currentQuestion.textContent = answeredQuestions;
  if (document.getElementById("totalQuestions")) {
    document.getElementById("totalQuestions").textContent = totalQuestions;
  }
}

// Setup quiz interactivity (visual feedback)
function setupQuizInteractivity() {
  const form = document.getElementById("quizForm");
  if (!form) return;

  const options = form.querySelectorAll(".quiz-option");
  
  options.forEach(option => {
    option.addEventListener("click", function () {
      // Remove selected class from siblings
      const parent = this.parentElement;
      parent.querySelectorAll(".quiz-option").forEach(opt => {
        opt.classList.remove("selected");
      });
      
      // Add selected class to clicked option
      this.classList.add("selected");
      
      // Check the radio button
      const radio = this.querySelector("input[type='radio']");
      radio.checked = true;
      
      // Update progress
      updateProgressBar();
    });

    // Check if radio is already selected
    const radio = option.querySelector("input[type='radio']");
    if (radio && radio.checked) {
      option.classList.add("selected");
    }
  });
}

// Handle quiz submission
function handleQuizSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("quizForm");
  const formData = new FormData(form);

  // Calculate scores
  const scores = {
    creative: 0,
    analytical: 0,
    practical: 0,
    people: 0,
    leader: 0,
    organizer: 0
  };

  // Tally up the votes
  for (let [key, value] of formData) {
    if (scores.hasOwnProperty(value)) {
      scores[value]++;
    }
  }

  // Find dominant talent type
  const dominantType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  // Store results in session storage
  const results = {
    talentType: dominantType,
    scores: scores,
    timestamp: new Date().toISOString()
  };

  sessionStorage.setItem("quizResults", JSON.stringify(results));

  // Redirect to results page
  window.location.href = "results.html";
}

/**
 * ============================================
 * VELO INTEGRATION FOR WIX
 * ============================================
 * 
 * To use this on Wix, convert to Velo code:
 * 
 * 1. Go to Wix Editor > Dev Mode > Code
 * 2. Create a file: pages/quiz.js (or equivalent)
 * 3. Use the logic below:
 * 
 * 
 * // Store quiz answers in database
 * import wix from 'wix-api';
 * 
 * export async function submitQuiz(answers) {
 *   const scores = calculateScores(answers);
 *   const dominantType = findDominantType(scores);
 *   
 *   // Save to Wix Database
 *   const item = {
 *     "sessionId": generateSessionId(),
 *     "creative": scores.creative,
 *     "analytical": scores.analytical,
 *     "practical": scores.practical,
 *     "people": scores.people,
 *     "leader": scores.leader,
 *     "organizer": scores.organizer,
 *     "resultType": dominantType
 *   };
 *   
 *   return await wix.item().insert("QuizResults", item);
 * }
 * 
 * function calculateScores(answers) {
 *   // Same logic as above
 * }
 * 
 * function findDominantType(scores) {
 *   // Same logic as above
 * }
 */
