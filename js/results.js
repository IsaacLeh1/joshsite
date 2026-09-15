/**
 * RESULTS.JS - Displays personalized quiz results
 * Integration: This file works standalone for HTML prototype
 * For Wix: Use Wix Page Elements and data binding in Velo
 */

// Talent type definitions (referenced from quiz.js)
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
    ]
  }
};

// Load and display results
document.addEventListener("DOMContentLoaded", function () {
  const results = getQuizResults();
  
  if (results && results.talentType) {
    displayResults(results);
  } else {
    // No quiz results found, show a message
    console.warn("No quiz results found");
    displayDefaultResults();
  }
});

function getQuizResults() {
  const resultsStr = sessionStorage.getItem("quizResults");
  if (resultsStr) {
    return JSON.parse(resultsStr);
  }
  return null;
}

function displayResults(results) {
  const talentType = results.talentType;
  const typeData = talentTypes[talentType];

  if (!typeData) {
    displayDefaultResults();
    return;
  }

  // Update talent type name and description
  const nameElement = document.getElementById("talentTypeName");
  const descElement = document.getElementById("talentTypeDescription");
  
  if (nameElement) nameElement.textContent = typeData.name;
  if (descElement) descElement.textContent = typeData.description;

  // Update strengths
  const strengthsList = document.getElementById("strengthsList");
  if (strengthsList) {
    strengthsList.innerHTML = typeData.strengths
      .map(strength => `<li>${strength}</li>`)
      .join("");
  }

  // Update environments
  const environmentList = document.getElementById("environmentList");
  if (environmentList) {
    environmentList.innerHTML = typeData.environments
      .map(env => `<li>${env}</li>`)
      .join("");
  }

  // Update drains
  const drainsList = document.getElementById("drainsList");
  if (drainsList) {
    drainsList.innerHTML = typeData.drains
      .map(drain => `<li>${drain}</li>`)
      .join("");
  }

  // Update careers
  const careersList = document.getElementById("careersList");
  if (careersList) {
    careersList.innerHTML = typeData.careers
      .map(career => `<span class="career-tag">${career}</span>`)
      .join("");
  }

  // Update next steps (predefined)
  const nextStepsList = document.getElementById("nextStepsList");
  if (nextStepsList) {
    const defaultNextSteps = [
      "Explore online courses in your areas of interest (Coursera, Udacity, etc.)",
      "Look for internships or entry roles in your target fields",
      "Build a portfolio or showcase of your best work",
      "Connect with professionals in careers that interest you (LinkedIn networking)",
      "Consider relevant certifications for your target field"
    ];
    
    nextStepsList.innerHTML = defaultNextSteps
      .map(step => `<li>${step}</li>`)
      .join("");
  }
}

function displayDefaultResults() {
  // Display the template default (Analytical Problem Solver)
  // This is already in the HTML, so no changes needed
  console.log("Displaying default results");
}

/**
 * ============================================
 * VELO INTEGRATION FOR WIX
 * ============================================
 * 
 * For Wix implementation:
 * 
 * 1. Retrieve quiz results from database (or URL parameters)
 * 2. Use Wix elements binding to populate the page:
 * 
 * 
 * import { quizResults } from 'backend/data.js';
 * 
 * $w.onReady(function () {
 *   const talentType = $w('#talentType').text; // From URL or stored session
 *   const typeData = talentTypes[talentType];
 *   
 *   $w('#talentTypeName').text = typeData.name;
 *   $w('#talentTypeDescription').text = typeData.description;
 *   
 *   // Populate list elements
 *   $w('#strengthsList').data = typeData.strengths.map(s => ({
 *     title: s
 *   }));
 *   
 *   // ... repeat for other fields
 * });
 * 
 */
