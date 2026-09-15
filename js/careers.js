/**
 * CAREERS.JS - Career exploration system
 * Displays 100+ careers with detailed information
 */

// Comprehensive career database with 300+ career options
const careersDatabase = {
  administrative: [
    {
      id: 'desktop-publisher',
      name: 'Desktop Publisher',
      summary: 'Prepare materials for publication.',
      responsibilities: [
        'Design layouts',
        'Format text',
        'Prepare graphics',
        'Use publishing software',
        'Review proofs'
      ],
      skills: ['Desktop Publishing', 'Software Skills', 'Design', 'Attention to Detail', 'Communication'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School or Associate\'s in publishing',
      salary: '$40,000 - $80,000',
      careerPath: 'Publisher → Senior Publisher → Production Manager',
      environment: ['Publishing', 'Print shop', 'Corporate', 'Design-focused'],
      jobGrowth: '-16% decline through 2032'
    },
    {
      id: 'detective-investigator',
      name: 'Detective and Criminal Investigator',
      summary: 'Investigate crimes and criminal activity.',
      responsibilities: [
        'Investigate crimes',
        'Gather evidence',
        'Interview witnesses',
        'Make arrests',
        'Testify in court'
      ],
      skills: ['Investigation', 'Critical Thinking', 'Communication', 'Problem-solving', 'Legal Knowledge'],
      talentFit: 'Analytical Problem Solver',
      education: 'High School + law enforcement training',
      salary: '$65,000 - $130,000',
      careerPath: 'Officer → Detective → Senior Detective',
      environment: ['Police dept', 'Investigation', 'Field work', 'Problem-solving'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'dining-room-attendant',
      name: 'Dining Room and Cafeteria Attendant and Bartender Helper',
      summary: 'Assist with dining and food service operations.',
      responsibilities: [
        'Set tables',
        'Clear tables',
        'Assist customers',
        'Bus dishes',
        'Clean dining area'
      ],
      skills: ['Customer Service', 'Organization', 'Physical Ability', 'Communication', 'Cleanliness'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School or equivalent',
      salary: '$28,000 - $50,000',
      careerPath: 'Attendant → Lead Attendant → Supervisor',
      environment: ['Restaurant', 'Cafeteria', 'Hotel', 'Fast-paced'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'dishwasher',
      name: 'Dishwasher',
      summary: 'Wash and sanitize dishes and kitchen equipment.',
      responsibilities: [
        'Wash dishes',
        'Sanitize equipment',
        'Load dishwashers',
        'Maintain cleanliness',
        'Organize items'
      ],
      skills: ['Food Service', 'Organization', 'Physical Ability', 'Cleaning', 'Safety'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$26,000 - $45,000',
      careerPath: 'Dishwasher → Lead Dishwasher → Kitchen Prep',
      environment: ['Restaurant', 'Food service', 'Kitchen', 'Fast-paced'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'dispatcher-general',
      name: 'Dispatcher, Except Police, Fire, and Ambulance',
      summary: 'Coordinate dispatch of vehicles and personnel.',
      responsibilities: [
        'Dispatch vehicles',
        'Track locations',
        'Coordinate routing',
        'Communicate with drivers',
        'Maintain records'
      ],
      skills: ['Communication', 'Organization', 'Technology', 'Problem-solving', 'Multitasking'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$35,000 - $70,000',
      careerPath: 'Dispatcher → Senior Dispatcher → Manager',
      environment: ['Dispatch center', 'Transportation', 'Logistics', 'Fast-paced'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'document-management-specialist',
      name: 'Document Management Specialist',
      summary: 'Manage document systems and digital records.',
      responsibilities: [
        'Organize documents',
        'Scanner documents',
        'Maintain systems',
        'Ensure compliance',
        'Train staff'
      ],
      skills: ['Document Management', 'Organization', 'Technical Skills', 'Attention to Detail', 'Compliance'],
      talentFit: 'Detail-Oriented Organizer, Technical Aptitude',
      education: 'High School or Associate\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Specialist → Senior Specialist → Manager',
      environment: ['Corporate office', 'Records management', 'Digital systems', 'Organization-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'distance-learning-coordinator',
      name: 'Distance Learning Coordinator',
      summary: 'Coordinate and manage distance learning programs.',
      responsibilities: [
        'Coordinate courses',
        'Manage platforms',
        'Support students',
        'Train instructors',
        'Monitor progress'
      ],
      skills: ['Education Technology', 'Organization', 'Communication', 'Problem-solving', 'Technical Skills'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'Bachelor\'s in Education or IT',
      salary: '$50,000 - $95,000',
      careerPath: 'Coordinator → Senior Coordinator → Distance Learning Manager',
      environment: ['Educational institution', 'Online learning', 'Technical', 'Coordination-focused'],
      jobGrowth: '25% growth through 2032'
    },
    {
      id: 'directory-assistance-operator',
      name: 'Directory Assistance Operator',
      summary: 'Provide directory assistance information to callers.',
      responsibilities: [
        'Answer calls',
        'Provide information',
        'Look up listings',
        'Transfer calls',
        'Handle inquiries'
      ],
      skills: ['Customer Service', 'Communication', 'Typing', 'Organization', 'Patience'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$28,000 - $50,000',
      careerPath: 'Operator → Senior Operator → Supervisor',
      environment: ['Call center', 'Telecommunications', 'Customer service', 'Routine'],
      jobGrowth: '-30% decline through 2032'
    },
    {
      id: 'eligibility-interviewer',
      name: 'Eligibility Interviewer, Government Programs',
      summary: 'Interview applicants for government benefit programs.',
      responsibilities: [
        'Interview applicants',
        'Verify information',
        'Assess eligibility',
        'Determine benefits',
        'Maintain records'
      ],
      skills: ['Customer Service', 'Interview Skills', 'Attention to Detail', 'Organization', 'Communication'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$38,000 - $70,000',
      careerPath: 'Interviewer → Senior Interviewer → Supervisor',
      environment: ['Government agency', 'Social services', 'Client interaction', 'Administrative'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'file-clerk',
      name: 'File Clerk',
      summary: 'Organize and maintain files and records.',
      responsibilities: [
        'Organize files',
        'File documents',
        'Retrieve files',
        'Maintain index',
        'Ensure accuracy'
      ],
      skills: ['Organization', 'Attention to Detail', 'Filing Systems', 'Typing', 'Communication'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$28,000 - $50,000',
      careerPath: 'Clerk → Lead Clerk → Document Manager',
      environment: ['Office', 'Records management', 'Administrative', 'Detail-focused'],
      jobGrowth: '-20% decline through 2032'
    },
    {
      id: 'executive-secretary',
      name: 'Executive Secretary and Administrative Assistant',
      summary: 'Provide administrative support to executives.',
      responsibilities: [
        'Support executives',
        'Manage schedule',
        'Prepare documents',
        'Coordinate meetings',
        'Handle correspondence'
      ],
      skills: ['Administration', 'Organization', 'Communication', 'Typing', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School + secretarial training',
      salary: '$40,000 - $80,000',
      careerPath: 'Secretary → Executive Secretary → Office Manager',
      environment: ['Corporate office', 'Executive', 'Administrative', 'Management-focused'],
      jobGrowth: '-4% decline through 2032'
    },
  ],
  agriculture: [
    {
      id: 'farm-manager',
      name: 'Farm Equipment Mechanic',
      summary: 'Repair and maintain farm equipment.',
      responsibilities: [
        'Repair equipment',
        'Troubleshoot issues',
        'Replace parts',
        'Perform maintenance',
        'Customer service'
      ],
      skills: ['Farm Equipment Repair', 'Mechanical Skills', 'Problem-solving', 'Troubleshooting', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + mechanic training',
      salary: '$35,000 - $75,000',
      careerPath: 'Mechanic → Senior Mechanic → Shop Owner',
      environment: ['Farm equipment', 'Repair shop', 'Agricultural', 'Hands-on'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'farm-home-management-advisor',
      name: 'Farm and Home Management Advisor',
      summary: 'Provide advice on farm and home management.',
      responsibilities: [
        'Advise farmers',
        'Plan operations',
        'Evaluate finances',
        'Teach practices',
        'Support families'
      ],
      skills: ['Agricultural Knowledge', 'Management', 'Communication', 'Problem-solving', 'Teaching'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Bachelor\'s in agriculture or family studies',
      salary: '$45,000 - $85,000',
      careerPath: 'Advisor → Senior Advisor → Program Manager',
      environment: ['Agricultural extension', 'Cooperative', 'Rural', 'Advisory/Field'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'farm-ranch-manager',
      name: 'Farm and Ranch Manager',
      summary: 'Manage farm or ranch operations.',
      responsibilities: [
        'Plan operations',
        'Manage resources',
        'Oversee staff',
        'Budget planning',
        'Marketing'
      ],
      skills: ['Farm Management', 'Leadership', 'Organization', 'Problem-solving', 'Financial Knowledge'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in agriculture + experience',
      salary: '$50,000 - $100,000',
      careerPath: 'Manager → Senior Manager → Regional Manager',
      environment: ['Farm/Ranch', 'Agricultural', 'Leadership', 'Management'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'farm-labor-contractor',
      name: 'Farm Labor Contractor',
      summary: 'Recruit and manage farm labor.',
      responsibilities: [
        'Recruit workers',
        'Manage crews',
        'Coordinate work',
        'Handle logistics',
        'Ensure compliance'
      ],
      skills: ['Labor Management', 'Organization', 'Leadership', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School + agricultural experience',
      salary: '$40,000 - $85,000',
      careerPath: 'Contractor → Senior Contractor → Labor Provider',
      environment: ['Agricultural', 'Farm operations', 'Labor coordination', 'Management'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'farmer-rancher',
      name: 'Farmer and Rancher',
      summary: 'Operate and manage farms and ranches.',
      responsibilities: [
        'Manage operations',
        'Plan crops/livestock',
        'Maintain facilities',
        'Market products',
        'Business management'
      ],
      skills: ['Agricultural Knowledge', 'Business', 'Leadership', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, Leadership & Visionary',
      education: 'High School + agricultural experience',
      salary: '$35,000 - $100,000',
      careerPath: 'Farmer → Established Farmer → Agricultural Leader',
      environment: ['Farm/Ranch', 'Agricultural', 'Hands-on', 'Independent'],
      jobGrowth: '-1% decline through 2032'
    },
    {
      id: 'farmworker-crop',
      name: 'Farmworker and Laborer, Crop, Nursery, and Greenhouse',
      summary: 'Perform farm labor for crops and nurseries.',
      responsibilities: [
        'Plant crops',
        'Harvest crops',
        'Maintain plants',
        'Operate equipment',
        'Follow procedures'
      ],
      skills: ['Farm Labor', 'Physical Ability', 'Organization', 'Attention to Detail', 'Equipment Use'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$28,000 - $55,000',
      careerPath: 'Laborer → Lead Laborer → Supervisor',
      environment: ['Farm', 'Nursery', 'Greenhouse', 'Seasonal/Outdoor'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'farmworker-animals',
      name: 'Farmworker, Farm and Ranch Animal',
      summary: 'Care for farm and ranch animals.',
      responsibilities: [
        'Feed animals',
        'Provide care',
        'Clean facilities',
        'Monitor health',
        'Maintain equipment'
      ],
      skills: ['Animal Care', 'Physical Ability', 'Responsibility', 'Patience', 'Farm Knowledge'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School or equivalent',
      salary: '$28,000 - $55,000',
      careerPath: 'Farmworker → Lead Farmworker → Farm Manager',
      environment: ['Farm/Ranch', 'Animal care', 'Outdoor', 'Physical labor'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'faller',
      name: 'Faller',
      summary: 'Fell trees in forestry operations.',
      responsibilities: [
        'Fell trees',
        'Operate saws',
        'Plan cuts',
        'Safety focus',
        'Maintain equipment'
      ],
      skills: ['Tree Felling', 'Equipment Operation', 'Safety', 'Physical Ability', 'Problem-solving'],
      talentFit: 'Practical Builder',
      education: 'High School + forestry training',
      salary: '$40,000 - $80,000',
      careerPath: 'Faller → Lead Faller → Supervisor',
      environment: ['Forest', 'Logging', 'High-risk', 'Physical labor'],
      jobGrowth: '-1% decline through 2032'
    },
    {
      id: 'fence-erector',
      name: 'Fence Erector',
      summary: 'Install and repair fences.',
      responsibilities: [
        'Install fences',
        'Repair fences',
        'Dig posts',
        'Measure distances',
        'Ensure quality'
      ],
      skills: ['Fence Installation', 'Physical Ability', 'Measurement', 'Problem-solving', 'Safety'],
      talentFit: 'Practical Builder',
      education: 'High School + construction training',
      salary: '$35,000 - $70,000',
      careerPath: 'Erector → Lead Erector → Supervisor',
      environment: ['Construction', 'Outdoor', 'Hands-on', 'Physical labor'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'hunters-trappers',
      name: 'Hunters and Trappers',
      summary: 'Hunt or trap wildlife for food, fur, or population management.',
      responsibilities: [
        'Track wildlife',
        'Set traps or hunting routes',
        'Follow regulations',
        'Process and store catch',
        'Maintain equipment'
      ],
      skills: ['Outdoor Skills', 'Wildlife Knowledge', 'Safety', 'Physical Stamina', 'Navigation'],
      talentFit: 'Practical Builder, Adventurous',
      education: 'High School + licensing/training',
      salary: '$30,000 - $55,000',
      careerPath: 'Trapper → Senior Trapper → Wildlife Specialist',
      environment: ['Outdoors', 'Rural areas', 'Seasonal work', 'Physical'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  arts: [
    {
      id: 'actor',
      name: 'Actor / Performer',
      summary: 'Perform in theater, film, television, and other productions.',
      responsibilities: [
        'Perform roles in productions',
        'Rehearse and prepare',
        'Audition for roles',
        'Build acting skills',
        'Collaborate with directors'
      ],
      skills: ['Acting Skills', 'Creativity', 'Emotional Intelligence', 'Physical Expression', 'Dedication'],
      talentFit: 'Creative Thinker, People-Oriented Helper',
      education: 'Bachelor\'s in Acting or dramatic arts (often)',
      salary: '$30,000 - $500,000+ (highly variable)',
      careerPath: 'Theater → Film → Television → Star Status',
      environment: ['Performance', 'Creativity', 'Collaboration', 'Rejection-heavy'],
      jobGrowth: 'Competitive and variable'
    },
    {
      id: 'musician',
      name: 'Musician / Composer',
      summary: 'Create and perform music in various genres and settings.',
      responsibilities: [
        'Create musical compositions',
        'Perform in venues',
        'Record music',
        'Collaborate with other musicians',
        'Develop musical skills'
      ],
      skills: ['Musical Talent', 'Creativity', 'Discipline', 'Technical Skills', 'Collaboration'],
      talentFit: 'Creative Thinker',
      education: 'Varies; Bachelor\'s in Music or self-taught',
      salary: '$45,000 - $200,000+ (highly variable)',
      careerPath: 'Emerging → Recording Artist → Performer → Conductor/Composer',
      environment: ['Creative expression', 'Performance', 'Collaboration', 'Portfolio development'],
      jobGrowth: 'Competitive market'
    },
    {
      id: 'director',
      name: 'Film / Theater Director',
      summary: 'Direct and oversee creative vision for films, theater, and productions.',
      responsibilities: [
        'Develop creative vision',
        'Direct actors and crew',
        'Make artistic decisions',
        'Oversee production quality',
        'Collaborate with production team'
      ],
      skills: ['Creative Vision', 'Leadership', 'Communication', 'Decision-making', 'Technical Knowledge'],
      talentFit: 'Creative Thinker, Leadership & Visionary',
      education: 'Bachelor\'s in Film/Theater + extensive experience',
      salary: '$60,000 - $300,000+ (highly variable)',
      careerPath: 'Assistant Director → Director → Renowned Director',
      environment: ['Artistic leadership', 'Creative control', 'Collaboration', 'Production focus'],
      jobGrowth: 'Competitive field'
    },
    {
      id: 'writer',
      name: 'Writer / Author',
      summary: 'Create written content including books, scripts, articles, and more.',
      responsibilities: [
        'Write original content',
        'Develop stories and ideas',
        'Edit and revise work',
        'Submit to publishers',
        'Engage with readers'
      ],
      skills: ['Writing', 'Creativity', 'Research', 'Discipline', 'Self-motivation'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in Writing or Liberal Arts (often)',
      salary: '$50,000 - $200,000+ (highly variable)',
      careerPath: 'Emerging Writer → Published Author → Bestselling Author',
      environment: ['Creative freedom', 'Solitary work', 'Self-discipline', 'Artistic expression'],
      jobGrowth: 'Varies by genre'
    },
    {
      id: 'curator',
      name: 'Museum Curator / Art Curator',
      summary: 'Manage museum or gallery collections and organize exhibitions.',
      responsibilities: [
        'Curate artwork selections',
        'Organize exhibitions',
        'Manage collections',
        'Write exhibition descriptions',
        'Authenticate and appraise'
      ],
      skills: ['Art Knowledge', 'Curation', 'Writing', 'Organization', 'Research'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Master\'s in Art History or Museum Studies',
      salary: '$50,000 - $110,000',
      careerPath: 'Assistant Curator → Curator → Senior Curator → Director',
      environment: ['Art history', 'Exhibitions', 'Cultural preservation', 'Customer service'],
      jobGrowth: 'Stable; competitive'
    },
    {
      id: 'artists-related-workers',
      name: 'Artists and Related Workers, All Other',
      summary: 'Create and produce various forms of visual and performance art.',
      responsibilities: [
        'Produce artwork',
        'Develop artistic vision',
        'Manage creative projects',
        'Exhibit or perform work',
        'Collaborate with other artists'
      ],
      skills: ['Artistic Expression', 'Creativity', 'Technical Art Skills', 'Communication', 'Portfolio Development'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in Fine Arts or related field',
      salary: '$35,000 - $80,000',
      careerPath: 'Emerging Artist → Professional Artist → Studio Owner → Art Director',
      environment: ['Creative expression', 'Artistic freedom', 'Self-direction', 'Portfolio building'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'dancer',
      name: 'Dancer',
      summary: 'Perform dance routines and movements.',
      responsibilities: [
        'Perform dances',
        'Attend rehearsals',
        'Learn choreography',
        'Maintain fitness',
        'Collaborate with teams'
      ],
      skills: ['Dance', 'Physical Ability', 'Artistic Expression', 'Teamwork', 'Discipline'],
      talentFit: 'Creative Thinker, Adventurous',
      education: 'High School + dance training',
      salary: '$35,000 - $75,000',
      careerPath: 'Dancer → Lead Dancer → Choreographer',
      environment: ['Theater', 'Dance company', 'Film/TV', 'Performance-based'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'entertainer-performer',
      name: 'Entertainer and Performer, Sports and Related Worker, All Other',
      summary: 'Perform and entertain audiences.',
      responsibilities: [
        'Perform acts',
        'Entertain audiences',
        'Rehearse regularly',
        'Travel for events',
        'Build fan base'
      ],
      skills: ['Performance', 'Creativity', 'Physical Ability', 'Communication', 'Discipline'],
      talentFit: 'Creative Thinker, Adventurous',
      education: 'High School + performance training',
      salary: '$30,000 - $100,000+',
      careerPath: 'Performer → Established Performer → Celebrity',
      environment: ['Various venues', 'Entertainment', 'Performance-based', 'Travel'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'entertainment-attendant',
      name: 'Entertainment Attendant and Related Worker, All Other',
      summary: 'Support entertainment operations and events.',
      responsibilities: [
        'Set up events',
        'Assist performers',
        'Manage crowds',
        'Provide support',
        'Monitor safety'
      ],
      skills: ['Event Support', 'Communication', 'Organization', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School or some college',
      salary: '$28,000 - $55,000',
      careerPath: 'Attendant → Lead Attendant → Event Manager',
      environment: ['Concert venues', 'Events', 'Performances', 'Team-based'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'exhibit-designer',
      name: 'Exhibit Designer',
      summary: 'Design exhibits and displays.',
      responsibilities: [
        'Design exhibits',
        'Create displays',
        'Use CAD software',
        'Present concepts',
        'Modify designs'
      ],
      skills: ['Exhibit Design', 'CAD Software', 'Creativity', 'Communication', 'Problem-solving'],
      talentFit: 'Creative Thinker, Technical Aptitude',
      education: 'Bachelor\'s in design or related field',
      salary: '$50,000 - $110,000',
      careerPath: 'Designer → Senior Designer → Design Director',
      environment: ['Museums', 'Gallery', 'Corporate', 'Creative'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'fashion-designer',
      name: 'Fashion Designer',
      summary: 'Design fashion clothing and accessories.',
      responsibilities: [
        'Design clothes',
        'Develop concepts',
        'Create samples',
        'Present collections',
        'Modify designs'
      ],
      skills: ['Fashion Design', 'Creativity', 'Sketching', 'Technical Knowledge', 'Communication'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in fashion design',
      salary: '$60,000 - $130,000',
      careerPath: 'Designer → Senior Designer → Lead Designer → Creative Director',
      environment: ['Fashion industry', 'Design house', 'Retail', 'Creative'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'fine-artist',
      name: 'Fine Artist, Including Painter, Sculptor, and Illustrator',
      summary: 'Create fine art including paintings and sculptures.',
      responsibilities: [
        'Create artwork',
        'Develop concepts',
        'Exhibit work',
        'Sell pieces',
        'Build portfolio'
      ],
      skills: ['Artistic Skill', 'Creativity', 'Manual Dexterity', 'Self-promotion', 'Discipline'],
      talentFit: 'Creative Thinker',
      education: 'High School or Bachelor\'s in fine arts',
      salary: '$35,000 - $100,000+',
      careerPath: 'Artist → Established Artist → Gallery Featured',
      environment: ['Studio', 'Gallery', 'Freelance', 'Independent'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'film-video-editor',
      name: 'Film and Video Editor',
      summary: 'Edit film and video content.',
      responsibilities: [
        'Edit footage',
        'Assemble clips',
        'Add effects',
        'Create transitions',
        'Meet deadlines'
      ],
      skills: ['Video Editing', 'Software Skills', 'Creativity', 'Technical Knowledge', 'Attention to Detail'],
      talentFit: 'Creative Thinker, Technical Aptitude',
      education: 'Bachelor\'s in film or associate\'s in video production',
      salary: '$50,000 - $110,000',
      careerPath: 'Editor → Senior Editor → Senior Superviser',
      environment: ['Film/TV production', 'Post-production', 'Creative', 'Technical'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'film-lab-technician',
      name: 'Film Laboratory Technician',
      summary: 'Process and develop film in laboratories.',
      responsibilities: [
        'Process film',
        'Develop prints',
        'Operate equipment',
        'Quality control',
        'Maintain lab'
      ],
      skills: ['Film Processing', 'Equipment Operation', 'Chemistry', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + film lab training',
      salary: '$35,000 - $70,000',
      careerPath: 'Technician → Senior Tech → Lab Manager',
      environment: ['Film lab', 'Production', 'Technical', 'Specialty work'],
      jobGrowth: '-20% decline through 2032'
    },
  ],
  automotive: [
    {
      id: 'automotive-engineering-technician',
      name: 'Automotive Engineering Technician',
      summary: 'Provide technical support for automotive engineering and design.',
      responsibilities: [
        'Assist engineers with design',
        'Perform testing',
        'Troubleshoot systems',
        'Document specifications',
        'Support prototyping'
      ],
      skills: ['Automotive Systems', 'CAD Software', 'Testing', 'Problem-solving', 'Documentation'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'Associate\'s or Bachelor\'s in Automotive Technology',
      salary: '$50,000 - $90,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Engineering Support Manager',
      environment: ['Automotive industry', 'Design support', 'Testing focus', 'Technical work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'automotive-engineer',
      name: 'Automotive Engineer',
      summary: 'Design, develop, and test automotive systems and components.',
      responsibilities: [
        'Design automotive systems',
        'Develop prototypes',
        'Test performance',
        'Ensure safety compliance',
        'Optimize efficiency'
      ],
      skills: ['Automotive Engineering', 'CAD/CAM', 'System Design', 'Testing', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Automotive or Mechanical Engineering',
      salary: '$75,000 - $130,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer → Engineering Manager',
      environment: ['Engineering focus', 'Design', 'Innovation', 'Testing'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'automotive-glass-installer',
      name: 'Automotive Glass Installer and Repairer',
      summary: 'Install and repair glass components in vehicles.',
      responsibilities: [
        'Install windshields',
        'Replace glass panels',
        'Repair glass damage',
        'Apply adhesives',
        'Ensure proper sealing'
      ],
      skills: ['Glass Installation', 'Manual Skills', 'Safety', 'Precision', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + specialized training',
      salary: '$45,000 - $80,000',
      careerPath: 'Installer → Senior Installer → Lead → Supervisor',
      environment: ['Automotive repair', 'Hands-on', 'Precision work', 'Customer service'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'automotive-master-mechanic',
      name: 'Automotive Master Mechanic',
      summary: 'Manage complex automotive repairs and lead mechanics.',
      responsibilities: [
        'Oversee complex repairs',
        'Train technicians',
        'Diagnose problems',
        'Quality assurance',
        'Manage shop operations'
      ],
      skills: ['Automotive Expertise', 'Leadership', 'Diagnostics', 'Advanced Repair', 'Management'],
      talentFit: 'Leadership & Visionary, Practical Builder',
      education: 'High School + 15+ years automotive experience',
      salary: '$70,000 - $120,000',
      careerPath: 'Mechanic → Senior Mechanic → Master Mechanic → Shop Owner',
      environment: ['Auto shop', 'Leadership', 'Complex diagnostics', 'Team management'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'automotive-service-technician',
      name: 'Automotive Service Technician and Mechanic',
      summary: 'Diagnose and repair vehicle mechanical and electrical issues.',
      responsibilities: [
        'Diagnose problems',
        'Perform repairs',
        'Replace parts',
        'Test systems',
        'Advise customers'
      ],
      skills: ['Automotive Repair', 'Diagnostics', 'Problem-solving', 'Manual Skills', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + training/certification',
      salary: '$50,000 - $95,000',
      careerPath: 'Technician → Experienced Tech → Lead Tech → Shop Supervisor',
      environment: ['Auto shop', 'Hands-on repair', 'Problem-solving', 'Customer service'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'automotive-specialty-technician',
      name: 'Automotive Specialty Technician',
      summary: 'Specialize in specific automotive repair areas (transmission, AC, etc.).',
      responsibilities: [
        'Repair specialty systems',
        'Diagnose specific problems',
        'Replace components',
        'Test repairs',
        'Maintain expertise'
      ],
      skills: ['Specialty Expertise', 'Diagnostics', 'Advanced Repair', 'Problem-solving', 'Precision'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + specialized training/certifications',
      salary: '$55,000 - $100,000',
      careerPath: 'Technician → Specialty Tech → Lead Tech → Supervisor',
      environment: ['Specialty repairs', 'Technical expertise', 'Hands-on', 'Problem-solving'],
      jobGrowth: '6% growth through 2032'
    },
  ],
  aviation: [
    {
      id: 'aviation-inspector',
      name: 'Aviation Inspector',
      summary: 'Inspect aircraft and equipment for safety compliance.',
      responsibilities: [
        'Inspect aircraft',
        'Check safety systems',
        'Review maintenance records',
        'Document findings',
        'Enforce regulations'
      ],
      skills: ['Aircraft Systems', 'Attention to Detail', 'Communication', 'Problem-solving', 'Safety Knowledge'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School + FAA certification + aviation experience',
      salary: '$70,000 - $120,000',
      careerPath: 'Inspector → Senior Inspector → Supervisor → Director',
      environment: ['Aviation safety', 'Regulatory focus', 'Inspections', 'FAA coordination'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'avionics-technician',
      name: 'Avionics Technician',
      summary: 'Install and repair aircraft electronic systems.',
      responsibilities: [
        'Install avionics systems',
        'Troubleshoot electronics',
        'Repair systems',
        'Perform tests',
        'Document work'
      ],
      skills: ['Electronics', 'Avionics Systems', 'Problem-solving', 'Technical Skills', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + avionics training + certifications',
      salary: '$65,000 - $115,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Supervisor',
      environment: ['Aircraft electronics', 'Precision work', 'Problem-solving', 'Safety critical'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'commercial-pilot',
      name: 'Commercial Pilot',
      summary: 'Operate commercial aircraft for passenger or cargo transport.',
      responsibilities: [
        'Operate aircraft',
        'Navigate routes',
        'Manage crew',
        'Ensure safety',
        'Log flight data'
      ],
      skills: ['Pilot Skills', 'Navigation', 'Leadership', 'Problem-solving', 'Communication'],
      talentFit: 'Leadership & Visionary, Technical Aptitude',
      education: 'High School + pilot licensing + training',
      salary: '$80,000 - $200,000+',
      careerPath: 'Pilot → Captain → Senior Captain',
      environment: ['Aircraft', 'Airlines', 'Commercial aviation', 'High-pressure'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  transportation: [
    {
      id: 'commercial-diver',
      name: 'Commercial Diver',
      summary: 'Perform underwater work in commercial settings.',
      responsibilities: [
        'Perform underwater work',
        'Use diving equipment',
        'Inspect structures',
        'Repair equipment',
        'Follow safety protocols'
      ],
      skills: ['Diving', 'Problem-solving', 'Safety', 'Physical Ability', 'Equipment Knowledge'],
      talentFit: 'Practical Builder, Adventurous',
      education: 'High School + commercial diving certification',
      salary: '$80,000 - $200,000',
      careerPath: 'Diver → Senior Diver → Dive Master',
      environment: ['Underwater', 'Ocean/Lakes', 'High-risk', 'Specialized'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  business: [
    {
      id: 'accountant',
      name: 'Accountant / CPA',
      summary: 'Prepare and examine financial records and ensure tax compliance.',
      responsibilities: [
        'Prepare financial statements',
        'Audit financial records',
        'Ensure tax compliance',
        'Advise on financial planning',
        'Maintain detailed records'
      ],
      skills: ['Financial Analysis', 'Accounting Software', 'Attention to Detail', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Accounting + CPA License',
      salary: '$70,000 - $130,000',
      careerPath: 'Junior Accountant → Senior Accountant → Accounting Manager → Partner',
      environment: ['Detail-focused', 'Financial expertise', 'Regulatory compliance', 'Client service'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'financial-analyst',
      name: 'Financial Analyst',
      summary: 'Analyze financial data and make investment recommendations.',
      responsibilities: [
        'Analyze financial statements',
        'Research investment opportunities',
        'Create financial models',
        'Present recommendations',
        'Monitor market trends'
      ],
      skills: ['Financial Analysis', 'Excel/Python', 'Market Knowledge', 'Communication', 'Attention to Detail'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in Finance or Accounting',
      salary: '$75,000 - $150,000',
      careerPath: 'Junior Analyst → Financial Analyst → Senior Analyst → Portfolio Manager',
      environment: ['Data analysis', 'Market-driven', 'Fast-paced', 'Investment focus'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'business-manager',
      name: 'Business Manager',
      summary: 'Oversee business operations and implement strategic initiatives.',
      responsibilities: [
        'Plan strategic objectives',
        'Manage budgets and resources',
        'Oversee business operations',
        'Monitor performance',
        'Lead and motivate teams'
      ],
      skills: ['Leadership', 'Strategic Planning', 'Financial Management', 'Communication', 'Decision-making'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Business or related field',
      salary: '$80,000 - $150,000',
      careerPath: 'Business Manager → Director → VP → Chief Operating Officer',
      environment: ['Strategic leadership', 'Performance focus', 'Operations oversight', 'Team management'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'consultant',
      name: 'Management Consultant',
      summary: 'Advise organizations on improving performance and solving problems.',
      responsibilities: [
        'Analyze client operations',
        'Identify improvement opportunities',
        'Develop recommendations',
        'Present findings to executives',
        'Implement solutions'
      ],
      skills: ['Problem-solving', 'Analysis', 'Communication', 'Research', 'Business Acumen'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s (any field), often MBA preferred',
      salary: '$90,000 - $200,000+',
      careerPath: 'Analyst → Senior Analyst → Manager → Principal → Partner',
      environment: ['Problem-solving', 'Client interaction', 'Fast-paced', 'High responsibility'],
      jobGrowth: '11% growth through 2032'
    },
    {
      id: 'hr-manager',
      name: 'Human Resources Manager',
      summary: 'Manage employee relations, recruitment, and organizational development.',
      responsibilities: [
        'Recruit and hire talent',
        'Manage employee relations',
        'Develop HR policies',
        'Manage benefits and compensation',
        'Conduct training and development'
      ],
      skills: ['Leadership', 'Communication', 'Organization', 'Empathy', 'Conflict Resolution'],
      talentFit: 'People-Oriented Helper, Leadership & Visionary',
      education: 'Bachelor\'s in HR or related field',
      salary: '$70,000 - $130,000',
      careerPath: 'HR Coordinator → HR Manager → Senior Manager → Director of HR → VP',
      environment: ['People focus', 'Organizational development', 'Leadership', 'Strategic role'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'project-manager',
      name: 'Project Manager',
      summary: 'Plan, execute, and oversee projects from start to completion.',
      responsibilities: [
        'Define project scope and goals',
        'Create project plans',
        'Manage resources and budgets',
        'Monitor progress',
        'Manage risks and changes'
      ],
      skills: ['Leadership', 'Organization', 'Communication', 'Problem-solving', 'Risk Management'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'Bachelor\'s degree + PMP or similar certification',
      salary: '$85,000 - $150,000',
      careerPath: 'Associate PM → Project Manager → Senior PM → Program Manager',
      environment: ['Plan and execute', 'Team leadership', 'Goal-oriented', 'Problem-solving'],
      jobGrowth: '3% growth (but high demand)'
    },
    {
      id: 'entrepreneur',
      name: 'Entrepreneur / Small Business Owner',
      summary: 'Create and operate your own business venture.',
      responsibilities: [
        'Develop business idea',
        'Manage all business operations',
        'Make strategic decisions',
        'Lead and manage team',
        'Manage finances'
      ],
      skills: ['Leadership', 'Risk Management', 'Financial Planning', 'Creativity', 'Resilience'],
      talentFit: 'Leadership & Visionary, Creative Thinker, Practical Builder',
      education: 'Varies; business knowledge essential',
      salary: 'Highly variable ($0 to unlimited)',
      careerPath: 'Startup → Growth → Scaling → Exit or Ongoing',
      environment: ['Complete autonomy', 'High risk/reward', 'Innovation', 'Ownership'],
      jobGrowth: 'Growing startup ecosystem'
    },
    {
      id: 'market-researcher',
      name: 'Market Research Analyst',
      summary: 'Conduct market research and analyze consumer behavior trends.',
      responsibilities: [
        'Design research studies',
        'Collect consumer data',
        'Analyze market trends',
        'Present findings',
        'Make recommendations'
      ],
      skills: ['Data Analysis', 'Research Methods', 'Statistics', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in Marketing, Business, or Statistics',
      salary: '$65,000 - $120,000',
      careerPath: 'Junior Analyst → Market Researcher → Senior Analyst → Manager',
      environment: ['Research focus', 'Data-driven', 'Trend analysis', 'Strategic insights'],
      jobGrowth: '23% growth through 2032'
    },
    {
      id: 'marketing-manager',
      name: 'Marketing Manager',
      summary: 'Develop and execute marketing strategies for organizations.',
      responsibilities: [
        'Develop marketing strategies',
        'Plan campaigns',
        'Manage marketing budgets',
        'Analyze marketing results',
        'Lead marketing team'
      ],
      skills: ['Marketing Strategy', 'Creative Thinking', 'Data Analysis', 'Leadership', 'Communication'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in Marketing or Business',
      salary: '$75,000 - $140,000',
      careerPath: 'Marketing Coordinator → Manager → Senior Manager → Director',
      environment: ['Strategy focus', 'Campaign development', 'Creativity', 'Team leadership'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'brand-manager',
      name: 'Brand Manager',
      summary: 'Manage brand identity and positioning for products or companies.',
      responsibilities: [
        'Define brand strategy',
        'Manage brand messaging',
        'Oversee brand campaigns',
        'Monitor brand perception',
        'Protect brand integrity'
      ],
      skills: ['Brand Strategy', 'Marketing', 'Communication', 'Leadership', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Creative Thinker',
      education: 'Bachelor\'s in Marketing or Business',
      salary: '$75,000 - $150,000',
      careerPath: 'Brand Coordinator → Brand Manager → Senior Manager → Director',
      environment: ['Brand identity', 'Strategic thinking', 'Creative', 'Corporate'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'sales-manager',
      name: 'Sales Manager',
      summary: 'Lead and manage sales teams to achieve revenue targets.',
      responsibilities: [
        'Lead sales team',
        'Set sales targets',
        'Coach and train sales staff',
        'Monitor sales performance',
        'Develop sales strategies'
      ],
      skills: ['Sales', 'Leadership', 'Communication', 'Motivation', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'Bachelor\'s degree + sales experience',
      salary: '$80,000 - $150,000+',
      careerPath: 'Sales Rep → Sales Manager → Senior Manager → Director → VP Sales',
      environment: ['Sales-driven', 'Team leadership', 'Target-oriented', 'Performance focus'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'supply-chain-manager',
      name: 'Supply Chain Manager',
      summary: 'Manage supply chain operations and logistics for organizations.',
      responsibilities: [
        'Oversee supply chain',
        'Manage inventory',
        'Coordinate with vendors',
        'Optimize efficiency',
        'Monitor costs'
      ],
      skills: ['Supply Chain Management', 'Logistics', 'Organization', 'Problem-solving', 'Leadership'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'Bachelor\'s in Supply Chain or Business',
      salary: '$80,000 - $140,000',
      careerPath: 'Coordinator → Supply Chain Manager → Senior Manager → Director',
      environment: ['Logistics focus', 'Optimization', 'Vendor management', 'Cost control'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'procurement-specialist',
      name: 'Procurement Specialist',
      summary: 'Source and purchase goods and services for organizations.',
      responsibilities: [
        'Source vendors and suppliers',
        'Negotiate contracts',
        'Process purchase orders',
        'Monitor supplier performance',
        'Manage procurement budgets'
      ],
      skills: ['Negotiation', 'Communication', 'Organization', 'Problem-solving', 'Analysis'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Business or related field',
      salary: '$60,000 - $110,000',
      careerPath: 'Procurement Assistant → Specialist → Manager → Director',
      environment: ['Vendor negotiation', 'Cost management', 'Organization', 'Commercial focus'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'operations-manager',
      name: 'Operations Manager',
      summary: 'Oversee daily operations and efficiency of business processes.',
      responsibilities: [
        'Manage business operations',
        'Ensure efficiency',
        'Manage budgets',
        'Monitor quality',
        'Lead operations team'
      ],
      skills: ['Operations Management', 'Leadership', 'Problem-solving', 'Organization', 'Analysis'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Business or related field',
      salary: '$80,000 - $150,000',
      careerPath: 'Operations Coordinator → Manager → Senior Manager → Director',
      environment: ['Operations focus', 'Efficiency', 'Problem-solving', 'Team leadership'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'quality-assurance-manager',
      name: 'Quality Assurance Manager',
      summary: 'Manage quality standards and improvement processes.',
      responsibilities: [
        'Develop quality standards',
        'Conduct audits',
        'Implement improvements',
        'Manage compliance',
        'Train staff'
      ],
      skills: ['Quality Management', 'Problem-solving', 'Leadership', 'Documentation', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'Bachelor\'s in Management or related field',
      salary: '$70,000 - $130,000',
      careerPath: 'QA Specialist → Manager → Senior Manager → Director',
      environment: ['Quality focus', 'Standards', 'Continuous improvement', 'Compliance'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'agricultural-crop-farm-manager',
      name: 'Agricultural Crop Farm Manager',
      summary: 'Manage day-to-day operations of crop farming operations.',
      responsibilities: [
        'Manage farm operations',
        'Plan crop rotation',
        'Manage budgets',
        'Supervise farmworkers',
        'Make business decisions'
      ],
      skills: ['Agricultural Knowledge', 'Leadership', 'Business Management', 'Problem-solving', 'Financial Management'],
      talentFit: 'Leadership & Visionary, Practical Builder',
      education: 'High School or Bachelor\'s in Agriculture/Business',
      salary: '$50,000 - $100,000',
      careerPath: 'Farm Worker → Farm Manager → Regional Manager → Owner',
      environment: ['Agricultural operations', 'Leadership', 'Farming', 'Seasonal variation'],
      jobGrowth: '-1% decline through 2032'
    },
    {
      id: 'real-estate-appraiser-assessor',
      name: 'Appraisers and Assessors of Real Estate',
      summary: 'Evaluate property values for appraisal and tax assessment purposes.',
      responsibilities: [
        'Evaluate property values',
        'Inspect properties',
        'Analyze market data',
        'Prepare appraisal reports',
        'Provide expert testimony'
      ],
      skills: ['Real Estate Knowledge', 'Analysis', 'Attention to Detail', 'Communication', 'Market Knowledge'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s degree + Licensing + Training',
      salary: '$55,000 - $120,000',
      careerPath: 'Appraiser trainee → Licensed Appraiser → Senior Appraiser → Manager',
      environment: ['Real estate industry', 'Analysis focus', 'Attention to detail', 'Client interaction'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'real-estate-appraiser',
      name: 'Appraisers, Real Estate',
      summary: 'Estimate property values for loan and insurance purposes.',
      responsibilities: [
        'Estimate property values',
        'Conduct property inspections',
        'Analyze comparable properties',
        'Document findings',
        'Prepare reports'
      ],
      skills: ['Property Valuation', 'Market Analysis', 'Attention to Detail', 'Communication', 'Documentation'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'College courses + Licensing + Certification',
      salary: '$55,000 - $120,000',
      careerPath: 'Appraiser Trainee → Appraiser → Senior Appraiser → Owner',
      environment: ['Real estate', 'Property inspection', 'Analysis', 'Client service'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'aquacultural-manager',
      name: 'Aquacultural Managers',
      summary: 'Manage aquaculture operations for fish and shellfish farming.',
      responsibilities: [
        'Manage aquaculture operations',
        'Monitor water quality',
        'Oversee staff',
        'Manage budgets',
        'Ensure regulatory compliance'
      ],
      skills: ['Aquaculture Knowledge', 'Leadership', 'Environmental Management', 'Business Management', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in Aquaculture or related field',
      salary: '$50,000 - $100,000',
      careerPath: 'Technician → Farm Manager → Regional Manager → Owner',
      environment: ['Aquaculture industry', 'Leadership', 'Sustainability focus', 'Environmental'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'business-continuity-planner',
      name: 'Business Continuity Planner',
      summary: 'Develop plans to ensure business operations continue during disruptions.',
      responsibilities: [
        'Analyze risks',
        'Develop plans',
        'Test procedures',
        'Train staff',
        'Update protocols'
      ],
      skills: ['Risk Analysis', 'Planning', 'Communication', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in business or IT',
      salary: '$70,000 - $130,000',
      careerPath: 'Planner → Senior Planner → Director',
      environment: ['Corporate office', 'Planning focus', 'Risk management', 'Strategic'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'business-intelligence-analyst',
      name: 'Business Intelligence Analyst',
      summary: 'Analyze business data to support decision-making.',
      responsibilities: [
        'Collect data',
        'Create reports',
        'Build dashboards',
        'Analyze trends',
        'Present insights'
      ],
      skills: ['Data Analysis', 'SQL', 'Business Intelligence Tools', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in business, IT, or analytics',
      salary: '$65,000 - $130,000',
      careerPath: 'Analyst → Senior Analyst → Manager',
      environment: ['Corporate setting', 'Data-driven', 'Technology focus', 'Strategic'],
      jobGrowth: '14% growth through 2032'
    },
    {
      id: 'business-operations-specialist',
      name: 'Business Operations Specialist, All Other',
      summary: 'Support business operations with administrative and analytical tasks.',
      responsibilities: [
        'Manage processes',
        'Analyze operations',
        'Prepare reports',
        'Improve efficiency',
        'Support management'
      ],
      skills: ['Organization', 'Analysis', 'Communication', 'Problem-solving', 'Office Management'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in business or related field',
      salary: '$55,000 - $100,000',
      careerPath: 'Specialist → Senior Specialist → Operations Manager',
      environment: ['Corporate office', 'Process improvement', 'Administrative', 'Analytical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'business-teacher',
      name: 'Business Teacher, Postsecondary',
      summary: 'Teach business subjects at college level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Advise students',
        'Conduct research',
        'Grade assignments'
      ],
      skills: ['Teaching', 'Business Knowledge', 'Communication', 'Research', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in business or related field',
      salary: '$65,000 - $120,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'chief-executive',
      name: 'Chief Executive',
      summary: 'Lead and manage organizations at the executive level.',
      responsibilities: [
        'Set strategy',
        'Oversee operations',
        'Lead teams',
        'Make decisions',
        'Report to board'
      ],
      skills: ['Leadership', 'Strategic Planning', 'Decision-making', 'Communication', 'Industry Knowledge'],
      talentFit: 'Leadership & Visionary',
      education: 'Bachelor\'s degree, often MBA',
      salary: '$150,000 - $500,000+',
      careerPath: 'Manager → Director → VP → Chief Executive Officer',
      environment: ['Executive office', 'Strategic leadership', 'Decision authority', 'Organizational level'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'chief-sustainability-officer',
      name: 'Chief Sustainability Officer',
      summary: 'Lead organization\'s sustainability and environmental initiatives.',
      responsibilities: [
        'Develop strategy',
        'Manage initiatives',
        'Set goals',
        'Report progress',
        'Lead teams'
      ],
      skills: ['Sustainability', 'Leadership', 'Strategic Planning', 'Communication', 'Environmental Knowledge'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s, often MBA or environmental background',
      salary: '$120,000 - $250,000',
      careerPath: 'Manager → Director → Chief Sustainability Officer → C-Suite',
      environment: ['Executive level', 'Sustainability focus', 'Strategic', 'Environmental commitment'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'compliance-manager',
      name: 'Compliance Manager',
      summary: 'Manage organizational compliance and regulatory requirements.',
      responsibilities: [
        'Monitor compliance',
        'Develop policies',
        'Conduct audits',
        'Train staff',
        'Report findings'
      ],
      skills: ['Compliance', 'Regulations', 'Audit Skills', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in business, law, or related field',
      salary: '$75,000 - $140,000',
      careerPath: 'Manager → Senior Manager → Director',
      environment: ['Corporate office', 'Compliance focus', 'Regulatory', 'Strategic'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'compliance-officer',
      name: 'Compliance Officer, Except Agriculture, Construction, Health and Safety, and Transportation',
      summary: 'Ensure organizational compliance with regulations.',
      responsibilities: [
        'Monitor compliance',
        'Investigate issues',
        'Document violations',
        'Train employees',
        'Report results'
      ],
      skills: ['Compliance', 'Investigations', 'Communication', 'Documentation', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s degree',
      salary: '$60,000 - $120,000',
      careerPath: 'Officer → Senior Officer → Manager',
      environment: ['Corporate setting', 'Compliance focus', 'Investigative', 'Documented'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'cost-estimator',
      name: 'Cost Estimator',
      summary: 'Estimate project costs for construction and manufacturing.',
      responsibilities: [
        'Analyze specifications',
        'Calculate costs',
        'Prepare bids',
        'Monitor expenses',
        'Report findings'
      ],
      skills: ['Cost Analysis', 'Math', 'Attention to Detail', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in construction management or finance',
      salary: '$65,000 - $125,000',
      careerPath: 'Estimator → Senior Estimator → Manager',
      environment: ['Construction/Manufacturing', 'Office-based', 'Analytical', 'Financial focus'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'credit-analyst',
      name: 'Credit Analyst',
      summary: 'Analyze credit applications and assess lending risk.',
      responsibilities: [
        'Review applications',
        'Analyze finances',
        'Assess risk',
        'Prepare reports',
        'Make recommendations'
      ],
      skills: ['Credit Analysis', 'Financial Knowledge', 'Attention to Detail', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in finance or business',
      salary: '$55,000 - $110,000',
      careerPath: 'Analyst → Senior Analyst → Credit Manager',
      environment: ['Bank/Financial institution', 'Analytical work', 'Risk focus', 'Financial'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'credit-authorizer',
      name: 'Credit Authorizer, Checker, and Clerk',
      summary: 'Authorize credit applications and verify information.',
      responsibilities: [
        'Review applications',
        'Verify information',
        'Authorize credit',
        'Respond to inquiries',
        'Maintain records'
      ],
      skills: ['Credit Knowledge', 'Verification', 'Attention to Detail', 'Communication', 'Organization'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Associate\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Clerk → Specialist → Supervisor',
      environment: ['Bank/Credit organization', 'Administrative', 'Details-focused', 'Customer interaction'],
      jobGrowth: '2% growth through 2032'
    },
  ],
  clerical: [
    {
      id: 'bill-account-collector',
      name: 'Bill and Account Collector',
      summary: 'Locate and notify customers of overdue accounts.',
      responsibilities: [
        'Locate delinquent accounts',
        'Contact customers',
        'Negotiate payments',
        'Document calls',
        'Process payments'
      ],
      skills: ['Communication', 'Problem-solving', 'Persistence', 'Organization', 'Empathy'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or Associate\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Collector → Senior Collector → Team Lead → Manager',
      environment: ['Phone-based', 'Collections focus', 'Problem-solving', 'Metrics-driven'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'billing-posting-clerk',
      name: 'Billing and Posting Clerk and Machine Operator',
      summary: 'Process billing information and post data.',
      responsibilities: [
        'Post billing data',
        'Process invoices',
        'Operate machines',
        'Verify accuracy',
        'Maintain records'
      ],
      skills: ['Data Entry', 'Attention to Detail', 'Organization', 'Technology', 'Accuracy'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Associate\'s',
      salary: '$35,000 - $65,000',
      careerPath: 'Clerk → Senior Clerk → Lead Clerk → Supervisor',
      environment: ['Office', 'Data processing', 'Detail-focused', 'Technology-based'],
      jobGrowth: '-3% decline through 2032'
    },
    {
      id: 'billing-cost-rate-clerk',
      name: 'Billing, Cost, and Rate Clerk',
      summary: 'Calculate and compile billing and rate information.',
      responsibilities: [
        'Calculate rates',
        'Compile billing data',
        'Analyze costs',
        'Create reports',
        'Verify accuracy'
      ],
      skills: ['Mathematics', 'Attention to Detail', 'Analysis', 'Documentation', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Associate\'s',
      salary: '$38,000 - $70,000',
      careerPath: 'Clerk → Senior Clerk → Lead Clerk → Analyst',
      environment: ['Office environment', 'Data analysis', 'Detail-focused', 'Calculation'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'billing-calculating-machine-operator',
      name: 'Billing, Posting, and Calculating Machine Operator',
      summary: 'Operate machines to process billing and calculations.',
      responsibilities: [
        'Operate billing machines',
        'Process transactions',
        'Calculate amounts',
        'Maintain records',
        'Troubleshoot equipment'
      ],
      skills: ['Machine Operation', 'Attention to Detail', 'Problem-solving', 'Accuracy', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School or vocational training',
      salary: '$36,000 - $62,000',
      careerPath: 'Operator → Senior Operator → Lead Operator → Supervisor',
      environment: ['Office environment', 'Machine operation', 'Data processing', 'Efficiency-focused'],
      jobGrowth: '-4% decline through 2032'
    },
    {
      id: 'bookkeeping-accounting-clerk',
      name: 'Bookkeeping, Accounting, and Auditing Clerk',
      summary: 'Record financial transactions and maintain accounting records.',
      responsibilities: [
        'Record transactions',
        'Maintain ledgers',
        'Process invoices',
        'Reconcile accounts',
        'Prepare statements'
      ],
      skills: ['Bookkeeping', 'Attention to Detail', 'Organization', 'Mathematics', 'Accounting Software'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or vocational training',
      salary: '$40,000 - $75,000',
      careerPath: 'Clerk → Senior Clerk → Lead Clerk → Office Manager',
      environment: ['Office setting', 'Detail-focused', 'Financial records', 'Accuracy critical'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'brokerage-clerk',
      name: 'Brokerage Clerk',
      summary: 'Process securities transactions and maintain brokerage records.',
      responsibilities: [
        'Process trades',
        'Maintain records',
        'Verify transactions',
        'File documents',
        'Assist brokers'
      ],
      skills: ['Attention to Detail', 'Organization', 'Securities Knowledge', 'Accuracy', 'Technology'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Associate\'s',
      salary: '$45,000 - $80,000',
      careerPath: 'Clerk → Senior Clerk → Operations Specialist → Operations Manager',
      environment: ['Brokerage firm', 'Securities focus', 'Detail-oriented', 'Fast-paced'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'information-record-clerks-all-other',
      name: 'Information and Record Clerks, All Other',
      summary: 'Maintain records, files, and information systems across departments.',
      responsibilities: [
        'File and retrieve documents',
        'Enter and verify data',
        'Respond to information requests',
        'Maintain databases',
        'Follow confidentiality rules'
      ],
      skills: ['Organization', 'Attention to Detail', 'Computer Skills', 'Communication', 'Confidentiality'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$32,000 - $55,000',
      careerPath: 'Clerk → Senior Clerk → Records Specialist',
      environment: ['Office', 'Administrative support', 'Data handling', 'Detail-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'interviewers-except-eligibility-loan',
      name: 'Interviewers, Except Eligibility and Loan',
      summary: 'Conduct interviews to collect data for surveys or investigations.',
      responsibilities: [
        'Schedule interviews',
        'Ask structured questions',
        'Record responses accurately',
        'Verify information',
        'Prepare summary reports'
      ],
      skills: ['Communication', 'Active Listening', 'Data Collection', 'Organization', 'Professionalism'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$32,000 - $55,000',
      careerPath: 'Interviewer → Senior Interviewer → Field Supervisor',
      environment: ['Office', 'Field work', 'Survey-based', 'Structured'],
      jobGrowth: '2% growth through 2032'
    },
  ],
  construction: [
    {
      id: 'bridge-lock-tender',
      name: 'Bridge and Lock Tender',
      summary: 'Operate and maintain bridges and locks for waterways.',
      responsibilities: [
        'Operate bridge mechanisms',
        'Monitor shipping',
        'Operate locks',
        'Perform maintenance',
        'Keep records'
      ],
      skills: ['Equipment Operation', 'Safety', 'Communication', 'Mechanical Knowledge', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + training',
      salary: '$50,000 - $90,000',
      careerPath: 'Tender → Lead Tender → Supervisor',
      environment: ['Waterway', 'Operating equipment', 'Safety critical', 'Government work'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'brownfield-specialist',
      name: 'Brownfield Redevelopment Specialist and Site Manager',
      summary: 'Manage remediation and redevelopment of contaminated sites.',
      responsibilities: [
        'Assess contamination',
        'Plan remediation',
        'Oversee cleanup',
        'Manage teams',
        'Ensure compliance'
      ],
      skills: ['Environmental Science', 'Project Management', 'Leadership', 'Compliance', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in environmental science or engineering',
      salary: '$70,000 - $140,000',
      careerPath: 'Specialist → Senior Manager → Regional Manager → Director',
      environment: ['Contaminated sites', 'Environmental focus', 'Leadership', 'Sustainability'],
      jobGrowth: '11% growth through 2032'
    },
    {
      id: 'budget-analyst',
      name: 'Budget Analyst',
      summary: 'Analyze and manage organizational budgets.',
      responsibilities: [
        'Analyze budgets',
        'Prepare reports',
        'Monitor spending',
        'Forecast costs',
        'Identify savings'
      ],
      skills: ['Financial Analysis', 'Excel', 'Attention to Detail', 'Problem-solving', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in accounting or finance',
      salary: '$65,000 - $125,000',
      careerPath: 'Analyst → Senior Analyst → Manager → Director',
      environment: ['Office', 'Financial focus', 'Data analysis', 'Problem-solving'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'helpers-construction-trades-all-other',
      name: 'Helpers, Construction Trades, All Other',
      summary: 'Assist construction trades workers with general labor tasks.',
      responsibilities: [
        'Carry materials and tools',
        'Set up work areas',
        'Hold or position materials',
        'Clean job sites',
        'Follow safety procedures'
      ],
      skills: ['Physical Stamina', 'Teamwork', 'Basic Tools', 'Safety', 'Reliability'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $48,000',
      careerPath: 'Helper → Apprentice → Tradesperson',
      environment: ['Construction site', 'Physical work', 'Team-based', 'Outdoor'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'helpers-brickmasons-blockmasons-stonemasons-tile',
      name: 'Helpers--Brickmasons, Blockmasons, Stonemasons, and Tile and Marble Setters',
      summary: 'Assist masonry workers with materials preparation and site tasks.',
      responsibilities: [
        'Mix mortar and grout',
        'Move bricks and stone',
        'Set up scaffolding',
        'Clean tools and work areas',
        'Assist masons on site'
      ],
      skills: ['Physical Stamina', 'Teamwork', 'Basic Masonry Tools', 'Safety', 'Attention to Detail'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $48,000',
      careerPath: 'Helper → Apprentice → Mason',
      environment: ['Construction site', 'Outdoor work', 'Hands-on', 'Physical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'helpers-carpenters',
      name: 'Helpers--Carpenters',
      summary: 'Assist carpenters with framing, measuring, and material handling.',
      responsibilities: [
        'Carry lumber and tools',
        'Measure and mark materials',
        'Hold materials in place',
        'Set up ladders and scaffolds',
        'Clean and organize work areas'
      ],
      skills: ['Basic Tools', 'Physical Stamina', 'Teamwork', 'Safety', 'Attention to Detail'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $48,000',
      careerPath: 'Helper → Apprentice → Carpenter',
      environment: ['Construction site', 'Outdoor work', 'Hands-on', 'Physical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'helpers-painters-paperhangers-plasterers-stucco',
      name: 'Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons',
      summary: 'Support finishing crews with prep, materials, and cleanup.',
      responsibilities: [
        'Prepare surfaces',
        'Mix materials',
        'Set up ladders and coverings',
        'Move supplies',
        'Clean work areas'
      ],
      skills: ['Physical Stamina', 'Teamwork', 'Attention to Detail', 'Safety', 'Reliability'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $48,000',
      careerPath: 'Helper → Apprentice → Finisher',
      environment: ['Construction site', 'Hands-on', 'Indoor/Outdoor', 'Physical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'helpers-roofers',
      name: 'Helpers--Roofers',
      summary: 'Assist roofers with material handling and job site support.',
      responsibilities: [
        'Carry roofing materials',
        'Set up ladders and safety gear',
        'Remove old roofing',
        'Clean work areas',
        'Assist with sealing and fastening'
      ],
      skills: ['Physical Stamina', 'Safety Awareness', 'Teamwork', 'Balance', 'Reliability'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $48,000',
      careerPath: 'Helper → Apprentice → Roofer',
      environment: ['Outdoor work', 'Heights', 'Physical', 'Safety focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'hoist-winch-operators',
      name: 'Hoist and Winch Operators',
      summary: 'Operate hoists and winches to lift and move materials on sites.',
      responsibilities: [
        'Operate hoists and winches',
        'Move loads safely',
        'Inspect equipment',
        'Coordinate with crews',
        'Follow safety protocols'
      ],
      skills: ['Equipment Operation', 'Safety', 'Spatial Awareness', 'Communication', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + equipment training',
      salary: '$38,000 - $65,000',
      careerPath: 'Operator → Lead Operator → Site Supervisor',
      environment: ['Construction sites', 'Heavy equipment', 'Safety focused', 'Team-based'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'insulation-workers-floor-ceiling-wall',
      name: 'Insulation Workers, Floor, Ceiling, and Wall',
      summary: 'Install insulation in building interiors to control temperature and sound.',
      responsibilities: [
        'Measure and cut insulation',
        'Install insulation in walls and ceilings',
        'Seal gaps and joints',
        'Follow safety procedures',
        'Clean work areas'
      ],
      skills: ['Tool Use', 'Safety', 'Physical Stamina', 'Attention to Detail', 'Teamwork'],
      talentFit: 'Practical Builder',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $60,000',
      careerPath: 'Installer → Lead Installer → Supervisor',
      environment: ['Construction site', 'Indoor work', 'Physical', 'Safety focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'insulation-workers-mechanical',
      name: 'Insulation Workers, Mechanical',
      summary: 'Install insulation on mechanical systems like pipes and ducts.',
      responsibilities: [
        'Measure and cut insulation',
        'Wrap pipes and ducts',
        'Seal joints and fittings',
        'Follow safety procedures',
        'Inspect finished work'
      ],
      skills: ['Tool Use', 'Safety', 'Attention to Detail', 'Physical Stamina', 'Problem-solving'],
      talentFit: 'Practical Builder',
      education: 'High School + on-the-job training',
      salary: '$36,000 - $62,000',
      careerPath: 'Installer → Lead Installer → Supervisor',
      environment: ['Construction sites', 'Mechanical rooms', 'Hands-on', 'Safety focused'],
      jobGrowth: '5% growth through 2032'
    },
  ],
  creative: [
    {
      id: 'graphic-designer',
      name: 'Graphic Designer',
      summary: 'Create visual content for brands, websites, and marketing materials.',
      responsibilities: [
        'Design visual concepts',
        'Create layouts and compositions',
        'Select colors and typography',
        'Present design options',
        'Revise based on feedback'
      ],
      skills: ['Visual Design', 'Adobe Creative Suite', 'Typography', 'Color Theory', 'Communication'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in Graphic Design or similar',
      salary: '$50,000 - $95,000',
      careerPath: 'Designer → Senior Designer → Art Director → Creative Director',
      environment: ['Creative expression', 'Visual problem-solving', 'Collaboration', 'Design tools'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'ux-designer',
      name: 'UX/UI Designer',
      summary: 'Design user-friendly digital products and interfaces.',
      responsibilities: [
        'Conduct user research',
        'Create wireframes and prototypes',
        'Design user interfaces',
        'Test designs with users',
        'Iterate based on feedback'
      ],
      skills: ['User Research', 'Wireframing', 'Prototyping', 'UI Design', 'Usability Testing'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Design or UX + Portfolio',
      salary: '$70,000 - $130,000',
      careerPath: 'UX Designer → Senior Designer → Design Lead → Design Manager',
      environment: ['User-centered', 'Problem-solving', 'Innovation', 'Collaboration'],
      jobGrowth: 'Growing rapidly'
    },
    {
      id: 'artist',
      name: 'Artist / Illustrator',
      summary: 'Create original artwork for various mediums and purposes.',
      responsibilities: [
        'Create original artwork',
        'Develop artistic concepts',
        'Manage client projects',
        'Build portfolio',
        'Market and sell artwork'
      ],
      skills: ['Artistic Talent', 'Creativity', 'Technical Skills', 'Self-discipline', 'Marketing'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in Fine Arts or self-taught with portfolio',
      salary: '$40,000 - $100,000 (highly variable)',
      careerPath: 'Emerging Artist → Established Artist → Mentor/Teacher',
      environment: ['Creative freedom', 'Self-direction', 'Artistic expression', 'Portfolio building'],
      jobGrowth: 'Variable; depends on market'
    },
    {
      id: 'architect',
      name: 'Architect',
      summary: 'Design buildings and oversee construction projects.',
      responsibilities: [
        'Create architectural designs',
        'Develop blueprints and specifications',
        'Conduct site analysis',
        'Oversee construction',
        'Ensure building codes compliance'
      ],
      skills: ['Design', 'CAD/BIM Software', 'Technical Knowledge', 'Problem-solving', 'Communication'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Architecture + License',
      salary: '$80,000 - $150,000+',
      careerPath: 'Architect → Senior Architect → Project Lead → Principal Architect',
      environment: ['Design + technical', 'Building projects', 'Client collaboration', 'Design innovation'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'photographer',
      name: 'Photographer',
      summary: 'Capture images for various purposes including commercial and personal.',
      responsibilities: [
        'Capture high-quality images',
        'Manage photo shoots',
        'Edit and retouch photos',
        'Develop client relationships',
        'Build portfolio'
      ],
      skills: ['Photography', 'Editing Software', 'Creative Vision', 'Technical Skills', 'Client Management'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in Photography + Portfolio or self-taught',
      salary: '$35,000 - $85,000 (highly variable)',
      careerPath: 'Freelance → Studio Owner → Creative Director',
      environment: ['Creative flexibility', 'Client work', 'Artistic expression', 'Technical skill'],
      jobGrowth: 'Competitive market'
    },
    {
      id: 'copywriter',
      name: 'Copywriter / Content Writer',
      summary: 'Write compelling content for marketing, web, and publications.',
      responsibilities: [
        'Write marketing copy',
        'Create content for websites',
        'Develop messaging strategies',
        'Edit and revise content',
        'Research topics thoroughly'
      ],
      skills: ['Writing', 'Editing', 'Creativity', 'SEO Knowledge', 'Communication'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in Writing, Marketing, or related field',
      salary: '$50,000 - $100,000',
      careerPath: 'Junior Writer → Content Writer → Senior Writer → Content Manager',
      environment: ['Creative writing', 'Marketing focus', 'Strategy', 'Communication'],
      jobGrowth: '4% growth (higher in digital)'
    },
    {
      id: 'creative-director',
      name: 'Creative Director',
      summary: 'Lead creative teams and shape artistic direction of projects.',
      responsibilities: [
        'Develop creative concepts',
        'Lead creative team',
        'Present ideas to clients',
        'Ensure quality and brand consistency',
        'Drive innovation'
      ],
      skills: ['Leadership', 'Creativity', 'Communication', 'Strategic Thinking', 'Industry Knowledge'],
      talentFit: 'Creative Thinker, Leadership & Visionary',
      education: 'Bachelor\'s in Creative Field + 5+ years experience',
      salary: '$100,000 - $200,000+',
      careerPath: 'Designer → Senior Designer → Art Director → Creative Director → Chief Creative Officer',
      environment: ['Creative leadership', 'Strategic vision', 'Team management', 'Industry influence'],
      jobGrowth: 'Growing with digital expansion'
    },
    {
      id: 'art-director',
      name: 'Art Director',
      summary: 'Direct visual artistic elements for advertising, film, and publications.',
      responsibilities: [
        'Select visual elements',
        'Guide design aesthetic',
        'Manage creative teams',
        'Approve designs',
        'Ensure brand consistency'
      ],
      skills: ['Visual Design', 'Leadership', 'Creative Vision', 'Communication', 'Industry Trends'],
      talentFit: 'Creative Thinker, Leadership & Visionary',
      education: 'Bachelor\'s in Art/Design + portfolio',
      salary: '$70,000 - $140,000',
      careerPath: 'Designer → Senior Designer → Art Director → Creative Director',
      environment: ['Creative leadership', 'Visual focus', 'Team direction', 'Artistic vision'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'composer',
      name: 'Composer',
      summary: 'Create original music compositions.',
      responsibilities: [
        'Compose music',
        'Arrange pieces',
        'Collaborate with musicians',
        'Record compositions',
        'Market work'
      ],
      skills: ['Music Composition', 'Creativity', 'Communication', 'Instrumentation', 'Technical Knowledge'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in music or equivalent',
      salary: '$40,000 - $100,000',
      careerPath: 'Composer → Established Composer → Composer Director',
      environment: ['Studio', 'Concert halls', 'Freelance', 'Creative'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'copy-writer',
      name: 'Copy Writer',
      summary: 'Write advertising and marketing copy.',
      responsibilities: [
        'Write copy',
        'Create campaigns',
        'Research markets',
        'Revise content',
        'Collaborate with teams'
      ],
      skills: ['Writing', 'Creativity', 'Marketing Knowledge', 'Communication', 'Research'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in Marketing, Communications, or English',
      salary: '$50,000 - $110,000',
      careerPath: 'Copy Writer → Senior Writer → Creative Director',
      environment: ['Ad agency', 'Marketing firm', 'Corporate', 'Creative'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'craft-artist',
      name: 'Craft Artist',
      summary: 'Create handcrafted artwork and objects.',
      responsibilities: [
        'Create artwork',
        'Develop designs',
        'Produce items',
        'Market work',
        'Sell at markets'
      ],
      skills: ['Craftsmanship', 'Creativity', 'Artistic Skills', 'Marketing', 'Entrepreneurship'],
      talentFit: 'Creative Thinker',
      education: 'High School or degree in fine arts',
      salary: '$30,000 - $80,000',
      careerPath: 'Craft Artist → Established Artist → Studio Owner',
      environment: ['Home studio', 'Craft shows', 'Galleries', 'Independent'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'costume-attendant',
      name: 'Costume Attendant',
      summary: 'Manage costumes in entertainment productions.',
      responsibilities: [
        'Maintain costumes',
        'Assist performers',
        'Repair garments',
        'Organize inventory',
        'Support productions'
      ],
      skills: ['Costume Care', 'Attention to Detail', 'Organization', 'Communication', 'Sewing'],
      talentFit: 'Detail-Oriented Organizer, Creative Thinker',
      education: 'High School + costume training',
      salary: '$35,000 - $70,000',
      careerPath: 'Attendant → Lead Attendant → Costume Designer',
      environment: ['Theater', 'Film/TV', 'Production', 'Creative'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'creative-writer',
      name: 'Creative Writer',
      summary: 'Write fiction, poetry, and creative content.',
      responsibilities: [
        'Write stories',
        'Develop characters',
        'Edit work',
        'Submit for publication',
        'Market work'
      ],
      skills: ['Writing', 'Creativity', 'Storytelling', 'Editing', 'Self-promotion'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in English or Creative Writing',
      salary: '$35,000 - $100,000',
      careerPath: 'Writer → Published Author → Writer Director',
      environment: ['Freelance', 'Publishing', 'Home office', 'Independent'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'commercial-industrial-designer',
      name: 'Commercial and Industrial Designer',
      summary: 'Design commercial and industrial products and equipment.',
      responsibilities: [
        'Create designs',
        'Develop concepts',
        'Use CAD software',
        'Present ideas',
        'Modify designs'
      ],
      skills: ['Product Design', 'CAD Software', 'Creativity', 'Problem-solving', 'Communication'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in industrial design',
      salary: '$65,000 - $130,000',
      careerPath: 'Designer → Senior Designer → Lead Designer → Design Manager',
      environment: ['Design studio', 'Manufacturing', 'Creative', 'Innovation focus'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'interior-designer',
      name: 'Interior Designer',
      summary: 'Plan and design interior spaces for homes and businesses.',
      responsibilities: [
        'Meet with clients',
        'Create design plans',
        'Select materials and furnishings',
        'Coordinate with contractors',
        'Oversee installations'
      ],
      skills: ['Interior Design', 'Creativity', 'Space Planning', 'Communication', 'Project Management'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Interior Design',
      salary: '$45,000 - $90,000',
      careerPath: 'Designer → Senior Designer → Design Director',
      environment: ['Client sites', 'Design studios', 'Collaboration', 'Creative'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'jewelers',
      name: 'Jewelers',
      summary: 'Design, craft, and repair jewelry pieces.',
      responsibilities: [
        'Design jewelry pieces',
        'Fabricate or repair items',
        'Set stones and polish finishes',
        'Inspect quality',
        'Consult with customers'
      ],
      skills: ['Jewelry Crafting', 'Precision Work', 'Attention to Detail', 'Creativity', 'Customer Service'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + jewelry training',
      salary: '$35,000 - $70,000',
      careerPath: 'Jeweler → Senior Jeweler → Shop Owner',
      environment: ['Workshop', 'Retail settings', 'Precision work', 'Hands-on'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'keyboard-instrument-repairers-tuners',
      name: 'Keyboard Instrument Repairers and Tuners',
      summary: 'Repair and tune pianos and other keyboard instruments.',
      responsibilities: [
        'Tune instruments',
        'Repair mechanical issues',
        'Replace worn parts',
        'Test sound quality',
        'Document service work'
      ],
      skills: ['Instrument Repair', 'Tuning', 'Attention to Detail', 'Mechanical Aptitude', 'Listening Skills'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + instrument repair training',
      salary: '$35,000 - $70,000',
      careerPath: 'Technician → Senior Technician → Shop Owner',
      environment: ['Music shops', 'Customer homes', 'Hands-on', 'Detail-focused'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  data: [
    {
      id: 'data-entry-keyer',
      name: 'Data Entry Keyer',
      summary: 'Enter data into computer systems.',
      responsibilities: [
        'Enter data',
        'Verify accuracy',
        'Maintain records',
        'Operate equipment',
        'Meet deadlines'
      ],
      skills: ['Typing', 'Attention to Detail', 'Organization', 'Accuracy', 'Computer Skills'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$32,000 - $60,000',
      careerPath: 'Keyer → Lead Keyer → Supervisor',
      environment: ['Office', 'Data entry', 'Administrative', 'Fast-paced'],
      jobGrowth: '-24% decline through 2032'
    },
    {
      id: 'data-processing-repairer',
      name: 'Data Processing Equipment Repairer',
      summary: 'Repair data processing equipment.',
      responsibilities: [
        'Diagnose problems',
        'Repair equipment',
        'Replace components',
        'Test functionality',
        'Maintain systems'
      ],
      skills: ['Equipment Repair', 'Technical Knowledge', 'Problem-solving', 'Troubleshooting', 'Electrical Skills'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$45,000 - $85,000',
      careerPath: 'Technician → Senior Tech → Supervisor',
      environment: ['Data center', 'Corporate', 'Technical support', 'Problem-solving'],
      jobGrowth: '-12% decline through 2032'
    },
    {
      id: 'data-warehousing-specialist',
      name: 'Data Warehousing Specialist',
      summary: 'Manage data warehouse systems and operations.',
      responsibilities: [
        'Manage database',
        'Optimize performance',
        'Ensure data quality',
        'Create reports',
        'Troubleshoot issues'
      ],
      skills: ['Data Warehouse', 'SQL', 'Database Management', 'Problem-solving', 'Analysis'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in IT or Database Management',
      salary: '$70,000 - $140,000',
      careerPath: 'Specialist → Senior Specialist → Manager',
      environment: ['Corporate IT', 'Data center', 'Technical', 'Strategic'],
      jobGrowth: '16% growth through 2032'
    },
    {
      id: 'database-administrator',
      name: 'Database Administrator',
      summary: 'Manage and maintain database systems.',
      responsibilities: [
        'Manage databases',
        'Ensure security',
        'Back up data',
        'Optimize performance',
        'Train users'
      ],
      skills: ['Database Management', 'SQL', 'Security', 'Problem-solving', 'Technical Knowledge'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in IT + Database certification',
      salary: '$75,000 - $150,000',
      careerPath: 'Administrator → Senior DBA → Database Manager',
      environment: ['Corporate IT', 'Tech company', 'Data management', 'Security-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'database-architect',
      name: 'Database Architect',
      summary: 'Design and plan database systems.',
      responsibilities: [
        'Design databases',
        'Plan architecture',
        'Solve problems',
        'Document design',
        'Lead teams'
      ],
      skills: ['Database Design', 'SQL', 'Architecture', 'Problem-solving', 'Leadership'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in IT + Database experience',
      salary: '$100,000 - $180,000',
      careerPath: 'Architect → Senior Architect → Chief Data Architect',
      environment: ['Tech company', 'Enterprise IT', 'Strategic', 'Complex systems'],
      jobGrowth: '10% growth through 2032'
    },
  ],
  education: [
    {
      id: 'adapted-pe-specialist',
      name: 'Adapted Physical Education Specialist',
      summary: 'Teach physical education to students with disabilities.',
      responsibilities: [
        'Teach adaptive PE',
        'Modify activities',
        'Support students',
        'Develop lesson plans',
        'Monitor progress'
      ],
      skills: ['Physical Education', 'Adaptability', 'Empathy', 'Communication', 'Creativity'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Adapted Physical Education + License',
      salary: '$50,000 - $85,000',
      careerPath: 'Teacher → Adapted PE Specialist → Lead → Coordinator',
      environment: ['Special needs education', 'Physical activity', 'Supportive', 'Inclusive'],
      jobGrowth: '4% growth through 2032',
      degrees: ['Bachelor of Science in Adapted Physical Education', 'Physical Education Teaching License (varies by state)', 'Special Education Certification'],
      degreeCost: '$45,000 - $100,000 (Bachelor\'s degree) or $30,000 - $50,000 (certification programs)'
    },
    {
      id: 'adult-literacy-teacher',
      name: 'Adult Literacy, Remedial Education, and GED Teacher',
      summary: 'Teach literacy and GED preparation to adult students.',
      responsibilities: [
        'Teach literacy skills',
        'Prepare for GED',
        'Develop curriculum',
        'Assess progress',
        'Support adult learners'
      ],
      skills: ['Teaching', 'Patience', 'Communication', 'Curriculum Development', 'Assessment'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Education or related field',
      salary: '$50,000 - $85,000',
      careerPath: 'Instructor → Teacher → Program Coordinator → Director',
      environment: ['Adult education', 'Literacy focus', 'Community service', 'Supportive'],
      jobGrowth: '5% growth through 2032',
      degrees: ['Bachelor of Science in Education', 'Bachelor\'s in English or Teacher Education', 'Adult Education Certification'],
      degreeCost: '$45,000 - $95,000 (Bachelor\'s degree) or $2,000 - $8,000 (adult education certification)'
    },
    {
      id: 'teacher-elementary',
      name: 'Elementary School Teacher',
      summary: 'Educate and mentor young students in core academic subjects.',
      responsibilities: [
        'Plan and deliver lessons',
        'Assess student learning',
        'Create learning materials',
        'Manage classroom behavior',
        'Communicate with parents'
      ],
      skills: ['Communication', 'Patience', 'Organization', 'Creativity', 'Empathy'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Education + Teaching License',
      salary: '$50,000 - $85,000',
      careerPath: 'Teacher → Grade Lead → Department Head → Principal',
      environment: ['Student interaction', 'Curriculum development', 'Supportive role', 'Community impact'],
      jobGrowth: '4% growth through 2032',
      degrees: ['Bachelor of Science in Elementary Education', 'Bachelor\'s in Education', 'Elementary Teaching License (varies by state)'],
      degreeCost: '$45,000 - $100,000 (Bachelor\'s degree) or $500 - $3,000 (teaching license)'
    },
    {
      id: 'teacher-secondary',
      name: 'Secondary / High School Teacher',
      summary: 'Teach specialized subjects to older students.',
      responsibilities: [
        'Design curriculum and lessons',
        'Teach subject content',
        'Grade assignments and tests',
        'Mentor students',
        'Prepare students for exams'
      ],
      skills: ['Subject Expertise', 'Communication', 'Organization', 'Mentoring', 'Technology Skills'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Subject Area + Teaching License',
      salary: '$55,000 - $90,000',
      careerPath: 'Teacher → Mentor Teacher → Department Chair → Administrator',
      environment: ['Classroom teaching', 'Student development', 'Subject expertise', 'Guidance role'],
      jobGrowth: '4% growth through 2032',
      degrees: ['Bachelor of Science in [Subject Area]', 'Bachelor of Science in Secondary Education', 'State Teaching License (subject-specific)'],
      degreeCost: '$45,000 - $100,000 (Bachelor\'s degree) or $500 - $3,500 (teaching license/certification)'
    },
    {
      id: 'professor',
      name: 'College / University Professor',
      summary: 'Teach college-level courses and conduct academic research.',
      responsibilities: [
        'Teach undergraduate and graduate courses',
        'Conduct research and publish findings',
        'Mentor students and researchers',
        'Serve on committees',
        'Contribute to academic community'
      ],
      skills: ['Research', 'Writing', 'Communication', 'Subject Expertise', 'Leadership'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'PhD in field of study',
      salary: '$70,000 - $150,000+',
      careerPath: 'Adjunct → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Research-focused', 'Teaching', 'Intellectual rigor', 'Academic community'],
      jobGrowth: 'Variable by field',
      degrees: ['PhD in [Discipline]', 'Doctor of Philosophy', 'Terminal Master\'s degree (field-dependent)'],
      degreeCost: '$30,000 - $100,000+ (PhD programs often funded) or $40,000 - $80,000 (terminal Master\'s)'
    },
    {
      id: 'academic-researcher',
      name: 'Academic Researcher / Scientist',
      summary: 'Conduct scientific research and advance academic knowledge.',
      responsibilities: [
        'Design research studies',
        'Conduct experiments',
        'Analyze data and findings',
        'Publish research papers',
        'Apply for research funding'
      ],
      skills: ['Research Design', 'Data Analysis', 'Writing', 'Critical Thinking', 'Creativity'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'PhD in relevant field',
      salary: '$65,000 - $130,000',
      careerPath: 'Postdoctoral Fellow → Research Scientist → Principal Investigator',
      environment: ['Intellectual challenge', 'Innovation', 'Collaboration', 'Publication focus'],
      jobGrowth: 'Varies by field',
      degrees: ['PhD in [Scientific Field]', 'Doctor of Philosophy', 'Postdoctoral Training/Fellowship'],
      degreeCost: '$30,000 - $100,000+ (PhD often funded) or $20,000 - $50,000 (Postdoctoral fellowship stipend)'
    },
    {
      id: 'school-counselor',
      name: 'School Counselor',
      summary: 'Guide students on academic, career, and personal issues.',
      responsibilities: [
        'Meet with students individually',
        'Guide college/career planning',
        'Address personal challenges',
        'Communicate with parents and teachers',
        'Maintain confidentiality'
      ],
      skills: ['Active Listening', 'Empathy', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'People-Oriented Helper',
      education: 'Master\'s in Counseling + License',
      salary: '$55,000 - $90,000',
      careerPath: 'School Counselor → Lead Counselor → District Director',
      environment: ['Student-focused', 'Supportive role', 'Guidance', 'Relationship building'],
      jobGrowth: '10% growth through 2032',
      degrees: ['Master of Science in Counseling', 'Master in School Counseling', 'School Counselor License/Certification'],
      degreeCost: '$30,000 - $70,000 (Master\'s degree) or $3,000 - $10,000 (certification/licensure)'
    },
    {
      id: 'curriculum-developer',
      name: 'Curriculum Developer / Instructional Designer',
      summary: 'Design educational programs and learning materials.',
      responsibilities: [
        'Create curriculum frameworks',
        'Develop learning objectives',
        'Design assessment tools',
        'Create educational materials',
        'Evaluate program effectiveness'
      ],
      skills: ['Instructional Design', 'Curriculum Development', 'Research', 'Technology', 'Communication'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Master\'s in Education or Instructional Design',
      salary: '$60,000 - $110,000',
      careerPath: 'Instructional Designer → Senior Developer → Director of Instruction',
      environment: ['Curriculum focus', 'Educational innovation', 'Learning technology', 'Creation'],
      jobGrowth: 'Growing with online education',
      degrees: ['Master of Science in Instructional Design', 'Master\'s in Education Curriculum & Instruction', 'Master\'s in Learning & Technology'],
      degreeCost: '$30,000 - $70,000 (Master\'s degree) or $5,000 - $15,000 (graduate certificates)'
    },
    {
      id: 'librarian',
      name: 'Librarian',
      summary: 'Manage library resources and assist patrons with information research.',
      responsibilities: [
        'Curate and organize collections',
        'Assist patrons with research',
        'Manage library operations',
        'Teach information literacy',
        'Develop programs and events'
      ],
      skills: ['Organization', 'Research', 'Technology', 'Communication', 'Community Building'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'Master of Library Science (MLS/MLIS)',
      salary: '$55,000 - $95,000',
      careerPath: 'Librarian → Senior Librarian → Library Director',
      environment: ['Knowledge organization', 'Community service', 'Technology integration', 'Research support'],
      jobGrowth: 'Stable; changing with digital transformation',
      degrees: ['Master of Library Science (MLS)', 'Master of Library and Information Science (MLIS)', 'Master of Information Science'],
      degreeCost: '$30,000 - $65,000 (Master\'s degree) or $2,000 - $5,000 (library certification programs)'
    },
    {
      id: 'special-education-teacher',
      name: 'Special Education Teacher',
      summary: 'Teach and support students with special needs and disabilities.',
      responsibilities: [
        'Develop IEPs',
        'Provide specialized instruction',
        'Adapt curriculum',
        'Support student development',
        'Collaborate with parents'
      ],
      skills: ['Special Education', 'Patience', 'Adaptability', 'Communication', 'Compassion'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Special Education + License',
      salary: '$55,000 - $95,000',
      careerPath: 'Special Ed Teacher → Lead Teacher → Department Head → Director',
      environment: ['Special needs focus', 'Individualized teaching', 'Supportive', 'Rewarding'],
      jobGrowth: '3% growth through 2032',
      degrees: ['Bachelor of Science in Special Education', 'Dual degree: Special Education + General Education', 'Special Education License/Certification'],
      degreeCost: '$45,000 - $100,000 (Bachelor\'s degree) or $3,000 - $8,000 (special education certification)'
    },
    {
      id: 'college-admissions-counselor',
      name: 'College Admissions Counselor',
      summary: 'Help prospective students navigate the college admissions process.',
      responsibilities: [
        'Meet with prospective students',
        'Review applications',
        'Promote college programs',
        'Evaluate candidates',
        'Guide admissions process'
      ],
      skills: ['Communication', 'Sales', 'Organization', 'Relationship Building', 'Empathy'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s degree + admissions knowledge',
      salary: '$45,000 - $80,000',
      careerPath: 'Admissions Counselor → Senior Counselor → Director of Admissions',
      environment: ['Student interaction', 'Sales focus', 'Relationship building', 'Education focus'],
      jobGrowth: '3% growth through 2032',
      degrees: ['Bachelor of Science in any field', 'Bachelor\'s in Higher Education or Admissions', 'Admissions Certification (optional)'],
      degreeCost: '$45,000 - $95,000 (Bachelor\'s degree) or $1,000 - $5,000 (admissions certification)'
    },
    {
      id: 'training-specialist',
      name: 'Corporate Training Specialist',
      summary: 'Develop and deliver training programs for employee development.',
      responsibilities: [
        'Assess training needs',
        'Develop training materials',
        'Deliver training programs',
        'Evaluate effectiveness',
        'Manage learning systems'
      ],
      skills: ['Training Development', 'Presentation', 'Communication', 'Creativity', 'Technical Skills'],
      talentFit: 'Creative Thinker, People-Oriented Helper',
      education: 'Bachelor\'s in Education, HR, or related',
      salary: '$55,000 - $95,000',
      careerPath: 'Training Specialist → Senior Specialist → Training Manager → Director',
      environment: ['Training focus', 'Employee development', 'Presentation', 'Continuous learning'],
      jobGrowth: '8% growth through 2032',
      degrees: ['Bachelor of Science in Education', 'Bachelor\'s in Human Resources', 'Instructional Design or Training Certification'],
      degreeCost: '$45,000 - $95,000 (Bachelor\'s degree) or $2,000 - $10,000 (training certification programs)'
    },
    {
      id: 'elearning-developer',
      name: 'eLearning Developer',
      summary: 'Create online courses and digital learning materials.',
      responsibilities: [
        'Design online courses',
        'Develop digital content',
        'Use learning management systems',
        'Create interactive materials',
        'Test and evaluate courses'
      ],
      skills: ['eLearning Platforms', 'Instructional Design', 'Technical Skills', 'Creativity', 'Problem-solving'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Education or Instructional Technology',
      salary: '$60,000 - $110,000',
      careerPath: 'eLearning Developer → Senior Developer → Manager',
      environment: ['Digital learning', 'Technology focus', 'Creativity', 'Online education'],
      jobGrowth: '15% growth through 2032',
      degrees: ['Bachelor of Science in Instructional Design and Technology', 'Bachelor\'s in Education Technology', 'eLearning or Instructional Design Certification'],
      degreeCost: '$45,000 - $100,000 (Bachelor\'s degree) or $3,000 - $12,000 (eLearning certification programs)'
    },
    {
      id: 'university-admissions-director',
      name: 'University Admissions Director',
      summary: 'Lead university admissions operations and strategy.',
      responsibilities: [
        'Lead admissions team',
        'Develop admissions strategy',
        'Manage recruitment',
        'Set enrollment goals',
        'Budget management'
      ],
      skills: ['Leadership', 'Strategic Planning', 'Communication', 'Organization', 'Sales Acumen'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Master\'s in Education or related field',
      salary: '$80,000 - $140,000',
      careerPath: 'Admissions Counselor → Senior Counselor → Director → VP Enrollment',
      environment: ['Leadership role', 'Enrollment focus', 'Strategic planning', 'Higher education'],
      jobGrowth: 'Variable by institution',
      degrees: ['Master of Science in Higher Education Administration', 'Master\'s in Education', 'MBA or Master\'s in related field'],
      degreeCost: '$30,000 - $70,000 (Master\'s degree) or $40,000 - $90,000 (MBA)'
    },
    {
      id: 'agricultural-sciences-teacher',
      name: 'Agricultural Sciences Teachers, Postsecondary',
      summary: 'Teach agricultural science and farming practices at college level.',
      responsibilities: [
        'Teach agriculture courses',
        'Develop curriculum',
        'Conduct experiments',
        'Advise student projects',
        'Mentor students'
      ],
      skills: ['Agricultural Knowledge', 'Teaching', 'Research', 'Communication', 'Laboratory Skills'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s or PhD in Agricultural Science',
      salary: '$65,000 - $120,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Research focus', 'Teaching', 'Agricultural industry'],
      jobGrowth: 'Variable by institution',
      degrees: ['Master of Science in Agricultural Science', 'PhD in Agricultural Science or similar field', 'Master\'s in Agronomy or related'],
      degreeCost: '$35,000 - $80,000 (Master\'s degree) or $40,000 - $100,000+ (PhD, often funded)'
    },
    {
      id: 'anthropology-teacher',
      name: 'Anthropology and Archeology Teachers, Postsecondary',
      summary: 'Teach anthropology and archeology at college level.',
      responsibilities: [
        'Teach anthropology courses',
        'Conduct research',
        'Develop curriculum',
        'Lead field studies',
        'Mentor students'
      ],
      skills: ['Anthropology Knowledge', 'Research', 'Teaching', 'Communication', 'Field Work'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s or PhD in Anthropology',
      salary: '$60,000 - $110,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Research', 'Teaching', 'Field work opportunity'],
      jobGrowth: 'Variable by institution',
      degrees: ['Master of Science in Anthropology', 'PhD in Anthropology or Archeology', 'PhD in Human Evolution or Biological Anthropology'],
      degreeCost: '$35,000 - $80,000 (Master\'s degree) or $40,000 - $100,000+ (PhD, often funded)'
    },
    {
      id: 'architecture-teacher',
      name: 'Architecture Teacher, Postsecondary',
      summary: 'Teach architecture and design at college level.',
      responsibilities: [
        'Teach design courses',
        'Critique student work',
        'Develop curriculum',
        'Advise on projects',
        'Maintain studio skills'
      ],
      skills: ['Architecture Knowledge', 'Teaching', 'Design Expertise', 'Communication', 'Mentoring'],
      talentFit: 'Creative Thinker, People-Oriented Helper',
      education: 'Master\'s in Architecture or related + teaching experience',
      salary: '$65,000 - $120,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Design focus', 'Teaching', 'Studio environment'],
      jobGrowth: 'Variable by institution',
      degrees: ['Master of Architecture (M.Arch)', 'Bachelor of Architecture + Professional License', 'PhD in Architecture or Design Studies'],
      degreeCost: '$40,000 - $100,000 (Master\'s degree) or $350,000 - $450,000 (5-year M.Arch + licensure)'
    },
    {
      id: 'area-ethnic-cultural-studies-teacher',
      name: 'Area, Ethnic, and Cultural Studies Teacher, Postsecondary',
      summary: 'Teach area, ethnic, and cultural studies at college level.',
      responsibilities: [
        'Teach cultural studies',
        'Develop curriculum',
        'Conduct research',
        'Mentor students',
        'Promote cultural awareness'
      ],
      skills: ['Cultural Studies', 'Teaching', 'Research', 'Communication', 'Cultural Sensitivity'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s or PhD in related field',
      salary: '$60,000 - $110,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Cultural focus', 'Research', 'Mentoring'],
      jobGrowth: 'Variable by institution',
      degrees: ['Master\'s in [Area/Ethnic] Studies', 'PhD in [Specific Cultural Field]', 'Master of Arts in International Studies'],
      degreeCost: '$30,000 - $75,000 (Master\'s degree) or $40,000 - $100,000+ (PhD, often funded)'
    },
    {
      id: 'art-drama-music-teacher',
      name: 'Art, Drama, and Music Teacher, Postsecondary',
      summary: 'Teach art, drama, and music at college level.',
      responsibilities: [
        'Teach art courses',
        'Direct productions',
        'Conduct performances',
        'Critique student work',
        'Mentor artists'
      ],
      skills: ['Artistic Skill', 'Teaching', 'Creativity', 'Communication', 'Performance'],
      talentFit: 'Creative Thinker, People-Oriented Helper',
      education: 'Master\'s in Fine Arts or related field',
      salary: '$55,000 - $105,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Artistic focus', 'Performance', 'Teaching'],
      jobGrowth: 'Declining 1% through 2032',
      degrees: ['Master of Fine Arts (MFA)', 'Master of Arts in Music', 'PhD in Fine Arts or similar discipline'],
      degreeCost: '$30,000 - $75,000 (Master\'s degree) or $40,000 - $90,000 (MFA including living expenses)'
    },
    {
      id: 'atmospheric-earth-marine-space-teacher',
      name: 'Atmospheric, Earth, Marine, and Space Sciences Teacher, Postsecondary',
      summary: 'Teach atmospheric, earth, marine, and space sciences at college level.',
      responsibilities: [
        'Teach science courses',
        'Conduct research',
        'Lead field studies',
        'Develop curriculum',
        'Mentor students'
      ],
      skills: ['Science Knowledge', 'Teaching', 'Research', 'Communication', 'Field Work'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'PhD in related science field',
      salary: '$65,000 - $125,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Science focus', 'Research', 'Field work'],
      jobGrowth: 'Declining 0% through 2032',
      degrees: ['PhD in Atmospheric Science or Meteorology', 'PhD in Geology or Earth Science', 'PhD in Marine Science or Oceanography'],
      degreeCost: '$40,000 - $100,000+ (PhD often funded) or $50,000 - $120,000 (funded research programs)'
    },
    {
      id: 'criminal-justice-teacher',
      name: 'Criminal Justice and Law Enforcement Teacher, Postsecondary',
      summary: 'Teach criminal justice and law enforcement at college level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Conduct research',
        'Advise students',
        'Grade work'
      ],
      skills: ['Teaching', 'Criminal Justice', 'Communication', 'Research', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in Criminal Justice or related field',
      salary: '$60,000 - $115,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor',
      environment: ['Higher education', 'Teaching', 'Academic', 'Research'],
      jobGrowth: '2% growth through 2032',
      degrees: ['Master of Science in Criminal Justice', 'Master of Science in Law Enforcement', 'Master of Arts in Criminal Justice Administration'],
      degreeCost: '$30,000 - $70,000 (Master\'s degree) or $40,000 - $85,000 (specialized criminal justice programs)'
    },
    {
      id: 'director-religious-education',
      name: 'Director, Religious Activities and Education',
      summary: 'Lead religious and educational activities.',
      responsibilities: [
        'Plan programs',
        'Lead activities',
        'Teach classes',
        'Manage volunteers',
        'Build community'
      ],
      skills: ['Religious Leadership', 'Teaching', 'Organization', 'Communication', 'Community Building'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'Bachelor\'s + religious training/certification',
      salary: '$40,000 - $85,000',
      careerPath: 'Director → Senior Director → Regional Leader',
      environment: ['Religious organization', 'Community center', 'Program management', 'Leadership'],
      jobGrowth: '3% growth through 2032',
      degrees: ['Bachelor\'s degree in any field', 'Certificate in Religious Education', 'Master\'s in Religious Studies (optional)'],
      degreeCost: '$45,000 - $95,000 (Bachelor\'s degree) or $2,000 - $10,000 (religious education certification)'
    },
    {
      id: 'economics-teacher',
      name: 'Economics Teacher, Postsecondary',
      summary: 'Teach economics at college level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Conduct research',
        'Advise students',
        'Grade work'
      ],
      skills: ['Teaching', 'Economics', 'Research', 'Communication', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in Economics',
      salary: '$70,000 - $135,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '2% growth through 2032',
      degrees: ['Master of Science in Economics', 'Master of Arts in Economics', 'PhD in Economics'],
      degreeCost: '$35,000 - $80,000 (Master\'s degree) or $40,000 - $100,000+ (PhD, often funded)'
    },
    {
      id: 'economist',
      name: 'Economist',
      summary: 'Analyze economic data and trends.',
      responsibilities: [
        'Analyze data',
        'Conduct research',
        'Prepare reports',
        'Make forecasts',
        'Advise organizations'
      ],
      skills: ['Economics', 'Data Analysis', 'Research', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Master\'s or PhD in Economics',
      salary: '$85,000 - $160,000',
      careerPath: 'Economist → Senior Economist → Chief Economist',
      environment: ['Government', 'Research', 'Corporate', 'Financial'],
      jobGrowth: '14% growth through 2032'
    },
    {
      id: 'editor',
      name: 'Editor',
      summary: 'Edit and prepare written content for publication.',
      responsibilities: [
        'Edit manuscripts',
        'Revise content',
        'Check accuracy',
        'Suggest improvements',
        'Coordinate publication'
      ],
      skills: ['Writing', 'Editing', 'Attention to Detail', 'Communication', 'Organization'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'Bachelor\'s in English or Journalism',
      salary: '$55,000 - $120,000',
      careerPath: 'Editor → Senior Editor → Editorial Director',
      environment: ['Publishing', 'Media', 'Corporate', 'Writing-focused'],
      jobGrowth: '-2% decline through 2032'
    },
    {
      id: 'education-administrator-all-other',
      name: 'Education Administrator, All Other',
      summary: 'Provide administrative leadership in education.',
      responsibilities: [
        'Manage programs',
        'Oversee staff',
        'Plan budgets',
        'Develop policies',
        'Ensure quality'
      ],
      skills: ['Educational Leadership', 'Management', 'Organization', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Master\'s in Educational Administration',
      salary: '$80,000 - $150,000',
      careerPath: 'Administrator → Senior Administrator → Director',
      environment: ['Educational institution', 'Leadership', 'Administrative', 'Strategic'],
      jobGrowth: '3% growth through 2032',
      degrees: ['Master\'s in Educational Leadership', 'Master of Education (M.Ed) Administration', 'Master\'s in Educational Management'],
      degreeCost: '$30,000 - $70,000 (Master\'s degree) or $5,000 - $15,000 (administration certificates)'
    },
    {
      id: 'education-administrator-elementary-secondary',
      name: 'Education Administrator, Elementary and Secondary School',
      summary: 'Provide administrative leadership in K-12 schools.',
      responsibilities: [
        'Lead school',
        'Manage staff',
        'Plan curriculum',
        'Budget management',
        'Student discipline'
      ],
      skills: ['School Leadership', 'Management', 'Communication', 'Problem-solving', 'Decision-making'],
      talentFit: 'Leadership & Visionary',
      education: 'Master\'s in Educational Administration + License',
      salary: '$90,000 - $160,000',
      careerPath: 'Principal → Senior Principal → District Administrator',
      environment: ['K-12 school', 'Leadership', 'Administrative', 'Strategic'],
      jobGrowth: '2% growth through 2032',
      degrees: ['Master of Education (M.Ed) in Educational Leadership', 'Master\'s in School Administration', 'Principal\'s License/Certification'],
      degreeCost: '$30,000 - $70,000 (Master\'s degree) or $3,000 - $8,000 (administrative license/certification)'
    },
    {
      id: 'education-administrator-postsecondary',
      name: 'Education Administrator, Postsecondary',
      summary: 'Provide administrative leadership in higher education.',
      responsibilities: [
        'Manage department',
        'Oversee faculty',
        'Plan budgets',
        'Develop programs',
        'Ensure quality'
      ],
      skills: ['Higher Ed Leadership', 'Management', 'Academic Knowledge', 'Budget Skills', 'Communication'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Master\'s + higher ed experience',
      salary: '$100,000 - $190,000',
      careerPath: 'Department Chair → Dean → Provost',
      environment: ['Higher education', 'Academic leadership', 'Administrative', 'Strategic'],
      jobGrowth: '4% growth through 2032',
      degrees: ['Master of Business Administration (MBA)', 'Master\'s in Higher Education Administration', 'PhD in Education or field-specific discipline'],
      degreeCost: '$40,000 - $90,000 (MBA) or $30,000 - $70,000 (Master\'s in Higher Ed)'
    },
    {
      id: 'education-administrator-preschool',
      name: 'Education Administrator, Preschool and Child Care Center - Program',
      summary: 'Manage preschool and childcare programs.',
      responsibilities: [
        'Manage center',
        'Oversee staff',
        'Plan programs',
        'Parent communication',
        'Quality assurance'
      ],
      skills: ['Program Management', 'Child Development', 'Leadership', 'Communication', 'Organization'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'Bachelor\'s in Early Childhood Education',
      salary: '$50,000 - $95,000',
      careerPath: 'Director → Senior Director → Regional Manager',
      environment: ['Preschool/Daycare', 'Program management', 'Leadership', 'Child-focused'],
      jobGrowth: '8% growth through 2032',
      degrees: ['Bachelor of Science in Early Childhood Education', 'Bachelor\'s in Child Development', 'Early Childhood Director Credential'],
      degreeCost: '$45,000 - $95,000 (Bachelor\'s degree) or $2,000 - $7,000 (director credentialing)'
    },
    {
      id: 'education-teacher',
      name: 'Education Teacher, Postsecondary',
      summary: 'Teach education at college level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Conduct research',
        'Advise students',
        'Grade work'
      ],
      skills: ['Teaching', 'Education', 'Research', 'Communication', 'Mentoring'],
      talentFit: 'People-Oriented Helper',
      education: 'PhD in Education or related field',
      salary: '$65,000 - $125,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '2% growth through 2032',
      degrees: ['PhD in Education', 'PhD in Educational Psychology', 'PhD in Curriculum & Instruction'],
      degreeCost: '$40,000 - $100,000+ (PhD often funded) or $50,000 - $120,000 (research assistantships)'
    },
    {
      id: 'education-training-library-worker-all',
      name: 'Education, Training, and Library Worker, All Other',
      summary: 'Provide education, training, and library support.',
      responsibilities: [
        'Provide support',
        'Assist learners',
        'Manage resources',
        'Develop programs',
        'Document activities'
      ],
      skills: ['Education Support', 'Communication', 'Organization', 'Technology', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or Associate\'s degree',
      salary: '$35,000 - $70,000',
      careerPath: 'Support Worker → Coordinator → Manager',
      environment: ['School', 'Library', 'Training center', 'Support-focused'],
      jobGrowth: '5% growth through 2032',
      degrees: ['High School Diploma', 'Associate\'s Degree in Education Support', 'Certificate in Library/Education Support'],
      degreeCost: 'No cost (high school) or $15,000 - $35,000 (Associate\'s) or $1,000 - $5,000 (support certificates)'
    },
    {
      id: 'educational-psychologist',
      name: 'Educational Psychologist',
      summary: 'Apply psychology to education and learning.',
      responsibilities: [
        'Assess students',
        'Diagnose issues',
        'Develop plans',
        'Conduct research',
        'Advise educators'
      ],
      skills: ['Educational Psychology', 'Assessment', 'Research', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'PhD in Educational Psychology',
      salary: '$75,000 - $140,000',
      careerPath: 'Psychologist → Senior Psychologist → Research Lead',
      environment: ['School', 'University', 'Research', 'Academic'],
      jobGrowth: '8% growth through 2032',
      degrees: ['PhD in Educational Psychology', 'PhD in School Psychology', 'Specialist Degree in School Psychology'],
      degreeCost: '$40,000 - $100,000+ (PhD often funded) or $25,000 - $60,000 (Specialist degree programs)'
    },
    {
      id: 'educational-counselor',
      name: 'Educational, Vocational, and School Counselor',
      summary: 'Provide counseling and career guidance to students.',
      responsibilities: [
        'Counsel students',
        'Plan careers',
        'Provide guidance',
        'Support development',
        'Coordinate resources'
      ],
      skills: ['Counseling', 'Career Development', 'Communication', 'Problem-solving', 'Empathy'],
      talentFit: 'People-Oriented Helper',
      education: 'Master\'s in Counseling + License',
      salary: '$60,000 - $115,000',
      careerPath: 'Counselor → Senior Counselor → Director',
      environment: ['School', 'Career center', 'Counseling', 'Student-focused'],
      jobGrowth: '11% growth through 2032',
      degrees: ['Master of Science in Counseling', 'Master in School Counseling', 'Master of Arts in Career Counseling'],
      degreeCost: '$30,000 - $70,000 (Master\'s degree) or $3,000 - $10,000 (school counselor licensure/certification)'
    },
    {
      id: 'electrical-electronics-tech',
      name: 'Electrical and Electronic Engineering Technician',
      summary: 'Provide technical support for electrical engineering projects.',
      responsibilities: [
        'Test systems',
        'Build prototypes',
        'Troubleshoot issues',
        'Maintain equipment',
        'Document work'
      ],
      skills: ['Electrical Systems', 'Electronics', 'Technical Knowledge', 'Problem-solving', 'Attention to Detail'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'Associate\'s in electrical/electronics technology',
      salary: '$55,000 - $105,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Engineering firm', 'Manufacturing', 'Technical', 'Problem-solving'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'electrical-drafter',
      name: 'Electrical Drafter',
      summary: 'Create technical drawings for electrical systems.',
      responsibilities: [
        'Create drawings',
        'Use CAD software',
        'Update plans',
        'Verify details',
        'Maintain files'
      ],
      skills: ['CAD Software', 'Electrical Knowledge', 'Attention to Detail', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Technical Aptitude',
      education: 'High School or Associate\'s in drafting',
      salary: '$45,000 - $85,000',
      careerPath: 'Drafter → Senior Drafter → Lead Drafter',
      environment: ['Engineering firm', 'Electrical contracting', 'Computer-based', 'Detail-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'electrical-engineer',
      name: 'Electrical Engineer',
      summary: 'Design electrical systems and equipment.',
      responsibilities: [
        'Design systems',
        'Solve problems',
        'Ensure compliance',
        'Conduct tests',
        'Lead projects'
      ],
      skills: ['Electrical Engineering', 'Problem-solving', 'Design', 'Leadership', 'Communication'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in Electrical Engineering + License',
      salary: '$100,000 - $180,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer → Manager',
      environment: ['Engineering firm', 'Manufacturing', 'Tech company', 'Technical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'electrical-electronics-assembler',
      name: 'Electrical and Electronic Equipment Assembler',
      summary: 'Assemble electrical and electronic equipment.',
      responsibilities: [
        'Assemble components',
        'Solder connections',
        'Test functionality',
        'Install parts',
        'Quality control'
      ],
      skills: ['Assembly', 'Soldering', 'Electrical Knowledge', 'Attention to Detail', 'Precision'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + assembly training',
      salary: '$35,000 - $70,000',
      careerPath: 'Assembler → Lead Assembler → Supervisor',
      environment: ['Manufacturing', 'Electronics', 'Assembly focus', 'Precision work'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'electrical-electronics-inspector',
      name: 'Electrical and Electronic Inspector and Tester',
      summary: 'Inspect and test electrical and electronic equipment.',
      responsibilities: [
        'Test equipment',
        'Inspect components',
        'Document findings',
        'Ensure quality',
        'Report issues'
      ],
      skills: ['Testing', 'Quality Control', 'Attention to Detail', 'Problem-solving', 'Technical Knowledge'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + testing training',
      salary: '$40,000 - $80,000',
      careerPath: 'Inspector → Lead Inspector → Quality Manager',
      environment: ['Manufacturing', 'Quality assurance', 'Testing focus', 'Detail-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'electrical-electronics-drafter',
      name: 'Electrical and Electronics Drafter',
      summary: 'Create drawings for electrical and electronics projects.',
      responsibilities: [
        'Create drawings',
        'Use CAD software',
        'Update plans',
        'Verify schematics',
        'Maintain files'
      ],
      skills: ['CAD Skills', 'Electrical Knowledge', 'Attention to Detail', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Technical Aptitude',
      education: 'High School or Associate\'s in drafting',
      salary: '$50,000 - $95,000',
      careerPath: 'Drafter → Senior Drafter → Lead Drafter',
      environment: ['Engineering firm', 'Electronics company', 'Computer-based', 'Detail-focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'electrical-electronics-installer-transportation',
      name: 'Electrical and Electronics Installer and Repairer, Transportation Equipment',
      summary: 'Install and repair electrical systems in vehicles.',
      responsibilities: [
        'Install systems',
        'Repair wiring',
        'Test circuits',
        'Replace components',
        'Troubleshoot issues'
      ],
      skills: ['Vehicle Electrical Systems', 'Troubleshooting', 'Precision', 'Problem-solving', 'Safety'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + automotive electrical training',
      salary: '$50,000 - $100,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Automotive', 'Aircraft', 'Vehicle maintenance', 'Technical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'electrical-electronics-repairer-commercial',
      name: 'Electrical and Electronics Repairer, Commercial and Industrial Equipment',
      summary: 'Repair commercial and industrial electrical equipment.',
      responsibilities: [
        'Repair equipment',
        'Troubleshoot issues',
        'Replace parts',
        'Test systems',
        'Maintain records'
      ],
      skills: ['Equipment Repair', 'Electrical Knowledge', 'Problem-solving', 'Troubleshooting', 'Safety'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + repair training',
      salary: '$55,000 - $110,000',
      careerPath: 'Technician → Senior Tech → Supervisor',
      environment: ['Industrial plant', 'Maintenance shop', 'Field service', 'Problem-solving'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'electrical-electronics-repairer-powerhouse',
      name: 'Electrical and Electronics Repairer, Powerhouse, Substation, and Relay',
      summary: 'Repair electrical equipment at power facilities.',
      responsibilities: [
        'Repair equipment',
        'Maintain systems',
        'Test circuits',
        'Replace components',
        'Follow safety'
      ],
      skills: ['Power Systems', 'Electrical Knowledge', 'Safety', 'Problem-solving', 'Precision'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'High School + power systems training',
      salary: '$70,000 - $125,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Power plant', 'Substation', 'Technical work', 'High-risk'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'electrical-engineering-tech',
      name: 'Electrical Engineering Technician',
      summary: 'Provide technical support for electrical engineering.',
      responsibilities: [
        'Test systems',
        'Build prototypes',
        'Troubleshoot issues',
        'Maintain equipment',
        'Document work'
      ],
      skills: ['Electrical Systems', 'Testing', 'Problem-solving', 'Technical Knowledge', 'Attention to Detail'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'Associate\'s in electrical technology',
      salary: '$55,000 - $105,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Engineering firm', 'Manufacturing', 'Technical', 'Problem-solving'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'electrical-engineering-technologist',
      name: 'Electrical Engineering Technologist',
      summary: 'Provide advanced technical support for electrical engineering.',
      responsibilities: [
        'Design systems',
        'Test equipment',
        'Solve problems',
        'Guide technicians',
        'Document work'
      ],
      skills: ['Electrical Systems', 'Design', 'Leadership', 'Problem-solving', 'Technical Skills'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in electrical technology',
      salary: '$70,000 - $130,000',
      careerPath: 'Technologist → Senior Technologist → Lead Engineer',
      environment: ['Engineering firm', 'Manufacturing', 'Technical', 'Design-focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'electromechanical-tech',
      name: 'Electro-Mechanical Technician',
      summary: 'Provide technical support for electromechanical systems.',
      responsibilities: [
        'Test systems',
        'Troubleshoot issues',
        'Maintain equipment',
        'Build prototypes',
        'Document work'
      ],
      skills: ['Electromechanical Systems', 'Troubleshooting', 'Problem-solving', 'Mechanical Skills', 'Electrical Knowledge'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'Associate\'s in electromechanical technology',
      salary: '$55,000 - $105,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Manufacturing', 'Equipment service', 'Technical', 'Problem-solving'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'electromechanical-technologist',
      name: 'Electromechanical Engineering Technologist',
      summary: 'Provide advanced technical support for electromechanical systems.',
      responsibilities: [
        'Design systems',
        'Test equipment',
        'Solve problems',
        'Lead teams',
        'Document designs'
      ],
      skills: ['Electromechanical Design', 'Leadership', 'Problem-solving', 'Technical Skills', 'Communication'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in electromechanical technology',
      salary: '$70,000 - $130,000',
      careerPath: 'Technologist → Senior Technologist → Lead Engineer',
      environment: ['Manufacturing', 'Engineering firm', 'Design', 'Technical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'electronic-drafter',
      name: 'Electronic Drafter',
      summary: 'Create drawings for electronic components and systems.',
      responsibilities: [
        'Create drawings',
        'Use CAD software',
        'Update schematics',
        'Verify designs',
        'Maintain files'
      ],
      skills: ['CAD Skills', 'Electronics Knowledge', 'Attention to Detail', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Technical Aptitude',
      education: 'High School or Associate\'s in drafting',
      salary: '$50,000 - $95,000',
      careerPath: 'Drafter → Senior Drafter → Lead Drafter',
      environment: ['Electronics company', 'Engineering firm', 'Computer-based', 'Detail-focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'electronics-engineer',
      name: 'Electronics Engineer, Except Computer',
      summary: 'Design electronic equipment and systems.',
      responsibilities: [
        'Design systems',
        'Develop prototypes',
        'Solve problems',
        'Conduct tests',
        'Lead projects'
      ],
      skills: ['Electronics Design', 'Problem-solving', 'Innovation', 'Leadership', 'Communication'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Electronics Engineering',
      salary: '$100,000 - $180,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer',
      environment: ['Electronics company', 'Tech firm', 'Design', 'Innovation-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'electronics-engineering-tech',
      name: 'Electronics Engineering Technician',
      summary: 'Provide technical support for electronics.',
      responsibilities: [
        'Test equipment',
        'Build prototypes',
        'Troubleshoot issues',
        'Maintain systems',
        'Document work'
      ],
      skills: ['Electronics', 'Testing', 'Problem-solving', 'Technical Knowledge', 'Attention to Detail'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'Associate\'s in electronics technology',
      salary: '$55,000 - $105,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Electronics company', 'Manufacturing', 'Technical', 'Problem-solving'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'electronics-engineering-technologist',
      name: 'Electronics Engineering Technologist',
      summary: 'Provide advanced technical support for electronics.',
      responsibilities: [
        'Design systems',
        'Test equipment',
        'Solve problems',
        'Guide technicians',
        'Document work'
      ],
      skills: ['Electronics Design', 'Leadership', 'Problem-solving', 'Technical Skills', 'Communication'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in electronics technology',
      salary: '$70,000 - $130,000',
      careerPath: 'Technologist → Senior Technologist → Lead Engineer',
      environment: ['Electronics company', 'Engineering firm', 'Design', 'Technical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'electronics-installer-entertainment',
      name: 'Electronic Equipment Installer and Repairer, Motor Vehicle',
      summary: 'Install and repair electronic equipment in vehicles.',
      responsibilities: [
        'Install equipment',
        'Repair systems',
        'Test circuits',
        'Replace components',
        'Troubleshoot'
      ],
      skills: ['Vehicle Electronics', 'Troubleshooting', 'Problem-solving', 'Precision', 'Safety'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + automotive electronic training',
      salary: '$50,000 - $100,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Automotive', 'Vehicle service', 'Technical', 'Problem-solving'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'electronic-home-entertainment-repairer',
      name: 'Electronic Home Entertainment Equipment Installer and Repairer',
      summary: 'Install and repair home entertainment systems.',
      responsibilities: [
        'Install equipment',
        'Repair systems',
        'Test functionality',
        'Troubleshoot issues',
        'Customer service'
      ],
      skills: ['Entertainment Systems', 'Installation', 'Problem-solving', 'Customer Service', 'Technical Skills'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School + electronics training',
      salary: '$40,000 - $80,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Retail/Service', 'Field service', 'Customer-facing', 'Installation focus'],
      jobGrowth: '-9% decline through 2032'
    },
    {
      id: 'electronic-masking-operator',
      name: 'Electronic Masking System Operator',
      summary: 'Operate electronic masking systems in manufacturing.',
      responsibilities: [
        'Operate equipment',
        'Program systems',
        'Monitor production',
        'Adjust settings',
        'Troubleshoot'
      ],
      skills: ['Equipment Operation', 'Programming', 'Problem-solving', 'Attention to Detail', 'Technical Knowledge'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'High School + technical training',
      salary: '$45,000 - $85,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment operation', 'Technical'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'elementary-teacher',
      name: 'Elementary School Teacher, Except Special Education',
      summary: 'Teach elementary school subjects to students.',
      responsibilities: [
        'Teach subjects',
        'Develop curriculum',
        'Grade work',
        'Class management',
        'Parent communication'
      ],
      skills: ['Teaching', 'Child Development', 'Communication', 'Organization', 'Patience'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Elementary Education + License',
      salary: '$60,000 - $110,000',
      careerPath: 'Teacher → Senior Teacher → Department Head → Principal',
      environment: ['Elementary school', 'Classroom', 'Teaching', 'Child-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'embalmers',
      name: 'Embalmer',
      summary: 'Prepare bodies for funeral services.',
      responsibilities: [
        'Prepare body',
        'Apply treatments',
        'Cosmetic preparation',
        'Ensure dignity',
        'Support family'
      ],
      skills: ['Embalming', 'Compassion', 'Attention to Detail', 'Communication', 'Professionalism'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School + embalming certification + apprenticeship',
      salary: '$40,000 - $80,000',
      careerPath: 'Embalmer → Senior Embalmer → Funeral Director',
      environment: ['Funeral home', 'Mortuary', 'Service-focused', 'Specialized'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'emergency-management-director',
      name: 'Emergency Management Director',
      summary: 'Coordinate emergency response and disaster planning.',
      responsibilities: [
        'Plan response',
        'Coordinate agencies',
        'Manage emergencies',
        'Train staff',
        'Document incidents'
      ],
      skills: ['Emergency Planning', 'Leadership', 'Communication', 'Crisis Management', 'Organization'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s + emergency management experience',
      salary: '$70,000 - $135,000',
      careerPath: 'Manager → Senior Manager → Regional Director',
      environment: ['Government', 'Emergency service', 'Crisis management', 'Strategic'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'emergency-management-specialist',
      name: 'Emergency Management Specialist',
      summary: 'Support emergency management and disaster response.',
      responsibilities: [
        'Assist planning',
        'Coordinate response',
        'Support operations',
        'Train staff',
        'Document work'
      ],
      skills: ['Emergency Management', 'Communication', 'Organization', 'Problem-solving', 'Teamwork'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'High School or Associate\'s + emergency training',
      salary: '$50,000 - $95,000',
      careerPath: 'Specialist → Coordinator → Manager',
      environment: ['Government agency', 'Emergency services', 'Coordination', 'Service-oriented'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'english-teacher',
      name: 'English Language and Literature Teacher, Postsecondary',
      summary: 'Teach English and literature at college level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Conduct research',
        'Advise students',
        'Grade work'
      ],
      skills: ['Teaching', 'Literature', 'Writing', 'Communication', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Creative Thinker',
      education: 'Master\'s or PhD in English',
      salary: '$65,000 - $130,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'environmental-science-teacher',
      name: 'Environmental Science Teacher, Postsecondary',
      summary: 'Teach environmental science at college level.',
      responsibilities: [
        'Teach courses',
        'Develop labs',
        'Conduct research',
        'Advise students',
        'Grade work'
      ],
      skills: ['Teaching', 'Environmental Science', 'Research', 'Communication', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'PhD in environmental science',
      salary: '$70,000 - $135,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Fieldwork'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'health-specialties-teacher-postsecondary',
      name: 'Health Specialties Teachers, Postsecondary',
      summary: 'Teach health specialties courses at the college level.',
      responsibilities: [
        'Teach health courses',
        'Develop curriculum',
        'Supervise clinicals',
        'Advise students',
        'Conduct research'
      ],
      skills: ['Teaching', 'Healthcare Knowledge', 'Communication', 'Mentoring', 'Curriculum Design'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s or PhD in a health field',
      salary: '$70,000 - $140,000',
      careerPath: 'Instructor → Assistant Professor → Professor → Department Chair',
      environment: ['Higher education', 'Classroom', 'Clinical settings', 'Academic'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'history-teacher-postsecondary',
      name: 'History Teachers, Postsecondary',
      summary: 'Teach history courses at the college or university level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Conduct research',
        'Advise students',
        'Grade assignments'
      ],
      skills: ['Teaching', 'History', 'Communication', 'Research', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s or PhD in history',
      salary: '$65,000 - $130,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'home-economics-teacher-postsecondary',
      name: 'Home Economics Teachers, Postsecondary',
      summary: 'Teach consumer and family sciences at the college level.',
      responsibilities: [
        'Teach courses',
        'Develop labs',
        'Advise students',
        'Conduct research',
        'Assess student work'
      ],
      skills: ['Teaching', 'Consumer Sciences', 'Communication', 'Mentoring', 'Curriculum Design'],
      talentFit: 'People-Oriented Helper, Creative Thinker',
      education: 'Master\'s or PhD in family/consumer sciences',
      salary: '$60,000 - $120,000',
      careerPath: 'Instructor → Assistant Professor → Professor → Program Director',
      environment: ['Higher education', 'Teaching', 'Labs', 'Academic'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'instructional-coordinator',
      name: 'Instructional Coordinators',
      summary: 'Develop curriculum and improve teaching programs and standards.',
      responsibilities: [
        'Develop curriculum standards',
        'Analyze student data',
        'Train educators',
        'Evaluate programs',
        'Ensure compliance'
      ],
      skills: ['Curriculum Design', 'Data Analysis', 'Communication', 'Leadership', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'Master\'s in education',
      salary: '$65,000 - $115,000',
      careerPath: 'Coordinator → District Specialist → Director of Curriculum',
      environment: ['Schools', 'District offices', 'Program development', 'Collaboration'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'instructional-designers-technologists',
      name: 'Instructional Designers and Technologists',
      summary: 'Design learning experiences and educational technology solutions.',
      responsibilities: [
        'Design courses and training',
        'Create learning materials',
        'Build multimedia content',
        'Evaluate learning outcomes',
        'Collaborate with subject experts'
      ],
      skills: ['Instructional Design', 'E-Learning Tools', 'Project Management', 'Communication', 'Creativity'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'Bachelor\'s or Master\'s in instructional design',
      salary: '$65,000 - $120,000',
      careerPath: 'Designer → Senior Designer → Learning Manager',
      environment: ['Education', 'Corporate training', 'Remote work', 'Project-based'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'kindergarten-teacher',
      name: 'Kindergarten Teachers, Except Special Education',
      summary: 'Teach foundational skills to kindergarten students.',
      responsibilities: [
        'Plan lessons',
        'Teach reading and math basics',
        'Manage classroom routines',
        'Assess student progress',
        'Communicate with parents'
      ],
      skills: ['Teaching', 'Patience', 'Classroom Management', 'Communication', 'Creativity'],
      talentFit: 'People-Oriented Helper, Creative Thinker',
      education: 'Bachelor\'s in education + teaching license',
      salary: '$40,000 - $70,000',
      careerPath: 'Teacher → Lead Teacher → Instructional Coach → Principal',
      environment: ['Elementary school', 'Classroom', 'Student-focused', 'Structured'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  emergency: [
    {
      id: 'emergency-medical-technician',
      name: 'Emergency Medical Technician and Paramedic',
      summary: 'Provide emergency medical care and transportation.',
      responsibilities: [
        'Respond to emergencies',
        'Provide care',
        'Transport patients',
        'Operate equipment',
        'Document care'
      ],
      skills: ['Emergency Medicine', 'Problem-solving', 'Communication', 'Physical Ability', 'Compassion'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School + EMT certification + paramedic training',
      salary: '$38,000 - $75,000',
      careerPath: 'EMT-Basic → Paramedic → Lead Paramedic → Supervisor',
      environment: ['Ambulance', 'Hospital', 'Field response', 'High-pressure'],
      jobGrowth: '6% growth through 2032'
    },
  ],
  energy: [
    {
      id: 'energy-auditor',
      name: 'Energy Auditor',
      summary: 'Assess energy usage and recommend efficiency improvements.',
      responsibilities: [
        'Evaluate energy',
        'Audit usage',
        'Identify savings',
        'Recommend upgrades',
        'Report findings'
      ],
      skills: ['Energy Audit', 'Problem-solving', 'Analysis', 'Communication', 'Technical Knowledge'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in engineering or energy management',
      salary: '$60,000 - $115,000',
      careerPath: 'Auditor → Senior Auditor → Energy Manager',
      environment: ['Energy company', 'Consulting firm', 'Field/Office', 'Technical'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'energy-broker',
      name: 'Energy Broker',
      summary: 'Broker energy commodities and contracts.',
      responsibilities: [
        'Trade energy',
        'Broker contracts',
        'Analyze prices',
        'Manage deals',
        'Build relationships'
      ],
      skills: ['Energy Markets', 'Trading', 'Communication', 'Analysis', 'Sales'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'Bachelor\'s in finance or energy',
      salary: '$70,000 - $150,000',
      careerPath: 'Broker → Senior Broker → Energy Manager',
      environment: ['Energy trading', 'Brokerage', 'Financial', 'Fast-paced'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'energy-engineer',
      name: 'Energy Engineer',
      summary: 'Design and implement energy systems.',
      responsibilities: [
        'Design systems',
        'Optimize efficiency',
        'Analyze data',
        'Lead projects',
        'Ensure compliance'
      ],
      skills: ['Energy Systems', 'Engineering', 'Problem-solving', 'Leadership', 'Innovation'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in mechanical or electrical engineering',
      salary: '$80,000 - $150,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer',
      environment: ['Energy company', 'Engineering firm', 'Design', 'Innovation-focused'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'helpers-extraction-workers',
      name: 'Helpers--Extraction Workers',
      summary: 'Assist extraction workers with equipment and site tasks.',
      responsibilities: [
        'Move materials and equipment',
        'Prepare work sites',
        'Assist operators',
        'Maintain tools',
        'Follow safety procedures'
      ],
      skills: ['Physical Stamina', 'Safety', 'Teamwork', 'Basic Tools', 'Reliability'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $50,000',
      careerPath: 'Helper → Operator → Lead Operator',
      environment: ['Extraction sites', 'Outdoor work', 'Physical', 'Safety focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'hydroelectric-plant-technicians',
      name: 'Hydroelectric Plant Technicians',
      summary: 'Operate and maintain hydroelectric power plant equipment.',
      responsibilities: [
        'Monitor turbines and generators',
        'Perform routine maintenance',
        'Inspect electrical systems',
        'Record operating data',
        'Respond to alarms'
      ],
      skills: ['Electrical/Mechanical Systems', 'Monitoring', 'Safety', 'Troubleshooting', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + technical training',
      salary: '$50,000 - $90,000',
      careerPath: 'Technician → Senior Technician → Operations Supervisor',
      environment: ['Power plant', 'Technical', 'Safety focused', 'Shift work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'hydroelectric-production-managers',
      name: 'Hydroelectric Production Managers',
      summary: 'Manage hydroelectric plant operations and production output.',
      responsibilities: [
        'Oversee plant operations',
        'Manage staff and schedules',
        'Ensure safety compliance',
        'Optimize power production',
        'Coordinate maintenance'
      ],
      skills: ['Leadership', 'Operations Management', 'Safety', 'Problem-solving', 'Communication'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in engineering or operations',
      salary: '$90,000 - $150,000',
      careerPath: 'Supervisor → Plant Manager → Regional Manager',
      environment: ['Power plant', 'Leadership', 'Operational focus', 'Safety focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'irradiated-fuel-handlers',
      name: 'Irradiated-Fuel Handlers',
      summary: 'Handle and move nuclear fuel using specialized equipment.',
      responsibilities: [
        'Operate remote handling systems',
        'Move fuel assemblies safely',
        'Monitor radiation levels',
        'Follow strict safety protocols',
        'Document handling procedures'
      ],
      skills: ['Nuclear Safety', 'Equipment Operation', 'Attention to Detail', 'Safety Protocols', 'Teamwork'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + nuclear operations training',
      salary: '$50,000 - $90,000',
      careerPath: 'Handler → Senior Handler → Operations Supervisor',
      environment: ['Nuclear facility', 'Safety critical', 'Technical', 'Regulated'],
      jobGrowth: '2% growth through 2032'
    },
  ],
  engineering: [
    {
      id: 'cardiovascular-technician',
      name: 'Civil Drafter',
      summary: 'Create technical drawings for civil engineering projects.',
      responsibilities: [
        'Create drawings',
        'Use CAD software',
        'Update plans',
        'Verify details',
        'Maintain files'
      ],
      skills: ['CAD Software', 'Technical Drawing', 'Attention to Detail', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Technical Aptitude',
      education: 'High School or Associate\'s in drafting',
      degrees: ['Associate Degree in Civil Drafting', 'Associate Degree in CAD/Design Technology', 'Certificate in CAD (alternative)', 'High School with vocational training'],
      degreeCost: '$15,000 - $30,000 (Associate) or $2,000 - $5,000 (certificate)',
      salary: '$45,000 - $85,000',
      careerPath: 'Drafter → Senior Drafter → Lead Drafter → Project Manager',
      environment: ['Engineering firm', 'Construction', 'Computer-based', 'Detail-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'civil-engineering-technician',
      name: 'Civil Engineering Technician',
      summary: 'Assist civil engineers with technical and field work.',
      responsibilities: [
        'Conduct surveys',
        'Test materials',
        'Inspect sites',
        'Create reports',
        'Assist design'
      ],
      skills: ['Construction', 'Surveying', 'Testing', 'Problem-solving', 'Communication'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'Associate\'s in civil engineering',
      degrees: ['Associate Degree in Civil Engineering Technology', 'Associate Degree in Construction Technology', 'Associate Degree in Surveying Technology'],
      degreeCost: '$15,000 - $35,000 (Associate degree)',
      salary: '$50,000 - $95,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Operations Manager',
      environment: ['Construction sites', 'Engineering firm', 'Field/office', 'Technical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'civil-engineer',
      name: 'Civil Engineer',
      summary: 'Design and oversee infrastructure projects.',
      responsibilities: [
        'Design structures',
        'Plan projects',
        'Manage budgets',
        'Oversee construction',
        'Ensure compliance'
      ],
      skills: ['Civil Engineering', 'Project Management', 'CAD', 'Leadership', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in Civil Engineering + License',
      degrees: ['Bachelor of Science in Civil Engineering', 'Bachelor of Science in Construction Engineering', 'PE License (Professional Engineer Certification)'],
      degreeCost: '$50,000 - $120,000 (Bachelor) + $1,000 - $2,000 (PE exam)',
      salary: '$80,000 - $150,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer → Principal Engineer',
      environment: ['Engineering firm', 'Construction', 'Project-based', 'Infrastructure focus'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'engine-machine-assembler',
      name: 'Engine and Other Machine Assembler',
      summary: 'Assemble engines and machinery.',
      responsibilities: [
        'Assemble components',
        'Install parts',
        'Test functionality',
        'Quality control',
        'Perform maintenance'
      ],
      skills: ['Assembly', 'Mechanical Skills', 'Precision', 'Problem-solving', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + assembler training',
      degrees: ['High School Diploma/GED', 'Technical certificate in mechanical assembly', 'Apprenticeship in engine assembly'],
      degreeCost: '$3,000 - $10,000 (certificate/apprenticeship)',
      salary: '$40,000 - $80,000',
      careerPath: 'Assembler → Lead Assembler → Supervisor',
      environment: ['Manufacturing', 'Engine plant', 'Assembly focus', 'Precision work'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'engineering-manager',
      name: 'Engineering Manager',
      summary: 'Manage engineering projects and teams.',
      responsibilities: [
        'Lead teams',
        'Manage projects',
        'Plan budgets',
        'Ensure quality',
        'Report progress'
      ],
      skills: ['Engineering', 'Project Management', 'Leadership', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in engineering + MBA preferred',
      degrees: ['Bachelor of Science in Engineering', 'Master of Business Administration (MBA)', 'Project Management Professional (PMP) Certification'],
      degreeCost: '$50,000 - $120,000 (Bachelor) or $40,000 - $150,000 (MBA) + $2,000 - $3,000 (PMP)',
      salary: '$110,000 - $200,000',
      careerPath: 'Engineer → Engineering Manager → Director',
      environment: ['Engineering firm', 'Manufacturing', 'Tech company', 'Leadership'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'engineering-teacher',
      name: 'Engineering Teacher, Postsecondary',
      summary: 'Teach engineering at college level.',
      responsibilities: [
        'Teach courses',
        'Develop labs',
        'Conduct research',
        'Advise students',
        'Grade work'
      ],
      skills: ['Teaching', 'Engineering', 'Research', 'Communication', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'PhD in engineering or related field',
      degrees: ['PhD in Civil Engineering', 'PhD in Mechanical Engineering', 'PhD in Electrical Engineering', 'PhD in Chemical Engineering'],
      degreeCost: '$50,000 - $150,000 (PhD, often fully funded)',
      salary: '$80,000 - $150,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'engineering-technician-all-other',
      name: 'Engineering Technician, Except Drafter, All Other',
      summary: 'Provide technical support to engineers.',
      responsibilities: [
        'Test systems',
        'Build prototypes',
        'Troubleshoot issues',
        'Maintain equipment',
        'Document work'
      ],
      skills: ['Engineering', 'Technical Knowledge', 'Problem-solving', 'Testing', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'Associate\'s in engineering technology',
      degrees: ['Associate Degree in Engineering Technology', 'Associate Degree in Electronics Technology', 'Technical Certificate in Electronics'],
      degreeCost: '$15,000 - $35,000 (Associate) or $3,000 - $8,000 (certificate)',
      salary: '$50,000 - $95,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Engineering firm', 'Manufacturing', 'Technical', 'Problem-solving'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'engineer-all-other',
      name: 'Engineer, All Other',
      summary: 'Design and develop engineering solutions.',
      responsibilities: [
        'Design solutions',
        'Solve problems',
        'Lead projects',
        'Conduct research',
        'Report findings'
      ],
      skills: ['Engineering', 'Problem-solving', 'Design', 'Leadership', 'Innovation'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s or Master\'s in engineering',
      degrees: ['Bachelor of Science in Engineering', 'Master of Science in Engineering', 'Various specialty engineering degrees (Mechanical, Electrical, etc.)'],
      degreeCost: '$50,000 - $120,000 (Bachelor) or $30,000 - $100,000 (Master)',
      salary: '$90,000 - $170,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer',
      environment: ['Engineering firm', 'Tech company', 'Design', 'Innovation-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'health-safety-engineers-except-mining',
      name: 'Health and Safety Engineers, Except Mining Safety Engineers and Inspectors',
      summary: 'Design systems and procedures to keep workplaces safe.',
      responsibilities: [
        'Analyze workplace hazards',
        'Develop safety procedures',
        'Inspect facilities',
        'Train staff on safety',
        'Ensure regulatory compliance'
      ],
      skills: ['Safety Engineering', 'Risk Assessment', 'Regulations', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in engineering',
      degrees: ['Bachelor of Science in Safety Engineering', 'Bachelor of Science in Occupational Safety', 'Bachelor of Science in Industrial Engineering with safety focus', 'Certified Safety Professional (CSP)'],
      degreeCost: '$50,000 - $120,000 (Bachelor) + $2,000 - $4,000 (CSP certification)',
      salary: '$80,000 - $130,000',
      careerPath: 'Engineer → Senior Engineer → Safety Manager',
      environment: ['Industrial sites', 'Safety focus', 'Compliance', 'Field/Office mix'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'human-factors-engineers-ergonomists',
      name: 'Human Factors Engineers and Ergonomists',
      summary: 'Design systems and products that fit human capabilities and limitations.',
      responsibilities: [
        'Conduct usability studies',
        'Analyze workflows',
        'Design ergonomic solutions',
        'Test prototypes',
        'Report findings'
      ],
      skills: ['Ergonomics', 'Human Factors', 'Data Analysis', 'Research', 'Communication'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s or Master\'s in human factors or engineering',
      degrees: ['Bachelor of Science in Human Factors Engineering', 'Master of Science in Human Factors', 'Master of Science in Ergonomics', 'Bachelor in Psychology with HCI specialization'],
      degreeCost: '$50,000 - $120,000 (Bachelor) or $30,000 - $100,000 (Master)',
      salary: '$75,000 - $125,000',
      careerPath: 'Engineer → Senior Engineer → UX/Ergonomics Lead',
      environment: ['Product design', 'Research labs', 'Office-based', 'User-focused'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'industrial-engineering-technicians',
      name: 'Industrial Engineering Technicians',
      summary: 'Support industrial engineers with data collection and process improvements.',
      responsibilities: [
        'Collect process data',
        'Perform time studies',
        'Assist layout planning',
        'Implement process changes',
        'Document results'
      ],
      skills: ['Process Analysis', 'Data Collection', 'Problem-solving', 'Attention to Detail', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'Associate\'s in industrial technology',
      degrees: ['Associate Degree in Industrial Engineering Technology', 'Associate Degree in Manufacturing Technology', 'Technical Certificate in Industrial Operations'],
      degreeCost: '$15,000 - $35,000 (Associate) or $3,000 - $8,000 (certificate)',
      salary: '$50,000 - $85,000',
      careerPath: 'Technician → Senior Technician → Industrial Engineer',
      environment: ['Manufacturing', 'Process improvement', 'Hands-on', 'Data driven'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'industrial-engineering-technologists',
      name: 'Industrial Engineering Technologists',
      summary: 'Apply engineering methods to improve systems and workflows.',
      responsibilities: [
        'Analyze workflows',
        'Implement improvements',
        'Support automation',
        'Monitor performance metrics',
        'Collaborate with teams'
      ],
      skills: ['Process Improvement', 'Systems Thinking', 'Data Analysis', 'Technical Skills', 'Communication'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in industrial engineering technology',
      degrees: ['Bachelor of Science in Industrial Engineering Technology', 'Bachelor of Science in Manufacturing Engineering', 'Bachelor of Applied Science in Operations Management'],
      degreeCost: '$50,000 - $120,000 (Bachelor degree)',
      salary: '$60,000 - $100,000',
      careerPath: 'Technologist → Senior Technologist → Process Manager',
      environment: ['Manufacturing', 'Operations', 'Process-focused', 'Team-based'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'industrial-engineers',
      name: 'Industrial Engineers',
      summary: 'Optimize systems to improve efficiency, quality, and productivity.',
      responsibilities: [
        'Design efficient workflows',
        'Analyze production data',
        'Reduce waste and costs',
        'Improve quality systems',
        'Lead process projects'
      ],
      skills: ['Operations Analysis', 'Statistics', 'Problem-solving', 'Systems Thinking', 'Communication'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in industrial engineering',
      degrees: ['Bachelor of Science in Industrial Engineering', 'Bachelor of Science in Production Engineering', 'PE License (Professional Engineer) - optional'],
      degreeCost: '$50,000 - $120,000 (Bachelor) + $1,000 - $2,000 (PE exam if desired)',
      salary: '$75,000 - $120,000',
      careerPath: 'Engineer → Senior Engineer → Operations Manager',
      environment: ['Manufacturing', 'Operations', 'Data-driven', 'Process improvement'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'industrial-safety-health-engineers',
      name: 'Industrial Safety and Health Engineers',
      summary: 'Design safety systems for industrial environments.',
      responsibilities: [
        'Assess workplace hazards',
        'Develop safety programs',
        'Investigate incidents',
        'Train staff',
        'Ensure compliance'
      ],
      skills: ['Safety Engineering', 'Risk Assessment', 'Compliance', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in engineering',
      degrees: ['Bachelor of Science in Safety Engineering', 'Bachelor of Science in Industrial Engineering', 'Certified Safety Professional (CSP)', 'Associate Safety Professional (ASP)'],
      degreeCost: '$50,000 - $120,000 (Bachelor) + $2,000 - $4,000 (CSP/ASP certifications)',
      salary: '$80,000 - $130,000',
      careerPath: 'Engineer → Senior Engineer → Safety Director',
      environment: ['Industrial sites', 'Safety focus', 'Field/Office mix', 'Compliance'],
      jobGrowth: '5% growth through 2032'
    },
  ],
  environment: [
    {
      id: 'climate-change-analyst',
      name: 'Climate Change Analyst',
      summary: 'Analyze climate data and develop mitigation strategies.',
      responsibilities: [
        'Analyze climate data',
        'Develop models',
        'Prepare reports',
        'Conduct research',
        'Advise on policy'
      ],
      skills: ['Data Analysis', 'Climate Science', 'Research', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s or Master\'s in environmental science',
      salary: '$65,000 - $125,000',
      careerPath: 'Analyst → Senior Analyst → Lead Scientist → Manager',
      environment: ['Environmental agency', 'Research', 'Data-driven', 'Policy focus'],
      jobGrowth: '12% growth through 2032'
    },
    {
      id: 'conservation-scientist',
      name: 'Conservation Scientist',
      summary: 'Manage and protect natural resources and forests.',
      responsibilities: [
        'Assess resources',
        'Develop plans',
        'Oversee management',
        'Monitor conditions',
        'Educate public'
      ],
      skills: ['Environmental Science', 'Planning', 'Leadership', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in forestry or environmental science',
      salary: '$60,000 - $115,000',
      careerPath: 'Scientist → Senior Scientist → Regional Manager',
      environment: ['National forests', 'Environmental agency', 'Field/Office', 'Conservation focus'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'environmental-compliance-inspector',
      name: 'Environmental Compliance Inspector',
      summary: 'Inspect facilities for environmental compliance.',
      responsibilities: [
        'Inspect facilities',
        'Verify compliance',
        'Document findings',
        'Issue citations',
        'Follow up'
      ],
      skills: ['Environmental Regulations', 'Inspection', 'Documentation', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School + environmental training',
      salary: '$50,000 - $95,000',
      careerPath: 'Inspector → Senior Inspector → Manager',
      environment: ['Government agency', 'Field inspection', 'Environmental', 'Regulatory'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'environmental-economist',
      name: 'Environmental Economist',
      summary: 'Analyze economic impact of environmental issues.',
      responsibilities: [
        'Analyze data',
        'Conduct research',
        'Evaluate policies',
        'Prepare reports',
        'Make recommendations'
      ],
      skills: ['Environmental Economics', 'Analysis', 'Research', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver',
      education: 'Master\'s or PhD in environmental economics',
      salary: '$75,000 - $145,000',
      careerPath: 'Economist → Senior Economist → Lead Researcher',
      environment: ['Research', 'Government', 'Environmental agency', 'Academic'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'environmental-engineering-technician',
      name: 'Environmental Engineering Technician',
      summary: 'Provide technical support for environmental engineering.',
      responsibilities: [
        'Test systems',
        'Collect samples',
        'Analyze data',
        'Maintain equipment',
        'Document work'
      ],
      skills: ['Environmental Engineering', 'Testing', 'Data Analysis', 'Problem-solving', 'Safety'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'Associate\'s in environmental technology',
      salary: '$50,000 - $95,000',
      careerPath: 'Technician → Senior Tech → Environmental Manager',
      environment: ['Environmental agency', 'Consulting firm', 'Technical', 'Field/Lab'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'environmental-engineer',
      name: 'Environmental Engineer',
      summary: 'Design environmental systems and solutions.',
      responsibilities: [
        'Design systems',
        'Solve problems',
        'Plan projects',
        'Conduct research',
        'Report findings'
      ],
      skills: ['Environmental Engineering', 'Problem-solving', 'Design', 'Leadership', 'Innovation'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in environmental engineering',
      salary: '$90,000 - $170,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer',
      environment: ['Environmental agency', 'Consulting firm', 'Tech company', 'Innovation-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'environmental-restoration-planner',
      name: 'Environmental Restoration Planner',
      summary: 'Plan environmental restoration projects.',
      responsibilities: [
        'Assess conditions',
        'Plan restoration',
        'Coordinate projects',
        'Monitor progress',
        'Report results'
      ],
      skills: ['Environmental Planning', 'Project Management', 'Analysis', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in environmental science or planning',
      salary: '$60,000 - $120,000',
      careerPath: 'Planner → Senior Planner → Project Director',
      environment: ['Environmental agency', 'Consulting', 'Conservation', 'Planning-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'environmental-scientist',
      name: 'Environmental Scientist and Specialist, Including Health',
      summary: 'Conduct research on environmental and health issues.',
      responsibilities: [
        'Conduct research',
        'Collect samples',
        'Analyze data',
        'Prepare reports',
        'Make recommendations'
      ],
      skills: ['Environmental Science', 'Research', 'Analysis', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s or Master\'s in environmental science',
      salary: '$70,000 - $135,000',
      careerPath: 'Scientist → Senior Scientist → Research Lead',
      environment: ['Environmental agency', 'Research', 'Consulting', 'Academic'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'hazardous-materials-removal-workers',
      name: 'Hazardous Materials Removal Workers',
      summary: 'Remove hazardous substances while following strict safety protocols.',
      responsibilities: [
        'Assess hazardous sites',
        'Set up containment zones',
        'Remove hazardous materials',
        'Decontaminate equipment',
        'Follow disposal regulations'
      ],
      skills: ['Hazmat Handling', 'Safety', 'Physical Stamina', 'Attention to Detail', 'Teamwork'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + hazmat training',
      salary: '$40,000 - $70,000',
      careerPath: 'Worker → Lead Worker → Site Supervisor',
      environment: ['Cleanup sites', 'Protective gear', 'Safety focused', 'Field work'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'hydrologists',
      name: 'Hydrologists',
      summary: 'Study water resources and how water moves through the environment.',
      responsibilities: [
        'Collect water data',
        'Analyze samples',
        'Model water systems',
        'Prepare reports',
        'Advise on water management'
      ],
      skills: ['Hydrology', 'Data Analysis', 'Field Sampling', 'Modeling', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s or Master\'s in hydrology or earth science',
      salary: '$70,000 - $120,000',
      careerPath: 'Hydrologist → Senior Hydrologist → Water Resources Manager',
      environment: ['Field work', 'Labs', 'Government agencies', 'Research'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'industrial-ecologists',
      name: 'Industrial Ecologists',
      summary: 'Analyze industrial systems to improve sustainability and reduce waste.',
      responsibilities: [
        'Assess industrial processes',
        'Model material and energy flows',
        'Recommend sustainability improvements',
        'Track environmental metrics',
        'Report findings'
      ],
      skills: ['Systems Thinking', 'Sustainability', 'Data Analysis', 'Process Improvement', 'Communication'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s or Master\'s in environmental/industrial ecology',
      salary: '$70,000 - $125,000',
      careerPath: 'Ecologist → Sustainability Manager → Director of Sustainability',
      environment: ['Manufacturing', 'Consulting', 'Office/Field mix', 'Sustainability focus'],
      jobGrowth: '7% growth through 2032'
    },
  ],
  finance: [
    {
      id: 'financial-analyst',
      name: 'Financial Analyst',
      summary: 'Analyze financial data and make investment recommendations.',
      responsibilities: [
        'Analyze data',
        'Prepare reports',
        'Make recommendations',
        'Forecast trends',
        'Present findings'
      ],
      skills: ['Financial Analysis', 'Data Analysis', 'Excel', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in finance, accounting, or economics',
      salary: '$70,000 - $140,000',
      careerPath: 'Analyst → Senior Analyst → Manager',
      environment: ['Financial firm', 'Corporate', 'Investment', 'Data-driven'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'financial-examiner',
      name: 'Financial Examiner',
      summary: 'Examine financial institutions for compliance.',
      responsibilities: [
        'Audit institutions',
        'Verify compliance',
        'Analyze records',
        'Report findings',
        'Recommend actions'
      ],
      skills: ['Financial Analysis', 'Audit', 'Regulations', 'Problem-solving', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in finance or accounting',
      salary: '$80,000 - $150,000',
      careerPath: 'Examiner → Senior Examiner → Regional Director',
      environment: ['Government agency', 'Bank regulatory', 'Audit focus', 'Investigative'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'financial-manager',
      name: 'Financial Manager',
      summary: 'Manage financial operations and planning.',
      responsibilities: [
        'Plan budgets',
        'Manage finances',
        'Oversee staff',
        'Make decisions',
        'Report results'
      ],
      skills: ['Financial Management', 'Leadership', 'Analysis', 'Communication', 'Decision-making'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in finance or MBA',
      salary: '$100,000 - $190,000',
      careerPath: 'Manager → Senior Manager → CFO',
      environment: ['Corporate', 'Financial institution', 'Strategic', 'Leadership'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'financial-manager-branch',
      name: 'Financial Manager, Branch or Department',
      summary: 'Manage finances for branch or department.',
      responsibilities: [
        'Manage branch finances',
        'Oversee staff',
        'Report performance',
        'Ensure compliance',
        'Plan budgets'
      ],
      skills: ['Branch Management', 'Financial Know ledge', 'Leadership', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in finance + experience',
      salary: '$80,000 - $150,000',
      careerPath: 'Branch Manager → Regional Manager → Senior Manager',
      environment: ['Bank/Financial', 'Branch office', 'Management', 'Leadership'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'financial-quantitative-analyst',
      name: 'Financial Quantitative Analyst',
      summary: 'Use quantitative analysis for financial decisions.',
      responsibilities: [
        'Analyze data',
        'Build models',
        'Test theories',
        'Make recommendations',
        'Present findings'
      ],
      skills: ['Quantitative Analysis', 'Programming', 'Math', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s or Master\'s in mathematics or physics',
      salary: '$100,000 - $200,000+',
      careerPath: 'Analyst → Senior Analyst → Lead Quant',
      environment: ['Investment firm', 'Financial trading', 'Data-driven', 'Highly technical'],
      jobGrowth: '12% growth through 2032'
    },
    {
      id: 'financial-specialist-all-other',
      name: 'Financial Specialist, All Other',
      summary: 'Provide various financial services and support.',
      responsibilities: [
        'Provide support',
        'Analyze data',
        'Prepare reports',
        'Assist management',
        'Document work'
      ],
      skills: ['Financial Knowledge', 'Attention to Detail', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in finance or business',
      salary: '$60,000 - $120,000',
      careerPath: 'Specialist → Senior Specialist → Manager',
      environment: ['Financial firm', 'Corporate', 'Support-focused', 'Administrative'],
      jobGrowth: '4% growth through 2032'
    },
  ],
  fire: [
    {
      id: 'firefighter',
      name: 'Fire Fighter',
      summary: 'Respond to fires and emergencies.',
      responsibilities: [
        'Respond to calls',
        'Fight fires',
        'Rescue victims',
        'Provide emergency aid',
        'Maintain equipment'
      ],
      skills: ['Fire Fighting', 'Physical Ability', 'Teamwork', 'Quick Thinking', 'Safety'],
      talentFit: 'Practical Builder, Adventurous',
      education: 'High School + firefighter training',
      salary: '$50,000 - $95,000',
      careerPath: 'Firefighter → Senior Firefighter → Fire Captain',
      environment: ['Fire station', 'Emergency response', 'High-risk', 'Team-based'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'fire-inspector',
      name: 'Fire Inspector',
      summary: 'Inspect buildings for fire safety.',
      responsibilities: [
        'Inspect buildings',
        'Check compliance',
        'Identify hazards',
        'Enforce codes',
        'Report findings'
      ],
      skills: ['Fire Safety', 'Inspection', 'Attention to Detail', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School + fire safety training',
      salary: '$50,000 - $95,000',
      careerPath: 'Inspector → Senior Inspector → Fire Marshal',
      environment: ['Fire department', 'Building inspection', 'Safety focus', 'Regulatory'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'fire-investigator',
      name: 'Fire Investigator',
      summary: 'Investigate fire causes and origins.',
      responsibilities: [
        'Investigate fires',
        'Analyze evidence',
        'Determine origin',
        'Report findings',
        'Testify in court'
      ],
      skills: ['Investigation', 'Analysis', 'Critical Thinking', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver',
      education: 'High School + fire investigation training',
      salary: '$60,000 - $110,000',
      careerPath: 'Investigator → Senior Investigator → Detective',
      environment: ['Fire department', 'Investigation', 'Field work', 'Forensics'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'fire-prevention-engineer',
      name: 'Fire-Prevention and Protection Engineer',
      summary: 'Design fire prevention and protection systems.',
      responsibilities: [
        'Design systems',
        'Assess risks',
        'Develop procedures',
        'Test systems',
        'Lead projects'
      ],
      skills: ['Fire Protection', 'Engineering', 'Problem-solving', 'Design', 'Leadership'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in fire protection engineering',
      salary: '$80,000 - $150,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer',
      environment: ['Engineering firm', 'Fire protection', 'Design', 'Technical'],
      jobGrowth: '4% growth through 2032'
    },
  ],
  food: [
    {
      id: 'baker',
      name: 'Baker',
      summary: 'Prepare baked goods for sale.',
      responsibilities: [
        'Mix doughs',
        'Shape items',
        'Bake products',
        'Create displays',
        'Manage inventory'
      ],
      skills: ['Baking', 'Creativity', 'Precision', 'Time Management', 'Cleanliness'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School or baking training',
      salary: '$35,000 - $65,000',
      careerPath: 'Baker → Lead Baker → Head Baker → Bakery Manager',
      environment: ['Bakery', 'Hands-on', 'Early hours', 'Creative work'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'baker-bread-pastry',
      name: 'Baker, Bread and Pastry',
      summary: 'Specialize in breads and pastries.',
      responsibilities: [
        'Make artisan breads',
        'Create pastries',
        'Develop recipes',
        'Manage fermentation',
        'Quality control'
      ],
      skills: ['Bread Baking', 'Pastry Skills', 'Creativity', 'Precision', 'Recipe Development'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + culinary/baking training',
      salary: '$40,000 - $75,000',
      careerPath: 'Baker → Specialty Baker → Head Baker → Executive Chef',
      environment: ['Specialty bakery', 'Artisan focus', 'Creative', 'Quality-driven'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'baker-manufacturing',
      name: 'Baker, Manufacturing',
      summary: 'Prepare baked goods in large-scale production.',
      responsibilities: [
        'Operate equipment',
        'Mix batches',
        'Monitor temperature',
        'Package products',
        'Follow recipes'
      ],
      skills: ['Production Baking', 'Equipment Operation', 'Attention to Detail', 'Safety', 'Efficiency'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + baking training',
      salary: '$35,000 - $62,000',
      careerPath: 'Baker → Lead Baker → Supervisor → Production Manager',
      environment: ['Production facility', 'Large-scale', 'Fast-paced', 'Quality focus'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'barber',
      name: 'Barber',
      summary: 'Cut and style hair for male clients.',
      responsibilities: [
        'Cut hair',
        'Style hair',
        'Provide grooming',
        'Sanitize tools',
        'Customer service'
      ],
      skills: ['Hair Cutting', 'Styling', 'Communication', 'Customer Service', 'Cleanliness'],
      talentFit: 'People-Oriented Helper, Creative Thinker',
      education: 'High School + barbering license',
      salary: '$35,000 - $70,000',
      careerPath: 'Barber → Master Barber → Shop Owner',
      environment: ['Barbershop', 'Customer-facing', 'Creative', 'Service-oriented'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'butcher-meat-cutter',
      name: 'Butcher and Meat Cutter',
      summary: 'Cut and prepare meat for sale.',
      responsibilities: [
        'Cut meat',
        'Remove bones',
        'Trim fat',
        'Prepare displays',
        'Maintain cleanliness'
      ],
      skills: ['Meat Cutting', 'Knife Skills', 'Attention to Detail', 'Cleanliness', 'Customer Service'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + meat cutting training',
      salary: '$35,000 - $65,000',
      careerPath: 'Butcher → Lead Butcher → Meat Manager',
      environment: ['Butcher shop', 'Grocery store', 'Hands-on', 'Food safety focus'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'chef-head-cook',
      name: 'Chef and Head Cook',
      summary: 'Prepare meals and supervise kitchen operations.',
      responsibilities: [
        'Plan menus',
        'Prepare food',
        'Supervise cooks',
        'Manage inventory',
        'Ensure quality'
      ],
      skills: ['Cooking', 'Leadership', 'Menu Planning', 'Food Safety', 'Creativity'],
      talentFit: 'Leadership & Visionary, Creative Thinker',
      education: 'High School + culinary training',
      salary: '$50,000 - $100,000',
      careerPath: 'Cook → Head Cook → Chef → Executive Chef',
      environment: ['Restaurant', 'Kitchen', 'Leadership', 'Fast-paced'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'combined-food-prep-serving',
      name: 'Combined Food Preparation and Serving Workers, Including Fast Food',
      summary: 'Prepare food and serve customers in food establishments.',
      responsibilities: [
        'Prepare food',
        'Serve customers',
        'Take orders',
        'Maintain cleanliness',
        'Operate equipment'
      ],
      skills: ['Food Preparation', 'Customer Service', 'Speed', 'Organization', 'Cleanliness'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School + food service training',
      salary: '$28,000 - $50,000',
      careerPath: 'Food Service Worker → Lead → Shift Supervisor → Manager',
      environment: ['Fast food', 'Restaurant', 'Busy', 'Team-based'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'cook-all-other',
      name: 'Cook, All Other',
      summary: 'Prepare meals in various food service settings.',
      responsibilities: [
        'Prepare food',
        'Follow recipes',
        'Manage inventory',
        'Maintain standards',
        'Work with team'
      ],
      skills: ['Cooking', 'Food Preparation', 'Following Directions', 'Organization', 'Cleanliness'],
      talentFit: 'Practical Builder',
      education: 'High School + culinary training',
      salary: '$35,000 - $70,000',
      careerPath: 'Cook → Senior Cook → Lead Cook → Chef',
      environment: ['Various food establishments', 'Kitchen', 'Hands-on', 'Production focus'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'cook-fast-food',
      name: 'Cook, Fast Food',
      summary: 'Prepare food quickly in fast food restaurants.',
      responsibilities: [
        'Prepare fast food',
        'Operate equipment',
        'Follow specifications',
        'Maintain cleanliness',
        'Work quickly'
      ],
      skills: ['Food Preparation', 'Speed', 'Equipment Operation', 'Organization', 'Cleanliness'],
      talentFit: 'Practical Builder',
      education: 'High School, on-the-job training',
      salary: '$28,000 - $50,000',
      careerPath: 'Cook → Lead Cook → Shift Supervisor',
      environment: ['Fast food restaurant', 'Kitchen', 'High-speed', 'Production-focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'cook-institution-cafeteria',
      name: 'Cook, Institution and Cafeteria',
      summary: 'Prepare food in institutional and cafeteria settings.',
      responsibilities: [
        'Prepare meals',
        'Follow menus',
        'Manage portions',
        'Serve food',
        'Maintain standards'
      ],
      skills: ['Food Preparation', 'Portion Control', 'Organization', 'Cleanliness', 'Volume Cooking'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + culinary training',
      salary: '$32,000 - $60,000',
      careerPath: 'Cook → Lead Cook → Kitchen Manager',
      environment: ['School/Hospital/Cafeteria', 'Large-scale kitchen', 'Service-focused', 'Scheduled'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'cook-private-household',
      name: 'Cook, Private Household',
      summary: 'Prepare meals for private household clients.',
      responsibilities: [
        'Plan menus',
        'Prepare meals',
        'Shop for ingredients',
        'Maintain kitchen',
        'Serve meals'
      ],
      skills: ['Cooking', 'Menu Planning', 'Shopping', 'Communication', 'Flexibility'],
      talentFit: 'Practical Builder, Creative Thinker',
      education: 'High School + culinary experience',
      salary: '$40,000 - $90,000',
      careerPath: 'Private Cook → Head Cook for Elite Household',
      environment: ['Private homes', 'Upscale settings', 'Independent', 'Personalized service'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'cook-restaurant',
      name: 'Cook, Restaurant',
      summary: 'Prepare food in restaurant kitchens.',
      responsibilities: [
        'Prepare dishes',
        'Follow recipes',
        'Manage station',
        'Maintain quality',
        'Work efficiently'
      ],
      skills: ['Cooking', 'Recipe Knowledge', 'Time Management', 'Quality Control', 'Teamwork'],
      talentFit: 'Practical Builder, Creative Thinker',
      education: 'High School + culinary training',
      salary: '$35,000 - $75,000',
      careerPath: 'Line Cook → Station Head → Sous Chef → Chef',
      environment: ['Restaurant', 'Kitchen', 'Fast-paced', 'Quality-focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'cook-short-order',
      name: 'Cook, Short Order',
      summary: 'Prepare short order meals for quick service.',
      responsibilities: [
        'Prepare orders quickly',
        'Operate equipment',
        'Manage orders',
        'Maintain cleanliness',
        'Interact with customers'
      ],
      skills: ['Cooking', 'Speed', 'Equipment Operation', 'Organization', 'Customer Service'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School, on-the-job training',
      salary: '$30,000 - $55,000',
      careerPath: 'Short Order Cook → Lead Cook → Manager',
      environment: ['Diner', 'Grill stations', 'Fast-paced', 'Customer-facing'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'counter-attendant-cafeteria',
      name: 'Counter Attendants, Cafeteria, Food Concession, and Coffee Shop',
      summary: 'Serve food and beverages at counters.',
      responsibilities: [
        'Serve customers',
        'Take orders',
        'Handle cash',
        'Maintain counter',
        'Restock items'
      ],
      skills: ['Customer Service', 'Food Service', 'Speed', 'Friendliness', 'Organization'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or equivalent',
      salary: '$28,000 - $48,000',
      careerPath: 'Attendant → Lead Attendant → Supervisor',
      environment: ['Cafeteria/Coffee shop', 'Counter service', 'Customer-facing', 'Fast-paced'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'insurance-adjusters-examiners-investigators',
      name: 'Insurance Adjusters, Examiners, and Investigators',
      summary: 'Investigate insurance claims to determine coverage and settlements.',
      responsibilities: [
        'Review claims and policies',
        'Inspect damage or loss',
        'Interview claimants',
        'Determine coverage amounts',
        'Negotiate settlements'
      ],
      skills: ['Investigation', 'Communication', 'Analysis', 'Attention to Detail', 'Negotiation'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s or insurance training',
      salary: '$55,000 - $95,000',
      careerPath: 'Adjuster → Senior Adjuster → Claims Manager',
      environment: ['Insurance company', 'Field inspections', 'Client interaction', 'Office-based'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'insurance-appraisers-auto-damage',
      name: 'Insurance Appraisers, Auto Damage',
      summary: 'Assess vehicle damage and estimate repair costs for claims.',
      responsibilities: [
        'Inspect damaged vehicles',
        'Estimate repair costs',
        'Document findings',
        'Coordinate with repair shops',
        'Submit appraisal reports'
      ],
      skills: ['Auto Repair Knowledge', 'Estimation', 'Attention to Detail', 'Communication', 'Computer Skills'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + auto/insurance training',
      salary: '$50,000 - $85,000',
      careerPath: 'Appraiser → Senior Appraiser → Claims Supervisor',
      environment: ['Auto shops', 'Field inspections', 'Insurance', 'Detail-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'insurance-claims-policy-processing-clerks',
      name: 'Insurance Claims and Policy Processing Clerks',
      summary: 'Process insurance claims and policy documents.',
      responsibilities: [
        'Review claim forms',
        'Enter data accurately',
        'Verify coverage details',
        'Contact clients for information',
        'Maintain records'
      ],
      skills: ['Attention to Detail', 'Organization', 'Communication', 'Computer Skills', 'Accuracy'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$35,000 - $55,000',
      careerPath: 'Clerk → Senior Clerk → Claims Specialist',
      environment: ['Insurance office', 'Administrative', 'Data entry', 'Detail-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'insurance-claims-clerks',
      name: 'Insurance Claims Clerks',
      summary: 'Support the claims process by gathering and processing information.',
      responsibilities: [
        'Open and track claims',
        'Request documentation',
        'Enter and update data',
        'Communicate with claimants',
        'Maintain claim files'
      ],
      skills: ['Organization', 'Communication', 'Attention to Detail', 'Customer Service', 'Computer Skills'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or equivalent',
      salary: '$35,000 - $55,000',
      careerPath: 'Claims Clerk → Claims Specialist → Claims Supervisor',
      environment: ['Insurance office', 'Administrative', 'Customer contact', 'Detail-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'insurance-policy-processing-clerks',
      name: 'Insurance Policy Processing Clerks',
      summary: 'Process new and renewed insurance policies and documents.',
      responsibilities: [
        'Review policy applications',
        'Enter policy data',
        'Verify documentation',
        'Issue policy documents',
        'Maintain records'
      ],
      skills: ['Attention to Detail', 'Organization', 'Accuracy', 'Computer Skills', 'Communication'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$34,000 - $54,000',
      careerPath: 'Clerk → Senior Clerk → Policy Specialist',
      environment: ['Insurance office', 'Administrative', 'Data processing', 'Detail-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'insurance-underwriters',
      name: 'Insurance Underwriters',
      summary: 'Evaluate risk and determine insurance coverage and pricing.',
      responsibilities: [
        'Analyze applications',
        'Assess risk factors',
        'Set premiums and terms',
        'Approve or deny coverage',
        'Monitor portfolio performance'
      ],
      skills: ['Risk Assessment', 'Analysis', 'Attention to Detail', 'Decision-making', 'Communication'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in finance or business',
      salary: '$65,000 - $110,000',
      careerPath: 'Underwriter → Senior Underwriter → Underwriting Manager',
      environment: ['Insurance office', 'Analytical work', 'Policy focus', 'Detail-oriented'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'investment-fund-managers',
      name: 'Investment Fund Managers',
      summary: 'Manage investment portfolios and fund strategies.',
      responsibilities: [
        'Develop investment strategy',
        'Analyze markets',
        'Allocate assets',
        'Monitor performance',
        'Report to stakeholders'
      ],
      skills: ['Financial Analysis', 'Risk Management', 'Leadership', 'Market Knowledge', 'Communication'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s or MBA in finance',
      salary: '$90,000 - $200,000+',
      careerPath: 'Analyst → Portfolio Manager → Fund Director',
      environment: ['Investment firm', 'Fast-paced', 'Market-driven', 'High responsibility'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'investment-underwriters',
      name: 'Investment Underwriters',
      summary: 'Evaluate and structure investment offerings and securities issues.',
      responsibilities: [
        'Analyze financial statements',
        'Structure underwriting deals',
        'Prepare offering documents',
        'Coordinate with issuers',
        'Assess market risk'
      ],
      skills: ['Financial Analysis', 'Valuation', 'Attention to Detail', 'Communication', 'Negotiation'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in finance or economics',
      salary: '$80,000 - $180,000+',
      careerPath: 'Analyst → Associate → Underwriting Manager → Director',
      environment: ['Investment bank', 'Deal-driven', 'Fast-paced', 'High pressure'],
      jobGrowth: '5% growth through 2032'
    },
  ],
  gov: [
    {
      id: 'civil-servant',
      name: 'Civil Servant / Government Administrator',
      summary: 'Work in government agencies managing public services.',
      responsibilities: [
        'Administer public programs',
        'Process applications',
        'Ensure regulatory compliance',
        'Serve the public',
        'Manage operations'
      ],
      skills: ['Organization', 'Communication', 'Problem-solving', 'Attention to Detail', 'Public Service'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$50,000 - $100,000',
      careerPath: 'Administrator → Senior Administrator → Manager → Director',
      environment: ['Public service', 'Regulatory work', 'Stability', 'Community impact'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'policy-analyst',
      name: 'Policy Analyst',
      summary: 'Analyze policies and recommend improvements for government or organizations.',
      responsibilities: [
        'Research policy issues',
        'Analyze data and trends',
        'Develop policy recommendations',
        'Write reports and briefs',
        'Present findings'
      ],
      skills: ['Research', 'Analysis', 'Writing', 'Critical Thinking', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s (Master\'s preferred) in Policy, Economics, or related',
      salary: '$60,000 - $120,000',
      careerPath: 'Analyst → Senior Analyst → Lead Analyst → Director',
      environment: ['Policy research', 'Data analysis', 'Government impact', 'Strategic focus'],
      jobGrowth: 'Variable by field'
    },
    {
      id: 'emergency-responder',
      name: 'Police Officer / Firefighter',
      summary: 'Protect public safety through law enforcement or emergency response.',
      responsibilities: [
        'Respond to emergencies',
        'Protect public safety',
        'Enforce laws/prevent fires',
        'Investigate incidents',
        'Community engagement'
      ],
      skills: ['Leadership', 'Physical Fitness', 'Problem-solving', 'Quick Thinking', 'Courage'],
      talentFit: 'Practical Builder, Leadership & Visionary',
      education: 'High School + Training Academy',
      salary: '$50,000 - $100,000+',
      careerPath: 'Officer → Senior Officer → Detective → Detective Sergeant → Captain',
      environment: ['Public service', 'High stakes', 'Teamwork', 'Community protection'],
      jobGrowth: '4-5% growth through 2032'
    },
    {
      id: 'social-worker',
      name: 'Social Worker',
      summary: 'Help individuals and families deal with personal and social problems.',
      responsibilities: [
        'Assess client needs',
        'Develop service plans',
        'Refer to resources',
        'Advocate for clients',
        'Monitor progress'
      ],
      skills: ['Empathy', 'Communication', 'Problem-solving', 'Advocacy', 'Case Management'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s or Master\'s in Social Work + License',
      salary: '$50,000 - $90,000',
      careerPath: 'Case Worker → Social Worker → Senior Worker → Supervisor → Director',
      environment: ['Client service', 'Social impact', 'Advocacy', 'Community connection'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'tax-examiner',
      name: 'Tax Examiner / IRS Agent',
      summary: 'Examine and audit tax returns for individuals and businesses.',
      responsibilities: [
        'Review tax returns',
        'Conduct audits',
        'Investigate discrepancies',
        'Ensure tax compliance',
        'Communicate findings'
      ],
      skills: ['Tax Knowledge', 'Attention to Detail', 'Analysis', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Accounting or Finance',
      salary: '$65,000 - $110,000',
      careerPath: 'Tax Examiner → Senior Examiner → Manager',
      environment: ['Tax focus', 'Government work', 'Compliance', 'Stability'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'benefits-manager',
      name: 'Benefits Manager / Social Services Manager',
      summary: 'Manage government benefit programs and services.',
      responsibilities: [
        'Process benefit applications',
        'Determine eligibility',
        'Interview applicants',
        'Manage caseload',
        'Ensure accuracy of benefits'
      ],
      skills: ['Organization', 'Communication', 'Attention to Detail', 'Empathy', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$45,000 - $85,000',
      careerPath: 'Benefits Specialist → Manager → Senior Manager → Director',
      environment: ['Public service', 'Eligibility determination', 'Caseload management', 'Community impact'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'customs-officer',
      name: 'Customs Officer / Border Patrol Agent',
      summary: 'Enforce customs laws and protect national borders.',
      responsibilities: [
        'Inspect cargo and baggage',
        'Question travelers',
        'Detect contraband',
        'Enforce customs regulations',
        'Make arrests when necessary'
      ],
      skills: ['Attention to Detail', 'Communication', 'Leadership', 'Physical Fitness', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'High School + Training',
      salary: '$50,000 - $100,000',
      careerPath: 'Officer → Senior Officer → Supervisor → Manager',
      environment: ['Border security', 'Law enforcement', 'Physical work', 'Public protection'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'immigration-officer',
      name: 'Immigration Officer',
      summary: 'Process immigration applications and enforce immigration laws.',
      responsibilities: [
        'Review immigration applications',
        'Interview applicants',
        'Verify documentation',
        'Determine eligibility',
        'Enforce immigration law'
      ],
      skills: ['Immigration Law', 'Communication', 'Attention to Detail', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Bachelor\'s degree',
      salary: '$50,000 - $95,000',
      careerPath: 'Immigration Officer → Senior Officer → Supervisor → Manager',
      environment: ['Immigration focus', 'Law enforcement', 'Compliance', 'Regulation'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'court-clerk',
      name: 'Court Clerk',
      summary: 'Maintain records and manage court operations.',
      responsibilities: [
        'Maintain court records',
        'Assist judges and attorneys',
        'Schedule hearings',
        'Process legal documents',
        'Manage court schedule'
      ],
      skills: ['Organization', 'Attention to Detail', 'Legal Knowledge', 'Communication', 'Technology'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Court Clerk → Senior Clerk → Court Administrator',
      environment: ['Court setting', 'Record management', 'Legal environment', 'Organization'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'probation-officer',
      name: 'Probation / Parole Officer',
      summary: 'Supervise individuals released from prison or jail.',
      responsibilities: [
        'Monitor probationers',
        'Conduct home visits',
        'Report violations',
        'Help with rehabilitation',
        'Document progress'
      ],
      skills: ['Empathy', 'Communication', 'Judgment', 'Organization', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Bachelor\'s degree often required',
      salary: '$50,000 - $90,000',
      careerPath: 'Probation Officer → Senior Officer → Supervisor → Director',
      environment: ['Criminal justice', 'Supervision', 'Rehabilitation focus', 'Safety concern'],
      jobGrowth: '9% growth through 2032'
    },
    {
      id: 'correctional-officer',
      name: 'Correctional Officer',
      summary: 'Maintain order and security in prisons and detention facilities.',
      responsibilities: [
        'Supervise inmates',
        'Control entry and exit',
        'Conduct counts',
        'Enforce rules',
        'Respond to emergencies'
      ],
      skills: ['Authority', 'Physical Fitness', 'Communication', 'Problem-solving', 'Judgment'],
      talentFit: 'Leadership & Visionary, Practical Builder',
      education: 'High School + Training',
      salary: '$45,000 - $85,000',
      careerPath: 'Officer → Senior Officer → Supervisor → Captain',
      environment: ['Prison setting', 'Security focus', 'High stress', 'Safety critical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'city-manager',
      name: 'City Manager / Local Administrator',
      summary: 'Manage city or local government operations and budgets.',
      responsibilities: [
        'Manage city operations',
        'Develop budgets',
        'Oversee departments',
        'Strategic planning',
        'Public relations'
      ],
      skills: ['Leadership', 'Financial Management', 'Strategic Planning', 'Communication', 'Organization'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Master\'s in Public Administration often required',
      salary: '$85,000 - $180,000',
      careerPath: 'Deputy Manager → City Manager → Regional Administrator',
      environment: ['Government leadership', 'Strategic focus', 'Budget management', 'Community impact'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'veteran-benefits-advisor',
      name: 'Veteran Benefits Advisor',
      summary: 'Help veterans access benefits and services.',
      responsibilities: [
        'Counsel veterans',
        'Process benefit claims',
        'Explain benefits',
        'Refer to services',
        'Provide advocacy'
      ],
      skills: ['Veteran Benefits Knowledge', 'Communication', 'Empathy', 'Organization', 'Advocacy'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$45,000 - $80,000',
      careerPath: 'Benefits Advisor → Senior Advisor → Manager',
      environment: ['Veteran services', 'Advocacy', 'Community support', 'Government'],
      jobGrowth: 'Growing veteran population'
    },
    {
      id: 'community-outreach-specialist',
      name: 'Community Outreach Specialist',
      summary: 'Build relationships and provide services to community members.',
      responsibilities: [
        'Connect with community',
        'Provide resources',
        'Organize outreach events',
        'Advocate for residents',
        'Document interactions'
      ],
      skills: ['Communication', 'Relationship Building', 'Organization', 'Advocacy', 'Cultural Awareness'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Specialist → Senior Specialist → Manager',
      environment: ['Community focus', 'Grassroots engagement', 'Advocacy', 'Community building'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'case-manager-social-services',
      name: 'Case Manager / Social Services Coordinator',
      summary: 'Coordinate services and support for clients in need.',
      responsibilities: [
        'Assess client needs',
        'Create service plans',
        'Coordinate resources',
        'Monitor progress',
        'Advocate for clients'
      ],
      skills: ['Organization', 'Communication', 'Empathy', 'Problem-solving', 'Advocacy'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Case Manager → Senior Manager → Supervisor → Director',
      environment: ['Client services', 'Advocacy', 'Resource coordination', 'Social impact'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'child-protective-services',
      name: 'Child Protective Services (CPS) Worker',
      summary: 'Investigate child abuse and neglect to ensure child safety.',
      responsibilities: [
        'Investigate abuse reports',
        'Assess child safety',
        'Document findings',
        'Coordinate services',
        'Testify in court'
      ],
      skills: ['Empathy', 'Communication', 'Problem-solving', 'Judgment', 'Documentation'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'CPS Worker → Senior Worker → Supervisor → Manager',
      environment: ['Child protection', 'High emotional impact', 'Challenging cases', 'Advocacy'],
      jobGrowth: 'Variable by region'
    },
    {
      id: 'homeless-services-coordinator',
      name: 'Homeless Services Coordinator',
      summary: 'Help coordinate services for homeless and vulnerable individuals.',
      responsibilities: [
        'Assess housing needs',
        'Coordinate services',
        'Connect to resources',
        'Provide support',
        'Manage programs'
      ],
      skills: ['Organization', 'Communication', 'Empathy', 'Problem-solving', 'Resource Knowledge'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Coordinator → Senior Coordinator → Program Manager',
      environment: ['Social services', 'Vulnerable populations', 'Housing focus', 'Community support'],
      jobGrowth: 'Growing with homelessness crisis'
    },
    {
      id: 'elder-services-coordinator',
      name: 'Elder Services Coordinator',
      summary: 'Support and coordinate services for elderly populations.',
      responsibilities: [
        'Assess elderly client needs',
        'Coordinate services',
        'Advocate for seniors',
        'Connect to resources',
        'Monitor wellbeing'
      ],
      skills: ['Empathy', 'Organization', 'Communication', 'Advocacy', 'Patience'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Coordinator → Senior Coordinator → Manager',
      environment: ['Elder services', 'Senior population', 'Community support', 'Health advocacy'],
      jobGrowth: 'Growing with aging population'
    },
    {
      id: 'job-counselor',
      name: 'Job Counselor / Employment Specialist',
      summary: 'Help individuals develop employment skills and find jobs.',
      responsibilities: [
        'Assess job skills',
        'Provide job training',
        'Write resumes',
        'Job search assistance',
        'Career counseling'
      ],
      skills: ['Career Knowledge', 'Communication', 'Empathy', 'Organization', 'Job Market Knowledge'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Job Counselor → Senior Counselor → Manager',
      environment: ['Employment focus', 'Career development', 'Client support', 'Community service'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'substance-abuse-counselor',
      name: 'Substance Abuse Counselor',
      summary: 'Provide counseling for addiction and substance abuse issues.',
      responsibilities: [
        'Conduct counseling sessions',
        'Assess substance abuse',
        'Create treatment plans',
        'Monitor recovery progress',
        'Coordinate referrals'
      ],
      skills: ['Addictions Counseling', 'Empathy', 'Communication', 'Problem-solving', 'Advocacy'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s or Master\'s in Counseling + Certification',
      salary: '$45,000 - $80,000',
      careerPath: 'Counselor → Senior Counselor → Clinical Supervisor → Director',
      environment: ['Addiction treatment', 'Therapeutic', 'Recovery focus', 'Rewarding'],
      jobGrowth: '19% growth through 2032'
    },
    {
      id: 'disaster-relief-coordinator',
      name: 'Disaster Relief Coordinator',
      summary: 'Coordinate emergency response and relief services.',
      responsibilities: [
        'Coordinate emergency response',
        'Distribute relief supplies',
        'Connect to services',
        'Document assistance',
        'Manage volunteers'
      ],
      skills: ['Crisis Management', 'Organization', 'Communication', 'Problem-solving', 'Leadership'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$45,000 - $85,000',
      careerPath: 'Relief Worker → Coordinator → Senior Coordinator → Manager',
      environment: ['Emergency response', 'High stakes', 'Community support', 'Crisis management'],
      jobGrowth: 'Growing with climate change'
    },
    {
      id: 'public-information-officer',
      name: 'Public Information Officer',
      summary: 'Communicate government information to the public.',
      responsibilities: [
        'Write press releases',
        'Communicate with media',
        'Manage public communications',
        'Coordinate announcements',
        'Respond to inquiries'
      ],
      skills: ['Writing', 'Communication', 'Media Relations', 'Organization', 'Creativity'],
      talentFit: 'Creative Thinker, People-Oriented Helper',
      education: 'Bachelor\'s in Communications or related field',
      salary: '$50,000 - $100,000',
      careerPath: 'Communications Specialist → PIO → Senior PIO → Director',
      environment: ['Government communications', 'Public relations', 'Media', 'Strategic'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'urban-planner',
      name: 'Urban Planner',
      summary: 'Plan and develop communities and urban areas.',
      responsibilities: [
        'Develop urban plans',
        'Analyze data',
        'Conduct community meetings',
        'Create zoning recommendations',
        'Environmental review'
      ],
      skills: ['Urban Planning', 'Analysis', 'Communication', 'Sustainability', 'Organization'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Master\'s in Urban Planning often required',
      salary: '$60,000 - $120,000',
      careerPath: 'Urban Planner → Senior Planner → Director → Regional Planner',
      environment: ['Community planning', 'Sustainability', 'Strategic thinking', 'Development'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'veteran-counselor',
      name: 'Veteran Counselor',
      summary: 'Provide counseling and support services to veterans.',
      responsibilities: [
        'Provide counseling',
        'Assess veteran needs',
        'Connect to resources',
        'Manage caseload',
        'Coordinate services'
      ],
      skills: ['Counseling', 'Empathy', 'Communication', 'Veteran Issues Knowledge', 'Problem-solving'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Counseling or related field',
      salary: '$50,000 - $90,000',
      careerPath: 'Veteran Counselor → Senior Counselor → Supervisor → Director',
      environment: ['Veteran services', 'Mental health support', 'Therapeutic', 'Community'],
      jobGrowth: 'Growing with veteran population'
    },
    {
      id: 'administrative-law-judge',
      name: 'Administrative Law Judge, Adjudicator, and Hearing Officer',
      summary: 'Preside over administrative hearings and make legal decisions.',
      responsibilities: [
        'Preside over hearings',
        'Review evidence',
        'Make legal decisions',
        'Write opinions',
        'Apply regulations'
      ],
      skills: ['Legal Knowledge', 'Judgment', 'Communication', 'Documentation', 'Ethics'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Law Degree (JD) + government experience',
      salary: '$90,000 - $170,000',
      careerPath: 'Hearing Officer → Administrative Judge → Chief Judge',
      environment: ['Legal proceedings', 'Government work', 'Judicial function', 'Decision-making'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  government: [
    {
      id: 'city-planning-aide',
      name: 'City Planning Aide',
      summary: 'Provide administrative support for city planning.',
      responsibilities: [
        'Process documents',
        'Maintain files',
        'Prepare reports',
        'Assist planners',
        'Manage records'
      ],
      skills: ['Organization', 'Communication', 'Attention to Detail', 'Technology', 'Research'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Associate\'s degree',
      salary: '$35,000 - $65,000',
      careerPath: 'Aide → Specialist → Planner → Senior Planner',
      environment: ['City government', 'Planning office', 'Administrative', 'Community focus'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'child-support-investigator',
      name: 'Child Support, Missing Persons, and Unemployment Insurance Fraud Investigator',
      summary: 'Investigate fraud and locate missing persons.',
      responsibilities: [
        'Investigate cases',
        'Locate individuals',
        'Gather evidence',
        'Prepare reports',
        'Testify'
      ],
      skills: ['Investigation', 'Problem-solving', 'Communication', 'Critical Thinking', 'Legal Knowledge'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'High School, investigator training required',
      salary: '$50,000 - $95,000',
      careerPath: 'Investigator → Senior Investigator → Supervisor → Manager',
      environment: ['Government agency', 'Field/Office', 'Investigation focus', 'Public service'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'child-family-school-social-worker',
      name: 'Child, Family, and School Social Worker',
      summary: 'Support children and families through social services.',
      responsibilities: [
        'Assess needs',
        'Provide counseling',
        'Connect to services',
        'Advocate for clients',
        'Document work'
      ],
      skills: ['Social Work', 'Empathy', 'Communication', 'Problem-solving', 'Organization'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in Social Work + License',
      salary: '$50,000 - $90,000',
      careerPath: 'Social Worker → Senior Worker → Supervisor → Manager',
      environment: ['Schools/Social agencies', 'Client interaction', 'Advocacy focus', 'Community service'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'child-care-worker',
      name: 'Child Care Worker',
      summary: 'Provide care and supervision for children in childcare facilities.',
      responsibilities: [
        'Supervise children',
        'Teach activities',
        'Provide care',
        'Ensure safety',
        'Communicate with parents'
      ],
      skills: ['Child Development', 'Communication', 'Patience', 'Responsibility', 'Creativity'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + child care certification',
      salary: '$30,000 - $55,000',
      careerPath: 'Child Care Worker → Lead Teacher → Director',
      environment: ['Childcare facility', 'School', 'Family-focused', 'Hands-on care'],
      jobGrowth: '11% growth through 2032'
    },
    {
      id: 'claims-taker-unemployment',
      name: 'Claims Taker, Unemployment Benefits',
      summary: 'Process unemployment benefit claims and manage related files.',
      responsibilities: [
        'Interview claimants',
        'Process claims',
        'Verify eligibility',
        'Maintain records',
        'Respond to inquiries'
      ],
      skills: ['Customer Service', 'Attention to Detail', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or Associate\'s degree',
      salary: '$35,000 - $65,000',
      careerPath: 'Claims Taker → Senior Taker → Supervisor',
      environment: ['Government office', 'Claims processing', 'Customer-facing', 'Administrative'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'court-clerk',
      name: 'Court Clerk',
      summary: 'Maintain court records and assist court operations.',
      responsibilities: [
        'Maintain records',
        'File documents',
        'Schedule hearings',
        'Process fees',
        'Assist judges'
      ],
      skills: ['Organization', 'Attention to Detail', 'Communication', 'Legal Knowledge', 'Typing'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School + training',
      salary: '$40,000 - $75,000',
      careerPath: 'Clerk → Senior Clerk → Court Administrator',
      environment: ['Courthouse', 'Legal', 'Administrative', 'Record-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'correspondence-clerk',
      name: 'Correspondence Clerk',
      summary: 'Handle incoming and outgoing correspondence in organizations.',
      responsibilities: [
        'Sort mail',
        'Answer inquiries',
        'Maintain files',
        'Process documents',
        'Record information'
      ],
      skills: ['Organization', 'Communication', 'Attention to Detail', 'Typing', 'Customer Service'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$35,000 - $65,000',
      careerPath: 'Clerk → Senior Clerk → Office Manager',
      environment: ['Office', 'Administrative', 'Communications focus', 'Routine tasks'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'immigration-customs-inspectors',
      name: 'Immigration and Customs Inspectors',
      summary: 'Inspect travelers and cargo at borders and ports of entry.',
      responsibilities: [
        'Inspect travelers and documents',
        'Detect contraband',
        'Enforce immigration laws',
        'Conduct interviews',
        'Document inspections'
      ],
      skills: ['Law Enforcement', 'Attention to Detail', 'Communication', 'Decision-making', 'Foreign Language (helpful)'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School + federal training',
      salary: '$60,000 - $95,000',
      careerPath: 'Inspector → Senior Inspector → Supervisory Inspector',
      environment: ['Border security', 'Law enforcement', 'Public safety', 'Federal service'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  healthcare: [
    {
      id: 'nurse',
      name: 'Registered Nurse (RN)',
      summary: 'Provide patient care and work with physicians in hospitals and clinics.',
      responsibilities: [
        'Monitor patient health and vital signs',
        'Administer medications and treatments',
        'Document patient information',
        'Educate patients and families',
        'Collaborate with medical teams'
      ],
      skills: ['Patient Care', 'Communication', 'Critical Thinking', 'Time Management', 'Compassion'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s of Science in Nursing (BSN) + License',
      degrees: ['Bachelor of Science in Nursing (BSN)', 'Associate Degree in Nursing (ADN)', 'Registered Nurse (RN) License'],
      degreeCost: '$40,000 - $100,000 (Bachelor) or $20,000 - $50,000 (Associate)',
      salary: '$75,000 - $110,000',
      careerPath: 'RN → Nurse Specialist → Nurse Manager → Director of Nursing',
      environment: ['Patient interaction', 'Team-based', 'Fast-paced', 'High responsibility'],
      jobGrowth: 'Growing 6% through 2032 - faster than average'
    },
    {
      id: 'physician',
      name: 'Physician / Doctor (MD/DO)',
      summary: 'Diagnose diseases, prescribe treatments, and manage patient care.',
      responsibilities: [
        'Examine patients and take medical histories',
        'Diagnose medical conditions',
        'Prescribe medications',
        'Perform surgeries (if specialty)',
        'Follow-up care management'
      ],
      skills: ['Medical Knowledge', 'Analytical Thinking', 'Communication', 'Problem-solving', 'Empathy'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Medical School (4 years) + Residency (3-7 years)',
      degrees: ['Doctor of Medicine (MD)', 'Doctor of Osteopathic Medicine (DO)', 'Medical residency training'],
      degreeCost: '$150,000 - $300,000 (Medical school) + residency (often funded)',
      salary: '$200,000 - $500,000+',
      careerPath: 'Resident → Licensed Physician → Specialist → Chief Medical Officer',
      environment: ['High responsibility', 'Continuous learning', 'Patient impact', 'Leadership'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'therapist',
      name: 'Physical or Occupational Therapist',
      summary: 'Help patients recover movement and function after injury or illness.',
      responsibilities: [
        'Assess patient mobility and function',
        'Create treatment plans',
        'Perform therapeutic exercises',
        'Monitor patient progress',
        'Document treatment records'
      ],
      skills: ['Clinical Knowledge', 'Patient Communication', 'Problem-solving', 'Empathy', 'Manual Skills'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'Master\'s in Physical/Occupational Therapy + License',
      degrees: ['Master of Science in Physical Therapy', 'Master of Science in Occupational Therapy', 'Doctor of Physical Therapy (DPT)', 'Professional licensure exam'],
      degreeCost: '$40,000 - $120,000 (Master/DPT) + $500 - $2,000 (exam/licensure)',
      salary: '$85,000 - $130,000',
      careerPath: 'Therapist → Senior Therapist → Clinic Manager → Director',
      environment: ['Patient-focused', 'Hands-on', 'Rewarding', 'Collaborative'],
      jobGrowth: '14% growth through 2032 - faster than average'
    },
    {
      id: 'pharmacist',
      name: 'Pharmacist',
      summary: 'Dispense medications and advise patients on medication use.',
      responsibilities: [
        'Fill prescriptions accurately',
        'Advise on medication side effects',
        'Manage pharmacy inventory',
        'Counsel patients',
        'Monitor drug interactions'
      ],
      skills: ['Pharmaceutical Knowledge', 'Attention to Detail', 'Communication', 'Problem-solving', 'Compliance'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Doctor of Pharmacy (PharmD) + License',
      degrees: ['Doctor of Pharmacy (PharmD)', 'Pharmacy licensure exam (NAPLEX)', 'State pharmacy license'],
      degreeCost: '$100,000 - $200,000 (PharmD) + $1,000 - $2,000 (licensure)',
      salary: '$120,000 - $160,000',
      careerPath: 'Pharmacist → Senior Pharmacist → Pharmacy Manager → District Manager',
      environment: ['Technical accuracy', 'Patient interaction', 'Regulated environment', 'Healthcare impact'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'dentist',
      name: 'Dentist',
      summary: 'Diagnose and treat dental conditions and perform oral procedures.',
      responsibilities: [
        'Examine teeth and gums',
        'Perform cleanings and fillings',
        'Diagnose dental issues',
        'Perform extractions and root canals',
        'Educate patients on oral hygiene'
      ],
      skills: ['Manual Dexterity', 'Attention to Detail', 'Patient Communication', 'Precision', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'Doctor of Dental Surgery (DDS) or DMD + License',
      degrees: ['Doctor of Dental Surgery (DDS)', 'Doctor of Medical Dentistry (DMD)', 'Dental licensure exam', 'State dental license'],
      degreeCost: '$150,000 - $300,000 (DDS/DMD) + $2,000 - $5,000 (licensure)',
      salary: '$150,000 - $240,000',
      careerPath: 'General Dentist → Specialist (Orthodontist, Surgeon) → Practice Owner',
      environment: ['Patient-focused', 'Precise technical work', 'Independency possible', 'Own practice option'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'surgeon',
      name: 'Surgeon',
      summary: 'Perform surgical procedures to treat diseases and injuries.',
      responsibilities: [
        'Diagnose surgical conditions',
        'Plan surgical procedures',
        'Perform complex surgeries',
        'Monitor patient recovery',
        'Manage post-surgical care'
      ],
      skills: ['Manual Dexterity', 'Precision', 'Decision-making', 'Leadership', 'Research Skills'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Medical School + 5-7 year Surgical Residency',
      degrees: ['Doctor of Medicine (MD) or DO', 'Surgical residency training', 'Board certification in surgery'],
      degreeCost: '$150,000 - $300,000 (Medical school) + residency (often funded), $3,000 - $8,000 (board exam)',
      salary: '$250,000 - $500,000+',
      careerPath: 'Surgical Resident → Attending Surgeon → Chief of Surgery',
      environment: ['High stakes', 'Technical expertise', 'Leadership', 'Continuous learning'],
      jobGrowth: 'Stable growth'
    },
    {
      id: 'healthcare-administrator',
      name: 'Healthcare Administrator',
      summary: 'Manage healthcare facilities and coordinate patient care services.',
      responsibilities: [
        'Manage hospital/clinic operations',
        'Budget planning and control',
        'Staff recruitment and management',
        'Ensure regulatory compliance',
        'Improve patient care quality'
      ],
      skills: ['Leadership', 'Finance', 'Organization', 'Communication', 'Strategic Planning'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Healthcare Administration or MBA',
      degrees: ['Bachelor of Science in Healthcare Administration', 'Master of Business Administration (MBA)', 'Master of Health Administration (MHA)'],
      degreeCost: '$40,000 - $100,000 (Bachelor) or $40,000 - $150,000 (Master)',
      salary: '$100,000 - $180,000',
      careerPath: 'Administrator → Director → Chief Operating Officer → Hospital CEO',
      environment: ['Leadership role', 'Strategic decisions', 'Organizational focus', 'Patient care impact'],
      jobGrowth: '32% growth through 2032 - much faster than average'
    },
    {
      id: 'acupuncturist',
      name: 'Acupuncturist',
      summary: 'Treat patients using acupuncture and traditional Chinese medicine.',
      responsibilities: [
        'Perform acupuncture',
        'Assess patient conditions',
        'Develop treatment plans',
        'Educate patients',
        'Keep medical records'
      ],
      skills: ['Acupuncture', 'Anatomy', 'Patient Care', 'Communication', 'Diagnosis'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in Acupuncture + License/Certification',
      degrees: ['Master of Science in Acupuncture', 'Master of Traditional Chinese Medicine', 'Licensed Acupuncturist (LAc) certification'],
      degreeCost: '$25,000 - $60,000 (Master) + $500 - $2,000 (licensure)',
      salary: '$70,000 - $120,000',
      careerPath: 'Acupuncturist → Senior Acupuncturist → Clinic Owner',
      environment: ['Traditional medicine', 'Holistic health', 'Patient interaction', 'Wellness'],
      jobGrowth: '9% growth through 2032'
    },
    {
      id: 'acute-care-nurse',
      name: 'Acute Care Nurse',
      summary: 'Provide nursing care to patients with acute medical conditions.',
      responsibilities: [
        'Provide patient care',
        'Monitor vital signs',
        'Administer medications',
        'Assist physicians',
        'Document care'
      ],
      skills: ['Nursing', 'Patient Care', 'Clinical Knowledge', 'Communication', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'Bachelor\'s in Nursing + License (RN)',
      degrees: ['Bachelor of Science in Nursing (BSN)', 'Registered Nurse (RN) License', 'Acute Care Nursing specialty'],
      degreeCost: '$40,000 - $100,000 (BSN)',
      salary: '$70,000 - $110,000',
      careerPath: 'RN in Acute Care → Charge Nurse → Nurse Manager',
      environment: ['Hospital setting', 'Acute care', 'Fast-paced', 'Patient focus'],
      jobGrowth: '16% growth through 2032'
    },
    {
      id: 'advanced-practice-psychiatric-nurse',
      name: 'Advanced Practice Psychiatric Nurse',
      summary: 'Provide specialized mental health nursing and psychiatric care.',
      responsibilities: [
        'Assess psychiatric patients',
        'Provide therapy',
        'Prescribe medications',
        'Manage patient care',
        'Educate patients'
      ],
      skills: ['Psychiatric Nursing', 'Psychology', 'Patient Care', 'Medication Management', 'Communication'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in Psychiatric Nursing + Certification',
      degrees: ['Master of Science in Psychiatric Nursing', 'Master of Science in Nursing (MSN) with psychiatry focus', 'Advanced Practice Psychiatric Nurse (APPN) certification'],
      degreeCost: '$40,000 - $100,000 (Master) + $500 - $2,000 (certification)',
      salary: '$95,000 - $150,000',
      careerPath: 'RN → Psychiatric Nurse → Advanced Practice Nurse → Clinical Director',
      environment: ['mental health', 'Psychiatric care', 'Therapeutic', 'Patient relationships'],
      jobGrowth: '39% growth through 2032'
    },
    {
      id: 'nurse-practitioner',
      name: 'Nurse Practitioner',
      summary: 'Provide advanced nursing care and patient services.',
      responsibilities: [
        'Diagnose patients',
        'Prescribe medications',
        'Provide patient education',
        'Manage patient care',
        'Collaborate with physicians'
      ],
      skills: ['Nursing', 'Clinical Knowledge', 'Patient Care', 'Communication', 'Leadership'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in Nursing + Certification',
      degrees: ['Master of Science in Nursing (MSN)', 'Nurse Practitioner (NP) certification', 'Specialty certification (family, adult, pediatric, etc.)'],
      degreeCost: '$40,000 - $100,000 (Master) + $500 - $2,000 (certification)',
      salary: '$120,000 - $180,000',
      careerPath: 'RN → Nurse Practitioner → Senior NP → Clinical Manager',
      environment: ['Patient care', 'Clinical expertise', 'Leadership', 'Healthcare impact'],
      jobGrowth: '39% growth through 2032'
    },
    {
      id: 'physician-assistant',
      name: 'Physician Assistant',
      summary: 'Provide medical care including diagnosis and treatment.',
      responsibilities: [
        'Examine patients',
        'Order tests',
        'Prescribe medication',
        'Provide patient education',
        'Document medical records'
      ],
      skills: ['Medical Knowledge', 'Patient Assessment', 'Clinical Skills', 'Communication', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in Physician Assistant Studies + License',
      degrees: ['Master of Science in Physician Assistant Studies', 'Physician Assistant (PA) certification exam', 'State PA license'],
      degreeCost: '$60,000 - $120,000 (Master) + $1,000 - $2,000 (licensure)',
      salary: '$110,000 - $160,000',
      careerPath: 'PA → Senior PA → Lead PA → Clinical Manager',
      environment: ['Patient care', 'Medical expertise', 'Clinical decisions', 'Healthcare impact'],
      jobGrowth: '37% growth through 2032'
    },
    {
      id: 'mental-health-counselor',
      name: 'Mental Health Counselor',
      summary: 'Provide therapy and counseling for mental health issues.',
      responsibilities: [
        'Conduct therapy sessions',
        'Assess mental health',
        'Develop treatment plans',
        'Provide patient support',
        'Document progress'
      ],
      skills: ['Psychology', 'Active Listening', 'Empathy', 'Problem-solving', 'Communication'],
      talentFit: 'People-Oriented Helper',
      education: 'Master\'s in Counseling + License',
      degrees: ['Master of Science in Counseling', 'Master of Arts in Mental Health Counseling', 'Licensed Mental Health Counselor (LMHC) certification'],
      degreeCost: '$25,000 - $60,000 (Master) + $500 - $2,000 (licensure)',
      salary: '$50,000 - $95,000',
      careerPath: 'Counselor → Senior Counselor → Clinical Director → Manager',
      environment: ['Mental health focus', 'Client relationships', 'Therapeutic', 'Confidential'],
      jobGrowth: '23% growth through 2032'
    },
    {
      id: 'occupational-therapist',
      name: 'Occupational Therapist',
      summary: 'Help patients develop skills for daily living and work.',
      responsibilities: [
        'Assess patient abilities',
        'Create treatment plans',
        'Teach adaptive techniques',
        'Recommend assistive devices',
        'Document progress'
      ],
      skills: ['Therapy Knowledge', 'Patient Care', 'Problem-solving', 'Compassion', 'Creativity'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'Master\'s in Occupational Therapy + License',
      degrees: ['Master of Science in Occupational Therapy', 'Doctor of Occupational Therapy (OTD)', 'Occupational Therapist (OT) licensure exam'],
      degreeCost: '$40,000 - $120,000 (Master/Doctorate) + $500 - $2,000 (licensure)',
      salary: '$85,000 - $130,000',
      careerPath: 'OT → Senior OT → Supervisor → Therapy Director',
      environment: ['Rehabilitation focus', 'Patient interaction', 'Therapeutic goal', 'Hands-on'],
      jobGrowth: '19% growth through 2032'
    },
    {
      id: 'physical-therapist',
      name: 'Physical Therapist',
      summary: 'Help patients recover mobility and reduce pain through therapy.',
      responsibilities: [
        'Assess patient mobility',
        'Design rehabilitation plans',
        'Perform therapeutic exercises',
        'Monitor patient progress',
        'Document treatment'
      ],
      skills: ['Physical Therapy', 'Anatomy', 'Patient Care', 'Problem-solving', 'Communication'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'Doctor of Physical Therapy (DPT) + License',
      degrees: ['Doctor of Physical Therapy (DPT)', 'Physical Therapist (PT) licensure exam', 'State PT license', 'Optional specialty certifications'],
      degreeCost: '$60,000 - $120,000 (DPT) + $500 - $2,000 (licensure)',
      salary: '$90,000 - $140,000',
      careerPath: 'PT → Senior PT → Physical Therapy Manager → Regional Manager',
      environment: ['Rehabilitation', 'Patient interaction', 'Health improvement', 'Active'],
      jobGrowth: '22% growth through 2032'
    },
    {
      id: 'radiologist',
      name: 'Radiologist',
      summary: 'Use medical imaging to diagnose diseases and conditions.',
      responsibilities: [
        'Perform medical imaging',
        'Interpret images',
        'Diagnose conditions',
        'Consult with physicians',
        'Maintain equipment'
      ],
      skills: ['Medical Imaging', 'Diagnosis', 'Attention to Detail', 'Problem-solving', 'Research'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Medical School + Radiology Residency + License',
      degrees: ['Doctor of Medicine (MD) or DO', 'Diagnostic Radiology residency', 'Board certification in radiology'],
      degreeCost: '$150,000 - $300,000 (Medical school) + residency (often funded), $3,000 - $8,000 (board exam)',
      salary: '$230,000 - $400,000',
      careerPath: 'Radiologist → Lead Radiologist → Chief of Radiology',
      environment: ['Medical imaging', 'Diagnosis focus', 'Technical equipment', 'Healthcare impact'],
      jobGrowth: 'Stable growth'
    },
    {
      id: 'medical-technologist',
      name: 'Medical Technologist / Laboratory Technician',
      summary: 'Perform tests on patient samples in medical laboratories.',
      responsibilities: [
        'Conduct laboratory tests',
        'Analyze samples',
        'Operate lab equipment',
        'Report results',
        'Maintain quality'
      ],
      skills: ['Laboratory Skills', 'Attention to Detail', 'Problem-solving', 'Accuracy', 'Equipment Operation'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Medical Technology + Certification',
      degrees: ['Bachelor of Science in Medical Technology', 'Bachelor of Science in Clinical Laboratory Science', 'Medical Laboratory Scientist (MLS) certification'],
      degreeCost: '$40,000 - $80,000 (Bachelor) + $300 - $1,000 (certification)',
      salary: '$60,000 - $100,000',
      careerPath: 'Lab Technician → Med Tech → Senior Technician → Lab Manager',
      environment: ['Laboratory work', 'Precision', 'Equipment operation', 'Healthcare support'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'epidemiologist',
      name: 'Epidemiologist',
      summary: 'Study disease patterns and develop disease prevention strategies.',
      responsibilities: [
        'Study disease patterns',
        'Conduct epidemiological research',
        'Develop prevention strategies',
        'Communicate findings',
        'Analyze health data'
      ],
      skills: ['Epidemiology', 'Statistics', 'Research', 'Data Analysis', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Master\'s (MPH) in Epidemiology or related',
      degrees: ['Master of Public Health (MPH) in Epidemiology', 'Master of Science in Epidemiology', 'PhD in Epidemiology (optional for research roles)'],
      degreeCost: '$25,000 - $60,000 (Master) or $50,000 - $150,000 (PhD, often funded)',
      salary: '$70,000 - $130,000',
      careerPath: 'Epidemiologist → Senior Epidemiologist → Disease Manager → Director',
      environment: ['Public health', 'Research focus', 'Disease prevention', 'Data-driven'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'public-health-specialist',
      name: 'Public Health Specialist',
      summary: 'Develop and implement public health programs and policies.',
      responsibilities: [
        'Develop health programs',
        'Analyze health data',
        'Create policies',
        'Educate communities',
        'Evaluate outcomes'
      ],
      skills: ['Public Health', 'Program Management', 'Communication', 'Research', 'Leadership'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Master\'s in Public Health (MPH)',
      degrees: ['Master of Public Health (MPH)', 'Master of Public Health Administration', 'Master of Science in Public Health'],
      degreeCost: '$25,000 - $60,000 (Master)',
      salary: '$55,000 - $105,000',
      careerPath: 'Public Health Specialist → Senior Specialist → Program Manager → Director',
      environment: ['Population health', 'Community focus', 'Prevention', 'Policy impact'],
      jobGrowth: '9% growth through 2032'
    },
    {
      id: 'speech-pathologist',
      name: 'Speech-Language Pathologist',
      summary: 'Help patients with communication and speech disorders.',
      responsibilities: [
        'Assess speech disorders',
        'Develop treatment plans',
        'Provide therapy',
        'Monitor progress',
        'Educate patients'
      ],
      skills: ['Speech Pathology', 'Communication', 'Patient Care', 'Problem-solving', 'Empathy'],
      talentFit: 'People-Oriented Helper',
      education: 'Master\'s in Speech-Language Pathology + License',
      degrees: ['Master of Science in Speech-Language Pathology', 'Master of Arts in Speech-Language Pathology', 'Certificate of Clinical Competence (CCC-SLP)'],
      degreeCost: '$40,000 - $100,000 (Master) + $500 - $2,000 (certification)',
      salary: '$80,000 - $130,000',
      careerPath: 'SLP → Senior SLP → Speech Manager → Clinical Director',
      environment: ['Communication focus', 'Patient interaction', 'Therapeutic goal', 'Education'],
      jobGrowth: '21% growth through 2032'
    },
    {
      id: 'respiratory-therapist',
      name: 'Respiratory Therapist',
      summary: 'Help patients with respiratory and breathing problems.',
      responsibilities: [
        'Assess respiratory patients',
        'Operate respiratory equipment',
        'Provide treatments',
        'Monitor patient status',
        'Maintain equipment'
      ],
      skills: ['Respiratory Therapy', 'Medical Knowledge', 'Technical Skills', 'Patient Care', 'Problem-solving'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'Associate\'s or Bachelor\'s in Respiratory Therapy + License',
      degrees: ['Bachelor of Science in Respiratory Therapy', 'Associate Degree in Respiratory Therapy', 'Registered Respiratory Therapist (RRT) certification'],
      degreeCost: '$30,000 - $80,000 (Bachelor) or $15,000 - $40,000 (Associate)',
      salary: '$70,000 - $110,000',
      careerPath: 'Respiratory Therapist → Senior RT → Supervisor → Manager',
      environment: ['Hospital setting', 'Technical equipment', 'Patient care', 'Critical focus'],
      jobGrowth: '17% growth through 2032'
    },
    {
      id: 'veterinarian',
      name: 'Veterinarian',
      summary: 'Provide medical care and treatment for animals.',
      responsibilities: [
        'Examine animals',
        'Diagnose diseases',
        'Perform surgeries',
        'Prescribe medications',
        'Provide preventive care'
      ],
      skills: ['Veterinary Medicine', 'Animal Care', 'Surgery Skills', 'Problem-solving', 'Communication'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'Doctor of Veterinary Medicine (DVM) + License',
      degrees: ['Doctor of Veterinary Medicine (DVM)', 'Veterinary Medical Exam (NAVLE)', 'State veterinary license'],
      degreeCost: '$100,000 - $200,000 (DVM) + $1,000 - $2,000 (licensure)',
      salary: '$95,000 - $150,000',
      careerPath: 'Veterinarian → Senior Vet → Clinic Owner → Hospital Director',
      environment: ['Animal health', 'Medical practice', 'Hands-on', 'Own practice possible'],
      jobGrowth: '18% growth through 2032'
    },
    {
      id: 'allergist-immunologist',
      name: 'Allergists and Immunologists',
      summary: 'Diagnose and treat allergic and immune system disorders.',
      responsibilities: [
        'Diagnose allergies',
        'Perform allergy testing',
        'Develop treatment plans',
        'Manage immune disorders',
        'Educate patients'
      ],
      skills: ['Allergy Knowledge', 'Diagnostic Skills', 'Patient Communication', 'Research', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'Medical School + 2-3 Year Allergy Fellowship',
      degrees: ['Doctor of Medicine (MD) or DO', 'Allergy and Immunology fellowship training', 'Board certification'],
      degreeCost: '$150,000 - $300,000 (Medical school), Fellowship (often funded), $3,000 - $8,000 (board exam)',
      salary: '$200,000 - $350,000+',
      careerPath: 'Resident → Allergist → Senior Physician → Specialist Lead',
      environment: ['Medical practice', 'Research opportunity', 'Specialized', 'Patient care'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'ambulance-driver',
      name: 'Ambulance Drivers and Attendants, Except Emergency Medical Technicians',
      summary: 'Operate ambulances and provide patient transport to medical facilities.',
      responsibilities: [
        'Operate ambulance safely',
        'Transport patients',
        'Communicate with dispatch',
        'Maintain vehicle',
        'Document transports'
      ],
      skills: ['Driving', 'Map Navigation', 'Customer Service', 'Safety Protocol', 'Communication'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School + Commercial Driver License + Training',
      degrees: ['High School Diploma/GED', 'Commercial Driver License (CDL)', 'Emergency Medical Technician (EMT) training (optional)'],
      degreeCost: '$500 - $2,000 (CDL + training)',
      salary: '$35,000 - $65,000',
      careerPath: 'Ambulance Driver → Senior Driver → Supervisor',
      environment: ['Emergency services', 'Patient transport', 'Driving focus', 'Community service'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'anesthesiologist-assistant',
      name: 'Anesthesiologist Assistants',
      summary: 'Provide anesthesia care under physician supervision.',
      responsibilities: [
        'Prepare anesthesia equipment',
        'Administer anesthesia',
        'Monitor patient status',
        'Manage airways',
        'Document anesthesia'
      ],
      skills: ['Anesthesia Knowledge', 'Patient Monitoring', 'Technical Skills', 'Problem-solving', 'Precision'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s + Master\'s in Anesthesia + Certification',
      degrees: ['Bachelor of Science in an allied health field', 'Master of Science in Anesthesia', 'Certified Anesthesiologist Assistant (CAA) certification'],
      degreeCost: '$40,000 - $80,000 (Bachelor) + $50,000 - $100,000 (Master) + $1,000 - $2,000 (certification)',
      salary: '$120,000 - $160,000',
      careerPath: 'Assistant → Senior Assistant → Lead Assistant',
      environment: ['Operating room', 'High stakes', 'Technical', 'Healthcare'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'anesthesiologist',
      name: 'Anesthesiologists',
      summary: 'Administer anesthesia and manage patient care during surgery.',
      responsibilities: [
        'Assess patient anesthesia needs',
        'Administer anesthesia',
        'Monitor vital signs',
        'Manage airways and breathing',
        'Manage pain'
      ],
      skills: ['Anesthesiology', 'Patient Assessment', 'Clinical Decision-making', 'Leadership', 'Emergency Response'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Medical School + 4-5 Year Anesthesia Residency',
      degrees: ['Doctor of Medicine (MD) or DO', 'Anesthesiology residency training', 'Board certification in anesthesiology'],
      degreeCost: '$150,000 - $300,000 (Medical school) + residency (often funded), $3,000 - $8,000 (board exam)',
      salary: '$250,000 - $400,000+',
      careerPath: 'Resident → Anesthesiologist → Senior Physician → Department Head',
      environment: ['Operating rooms', 'High responsibility', 'Critical care', 'Healthcare leadership'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'art-therapist',
      name: 'Art Therapist',
      summary: 'Use art to help clients express emotions and improve mental health.',
      responsibilities: [
        'Facilitate art activities',
        'Assess artistic expression',
        'Develop treatment plans',
        'Document progress',
        'Collaborate with team'
      ],
      skills: ['Art Therapy', 'Psychology', 'Creativity', 'Empathy', 'Communication'],
      talentFit: 'People-Oriented Helper, Creative Thinker',
      education: 'Master\'s in Art Therapy + Certification/License',
      degrees: ['Master of Science in Art Therapy', 'Master of Arts in Art Therapy', 'Art Therapy Credentials Board (ATCB) certification'],
      degreeCost: '$40,000 - $80,000 (Master) + $500 - $2,000 (certification)',
      salary: '$50,000 - $95,000',
      careerPath: 'Art Therapist → Senior Therapist → Clinic Manager → Director',
      environment: ['Therapeutic focus', 'Creative expression', 'Mental health', 'Patient care'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'athletic-trainer',
      name: 'Athletic Trainer',
      summary: 'Prevent, diagnose, and treat athletic injuries and illnesses.',
      responsibilities: [
        'Assess injuries',
        'Provide emergency care',
        'Develop treatment plans',
        'Rehabilitation programs',
        'Injury prevention'
      ],
      skills: ['Athletic Training', 'First Aid', 'Anatomy', 'Sports Medicine', 'Patient Care'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'Bachelor\'s in Athletic Training + Certification',
      degrees: ['Bachelor of Science in Athletic Training', 'ATA Athletic Training Certification', 'State athletic training license (if applicable)'],
      degreeCost: '$40,000 - $80,000 (Bachelor) + $300 - $1,000 (certification)',
      salary: '$55,000 - $100,000',
      careerPath: 'Athletic Trainer → Senior Trainer → Head Trainer → Sports Medicine Manager',
      environment: ['Sports focus', 'Athletic performance', 'Hands-on care', 'Team environment'],
      jobGrowth: '16% growth through 2032'
    },
    {
      id: 'audiologist',
      name: 'Audiologist',
      summary: 'Diagnose and treat hearing and balance disorders.',
      responsibilities: [
        'Conduct hearing tests',
        'Diagnose hearing loss',
        'Fit hearing aids',
        'Manage treatment',
        'Educate patients'
      ],
      skills: ['Audiology', 'Patient Assessment', 'Hearing Technology', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'Doctor of Audiology (AuD) + License',
      degrees: ['Doctor of Audiology (AuD)', 'Audiologist license (by state)', 'Audiology board certification exam'],
      degreeCost: '$70,000 - $120,000 (AuD) + $500 - $2,000 (licensure)',
      salary: '$80,000 - $130,000',
      careerPath: 'Audiologist → Senior Audiologist → Clinic Director',
      environment: ['Hearing health', 'Patient care', 'Medical technology', 'Healthcare'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'cardiovascular-technologist',
      name: 'Cardiovascular Technologist and Technician',
      summary: 'Perform tests and operate equipment for cardiac patients.',
      responsibilities: [
        'Prepare patients',
        'Operate equipment',
        'Monitor vitals',
        'Record data',
        'Assist physicians'
      ],
      skills: ['Cardiovascular Systems', 'Equipment Operation', 'Patient Care', 'Technical Skills', 'Attention to Detail'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'Associate\'s in cardiovascular technology',
      degrees: ['Associate Degree in Cardiovascular Technology', 'Associate Degree in Clinical Cardiac Science', 'Registered Cardiac Sonographer (RCS) certification'],
      degreeCost: '$20,000 - $45,000 (Associate) + $500 - $1,500 (certification)',
      salary: '$60,000 - $105,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Supervisor',
      environment: ['Hospital', 'Cardiac center', 'Medical equipment', 'Patient-focused'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'chiropractor',
      name: 'Chiropractor',
      summary: 'Treat musculoskeletal problems through spinal manipulation.',
      responsibilities: [
        'Examine patients',
        'Diagnose issues',
        'Perform adjustments',
        'Develop treatment plans',
        'Educate patients'
      ],
      skills: ['Chiropractic', 'Patient Care', 'Communication', 'Problem-solving', 'Anatomy Knowledge'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'Doctor of Chiropractic (DC) + License',
      degrees: ['Doctor of Chiropractic (DC)', 'Chiropractic Board exam', 'State chiropractic license'],
      degreeCost: '$80,000 - $150,000 (Doctor of Chiropractic) + $1,000 - $2,000 (licensure)',
      salary: '$70,000 - $140,000',
      careerPath: 'Chiropractor → Senior Practitioner → Clinic Owner',
      environment: ['Chiropractic clinic', 'Patient care', 'Private practice', 'Hands-on'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'claims-adjuster',
      name: 'Claims Adjuster, Examiner, and Investigator',
      summary: 'Investigate insurance claims and determine payouts.',
      responsibilities: [
        'Investigate claims',
        'Review documents',
        'Determine liability',
        'Calculate payouts',
        'Prepare reports'
      ],
      skills: ['Investigation', 'Analysis', 'Attention to Detail', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School, insurance license required',
      salary: '$65,000 - $120,000',
      careerPath: 'Adjuster → Senior Adjuster → Manager',
      environment: ['Insurance office', 'Field investigations', 'Documentation', 'Problem-solving'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'claims-examiner-property',
      name: 'Claims Examiner, Property and Casualty Insurance',
      summary: 'Examine property and casualty insurance claims.',
      responsibilities: [
        'Review claims',
        'Verify information',
        'Assess damages',
        'Determine coverage',
        'Process payments'
      ],
      skills: ['Claims Analysis', 'Attention to Detail', 'Investigation', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School, insurance license required',
      salary: '$60,000 - $110,000',
      careerPath: 'Examiner → Senior Examiner → Claims Manager',
      environment: ['Insurance office', 'Claims processing', 'Detail-focused', 'Customer contact'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'clinical-nurse-specialist',
      name: 'Clinical Nurse Specialist',
      summary: 'Provide specialized nursing care in clinical settings.',
      responsibilities: [
        'Provide patient care',
        'Develop protocols',
        'Educate staff',
        'Consult on cases',
        'Manage patient outcomes'
      ],
      skills: ['Nursing', 'Clinical Expertise', 'Teaching', 'Problem-solving', 'Leadership'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Master\'s in Nursing + License',
      salary: '$80,000 - $145,000',
      careerPath: 'Nurse → Clinical Specialist → Nurse Manager → Director',
      environment: ['Hospital', 'Clinical setting', 'Patient care', 'Advanced practice'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'clinical-psychologist',
      name: 'Clinical Psychologist',
      summary: 'Diagnose and treat mental health disorders.',
      responsibilities: [
        'Assess patients',
        'Diagnose conditions',
        'Provide therapy',
        'Conduct research',
        'Document records'
      ],
      skills: ['Psychology', 'Counseling', 'Problem-solving', 'Research', 'Communication'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'PhD or PsyD in Psychology + License',
      salary: '$80,000 - $150,000',
      careerPath: 'Psychologist → Senior Practitioner → Clinic Director',
      environment: ['Private practice', 'Hospital', 'Mental health', 'Counseling focus'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'clinical-research-coordinator',
      name: 'Clinical Research Coordinator',
      summary: 'Coordinate clinical trials and research studies.',
      responsibilities: [
        'Recruit participants',
        'Manage records',
        'Monitor trials',
        'Collect data',
        'Ensure compliance'
      ],
      skills: ['Research', 'Organization', 'Attention to Detail', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in biology, nursing, or health',
      salary: '$50,000 - $95,000',
      careerPath: 'Coordinator → Senior Coordinator → Research Manager',
      environment: ['Research center', 'Hospital', 'Clinical trials', 'Collaborative'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'counseling-psychologist',
      name: 'Counseling Psychologist',
      summary: 'Provide counseling and psychological support to clients.',
      responsibilities: [
        'Counsel clients',
        'Develop treatment plans',
        'Assess needs',
        'Conduct research',
        'Document progress'
      ],
      skills: ['Counseling', 'Psychology', 'Empathy', 'Problem-solving', 'Communication'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'PhD or PsyD in Psychology + License',
      salary: '$75,000 - $145,000',
      careerPath: 'Psychologist → Senior Counselor → Practice Owner',
      environment: ['Private practice', 'Counseling center', 'Mental health', 'Therapeutic'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'critical-care-nurse',
      name: 'Critical Care Nurse',
      summary: 'Provide intensive nursing care to critically ill patients.',
      responsibilities: [
        'Monitor vitals',
        'Administer medications',
        'Assist physicians',
        'Advocate for patients',
        'Manage equipment'
      ],
      skills: ['Critical Care Nursing', 'Attention to Detail', 'Quick Decision-making', 'Patient Care', 'Technical Skills'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Bachelor\'s in Nursing + License + ICU training',
      salary: '$70,000 - $130,000',
      careerPath: 'Nurse → Charge Nurse → Nurse Manager → Director',
      environment: ['Hospital ICU', 'Critical care', 'Intensive', 'High-pressure'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'cytogenetic-technologist',
      name: 'Cytogenetic Technologist',
      summary: 'Analyze cell samples to detect genetic abnormalities.',
      responsibilities: [
        'Prepare slides',
        'Analyze cells',
        'Identify abnormalities',
        'Document findings',
        'Assist physicians'
      ],
      skills: ['Cell Analysis', 'Genetics', 'Microscopy', 'Attention to Detail', 'Laboratory Skills'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Cytogenetics',
      salary: '$55,000 - $105,000',
      careerPath: 'Technologist → Senior Technologist → Lead Tech',
      environment: ['Medical lab', 'Hospital', 'Genetic testing', 'Technical'],
      jobGrowth: '14% growth through 2032'
    },
    {
      id: 'cytotechnologist',
      name: 'Cytotechnologist',
      summary: 'Examine cell samples to detect disease.',
      responsibilities: [
        'Prepare specimens',
        'Examine cells',
        'Identify abnormalities',
        'Document findings',
        'Assist pathologists'
      ],
      skills: ['Cell Examination', 'Microscopy', 'Disease Recognition', 'Attention to Detail', 'Lab Skills'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Cytotechnology',
      salary: '$55,000 - $105,000',
      careerPath: 'Technologist → Senior Technologist → Lab Manager',
      environment: ['Medical lab', 'Hospital', 'Pathology', 'Technical'],
      jobGrowth: '12% growth through 2032'
    },
    {
      id: 'dental-assistant',
      name: 'Dental Assistant',
      summary: 'Assist dentists and hygienists in dental care.',
      responsibilities: [
        'Prepare patients',
        'Assist procedures',
        'Sterilize equipment',
        'Take radiographs',
        'Schedule appointments'
      ],
      skills: ['Dental Assisting', 'Patient Care', 'Organization', 'Communication', 'Sterilization'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or Associate\'s + dental assisting certification',
      salary: '$38,000 - $70,000',
      careerPath: 'Assistant → Senior Assistant → Office Manager',
      environment: ['Dental office', 'Patient care', 'Clinical', 'Team-based'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'dental-hygienist',
      name: 'Dental Hygienist',
      summary: 'Clean teeth and educate patients on dental care.',
      responsibilities: [
        'Clean teeth',
        'Take radiographs',
        'Apply treatments',
        'Educate patients',
        'Assist dentists'
      ],
      skills: ['Dental Hygiene', 'Patient Education', 'Communication', 'Clinical Skills', 'Organization'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'Associate\'s in Dental Hygiene + License',
      salary: '$75,000 - $135,000',
      careerPath: 'Hygienist → Senior Hygienist → Office Manager',
      environment: ['Dental office', 'Clinic', 'Patient care', 'Clinical settings'],
      jobGrowth: '16% growth through 2032'
    },
    {
      id: 'dental-laboratory-technician',
      name: 'Dental Laboratory Technician',
      summary: 'Create dental prosthetics and devices.',
      responsibilities: [
        'Create prosthetics',
        'Make crowns',
        'Build dentures',
        'Maintain quality',
        'Follow specifications'
      ],
      skills: ['Dental Prosthetics', 'Precision', 'Attention to Detail', 'Manual Dexterity', 'Technical Knowledge'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School or Associate\'s + dental lab training',
      salary: '$40,000 - $80,000',
      careerPath: 'Technician → Senior Tech → Lab Manager',
      environment: ['Dental lab', 'Technical', 'Precision work', 'Quality-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'dentist-specialist',
      name: 'Dentist, All Other Specialist',
      summary: 'Provide specialized dental care.',
      responsibilities: [
        'Treat patients',
        'Perform procedures',
        'Diagnose conditions',
        'Manage practice',
        'Refer specialists'
      ],
      skills: ['Dentistry', 'Patient Care', 'Problem-solving', 'Leadership', 'Communication'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'DDS/DMD + Board Certification',
      salary: '$150,000 - $300,000+',
      careerPath: 'Dentist → Senior Dentist → Practice Owner',
      environment: ['Dental office', 'Specialty practice', 'Patient care', 'Clinical'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'dentist-general',
      name: 'Dentist, General',
      summary: 'Provide comprehensive dental care to patients.',
      responsibilities: [
        'Treat patients',
        'Perform procedures',
        'Diagnose issues',
        'Manage practice',
        'Refer specialists'
      ],
      skills: ['Dentistry', 'Patient Care', 'Leadership', 'Communication', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'DDS/DMD + License',
      salary: '$150,000 - $250,000',
      careerPath: 'Dentist → Senior Dentist → Practice Owner',
      environment: ['Dental practice', 'Clinic', 'Private practice', 'Patient-focused'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'dermatologist',
      name: 'Dermatologist',
      summary: 'Diagnose and treat skin conditions.',
      responsibilities: [
        'Examine patients',
        'Diagnose conditions',
        'Treat skin issues',
        'Perform procedures',
        'Conduct research'
      ],
      skills: ['Dermatology', 'Medical Knowledge', 'Patient Care', 'Diagnosis', 'Communication'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'MD/DO + Dermatology residency + License',
      salary: '$180,000 - $350,000',
      careerPath: 'Physician → Senior Dermatologist → Practice Owner',
      environment: ['Medical practice', 'Hospital', 'Research', 'Specialty care'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'diagnostic-medical-sonographer',
      name: 'Diagnostic Medical Sonographer',
      summary: 'Use ultrasound to create images for diagnosis.',
      responsibilities: [
        'Perform ultrasounds',
        'Create images',
        'Record findings',
        'Assist physicians',
        'Maintain equipment'
      ],
      skills: ['Ultrasound', 'Medical Technology', 'Patient Care', 'Attention to Detail', 'Communication'],
      talentFit: 'Technical Aptitude, People-Oriented Helper',
      education: 'Associate\'s or Bachelor\'s in Sonography + Certification',
      salary: '$65,000 - $125,000',
      careerPath: 'Sonographer → Senior Sonographer → Lead Tech',
      environment: ['Hospital', 'Imaging center', 'Clinical', 'Patient-focused'],
      jobGrowth: '17% growth through 2032'
    },
    {
      id: 'dietetic-technician',
      name: 'Dietetic Technician',
      summary: 'Support dietitians in food and nutrition services.',
      responsibilities: [
        'Plan menus',
        'Prepare food',
        'Monitor nutrition',
        'Assist dietitians',
        'Educate patients'
      ],
      skills: ['Nutrition', 'Food Service', 'Organization', 'Communication', 'Food Preparation'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'Associate\'s in Dietetics + Internship',
      salary: '$35,000 - $65,000',
      careerPath: 'Technician → Senior Tech → Dietary Manager',
      environment: ['Hospital', 'Food service', 'Healthcare', 'Nutrition focus'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'dietitian-nutritionist',
      name: 'Dietitian and Nutritionist',
      summary: 'Provide nutrition counseling and meal planning.',
      responsibilities: [
        'Assess nutrition',
        'Develop plans',
        'Counsel clients',
        'Conduct research',
        'Monitor progress'
      ],
      skills: ['Nutrition Science', 'Counseling', 'Communication', 'Organization', 'Research'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Bachelor\'s in Nutrition + Registration',
      salary: '$60,000 - $120,000',
      careerPath: 'Dietitian → Senior Dietitian → Manager',
      environment: ['Hospital', 'Clinic', 'Private practice', 'Corporate wellness'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'endoscopy-technician',
      name: 'Endoscopy Technician',
      summary: 'Assist with endoscopic procedures.',
      responsibilities: [
        'Prepare equipment',
        'Assist procedures',
        'Handle instruments',
        'Sterilize tools',
        'Monitor patient'
      ],
      skills: ['Endoscopy', 'Patient Care', 'Sterilization', 'Technical Skills', 'Attention to Detail'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or Associate\'s + endoscopy training',
      salary: '$40,000 - $75,000',
      careerPath: 'Technician → Senior Tech → Procedures Manager',
      environment: ['Hospital', 'Surgical center', 'Clinical', 'Technical'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'exercise-physiologist',
      name: 'Exercise Physiologist',
      summary: 'Apply exercise science to improve health.',
      responsibilities: [
        'Assess fitness',
        'Design programs',
        'Educate clients',
        'Monitor progress',
        'Conduct research'
      ],
      skills: ['Exercise Science', 'Program Design', 'Communication', 'Teaching', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Bachelor\'s or Master\'s in exercise physiology',
      salary: '$60,000 - $110,000',
      careerPath: 'Physiologist → Senior Specialist → Program Director',
      environment: ['Hospital', 'Fitness center', 'Research', 'Wellness focus'],
      jobGrowth: '12% growth through 2032'
    },
    {
      id: 'epidemiologist',
      name: 'Epidemiologist',
      summary: 'Study disease patterns and outbreaks.',
      responsibilities: [
        'Conduct research',
        'Investigate outbreaks',
        'Analyze data',
        'Develop recommendations',
        'Present findings'
      ],
      skills: ['Epidemiology', 'Research', 'Data Analysis', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver',
      education: 'Master\'s or PhD in epidemiology',
      salary: '$80,000 - $155,000',
      careerPath: 'Epidemiologist → Senior Epidemiologist → Disease Director',
      environment: ['Public health', 'CDC', 'Research', 'Government'],
      jobGrowth: '32% growth through 2032'
    },
    {
      id: 'health-diagnosing-treating-practitioners-all-other',
      name: 'Health Diagnosing and Treating Practitioners, All Other',
      summary: 'Provide diagnostic and treatment services in specialized health roles.',
      responsibilities: [
        'Assess patient conditions',
        'Perform diagnostic procedures',
        'Develop treatment plans',
        'Document care',
        'Collaborate with care teams'
      ],
      skills: ['Clinical Knowledge', 'Assessment', 'Communication', 'Empathy', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'Bachelor\'s or Master\'s in health field + licensure',
      salary: '$70,000 - $140,000',
      careerPath: 'Practitioner → Senior Practitioner → Clinical Lead',
      environment: ['Clinics', 'Hospitals', 'Patient care', 'Team-based'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'health-educators',
      name: 'Health Educators',
      summary: 'Plan and deliver programs that promote health and wellness.',
      responsibilities: [
        'Assess community needs',
        'Design health programs',
        'Teach workshops',
        'Create educational materials',
        'Evaluate program outcomes'
      ],
      skills: ['Health Education', 'Communication', 'Program Planning', 'Data Analysis', 'Outreach'],
      talentFit: 'People-Oriented Helper, Creative Thinker',
      education: 'Bachelor\'s in public health or health education',
      salary: '$45,000 - $80,000',
      careerPath: 'Educator → Program Coordinator → Health Program Manager',
      environment: ['Community', 'Schools', 'Public health', 'Outreach'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'health-technologists-technicians-all-other',
      name: 'Health Technologists and Technicians, All Other',
      summary: 'Provide technical support for diagnostic and treatment services.',
      responsibilities: [
        'Operate medical equipment',
        'Collect samples',
        'Assist clinicians',
        'Maintain records',
        'Ensure safety protocols'
      ],
      skills: ['Medical Technology', 'Attention to Detail', 'Safety', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'Associate\'s or Bachelor\'s + certification',
      salary: '$45,000 - $80,000',
      careerPath: 'Technician → Senior Technician → Lead Tech',
      environment: ['Hospitals', 'Labs', 'Clinical', 'Technical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'healthcare-practitioners-technical-all-other',
      name: 'Healthcare Practitioners and Technical Workers, All Other',
      summary: 'Provide specialized healthcare services not classified elsewhere.',
      responsibilities: [
        'Deliver patient care',
        'Perform specialized procedures',
        'Document treatment',
        'Coordinate with providers',
        'Follow clinical protocols'
      ],
      skills: ['Clinical Skills', 'Attention to Detail', 'Communication', 'Empathy', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'Bachelor\'s or Master\'s in health field + licensure',
      salary: '$60,000 - $120,000',
      careerPath: 'Practitioner → Senior Practitioner → Clinical Supervisor',
      environment: ['Healthcare facilities', 'Patient care', 'Team-based', 'Clinical'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'healthcare-support-workers-all-other',
      name: 'Healthcare Support Workers, All Other',
      summary: 'Provide support services to healthcare staff and patients.',
      responsibilities: [
        'Assist patient care tasks',
        'Transport patients',
        'Restock supplies',
        'Sanitize areas',
        'Report changes to staff'
      ],
      skills: ['Compassion', 'Communication', 'Teamwork', 'Physical Stamina', 'Attention to Detail'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + healthcare training',
      salary: '$30,000 - $50,000',
      careerPath: 'Support Worker → Senior Support → Supervisor',
      environment: ['Hospitals', 'Clinics', 'Patient support', 'Fast-paced'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'hearing-aid-specialists',
      name: 'Hearing Aid Specialists',
      summary: 'Test hearing and fit hearing aids for clients.',
      responsibilities: [
        'Conduct hearing tests',
        'Fit hearing aids',
        'Adjust devices',
        'Educate clients',
        'Maintain records'
      ],
      skills: ['Hearing Assessment', 'Customer Service', 'Attention to Detail', 'Communication', 'Technical Skills'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School + certification/licensure',
      salary: '$45,000 - $85,000',
      careerPath: 'Specialist → Senior Specialist → Practice Manager',
      environment: ['Clinics', 'Retail hearing centers', 'Client focused', 'Technical'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'histotechnologists-histologic-technicians',
      name: 'Histotechnologists and Histologic Technicians',
      summary: 'Prepare tissue samples for microscopic examination.',
      responsibilities: [
        'Process tissue specimens',
        'Prepare slides and stains',
        'Operate lab equipment',
        'Maintain lab quality',
        'Document results'
      ],
      skills: ['Lab Techniques', 'Microscopy', 'Attention to Detail', 'Safety', 'Documentation'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Associate\'s or Bachelor\'s + certification',
      salary: '$50,000 - $80,000',
      careerPath: 'Technician → Senior Technician → Lab Supervisor',
      environment: ['Medical labs', 'Hospitals', 'Technical', 'Detail-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'home-health-aides',
      name: 'Home Health Aides',
      summary: 'Provide personal care and support to clients in their homes.',
      responsibilities: [
        'Assist with daily living',
        'Monitor basic health signs',
        'Provide companionship',
        'Support mobility',
        'Report changes to nurses'
      ],
      skills: ['Caregiving', 'Empathy', 'Communication', 'Patience', 'Reliability'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + caregiving training',
      salary: '$28,000 - $40,000',
      careerPath: 'Aide → Senior Aide → Care Coordinator',
      environment: ['Client homes', 'In-home care', 'Independent', 'Supportive'],
      jobGrowth: '22% growth through 2032'
    },
    {
      id: 'hospitalists',
      name: 'Hospitalists',
      summary: 'Provide medical care for hospitalized patients.',
      responsibilities: [
        'Conduct daily rounds',
        'Manage inpatient care',
        'Coordinate with specialists',
        'Document treatment plans',
        'Plan discharges'
      ],
      skills: ['Internal Medicine', 'Decision-making', 'Communication', 'Teamwork', 'Diagnostics'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'MD/DO + residency',
      salary: '$200,000 - $350,000',
      careerPath: 'Hospitalist → Lead Hospitalist → Medical Director',
      environment: ['Hospitals', 'Inpatient care', 'Fast-paced', 'Team-based'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'informatics-nurse-specialists',
      name: 'Informatics Nurse Specialists',
      summary: 'Apply nursing expertise to health information systems and data.',
      responsibilities: [
        'Optimize clinical systems',
        'Analyze care data',
        'Train clinical staff',
        'Improve workflows',
        'Ensure compliance'
      ],
      skills: ['Nursing', 'Informatics', 'Data Analysis', 'Communication', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'BSN + informatics training',
      salary: '$85,000 - $140,000',
      careerPath: 'Specialist → Senior Specialist → Clinical Informatics Manager',
      environment: ['Hospitals', 'IT departments', 'Clinical systems', 'Project-based'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'internists-general',
      name: 'Internists, General',
      summary: 'Diagnose and treat adult illnesses and chronic conditions.',
      responsibilities: [
        'Examine adult patients',
        'Order and interpret tests',
        'Develop treatment plans',
        'Coordinate specialist care',
        'Document medical records'
      ],
      skills: ['Internal Medicine', 'Diagnostics', 'Communication', 'Empathy', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'MD/DO + residency',
      salary: '$190,000 - $300,000',
      careerPath: 'Internist → Senior Internist → Medical Director',
      environment: ['Clinics', 'Hospitals', 'Patient care', 'Team-based'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  hospitality: [
    {
      id: 'amusement-recreation-attendant',
      name: 'Amusement and Recreation Attendant',
      summary: 'Provide customer service and operations support at recreational facilities.',
      responsibilities: [
        'Assist with recreational activities',
        'Provide customer service',
        'Maintain facilities',
        'Ensure safety protocols',
        'Collect fees'
      ],
      skills: ['Customer Service', 'Safety Protocol', 'Communication', 'Problem-solving', 'Physical Fitness'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School',
      salary: '$25,000 - $45,000',
      careerPath: 'Attendant → Lead Attendant → Supervisor → Manager',
      environment: ['Recreation facilities', 'Customer service', 'Physical work', 'Team-based'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'hotel-manager',
      name: 'Hotel Manager',
      summary: 'Manage daily operations of hotels and ensure guest satisfaction.',
      responsibilities: [
        'Oversee hotel operations',
        'Manage staff',
        'Ensure guest satisfaction',
        'Control budgets',
        'Maintain quality standards'
      ],
      skills: ['Leadership', 'Customer Service', 'Organization', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'Bachelor\'s in Hospitality Management or related',
      salary: '$50,000 - $100,000',
      careerPath: 'Assistant Manager → Manager → General Manager → Regional Manager',
      environment: ['Customer service', 'Team leadership', '24/7 operations', 'Guest focus'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'chef',
      name: 'Chef / Head Cook',
      summary: 'Plan menus and prepare high-quality meals in restaurants.',
      responsibilities: [
        'Create menus',
        'Prepare dishes',
        'Oversee kitchen',
        'Manage food costs',
        'Ensure food quality'
      ],
      skills: ['Culinary Skills', 'Leadership', 'Creativity', 'Time Management', 'Quality Control'],
      talentFit: 'Creative Thinker, Practical Builder',
      education: 'Culinary School or apprenticeship',
      salary: '$50,000 - $120,000+',
      careerPath: 'Sous Chef → Head Chef → Executive Chef → Restaurant Owner',
      environment: ['Hands-on cooking', 'Leadership', 'Creativity', 'Fast-paced'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'tour-guide',
      name: 'Tour Guide / Tour Operator',
      summary: 'Guide tourists and provide information about destinations.',
      responsibilities: [
        'Lead tour groups',
        'Provide destination information',
        'Ensure guest safety',
        'Plan itineraries',
        'Manage group dynamics'
      ],
      skills: ['Communication', 'Hospitality', 'Safety Knowledge', 'Organization', 'Enthusiasm'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + Specialized Training',
      salary: '$35,000 - $70,000',
      careerPath: 'Tour Guide → Tour Manager → Tour Operator Owner',
      environment: ['Travel', 'Guest interaction', 'Education', 'Outdoor work'],
      jobGrowth: 'Variable with tourism'
    },
    {
      id: 'bartender',
      name: 'Bartender',
      summary: 'Mix and serve drinks to customers in bars and restaurants.',
      responsibilities: [
        'Mix cocktails',
        'Serve drinks',
        'Manage inventory',
        'Process payments',
        'Ensure customer satisfaction'
      ],
      skills: ['Mixology', 'Customer Service', 'Fast-paced Work', 'Communication', 'Product Knowledge'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + Bartending Training',
      salary: '$30,000 - $70,000+ (salary + tips)',
      careerPath: 'Bartender → Bar Manager → Bar Owner',
      environment: ['Customer interaction', 'Fast-paced', 'Social environment', 'Evening work'],
      jobGrowth: 'Stable'
    },
    {
      id: 'flight-attendant',
      name: 'Flight Attendant',
      summary: 'Provide service and ensure safety for airline passengers.',
      responsibilities: [
        'Serve passengers',
        'Ensure flight safety',
        'Assist with boarding',
        'Handle emergencies',
        'Maintain aircraft service'
      ],
      skills: ['Customer Service', 'Safety Training', 'Communication', 'Physical Stamina', 'Flexibility'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + Flight Attendant Training + Background Check',
      salary: '$40,000 - $80,000',
      careerPath: 'Flight Attendant → Purser → Crew Leader',
      environment: ['Travel', 'Customer service', 'Safety focus', 'Irregular schedule'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'restaurant-manager',
      name: 'Restaurant Manager',
      summary: 'Manage restaurant operations and customer service.',
      responsibilities: [
        'Oversee restaurant operations',
        'Manage staff',
        'Ensure customer satisfaction',
        'Control budgets',
        'Maintain quality standards'
      ],
      skills: ['Leadership', 'Customer Service', 'Organization', 'Financial Management', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School or Bachelor\'s in Hospitality Management',
      salary: '$45,000 - $85,000',
      careerPath: 'Assistant Manager → Manager → District Manager → Regional Manager',
      environment: ['Food service', 'Customer interaction', 'Team leadership', 'Fast-paced'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'sous-chef',
      name: 'Sous Chef',
      summary: 'Assist executive chef in kitchen operations.',
      responsibilities: [
        'Supervise kitchen staff',
        'Prepare dishes',
        'Manage food quality',
        'Control food costs',
        'Train kitchen staff'
      ],
      skills: ['Culinary Skills', 'Leadership', 'Kitchen Management', 'Creativity', 'Organization'],
      talentFit: 'Leadership & Visionary, Practical Builder',
      education: 'Culinary School Graduate + Experience',
      salary: '$50,000 - $95,000',
      careerPath: 'Line Cook → Sous Chef → Executive Chef → Chef/Owner',
      environment: ['Kitchen work', 'Leadership', 'Fast-paced', 'Hands-on cooking'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'pastry-chef',
      name: 'Pastry Chef',
      summary: 'Create and prepare pastries, baked goods, and desserts.',
      responsibilities: [
        'Create pastries',
        'Prepare baked goods',
        'Design desserts',
        'Manage bakery',
        'Control quality'
      ],
      skills: ['Baking Skills', 'Creativity', 'Precision', 'Organization', 'Flavor Knowledge'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'Culinary School focusing on Pastry',
      salary: '$45,000 - $85,000',
      careerPath: 'Pastry Cook → Pastry Chef → Executive Chef',
      environment: ['Bakery/Kitchen', 'Creativity', 'Precision', 'Artistry'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'sommelier',
      name: 'Sommelier / Wine Specialist',
      summary: 'Advise on wine selection and food pairings.',
      responsibilities: [
        'Select wines',
        'Advise customers',
        'Pair wine with food',
        'Manage wine inventory',
        'Train staff'
      ],
      skills: ['Wine Knowledge', 'Communication', 'Taste/Smell', 'Sales', 'Customer Service'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School + Wine Training/Certification',
      salary: '$45,000 - $90,000',
      careerPath: 'Wine Server → Sommelier → Wine Director',
      environment: ['Fine dining', 'Wine focus', 'Customer interaction', 'Expertise'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'concierge',
      name: 'Concierge',
      summary: 'Assist hotel guests with special requests and recommendations.',
      responsibilities: [
        'Assist guests',
        'Make reservations',
        'Provide recommendations',
        'Arrange services',
        'Resolve issues'
      ],
      skills: ['Customer Service', 'Communication', 'Knowledge', 'Problem-solving', 'Organization'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Bachelor\'s + Hotel Experience',
      salary: '$35,000 - $75,000+',
      careerPath: 'Concierge → Chief Concierge → Director',
      environment: ['Guest service', 'Luxury hotels', 'Problem-solving', 'Customer interaction'],
      jobGrowth: '2-3% growth'
    },
    {
      id: 'cruise-director',
      name: 'Cruise Director',
      summary: 'Coordinate activities and entertainment for cruise ship passengers.',
      responsibilities: [
        'Plan activities',
        'Direct entertainment',
        'Engage passengers',
        'Manage staff',
        'Ensure satisfaction'
      ],
      skills: ['Entertainment', 'Leadership', 'Communication', 'Organization', 'Enthusiasm'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School or Bachelor\'s + Cruise Experience',
      salary: '$40,000 - $85,000',
      careerPath: 'Activity Staff → Cruise Director → Director',
      environment: ['Travel', 'Entertainment focus', 'Guest satisfaction', 'Team leadership'],
      jobGrowth: 'Variable with cruise industry'
    },
    {
      id: 'casino-manager',
      name: 'Casino Manager',
      summary: 'Manage casino operations and gaming activities.',
      responsibilities: [
        'Oversee gaming floor',
        'Manage staff',
        'Ensure compliance',
        'Monitor finances',
        'Customer service'
      ],
      skills: ['Leadership', 'Gaming Knowledge', 'Organization', 'Financial Management', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'High School or Bachelor\'s Degree',
      salary: '$55,000 - $110,000',
      careerPath: 'Supervisor → Manager → Director → Regional Manager',
      environment: ['Gaming focus', 'Customer service', 'Team leadership', '24/7 operations'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'convention-planner',
      name: 'Convention & Event Planner',
      summary: 'Plan and coordinate large events and conferences.',
      responsibilities: [
        'Manage event planning',
        'Coordinate vendors',
        'Manage budgets',
        'Handle logistics',
        'Ensure success'
      ],
      skills: ['Event Planning', 'Organization', 'Communication', 'Negotiation', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or Bachelor\'s in Event Management',
      salary: '$50,000 - $100,000',
      careerPath: 'Coordinator → Planner → Senior Planner → Director',
      environment: ['Event planning', 'Large scale', 'Coordination', 'Problem-solving'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'front-desk-manager',
      name: 'Front Desk Manager',
      summary: 'Supervise front desk operations in hotels.',
      responsibilities: [
        'Manage front desk staff',
        'Check in/out guests',
        'Resolve guest issues',
        'Manage reservations',
        'Customer service'
      ],
      skills: ['Customer Service', 'Leadership', 'Organization', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School or Bachelor\'s in Hospitality',
      salary: '$40,000 - $75,000',
      careerPath: 'Front Desk → Supervisor → Front Desk Manager → Manager',
      environment: ['Guest service', 'Fast-paced', 'Team leadership', '24/7 ops'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'housekeeping-director',
      name: 'Housekeeping Director',
      summary: 'Oversee housekeeping and cleaning operations in hotels.',
      responsibilities: [
        'Supervise housekeeping staff',
        'Manage cleaning schedules',
        'Ensure cleanliness standards',
        'Control budgets',
        'Train staff'
      ],
      skills: ['Leadership', 'Organization', 'Attention to Detail', 'Communication', 'Management'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'High School or Bachelor\'s in Hospitality Management',
      salary: '$45,000 - $85,000',
      careerPath: 'Housekeeper → Supervisor → Housekeeping Director → Manager',
      environment: ['Cleaning operations', 'Quality standards', 'Team leadership', 'Organization'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'catering-manager',
      name: 'Catering Manager',
      summary: 'Manage catering operations for events and parties.',
      responsibilities: [
        'Plan catering events',
        'Manage menus',
        'Coordinate staff',
        'Manage budgets',
        'Ensure quality'
      ],
      skills: ['Event Management', 'Organization', 'Communication', 'Leadership', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'High School or Bachelor\'s in Culinary/Hospitality',
      salary: '$50,000 - $95,000',
      careerPath: 'Catering Staff → Catering Coordinator → Manager → Director',
      environment: ['Catering events', 'Team coordination', 'Logistics', 'Culinary focus'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'baggage-porter',
      name: 'Baggage Porter and Bellhop',
      summary: 'Handle luggage and assist guests in hospitality settings.',
      responsibilities: [
        'Move baggage',
        'Assist guests',
        'Load/unload vehicles',
        'Maintain luggage carts',
        'Provide customer service'
      ],
      skills: ['Physical Strength', 'Hospitality', 'Customer Service', 'Organization', 'Lifting'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School or equivalent',
      salary: '$25,000 - $45,000',
      careerPath: 'Porter → Lead Porter → Bellhop Manager',
      environment: ['Hotels', 'Airports', 'Physical work', 'Customer service'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'barista',
      name: 'Barista',
      summary: 'Prepare and serve coffee drinks and beverages.',
      responsibilities: [
        'Make coffee drinks',
        'Operate espresso machines',
        'Take orders',
        'Manage register',
        'Maintain cleanliness'
      ],
      skills: ['Coffee Skills', 'Customer Service', 'Communication', 'Speed', 'Attention to Detail'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School, coffee training available',
      salary: '$25,000 - $45,000',
      careerPath: 'Barista → Lead Barista → Coffee Shop Trainer → Manager',
      environment: ['Coffee shop', 'Fast-paced', 'Customer-facing', 'Team environment'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'bartender',
      name: 'Bartender',
      summary: 'Prepare and serve alcoholic and non-alcoholic drinks.',
      responsibilities: [
        'Mix cocktails',
        'Serve drinks',
        'Manage bar inventory',
        'Take orders',
        'Interact with customers'
      ],
      skills: ['Bartending', 'Customer Service', 'Communication', 'Memory', 'Speed'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + bartending certification',
      salary: '$30,000 - $60,000',
      careerPath: 'Bartender → Head Bartender → Bar Manager → General Manager',
      environment: ['Bars', 'Restaurants', 'Fast-paced', 'Evening/night shifts'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'concierge',
      name: 'Concierge',
      summary: 'Provide personalized services to guests in hotels and establishments.',
      responsibilities: [
        'Assist guests',
        'Make reservations',
        'Arrange services',
        'Provide information',
        'Handle requests'
      ],
      skills: ['Customer Service', 'Communication', 'Organization', 'Problem-solving', 'Local Knowledge'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or some college',
      salary: '$35,000 - $70,000',
      careerPath: 'Concierge → Head Concierge → Guest Services Manager',
      environment: ['Hotel', 'Resort', 'Upscale', 'Guest-focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'curator',
      name: 'Curator',
      summary: 'Manage museum and collection exhibits.',
      responsibilities: [
        'Select artifacts',
        'Organize exhibits',
        'Preserve items',
        'Conduct research',
        'Educate public'
      ],
      skills: ['Art History', 'Museum Management', 'Research', 'Organization', 'Communication'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'Master\'s in Museum Studies or Art History',
      salary: '$45,000 - $95,000',
      careerPath: 'Curator → Senior Curator → Director',
      environment: ['Museum', 'Library', 'Archive', 'Research-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'custom-tailor',
      name: 'Custom Tailor',
      summary: 'Create and alter custom clothing for clients.',
      responsibilities: [
        'Take measurements',
        'Create garments',
        'Alter clothing',
        'Fit adjustments',
        'Consult with clients'
      ],
      skills: ['Tailoring', 'Sewing', 'Measurement', 'Attention to Detail', 'Customer Service'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + tailoring apprenticeship',
      salary: '$35,000 - $75,000',
      careerPath: 'Tailor → Master Tailor → Shop Owner',
      environment: ['Tailor shop', 'Fashion', 'Hands-on', 'Customer-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'customer-service-representative',
      name: 'Customer Service Representative',
      summary: 'Assist customers and handle inquiries.',
      responsibilities: [
        'Answer inquiries',
        'Resolve issues',
        'Provide information',
        'Process requests',
        'Document interactions'
      ],
      skills: ['Customer Service', 'Communication', 'Problem-solving', 'Patience', 'Organization'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or some college',
      salary: '$30,000 - $55,000',
      careerPath: 'Representative → Senior Rep → Supervisor',
      environment: ['Call center', 'Office', 'Customer-facing', 'Service-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'customer-service-utility',
      name: 'Customer Service Representative, Utilities',
      summary: 'Provide customer service for utility companies.',
      responsibilities: [
        'Answer inquiries',
        'Handle billing',
        'Process requests',
        'Troubleshoot issues',
        'Maintain records'
      ],
      skills: ['Customer Service', 'Communication', 'Technical Systems', 'Problem-solving', 'Organization'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$32,000 - $60,000',
      careerPath: 'Representative → Senior Rep → Supervisor',
      environment: ['Utility company', 'Call center', 'Customer service', 'Technical focus'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'customs-broker',
      name: 'Customs Broker',
      summary: 'Facilitate movement of goods across borders.',
      responsibilities: [
        'Prepare documents',
        'Navigate regulations',
        'Arrange transportation',
        'Calculate duties',
        'Ensure compliance'
      ],
      skills: ['Customs Regulations', 'Documentation', 'Problem-solving', 'Communication', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School + customs broker license',
      salary: '$50,000 - $110,000',
      careerPath: 'Broker → Senior Broker → Manager',
      environment: ['Logistics', 'Import/Export', 'Regulatory', 'International'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'hairdressers-hairstylists-cosmetologists',
      name: 'Hairdressers, Hairstylists, and Cosmetologists',
      summary: 'Provide hair cutting, styling, and cosmetology services to clients.',
      responsibilities: [
        'Consult with clients',
        'Cut and style hair',
        'Apply color treatments',
        'Maintain tools and stations',
        'Recommend products'
      ],
      skills: ['Hair Styling', 'Customer Service', 'Creativity', 'Hygiene', 'Attention to Detail'],
      talentFit: 'Creative Thinker, People-Oriented Helper',
      education: 'Cosmetology certificate + license',
      salary: '$30,000 - $60,000',
      careerPath: 'Stylist → Senior Stylist → Salon Manager',
      environment: ['Salon', 'Customer-facing', 'Creative', 'Fast-paced'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'hosts-hostesses',
      name: 'Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop',
      summary: 'Greet guests, manage seating, and support dining operations.',
      responsibilities: [
        'Greet and seat guests',
        'Manage wait lists',
        'Coordinate with servers',
        'Answer guest questions',
        'Maintain entry area'
      ],
      skills: ['Customer Service', 'Communication', 'Organization', 'Multitasking', 'Friendliness'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or equivalent',
      salary: '$25,000 - $40,000 + tips',
      careerPath: 'Host → Lead Host → Front-of-House Supervisor',
      environment: ['Restaurant', 'Customer-facing', 'Fast-paced', 'Team-based'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'hotel-motel-resort-desk-clerks',
      name: 'Hotel, Motel, and Resort Desk Clerks',
      summary: 'Manage guest check-in, reservations, and front desk services.',
      responsibilities: [
        'Check guests in and out',
        'Manage reservations',
        'Answer guest questions',
        'Process payments',
        'Resolve guest issues'
      ],
      skills: ['Customer Service', 'Communication', 'Computer Skills', 'Problem-solving', 'Organization'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$28,000 - $45,000',
      careerPath: 'Desk Clerk → Front Desk Lead → Hotel Supervisor',
      environment: ['Hotels', 'Front desk', 'Customer service', 'Shift work'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'housekeeping-supervisors',
      name: 'Housekeeping Supervisors',
      summary: 'Oversee housekeeping staff and quality of room cleaning.',
      responsibilities: [
        'Assign rooms and tasks',
        'Inspect cleaning quality',
        'Train housekeeping staff',
        'Manage supplies',
        'Coordinate schedules'
      ],
      skills: ['Leadership', 'Organization', 'Attention to Detail', 'Communication', 'Time Management'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'High School + hospitality experience',
      salary: '$35,000 - $55,000',
      careerPath: 'Supervisor → Housekeeping Manager → Hotel Operations Manager',
      environment: ['Hotels', 'People management', 'Quality focused', 'Service oriented'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  hr: [
    {
      id: 'hr-coordinator',
      name: 'HR Coordinator / Administrator',
      summary: 'Support HR functions including recruitment, payroll, and employee relations.',
      responsibilities: [
        'Post job openings',
        'Screen resumes',
        'Schedule interviews',
        'Process payroll',
        'Maintain employee records'
      ],
      skills: ['Organization', 'Communication', 'Attention to Detail', 'Technology', 'Customer Service'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Bachelor\'s in HR',
      salary: '$40,000 - $65,000',
      careerPath: 'HR Coordinator → HR Specialist → HR Manager',
      environment: ['Administrative support', 'Employee interaction', 'Organization', 'HR operations'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'recruiter',
      name: 'Recruiter / Talent Acquisition Specialist',
      summary: 'Find and recruit qualified candidates for job positions.',
      responsibilities: [
        'Source job candidates',
        'Screen resumes and applications',
        'Conduct initial interviews',
        'Coordinate interviews',
        'Extend offers'
      ],
      skills: ['Communication', 'Sales', 'Relationship Building', 'Interviewing', 'Problem-solving'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s degree (varies by field)',
      salary: '$50,000 - $100,000+',
      careerPath: 'Recruiter → Senior Recruiter → Recruiting Manager → Director',
      environment: ['Candidate interaction', 'Relationship building', 'Hiring focus', 'People-centered'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'lawyer',
      name: 'Lawyer / Attorney',
      summary: 'Provide legal advice and represent clients in legal matters.',
      responsibilities: [
        'Research legal issues',
        'Prepare legal documents',
        'Represent clients in court',
        'Negotiate settlements',
        'Advise on legal matters'
      ],
      skills: ['Legal Knowledge', 'Research', 'Writing', 'Argumentation', 'Communication'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Juris Doctor (JD) + Bar License',
      salary: '$80,000 - $250,000+',
      careerPath: 'Associate → Senior Associate → Partner → Managing Partner',
      environment: ['Legal expertise', 'Client representation', 'Problem-solving', 'Research-focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'compliance-officer',
      name: 'Compliance Officer',
      summary: 'Ensure organization compliance with laws and regulations.',
      responsibilities: [
        'Monitor regulatory changes',
        'Develop compliance policies',
        'Conduct audits',
        'Train employees',
        'Report violations'
      ],
      skills: ['Regulatory Knowledge', 'Attention to Detail', 'Research', 'Communication', 'Documentation'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in related field + compliance knowledge',
      salary: '$70,000 - $130,000',
      careerPath: 'Compliance Specialist → Compliance Officer → Manager → Director',
      environment: ['Regulatory focus', 'Audit work', 'Documentation', 'Risk management'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'adjustment-clerk',
      name: 'Adjustment Clerk',
      summary: 'Handle customer complaints and billing disputes.',
      responsibilities: [
        'Investigate claims',
        'Resolve billing issues',
        'Adjust accounts',
        'Document corrections',
        'Follow up with customers'
      ],
      skills: ['Customer Service', 'Attention to Detail', 'Communication', 'Problem-solving', 'Documentation'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Adjustment Clerk → Senior Clerk → Supervisor',
      environment: ['Customer service', 'Detail-focused', 'Resolution-oriented', 'Administrative'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'agricultural-inspector',
      name: 'Agricultural Inspectors',
      summary: 'Inspect agricultural products and operations for safety and compliance.',
      responsibilities: [
        'Inspect crops and animals',
        'Test for contaminants',
        'Ensure food safety',
        'Document findings',
        'Enforce regulations'
      ],
      skills: ['Inspection Knowledge', 'Food Safety', 'Attention to Detail', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Associate\'s degree',
      salary: '$45,000 - $85,000',
      careerPath: 'Inspector → Senior Inspector → Supervisor → Manager',
      environment: ['Food safety', 'Inspection focus', 'Regulatory compliance', 'Field work'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'arbitrator-mediator',
      name: 'Arbitrator, Mediator, and Conciliator',
      summary: 'Help resolve disputes between parties through arbitration and mediation.',
      responsibilities: [
        'Hear disputes',
        'Review evidence',
        'Mediate between parties',
        'Make fair decisions',
        'Prepare documentation'
      ],
      skills: ['Conflict Resolution', 'Legal Knowledge', 'Fairness', 'Communication', 'Listening'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'Bachelor\'s degree, many have legal background',
      salary: '$65,000 - $130,000',
      careerPath: 'Mediator → Senior Mediator → Arbitrator → Chief Arbitrator',
      environment: ['Conflict resolution', 'Neutral party', 'Legal environment', 'People interaction'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'compensation-benefits-manager',
      name: 'Compensation and Benefits Manager',
      summary: 'Manage employee compensation and benefits programs.',
      responsibilities: [
        'Design programs',
        'Manage budgets',
        'Analyze data',
        'Communicate policies',
        'Ensure compliance'
      ],
      skills: ['HR Management', 'Compensation Analysis', 'Organization', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in HR, Business, or related field',
      salary: '$80,000 - $150,000',
      careerPath: 'Manager → Senior Manager → Director',
      environment: ['Corporate office', 'HR department', 'Strategic', 'Analytical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'compensation-benefits-specialist',
      name: 'Compensation, Benefits, and Job Analysis Specialist',
      summary: 'Support compensation and benefits programs.',
      responsibilities: [
        'Analyze jobs',
        'Maintain records',
        'Process claims',
        'Provide information',
        'Document programs'
      ],
      skills: ['Compensation', 'Benefits', 'Data Analysis', 'Organization', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Associate\'s degree in HR',
      salary: '$50,000 - $95,000',
      careerPath: 'Specialist → Senior Specialist → Manager',
      environment: ['HR office', 'Corporate', 'Administrative', 'Details-focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'employment-interviewer',
      name: 'Employment Interviewer, Private or Public Employment Service',
      summary: 'Interview candidates for job placement services.',
      responsibilities: [
        'Interview candidates',
        'Assess skills',
        'Match to jobs',
        'Develop plans',
        'Track placements'
      ],
      skills: ['Interviewing', 'Assessment', 'Communication', 'Organization', 'Placement Knowledge'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or Associate\'s degree',
      salary: '$35,000 - $70,000',
      careerPath: 'Interviewer → Senior Interviewer → Manager',
      environment: ['Employment agency', 'Government office', 'Client interaction', 'Service-focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'employment-specialist',
      name: 'Employment, Recruitment, and Placement Specialist',
      summary: 'Recruit and place candidates for jobs.',
      responsibilities: [
        'Recruit candidates',
        'Screen applicants',
        'Place workers',
        'Maintain relationships',
        'Track success'
      ],
      skills: ['Recruitment', 'Screening', 'Communication', 'Organization', 'Sales'],
      talentFit: 'People-Oriented Helper',
      education: 'Bachelor\'s in HR or related field',
      salary: '$50,000 - $100,000',
      careerPath: 'Specialist → Senior Specialist → Recruitment Manager',
      environment: ['Recruitment firm', 'HR department', 'Corporate', 'Service-focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'equal-opportunity-officer',
      name: 'Equal Opportunity Representative and Officer',
      summary: 'Ensure compliance with equal opportunity policies.',
      responsibilities: [
        'Investigate complaints',
        'Ensure compliance',
        'Document issues',
        'Train employees',
        'Report findings'
      ],
      skills: ['Equal Opportunity Law', 'Investigation', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Associate\'s + legal training',
      salary: '$50,000 - $95,000',
      careerPath: 'Officer → Senior Officer → Manager',
      environment: ['Corporate HR', 'Government', 'Legal compliance', 'Documentation-focused'],
      jobGrowth: '2% growth through 2032'
    },
  ],
  leadership: [
    {
      id: 'first-line-supervisor-agricultural-crop',
      name: 'First-Line Supervisor and Manager-Supervisor - Agricultural Crop Worker',
      summary: 'Supervise agricultural crop workers.',
      responsibilities: [
        'Supervise workers',
        'Assign tasks',
        'Monitor quality',
        'Ensure safety',
        'Report progress'
      ],
      skills: ['Agricultural Knowledge', 'Leadership', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + agricultural experience',
      salary: '$45,000 - $90,000',
      careerPath: 'Supervisor → Senior Supervisor → Manager',
      environment: ['Farm', 'Agricultural', 'Field supervision', 'Leadership'],
      jobGrowth: '0% growth through 2032'
    },
    {
      id: 'first-line-supervisor-animal-care',
      name: 'First-Line Supervisor and Manager-Supervisor - Animal Care Worker, Except Livestock',
      summary: 'Supervise animal care workers.',
      responsibilities: [
        'Supervise workers',
        'Assign tasks',
        'Monitor care',
        'Ensure safety',
        'Report progress'
      ],
      skills: ['Animal Care', 'Leadership', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School + animal care experience',
      salary: '$40,000 - $80,000',
      careerPath: 'Supervisor → Senior Supervisor → Manager',
      environment: ['Animal facility', 'Leadership', 'Team supervision', 'Care-focused'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'first-line-supervisor-animal-husbandry',
      name: 'First-Line Supervisor and Manager-Supervisor - Animal Husbandry Worker',
      summary: 'Supervise animal husbandry workers.',
      responsibilities: [
        'Supervise workers',
        'Assign tasks',
        'Monitor production',
        'Ensure quality',
        'Report results'
      ],
      skills: ['Animal Husbandry', 'Leadership', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + animal husbandry experience',
      salary: '$45,000 - $85,000',
      careerPath: 'Supervisor → Senior Supervisor → Farm Manager',
      environment: ['Farm', 'Ranch', 'Leadership', 'Production-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'first-line-supervisor-fishery',
      name: 'First-Line Supervisor and Manager-Supervisor - Fishery Worker',
      summary: 'Supervise fishery workers.',
      responsibilities: [
        'Supervise workers',
        'Assign tasks',
        'Monitor catch',
        'Ensure safety',
        'Report results'
      ],
      skills: ['Fishery Knowledge', 'Leadership', 'Communication', 'Safety', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + fishing experience',
      salary: '$50,000 - $95,000',
      careerPath: 'Supervisor → Senior Supervisor → Fleet Manager',
      environment: ['Fishing fleet', 'Water', 'Leadership', 'Production-focused'],
      jobGrowth: '-4% decline through 2032'
    },
    {
      id: 'first-line-supervisor-horticultural',
      name: 'First-Line Supervisor and Manager-Supervisor - Horticultural Worker',
      summary: 'Supervise horticultural workers.',
      responsibilities: [
        'Supervise workers',
        'Assign tasks',
        'Monitor plants',
        'Ensure quality',
        'Report progress'
      ],
      skills: ['Horticulture', 'Leadership', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'High School or some college + horticultural experience',
      salary: '$45,000 - $85,000',
      careerPath: 'Supervisor → Senior Supervisor → Nursery Manager',
      environment: ['Nursery', 'Greenhouse', 'Horticulture', 'Leadership'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'first-line-supervisor-landscaping',
      name: 'First-Line Supervisor and Manager-Supervisor - Landscaping Worker',
      summary: 'Supervise landscaping workers.',
      responsibilities: [
        'Supervise crews',
        'Assign projects',
        'Ensure quality',
        'Manage safety',
        'Track progress'
      ],
      skills: ['Landscaping', 'Leadership', 'Communication', 'Organization', 'Safety'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + landscaping experience',
      salary: '$50,000 - $100,000',
      careerPath: 'Supervisor → Senior Supervisor → Landscaping Manager',
      environment: ['Landscaping company', 'Field leadership', 'Project management', 'Outdoor'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'first-line-supervisor-logging',
      name: 'First-Line Supervisor and Manager-Supervisor - Logging Worker',
      summary: 'Supervise logging operations.',
      responsibilities: [
        'Supervise crews',
        'Assign tasks',
        'Ensure safety',
        'Monitor production',
        'Report results'
      ],
      skills: ['Logging', 'Leadership', 'Communication', 'Safety', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + logging experience',
      salary: '$50,000 - $100,000',
      careerPath: 'Supervisor → Senior Supervisor → Operations Manager',
      environment: ['Forest', 'Logging operation', 'Leadership', 'High-risk'],
      jobGrowth: '-1% decline through 2032'
    },
    {
      id: 'first-line-supervisor-construction',
      name: 'First-Line Supervisor and Manager-Supervisor - Construction Trades Worker',
      summary: 'Supervise construction tradespeople.',
      responsibilities: [
        'Supervise crew',
        'Assign tasks',
        'Ensure quality',
        'Manage safety',
        'Coordinate project'
      ],
      skills: ['Construction', 'Leadership', 'Communication', 'Problem-solving', 'Safety'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + construction experience',
      salary: '$65,000 - $130,000',
      careerPath: 'Supervisor → Lead Supervisor → Project Manager',
      environment: ['Construction site', 'Project leadership', 'Quality focus', 'Safety-oriented'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'first-line-supervisor-extractive',
      name: 'First-Line Supervisor and Manager-Supervisor - Extractive Worker',
      summary: 'Supervise mining and extraction workers.',
      responsibilities: [
        'Supervise workers',
        'Assign tasks',
        'Monitor production',
        'Ensure safety',
        'Report results'
      ],
      skills: ['Mining/Extraction', 'Leadership', 'Communication', 'Safety', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + mining experience',
      salary: '$60,000 - $120,000',
      careerPath: 'Supervisor → Senior Supervisor → Operations Manager',
      environment: ['Mine', 'Quarry', 'Extraction', 'Leadership'],
      jobGrowth: '-2% decline through 2032'
    },
    {
      id: 'first-line-supervisor-administrative-support',
      name: 'First-Line Supervisor, Administrative Support',
      summary: 'Supervise administrative support staff.',
      responsibilities: [
        'Supervise staff',
        'Assign work',
        'Monitor quality',
        'Provide feedback',
        'Report results'
      ],
      skills: ['Office Management', 'Leadership', 'Communication', 'Organization', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'High School or Associate\'s degree',
      salary: '$50,000 - $95,000',
      careerPath: 'Supervisor → Senior Supervisor → Office Manager',
      environment: ['Corporate office', 'Administrative', 'Leadership', 'Team management'],
      jobGrowth: '-5% decline through 2032'
    },
    {
      id: 'first-line-supervisor-customer-service',
      name: 'First-Line Supervisor, Customer Service',
      summary: 'Supervise customer service representatives.',
      responsibilities: [
        'Supervise team',
        'Monitor quality',
        'Handle escalations',
        'Coach staff',
        'Report metrics'
      ],
      skills: ['Customer Service', 'Leadership', 'Communication', 'Problem-solving', 'Organization'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School or some college',
      salary: '$45,000 - $85,000',
      careerPath: 'Supervisor → Senior Supervisor → Manager',
      environment: ['Call center', 'Service center', 'Customer focus', 'Leadership'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'first-line-supervisor-air-crew',
      name: 'First-Line Supervisor-Manager of Air Crew Member',
      summary: 'Manage air crew personnel.',
      responsibilities: [
        'Manage crew',
        'Assign duties',
        'Ensure compliance',
        'Monitor safety',
        'Report status'
      ],
      skills: ['Aviation', 'Leadership', 'Communication', 'Safety', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'High School + aviation experience',
      salary: '$70,000 - $130,000',
      careerPath: 'Supervisor → Lead Supervisor → Aviation Manager',
      environment: ['Airlines', 'Air transportation', 'Leadership', 'Safety-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'first-line-supervisor-tactical-operations',
      name: 'First-Line Supervisor-Manager of All Other Tactical Operations Specialist',
      summary: 'Supervise tactical operations specialists.',
      responsibilities: [
        'Supervise team',
        'Manage operations',
        'Ensure protocols',
        'Monitor performance',
        'Report results'
      ],
      skills: ['Tactical Operations', 'Leadership', 'Communication', 'Problem-solving', 'Safety'],
      talentFit: 'Leadership & Visionary',
      education: 'Military training + supervisory certification',
      salary: '$65,000 - $125,000',
      careerPath: 'Supervisor → Senior Supervisor → Commander',
      environment: ['Military', 'Law enforcement', 'Tactical', 'Leadership'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'human-resources-assistants',
      name: 'Human Resources Assistants, Except Payroll and Timekeeping',
      summary: 'Support HR operations such as onboarding, records, and communications.',
      responsibilities: [
        'Maintain employee records',
        'Assist with onboarding',
        'Schedule interviews',
        'Prepare HR documents',
        'Respond to HR inquiries'
      ],
      skills: ['Organization', 'Communication', 'HR Systems', 'Attention to Detail', 'Confidentiality'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Associate\'s in HR',
      salary: '$35,000 - $55,000',
      careerPath: 'HR Assistant → HR Coordinator → HR Specialist',
      environment: ['Office', 'HR operations', 'Administrative support', 'People-focused'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'human-resources-manager',
      name: 'Human Resources Manager',
      summary: 'Lead HR functions including staffing, policy, and employee relations.',
      responsibilities: [
        'Oversee HR policies',
        'Manage recruitment efforts',
        'Handle employee relations',
        'Lead HR staff',
        'Ensure compliance'
      ],
      skills: ['Leadership', 'Employee Relations', 'Compliance', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'Bachelor\'s in HR or business',
      salary: '$70,000 - $130,000',
      careerPath: 'HR Manager → Senior HR Manager → HR Director',
      environment: ['Corporate office', 'Leadership', 'Policy focus', 'People-centered'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'human-resources-managers',
      name: 'Human Resources Managers',
      summary: 'Plan and direct HR programs, policies, and staff development.',
      responsibilities: [
        'Plan HR strategy',
        'Manage staffing needs',
        'Oversee training programs',
        'Administer benefits',
        'Monitor compliance'
      ],
      skills: ['Leadership', 'Strategic Planning', 'Communication', 'HR Knowledge', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in HR or related field',
      salary: '$70,000 - $135,000',
      careerPath: 'HR Manager → HR Director → VP of HR',
      environment: ['Corporate office', 'Leadership', 'Policy focus', 'People-centered'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'human-resources-managers-all-other',
      name: 'Human Resources Managers, All Other',
      summary: 'Manage specialized HR functions not classified elsewhere.',
      responsibilities: [
        'Lead specialized HR programs',
        'Develop policies and procedures',
        'Manage HR staff',
        'Analyze workforce data',
        'Ensure compliance'
      ],
      skills: ['Leadership', 'HR Strategy', 'Data Analysis', 'Communication', 'Compliance'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in HR or related field',
      salary: '$75,000 - $140,000',
      careerPath: 'Manager → Senior Manager → Director',
      environment: ['Corporate office', 'Specialized HR', 'Strategy focus', 'Leadership'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'hr-training-labor-relations-specialists-all-other',
      name: 'Human Resources, Training, and Labor Relations Specialists, All Other',
      summary: 'Provide HR, training, and labor relations support for organizations.',
      responsibilities: [
        'Support training programs',
        'Assist with labor relations',
        'Develop HR materials',
        'Advise managers on policies',
        'Maintain compliance records'
      ],
      skills: ['HR Knowledge', 'Communication', 'Training Support', 'Organization', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'Bachelor\'s in HR or related field',
      salary: '$50,000 - $90,000',
      careerPath: 'Specialist → Senior Specialist → HR Manager',
      environment: ['Corporate office', 'Employee support', 'Training focus', 'Policy compliance'],
      jobGrowth: '6% growth through 2032'
    },
  ],
  legal: [
    {
      id: 'coroner',
      name: 'Coroner',
      summary: 'Investigate deaths and determine causes.',
      responsibilities: [
        'Investigate deaths',
        'Determine causes',
        'Conduct autopsies',
        'Testify in court',
        'Maintain records'
      ],
      skills: ['Pathology', 'Investigation', 'Communication', 'Critical Thinking', 'Scientific Knowledge'],
      talentFit: 'Analytical Problem Solver',
      education: 'MD or forensic pathology training',
      salary: '$70,000 - $150,000',
      careerPath: 'Coroner → Chief Coroner',
      environment: ['Medical examiner office', 'Investigation', 'Forensics', 'Legal'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'correctional-officer',
      name: 'Correctional Officer and Jailer',
      summary: 'Supervise inmates in detention facilities.',
      responsibilities: [
        'Supervise inmates',
        'Enforce rules',
        'Ensure security',
        'Monitor behavior',
        'Write reports'
      ],
      skills: ['Security', 'Communication', 'Safety', 'Problem-solving', 'Physical Fitness'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'High School + corrections training',
      salary: '$40,000 - $80,000',
      careerPath: 'Officer → Senior Officer → Supervisor → Manager',
      environment: ['Detention facility', 'Prison', 'Security focus', 'High-stress'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'court-reporter',
      name: 'Court Reporter',
      summary: 'Record and transcribe court proceedings.',
      responsibilities: [
        'Record proceedings',
        'Transcribe testimony',
        'Produce transcripts',
        'Verify accuracy',
        'File documents'
      ],
      skills: ['Stenography', 'Typing', 'Attention to Detail', 'Communication', 'Legal Knowledge'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School + court reporting training',
      salary: '$60,000 - $120,000',
      careerPath: 'Reporter → Senior Reporter → Lead Reporter',
      environment: ['Courthouse', 'Legal', 'Recording focus', 'Detail-oriented'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'counter-rental-clerk',
      name: 'Counter and Rental Clerk',
      summary: 'Serve customers renting equipment and supplies.',
      responsibilities: [
        'Assist customers',
        'Process rentals',
        'Collect payments',
        'Maintain inventory',
        'Process returns'
      ],
      skills: ['Customer Service', 'Organization', 'Communication', 'Cash Handling', 'Problem-solving'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$28,000 - $50,000',
      careerPath: 'Clerk → Lead Clerk → Supervisor',
      environment: ['Rental shop', 'Equipment business', 'Customer-facing', 'Service-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'courier-messenger',
      name: 'Courier and Messenger',
      summary: 'Deliver messages and packages.',
      responsibilities: [
        'Deliver items',
        'Collect signatures',
        'Route planning',
        'Maintain vehicle',
        'Track deliveries'
      ],
      skills: ['Navigation', 'Communication', 'Organization', 'Time Management', 'Vehicle Maintenance'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$35,000 - $65,000',
      careerPath: 'Messenger → Lead Courier → Dispatcher',
      environment: ['Urban areas', 'Field-based', 'Delivery-focused', 'Independent'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'criminal-investigator',
      name: 'Criminal Investigator and Special Agent',
      summary: 'Investigate crimes and gather evidence.',
      responsibilities: [
        'Investigate crimes',
        'Gather evidence',
        'Interview witnesses',
        'Make arrests',
        'Testify in court'
      ],
      skills: ['Investigation', 'Critical Thinking', 'Communication', 'Problem-solving', 'Legal Knowledge'],
      talentFit: 'Analytical Problem Solver',
      education: 'High School + law enforcement training',
      salary: '$60,000 - $120,000',
      careerPath: 'Officer → Detective → Senior Agent → Supervisor',
      environment: ['Police department', 'Federal agency', 'Investigation', 'Field work'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'crossing-guard',
      name: 'Crossing Guard',
      summary: 'Direct traffic to ensure safe pedestrian crossing.',
      responsibilities: [
        'Manage crossing',
        'Direct traffic',
        'Ensure safety',
        'Report violations',
        'Communication'
      ],
      skills: ['Traffic Management', 'Safety', 'Communication', 'Attention to Detail', 'Leadership'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$28,000 - $50,000',
      careerPath: 'Crossing Guard → Lead Guard → Traffic Safety Coordinator',
      environment: ['Street crossing', 'School area', 'Safety focus', 'Scheduled'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'judges-magistrate-judges-magistrates',
      name: 'Judges, Magistrate Judges, and Magistrates',
      summary: 'Preside over legal proceedings and interpret the law.',
      responsibilities: [
        'Conduct hearings and trials',
        'Interpret laws and precedents',
        'Issue rulings and judgments',
        'Manage courtroom proceedings',
        'Write legal opinions'
      ],
      skills: ['Legal Expertise', 'Decision-making', 'Communication', 'Ethics', 'Leadership'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Juris Doctor (JD) + extensive legal experience',
      salary: '$120,000 - $250,000',
      careerPath: 'Judge → Senior Judge → Chief Judge',
      environment: ['Courtroom', 'Legal system', 'Public service', 'High responsibility'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'judicial-law-clerks',
      name: 'Judicial Law Clerks',
      summary: 'Assist judges with legal research and drafting opinions.',
      responsibilities: [
        'Research case law',
        'Draft opinions and orders',
        'Review legal filings',
        'Prepare case summaries',
        'Organize case materials'
      ],
      skills: ['Legal Research', 'Writing', 'Analysis', 'Attention to Detail', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Juris Doctor (JD)',
      salary: '$60,000 - $95,000',
      careerPath: 'Law Clerk → Attorney → Senior Clerk',
      environment: ['Courts', 'Legal research', 'Office-based', 'Detail-focused'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  library: [
    {
      id: 'archivist',
      name: 'Archivist',
      summary: 'Preserve, organize, and provide access to historical documents and archives.',
      responsibilities: [
        'Organize and catalog materials',
        'Preserve fragile documents',
        'Maintain archival systems',
        'Assist researchers',
        'Develop access systems'
      ],
      skills: ['Organization', 'Preservation', 'Cataloging', 'Research', 'Attention to Detail'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Master\'s in Library/Information Science or related field',
      salary: '$45,000 - $85,000',
      careerPath: 'Archivist → Senior Archivist → Head Archivist → Director',
      environment: ['Historical preservation', 'Research support', 'Library setting', 'Detail-focused'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'audio-visual-specialist',
      name: 'Audio-Visual Collections Specialist',
      summary: 'Manage, maintain, and preserve audio and video collections in libraries.',
      responsibilities: [
        'Catalog audio/video materials',
        'Maintain collections',
        'Preserve media',
        'Assist patrons',
        'Manage digital systems'
      ],
      skills: ['Media Preservation', 'Organization', 'Technology', 'Cataloging', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'Bachelor\'s or Master\'s in Library Science',
      salary: '$40,000 - $75,000',
      careerPath: 'Specialist → Senior Specialist → Collection Manager → Director',
      environment: ['Media collections', 'Library setting', 'Technology focus', 'Preservation'],
      jobGrowth: 'Growing with digital transformation'
    },
  ],
  maintenance: [
    {
      id: 'vehicle-equipment-cleaner',
      name: 'Cleaner of Vehicles and Equipment',
      summary: 'Clean vehicles and heavy equipment.',
      responsibilities: [
        'Clean exteriors',
        'Clean interiors',
        'Remove debris',
        'Use cleaning equipment',
        'Maintain organization'
      ],
      skills: ['Attention to Detail', 'Physical Ability', 'Organization', 'Customer Service', 'Safety'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$28,000 - $50,000',
      careerPath: 'Cleaner → Lead Cleaner → Supervisor',
      environment: ['Warehouse', 'Equipment yards', 'Hands-on', 'Physical labor'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'pickling-equipment-operator',
      name: 'Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders',
      summary: 'Operate equipment for cleaning and metal pickling.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor process',
        'Remove items',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Attention to Detail', 'Safety', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + technical training',
      salary: '$35,000 - $65,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Metal processing', 'Equipment operation', 'Safety-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'grounds-maintenance-workers-all-other',
      name: 'Grounds Maintenance Workers, All Other',
      summary: 'Maintain outdoor grounds and landscapes in a variety of settings.',
      responsibilities: [
        'Mow and trim landscapes',
        'Plant and water vegetation',
        'Remove debris and litter',
        'Operate landscaping equipment',
        'Maintain tools and supplies'
      ],
      skills: ['Landscaping', 'Equipment Operation', 'Physical Stamina', 'Safety', 'Attention to Detail'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $55,000',
      careerPath: 'Grounds Worker → Lead Groundskeeper → Grounds Supervisor',
      environment: ['Outdoors', 'Physical work', 'Seasonal conditions', 'Equipment use'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'hand-portable-power-tool-repairers',
      name: 'Hand and Portable Power Tool Repairers',
      summary: 'Diagnose and repair hand tools and portable power tools.',
      responsibilities: [
        'Diagnose tool issues',
        'Disassemble and repair tools',
        'Replace worn parts',
        'Test repaired tools',
        'Document repairs'
      ],
      skills: ['Tool Repair', 'Diagnostics', 'Mechanical Aptitude', 'Safety', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$35,000 - $65,000',
      careerPath: 'Repairer → Senior Repairer → Shop Supervisor',
      environment: ['Repair shop', 'Hands-on', 'Safety focused', 'Technical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'helpers-installation-maintenance-repair',
      name: 'Helpers--Installation, Maintenance, and Repair Workers',
      summary: 'Assist technicians with installation, maintenance, and repair tasks.',
      responsibilities: [
        'Prepare work areas',
        'Fetch tools and materials',
        'Hold or position parts',
        'Clean up job sites',
        'Follow safety procedures'
      ],
      skills: ['Teamwork', 'Basic Tools', 'Physical Stamina', 'Safety Awareness', 'Reliability'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$28,000 - $45,000',
      careerPath: 'Helper → Apprentice → Technician',
      environment: ['Field work', 'Hands-on', 'Supervised', 'Varied sites'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'highway-maintenance-workers',
      name: 'Highway Maintenance Workers',
      summary: 'Maintain roads, highways, and related infrastructure.',
      responsibilities: [
        'Repair road surfaces',
        'Clear debris and vegetation',
        'Set up traffic control',
        'Operate maintenance equipment',
        'Respond to weather events'
      ],
      skills: ['Equipment Operation', 'Safety', 'Physical Stamina', 'Teamwork', 'Attention to Detail'],
      talentFit: 'Practical Builder',
      education: 'High School + equipment training',
      salary: '$35,000 - $60,000',
      careerPath: 'Maintenance Worker → Equipment Operator → Crew Supervisor',
      environment: ['Outdoors', 'Traffic zones', 'Physical work', 'Safety focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'home-appliance-repairers',
      name: 'Home Appliance Repairers',
      summary: 'Repair household appliances in homes or repair shops.',
      responsibilities: [
        'Diagnose appliance issues',
        'Replace faulty parts',
        'Test appliance performance',
        'Explain repairs to customers',
        'Document service work'
      ],
      skills: ['Troubleshooting', 'Mechanical/Electrical Skills', 'Customer Service', 'Tools', 'Safety'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$40,000 - $70,000',
      careerPath: 'Repairer → Senior Repairer → Service Manager',
      environment: ['Service calls', 'Customer homes', 'Hands-on', 'Varied locations'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'industrial-machinery-mechanics',
      name: 'Industrial Machinery Mechanics',
      summary: 'Maintain and repair industrial manufacturing machinery.',
      responsibilities: [
        'Inspect machinery',
        'Repair breakdowns',
        'Replace parts',
        'Perform preventive maintenance',
        'Maintain repair records'
      ],
      skills: ['Mechanical Repair', 'Diagnostics', 'Hydraulics', 'Troubleshooting', 'Safety'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + mechanical training',
      salary: '$50,000 - $85,000',
      careerPath: 'Mechanic → Senior Mechanic → Maintenance Supervisor',
      environment: ['Manufacturing plants', 'Loud environments', 'Hands-on', 'Safety focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'installation-maintenance-repair-all-other',
      name: 'Installation, Maintenance, and Repair Workers, All Other',
      summary: 'Perform a wide range of installation and repair tasks across systems.',
      responsibilities: [
        'Install equipment and systems',
        'Diagnose issues',
        'Repair or replace components',
        'Maintain tools and inventory',
        'Document completed work'
      ],
      skills: ['Troubleshooting', 'Tool Use', 'Safety', 'Communication', 'Problem-solving'],
      talentFit: 'Practical Builder',
      education: 'High School + technical training',
      salary: '$35,000 - $65,000',
      careerPath: 'Technician → Senior Technician → Supervisor',
      environment: ['Varied sites', 'Hands-on', 'Problem-solving', 'Safety focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'janitorial-supervisors',
      name: 'Janitorial Supervisors',
      summary: 'Supervise cleaning crews and ensure facilities are maintained.',
      responsibilities: [
        'Assign cleaning tasks',
        'Inspect work quality',
        'Train staff',
        'Order supplies',
        'Manage schedules'
      ],
      skills: ['Leadership', 'Organization', 'Communication', 'Quality Control', 'Time Management'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'High School + experience',
      salary: '$35,000 - $55,000',
      careerPath: 'Supervisor → Facilities Manager',
      environment: ['Facilities', 'People management', 'Evening shifts', 'Quality focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'janitors-cleaners-except-maids',
      name: 'Janitors and Cleaners, Except Maids and Housekeeping Cleaners',
      summary: 'Clean and maintain building interiors and common areas.',
      responsibilities: [
        'Sweep and mop floors',
        'Remove trash and recyclables',
        'Restock supplies',
        'Clean restrooms',
        'Report maintenance issues'
      ],
      skills: ['Cleaning', 'Reliability', 'Time Management', 'Physical Stamina', 'Attention to Detail'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$28,000 - $45,000',
      careerPath: 'Janitor → Lead Janitor → Supervisor',
      environment: ['Buildings', 'Physical work', 'Routine tasks', 'Independent'],
      jobGrowth: '3% growth through 2032'
    },
  ],
  manufacturing: [
    {
      id: 'battery-repairer',
      name: 'Battery Repairer',
      summary: 'Repair and recondition batteries.',
      responsibilities: [
        'Test batteries',
        'Replace cells',
        'Repair defects',
        'Clean terminals',
        'Test performance'
      ],
      skills: ['Battery Systems', 'Troubleshooting', 'Precision Soldering', 'Safety', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + electrical training',
      salary: '$40,000 - $75,000',
      careerPath: 'Repairer → Senior Repairer → Lead Tech → Supervisor',
      environment: ['Manufacturing', 'Technical work', 'Hands-on', 'Precision focus'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'bench-worker-jewelry',
      name: 'Bench Worker, Jewelry',
      summary: 'Craft and repair jewelry using hand tools and machines.',
      responsibilities: [
        'Design jewelry',
        'Fabricate pieces',
        'Repair jewelry',
        'Set stones',
        'Polish items'
      ],
      skills: ['Jewelry Crafting', 'Precision Work', 'Attention to Detail', 'Creativity', 'Hand Skills'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + jewelry apprenticeship',
      salary: '$35,000 - $70,000',
      careerPath: 'Bench Worker → Senior Crafts Person → Master Jeweler → Designer',
      environment: ['Jewelry shop', 'Hands-on crafting', 'Precision work', 'Artisan focus'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'bicycle-repairer',
      name: 'Bicycle Repairer',
      summary: 'Repair and maintain bicycles.',
      responsibilities: [
        'Repair bikes',
        'Replace parts',
        'Adjust systems',
        'Perform tune-ups',
        'Customer service'
      ],
      skills: ['Bicycle Mechanics', 'Problem-solving', 'Hand Skills', 'Attention to Detail', 'Customer Service'],
      talentFit: 'Practical Builder',
      education: 'High School + bike repair training',
      salary: '$30,000 - $55,000',
      careerPath: 'Technician → Lead Tech → Bike Shop Manager → Owner',
      environment: ['Bike shop', 'Hands-on repair', 'Customer service', 'Small business'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'bindery-machine-operator',
      name: 'Bindery Machine Operator and Tender',
      summary: 'Operate machines that bind books and documents.',
      responsibilities: [
        'Operate binding machines',
        'Load materials',
        'Monitor quality',
        'Perform maintenance',
        'Follow specifications'
      ],
      skills: ['Machine Operation', 'Attention to Detail', 'Safety', 'Mechanical Aptitude', 'Organization'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $65,000',
      careerPath: 'Operator → Lead Operator → Supervisor → Production Manager',
      environment: ['Print shop', 'Production floor', 'Machine operation', 'Quality focus'],
      jobGrowth: '-2% decline through 2032'
    },
    {
      id: 'bindery-machine-setup',
      name: 'Bindery Machine Setter and Set-Up Operator',
      summary: 'Set up and adjust bindery machines for production.',
      responsibilities: [
        'Set up machines',
        'Adjust settings',
        'Program machines',
        'Calibrate equipment',
        'Test runs'
      ],
      skills: ['Machine Setup', 'Problem-solving', 'Technical Skills', 'Attention to Detail', 'Communication'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$40,000 - $75,000',
      careerPath: 'Setup Operator → Lead Setup → Production Specialist → Supervisor',
      environment: ['Print production', 'Machine setup', 'Technical focus', 'Problem-solving'],
      jobGrowth: '0% growth through 2032'
    },
    {
      id: 'bindery-worker',
      name: 'Bindery Worker',
      summary: 'Perform binding operations for books and documents.',
      responsibilities: [
        'Bind publications',
        'Fold pages',
        'Collate materials',
        'Assemble books',
        'Package products'
      ],
      skills: ['Manual Skills', 'Attention to Detail', 'Organization', 'Physical Ability', 'Teamwork'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$32,000 - $60,000',
      careerPath: 'Bindery Worker → Lead Worker → Supervisor',
      environment: ['Print shop', 'Production line', 'Hands-on work', 'Team-based'],
      jobGrowth: '-1% decline through 2032'
    },
    {
      id: 'boiler-operator',
      name: 'Boiler Operator and Tender, Low Pressure',
      summary: 'Operate and maintain low-pressure boilers.',
      responsibilities: [
        'Monitor boiler systems',
        'Operate controls',
        'Perform maintenance',
        'Record data',
        'Ensure safety'
      ],
      skills: ['Boiler Operation', 'Safety', 'Attention to Detail', 'Problem-solving', 'Mechanical Knowledge'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + boiler certification',
      salary: '$50,000 - $90,000',
      careerPath: 'Tender → Operator → Senior Operator → Supervisor',
      environment: ['Industrial setting', 'Boiler room', 'Safety-focused', 'Technical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'boilermaker',
      name: 'Boilermaker',
      summary: 'Construct and repair boilers and pressure vessels.',
      responsibilities: [
        'Construct boilers',
        'Repair pressure vessels',
        'Weld components',
        'Test systems',
        'Inspect work'
      ],
      skills: ['Welding', 'Blueprint Reading', 'Problem-solving', 'Precision', 'Safety'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + apprenticeship',
      salary: '$65,000 - $120,000',
      careerPath: 'Apprentice → Boilermaker → Senior Maker → Supervisor',
      environment: ['Industrial manufacturing', 'Hands-on', 'Team-based', 'Quality focus'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'bookbinder',
      name: 'Bookbinder',
      summary: 'Bind pages and covers into finished books.',
      responsibilities: [
        'Cut pages',
        'Sew signatures',
        'Attach covers',
        'Apply finishes',
        'Quality check'
      ],
      skills: ['Bookbinding', 'Precision', 'Creativity', 'Attention to Detail', 'Craftsmanship'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + bookbinding apprenticeship',
      salary: '$35,000 - $70,000',
      careerPath: 'Binder → Senior Binder → Master Binder → Shop Owner',
      environment: ['Print shop', 'Bookbinding', 'Hands-on', 'Artisan work'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'brattice-builder',
      name: 'Brattice Builder',
      summary: 'Build temporary walls and supports in mining operations.',
      responsibilities: [
        'Build barriers',
        'Construct supports',
        'Install ventilation',
        'Maintain structures',
        'Follow safety'
      ],
      skills: ['Construction', 'Problem-solving', 'Safety', 'Physical Ability', 'Building Knowledge'],
      talentFit: 'Practical Builder',
      education: 'High School + construction training',
      salary: '$50,000 - $95,000',
      careerPath: 'Builder → Lead Builder → Supervisor → Foreman',
      environment: ['Mining', 'Underground', 'Construction', 'Safety critical'],
      jobGrowth: '-2% decline through 2032'
    },
    {
      id: 'brazer',
      name: 'Brazer',
      summary: 'Braze and solder metal components together.',
      responsibilities: [
        'Heat metal',
        'Apply braze material',
        'Join components',
        'Inspect welds',
        'Finish work'
      ],
      skills: ['Brazing', 'Heat Control', 'Precision', 'Safety', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + brazing training',
      salary: '$45,000 - $85,000',
      careerPath: 'Brazer → Senior Brazer → Lead Tech → Supervisor',
      environment: ['Manufacturing', 'Hands-on', 'Precision work', 'Technical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'brickmason',
      name: 'Brickmason and Blockmason',
      summary: 'Lay bricks, blocks, and stone for buildings and structures.',
      responsibilities: [
        'Lay bricks',
        'Mix mortar',
        'Read blueprints',
        'Create patterns',
        'Finish surfaces'
      ],
      skills: ['Bricklaying', 'Blueprint Reading', 'Precision', 'Physical Strength', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + apprenticeship',
      salary: '$55,000 - $110,000',
      careerPath: 'Apprentice → Mason → Master Mason → Foreman → Owner',
      environment: ['Construction sites', 'Hands-on', 'Outdoor/Indoor', 'Team-based'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'coating-painting-spraying-operator',
      name: 'Coating, Painting, and Spraying Machine Operators and Tenders',
      summary: 'Operate machines for coating, painting, and spraying.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor quality',
        'Adjust settings',
        'Remove finished items'
      ],
      skills: ['Equipment Operation', 'Attention to Detail', 'Safety', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment operation', 'Safety-focused'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'coating-painting-spraying-setter',
      name: 'Coating, Painting, and Spraying Machine Setters and Set-Up Operators',
      summary: 'Set up and configure coating and painting equipment.',
      responsibilities: [
        'Set up equipment',
        'Configure systems',
        'Test settings',
        'Train operators',
        'Troubleshoot issues'
      ],
      skills: ['Equipment Setup', 'Technical Knowledge', 'Problem-solving', 'Communication', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$40,000 - $80,000',
      careerPath: 'Setter → Lead Setter → Technical Supervisor',
      environment: ['Manufacturing', 'Production', 'Technical setup', 'Problem-solving'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'coating-painting-spraying-all',
      name: 'Coating, Painting, and Spraying Machine Setters, Operators, and Tenders',
      summary: 'Set up, operate, and maintain coating and painting machines.',
      responsibilities: [
        'Set up equipment',
        'Operate machines',
        'Monitor process',
        'Maintain equipment',
        'Ensure quality'
      ],
      skills: ['Equipment Operation', 'Setup', 'Maintenance', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$40,000 - $80,000',
      careerPath: 'Technician → Lead Tech → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment focus', 'Safety-oriented'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'coil-winder',
      name: 'Coil Winders, Tapers, and Finishers',
      summary: 'Wind, tape, and finish electrical coils.',
      responsibilities: [
        'Wind coils',
        'Apply tape',
        'Finish components',
        'Inspect quality',
        'Package items'
      ],
      skills: ['Manual Dexterity', 'Attention to Detail', 'Precision', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $65,000',
      careerPath: 'Worker → Lead Worker → Supervisor',
      environment: ['Manufacturing', 'Electronics', 'Precision work', 'Production'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'vending-machine-servicer',
      name: 'Coin, Vending, and Amusement Machine Servicers and Repairers',
      summary: 'Service and repair vending and amusement machines.',
      responsibilities: [
        'Repair machines',
        'Collect coins',
        'Restock items',
        'Diagnose problems',
        'Replace parts'
      ],
      skills: ['Mechanical Repair', 'Problem-solving', 'Technical Skills', 'Attention to Detail', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$35,000 - $70,000',
      careerPath: 'Servicer → Lead Tech → Supervisor',
      environment: ['Field-based', 'Vending locations', 'Hands-on repair', 'Customer interaction'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'combination-machine-operator',
      name: 'Combination Machine Tool Operators and Tenders, Metal and Plastic',
      summary: 'Operate combination machines for shaping metal and plastic.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor process',
        'Remove finished parts',
        'Perform maintenance'
      ],
      skills: ['Machine Operation', 'Attention to Detail', 'Safety', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + on-the-job training',
      salary: '$40,000 - $75,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Machine shop', 'Production', 'Safety-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'combination-machine-setter',
      name: 'Combination Machine Tool Setters and Set-Up Operators, Metal and Plastic',
      summary: 'Set up combination machines for metal and plastic operations.',
      responsibilities: [
        'Set up equipment',
        'Configure systems',
        'Test settings',
        'Troubleshoot issues',
        'Document procedures'
      ],
      skills: ['Equipment Setup', 'Technical Knowledge', 'Problem-solving', 'Precision', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$45,000 - $85,000',
      careerPath: 'Setter → Lead Setter → Technical Supervisor',
      environment: ['Manufacturing', 'Machine shop', 'Technical setup', 'Problem-solving'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'cooling-freezing-operator',
      name: 'Cooling and Freezing Equipment Operators and Tenders',
      summary: 'Operate cooling and freezing equipment.',
      responsibilities: [
        'Operate equipment',
        'Monitor temperature',
        'Load materials',
        'Remove finished items',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Temperature Control', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + technical training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Food/Manufacturing', 'Temperature control', 'Safety-focused', 'Production'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'crushing-grinding-polishing-operator',
      name: 'Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders',
      summary: 'Set up and operate crushing, grinding, and polishing machines.',
      responsibilities: [
        'Set up equipment',
        'Operate machines',
        'Monitor process',
        'Adjust settings',
        'Maintain equipment'
      ],
      skills: ['Equipment Operation', 'Setup', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$40,000 - $75,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment focus', 'Safety-oriented'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'cutting-slicing-operator',
      name: 'Cutting and Slicing Machine Operators and Tenders',
      summary: 'Operate machines for cutting and slicing materials.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor cutting',
        'Remove items',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Safety', 'Attention to Detail', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder',
      education: 'High School + on-the-job training',
      salary: '$32,000 - $60,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment operation', 'Safety-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'cutting-slicing-setter',
      name: 'Cutting and Slicing Machine Setters, Operators, and Tenders',
      summary: 'Set up and operate cutting and slicing machines.',
      responsibilities: [
        'Set up equipment',
        'Operate machines',
        'Monitor process',
        'Adjust settings',
        'Perform maintenance'
      ],
      skills: ['Equipment Setup', 'Operation', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment-focused', 'Safety-oriented'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'press-machine-operator',
      name: 'Cutting, Punching, and Press Machine Setters, Operators, and Tenders, Metal and Plastic',
      summary: 'Operate cutting, punching, and press machines.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor production',
        'Adjust settings',
        'Remove finished items'
      ],
      skills: ['Equipment Operation', 'Precision', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Machine shop', 'Production', 'Safety-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'derrick-operator-oil-gas',
      name: 'Derrick Operator, Oil and Gas',
      summary: 'Operate derricks in oil and gas drilling operations.',
      responsibilities: [
        'Operate derrick',
        'Control equipment',
        'Monitor operations',
        'Ensure safety',
        'Report conditions'
      ],
      skills: ['Equipment Operation', 'Safety', 'Problem-solving', 'Physical Ability', 'Attention to Detail'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + oil/gas training',
      salary: '$60,000 - $120,000',
      careerPath: 'Operator → Senior Operator → Supervisor',
      environment: ['Oil/gas field', 'Drilling', 'Equipment operation', 'High-risk'],
      jobGrowth: '-3% decline through 2032'
    },
    {
      id: 'design-printing-setter',
      name: 'Design Printing Machine Setters and Set-Up Operators',
      summary: 'Set up and operate design printing machines.',
      responsibilities: [
        'Set up equipment',
        'Adjust colors',
        'Monitor printing',
        'Troubleshoot issues',
        'Maintain machine'
      ],
      skills: ['Equipment Setup', 'Printing Knowledge', 'Problem-solving', 'Attention to Detail', 'Mechanical Skills'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + printing training',
      salary: '$40,000 - $80,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Print shop', 'Publishing', 'Equipment operation', 'Detail-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'dragline-operator',
      name: 'Dragline Operator',
      summary: 'Operate dragline excavators for mining and construction.',
      responsibilities: [
        'Operate dragline',
        'Excavate materials',
        'Control bucket',
        'Monitor position',
        'Report status'
      ],
      skills: ['Heavy Equipment Operation', 'Spatial Awareness', 'Problem-solving', 'Safety', 'Mechanical Knowledge'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + equipment training',
      salary: '$55,000 - $110,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Mining', 'Construction', 'Field-based', 'Equipment-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'dredge-operator',
      name: 'Dredge Operator',
      summary: 'Operate dredges to excavate underwater materials.',
      responsibilities: [
        'Operate dredge',
        'Excavate materials',
        'Monitor position',
        'Control equipment',
        'Report status'
      ],
      skills: ['Equipment Operation', 'Navigation', 'Problem-solving', 'Safety', 'Mechanical Knowledge'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + dredging training',
      salary: '$55,000 - $110,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Waterway', 'Mining', 'Construction', 'Field-based'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'drilling-boring-operator',
      name: 'Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic',
      summary: 'Set up and operate drilling and boring machines.',
      responsibilities: [
        'Set up equipment',
        'Operate machines',
        'Monitor drilling',
        'Adjust settings',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Setup', 'Precision', 'Safety', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$40,000 - $80,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Machine shop', 'Production', 'Precision-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'drywall-ceiling-installer',
      name: 'Drywall and Ceiling Tile Installers',
      summary: 'Install drywall and ceiling tiles in buildings.',
      responsibilities: [
        'Install drywall',
        'Install tiles',
        'Tape joints',
        'Finish surfaces',
        'Ensure quality'
      ],
      skills: ['Drywall Installation', 'Precision', 'Physical Ability', 'Problem-solving', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + construction training',
      salary: '$40,000 - $85,000',
      careerPath: 'Installer → Lead Installer → Supervisor',
      environment: ['Construction', 'Building sites', 'Hands-on', 'Physical work'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'drywall-installer',
      name: 'Drywall Installer',
      summary: 'Install drywall sheets in building construction.',
      responsibilities: [
        'Install sheets',
        'Cut drywall',
        'Secure with fasteners',
        'Finish surfaces',
        'Quality control'
      ],
      skills: ['Drywall Installation', 'Measurement', 'Physical Ability', 'Problem-solving', 'Attention to Detail'],
      talentFit: 'Practical Builder',
      education: 'High School + construction training',
      salary: '$40,000 - $80,000',
      careerPath: 'Installer → Lead Installer → Supervisor',
      environment: ['Construction', 'Building sites', 'Hands-on', 'Physical labor'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'electrolytic-plating-operator',
      name: 'Electrolytic Plating and Coating Machine Operators and Tenders, Metal and Plastic',
      summary: 'Operate electrolytic plating and coating machines.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor process',
        'Remove finished items',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Chemistry', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Metal shop', 'Equipment operation', 'Safety-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'electrolytic-plating-setter',
      name: 'Electrolytic Plating and Coating Machine Setters and Set-Up Operators, Metal and Plastic',
      summary: 'Set up electrolytic plating and coating machines.',
      responsibilities: [
        'Set up equipment',
        'Configure systems',
        'Test settings',
        'Troubleshoot issues',
        'Train operators'
      ],
      skills: ['Equipment Setup', 'Chemical Knowledge', 'Problem-solving', 'Technical Skills', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$40,000 - $80,000',
      careerPath: 'Setter → Lead Setter → Technical Supervisor',
      environment: ['Manufacturing', 'Metal processing', 'Technical setup', 'Problem-solving'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'embossing-operator',
      name: 'Embossing Machine Set-Up Operator',
      summary: 'Set up and operate embossing machines.',
      responsibilities: [
        'Set up equipment',
        'Configure settings',
        'Monitor embossing',
        'Quality control',
        'Maintain machine'
      ],
      skills: ['Equipment Setup', 'Metal Working', 'Problem-solving', 'Attention to Detail', 'Mechanical Skills'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Metal pressing', 'Equipment operation', 'Quality-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'embossing-stereotyper',
      name: 'Electrotypers and Stereotypers',
      summary: 'Create printing plates through electrotyping and stereotyping.',
      responsibilities: [
        'Create plates',
        'Operate equipment',
        'Quality check',
        'Maintain equipment',
        'Document processes'
      ],
      skills: ['Printing Technology', 'Equipment Operation', 'Precision', 'Problem-solving', 'Attention to Detail'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + printing training',
      salary: '$35,000 - $70,000',
      careerPath: 'Technician → Lead Tech → Supervisor',
      environment: ['Printing', 'Publishing', 'Technical', 'Precision-focused'],
      jobGrowth: '-15% decline through 2032'
    },
    {
      id: 'dot-etcher',
      name: 'Dot Etchers',
      summary: 'Create halftone screens for printing plates.',
      responsibilities: [
        'Etch dots',
        'Create screens',
        'Use etching equipment',
        'Quality check',
        'Document work'
      ],
      skills: ['Etching', 'Printing Technology', 'Precision', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + printing training',
      salary: '$35,000 - $70,000',
      careerPath: 'Etcher → Lead Etcher → Supervisor',
      environment: ['Printing', 'Publishing', 'Technical', 'Precision work'],
      jobGrowth: '-20% decline through 2032'
    },
    {
      id: 'duplicating-operator',
      name: 'Duplicating Machine Operator',
      summary: 'Operate duplicating machines for copying documents.',
      responsibilities: [
        'Operate equipment',
        'Load paper',
        'Monitor copying',
        'Troubleshoot issues',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Attention to Detail', 'Problem-solving', 'Organization', 'Technical Knowledge'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School or some college',
      salary: '$32,000 - $60,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Office', 'Print shop', 'Equipment operation', 'Administrative'],
      jobGrowth: '-8% decline through 2032'
    },
    {
      id: 'electromechanical-assembler',
      name: 'Electromechanical Equipment Assemblers',
      summary: 'Assemble electromechanical equipment and components.',
      responsibilities: [
        'Assemble components',
        'Install parts',
        'Solder connections',
        'Test functionality',
        'Quality check'
      ],
      skills: ['Assembly', 'Soldering', 'Mechanical Skills', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + assembly training',
      salary: '$35,000 - $70,000',
      careerPath: 'Assembler → Lead Assembler → Supervisor',
      environment: ['Manufacturing', 'Electronics', 'Assembly focus', 'Precision work'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'earth-driller',
      name: 'Earth Driller, Except Oil and Gas',
      summary: 'Drill wells for water and construction purposes.',
      responsibilities: [
        'Drill wells',
        'Operate drilling equipment',
        'Monitor depth',
        'Extract cores',
        'Report conditions'
      ],
      skills: ['Drilling', 'Equipment Operation', 'Safety', 'Problem-solving', 'Mechanical Knowledge'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + drilling training',
      salary: '$45,000 - $90,000',
      careerPath: 'Driller → Lead Driller → Supervisor',
      environment: ['Construction', 'Water utility', 'Field-based', 'Equipment-focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'electric-appliance-repairer',
      name: 'Electric Home Appliance and Power Tool Repairer',
      summary: 'Repair electric appliances and power tools.',
      responsibilities: [
        'Diagnose problems',
        'Replace parts',
        'Repair circuitry',
        'Test functionality',
        'Customer service'
      ],
      skills: ['Appliance Repair', 'Electrical Knowledge', 'Problem-solving', 'Troubleshooting', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + appliance repair training',
      salary: '$35,000 - $70,000',
      careerPath: 'Technician → Senior Tech → Shop Owner',
      environment: ['Repair shop', 'Field service', 'Customer-facing', 'Hands-on repair'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'electric-meter-installer',
      name: 'Electric Meter Installers and Repairers',
      summary: 'Install and repair electric meters.',
      responsibilities: [
        'Install meters',
        'Repair equipment',
        'Test accuracy',
        'Maintain records',
        'Follow regulations'
      ],
      skills: ['Meter Installation', 'Electrical Knowledge', 'Problem-solving', 'Safety', 'Precision'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + utility training',
      salary: '$55,000 - $105,000',
      careerPath: 'Technician → Senior Tech → Supervisor',
      environment: ['Utility company', 'Field service', 'Technical work', 'Scheduled visits'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'electric-motor-switch-assembler',
      name: 'Electric Motor and Switch Assemblers and Repairers',
      summary: 'Assemble and repair electric motors and switches.',
      responsibilities: [
        'Assemble components',
        'Repair motors',
        'Test functionality',
        'Replace parts',
        'Quality control'
      ],
      skills: ['Motor Assembly', 'Electrical Knowledge', 'Problem-solving', 'Precision', 'Attention to Detail'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + electrical training',
      salary: '$40,000 - $80,000',
      careerPath: 'Assembler → Lead Tech → Supervisor',
      environment: ['Manufacturing', 'Repair shop', 'Assembly/repair', 'Precision-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'electric-motor-repairer',
      name: 'Electric Motor, Power Tool, and Related Repairer',
      summary: 'Repair electric motors and power tools.',
      responsibilities: [
        'Repair equipment',
        'Diagnose problems',
        'Replace parts',
        'Test functionality',
        'Customer service'
      ],
      skills: ['Motor Repair', 'Electrical Knowledge', 'Problem-solving', 'Troubleshooting', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + repair training',
      salary: '$40,000 - $80,000',
      careerPath: 'Technician → Senior Tech → Shop Owner',
      environment: ['Repair shop', 'Field service', 'Hands-on repair', 'Customer-facing'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'electrical-power-line-installer',
      name: 'Electrical Power-Line Installers and Repairers',
      summary: 'Install and repair electrical power lines.',
      responsibilities: [
        'Install power lines',
        'Repair lines',
        'Test circuits',
        'Ensure safety',
        'Report conditions'
      ],
      skills: ['Power Line Work', 'Electrical Knowledge', 'Safety', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + electrical training',
      salary: '$70,000 - $130,000',
      careerPath: 'Lineman → Lead Lineman → Supervisor',
      environment: ['Utility company', 'Electrical field', 'High-risk', 'Safety-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'electrician',
      name: 'Electrician',
      summary: 'Install, maintain, and repair electrical systems.',
      responsibilities: [
        'Install wiring',
        'Maintain systems',
        'Repair equipment',
        'Test circuits',
        'Follow codes'
      ],
      skills: ['Electrical Systems', 'Problem-solving', 'Safety', 'Code Knowledge', 'Precision'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'High School + electrical apprenticeship',
      salary: '$55,000 - $110,000',
      careerPath: 'Apprentice → Journeyman → Master Electrician',
      environment: ['Electrical contracting', 'Construction', 'Commercial/Residential', 'Problem-solving'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'elevator-installer-repairer',
      name: 'Elevator Installer and Repairer',
      summary: 'Install, maintain, and repair elevators.',
      responsibilities: [
        'Install elevators',
        'Perform maintenance',
        'Repair units',
        'Test systems',
        'Ensure safety'
      ],
      skills: ['Elevator Systems', 'Mechanical Skills', 'Safety', 'Problem-solving', 'Electrical Knowledge'],
      talentFit: 'Technical Aptitude, Practical Builder',
      education: 'High School + elevator apprenticeship',
      salary: '$90,000 - $180,000',
      careerPath: 'Apprentice → Journeyman → Master Technician',
      environment: ['Elevator company', 'Buildings', 'High-rise', 'Specialized work'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'engraver-setup',
      name: 'Engraver Set-Up Operator',
      summary: 'Set up engraving equipment.',
      responsibilities: [
        'Set up equipment',
        'Configure settings',
        'Program designs',
        'Test setup',
        'Maintain equipment'
      ],
      skills: ['Equipment Setup', 'Engraving', 'Problem-solving', 'Attention to Detail', 'Mechanical Skills'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + engraving training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Engraving shop', 'Manufacturing', 'Equipment operation', 'Precision work'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'engraver-hand',
      name: 'Engraver, Hand',
      summary: 'Engrave designs by hand.',
      responsibilities: [
        'Hand engrave',
        'Create designs',
        'Use hand tools',
        'Ensure precision',
        'Quality control'
      ],
      skills: ['Hand Engraving', 'Precision', 'Artistic Skill', 'Attention to Detail', 'Manual Dexterity'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + engraving apprenticeship',
      salary: '$35,000 - $75,000',
      careerPath: 'Engraver → Master Engraver → Shop Owner',
      environment: ['Engraving shop', 'Jewelry', 'Craft', 'Precision work'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'engraver-carver',
      name: 'Engraver--Carver',
      summary: 'Engrave and carve designs into materials.',
      responsibilities: [
        'Engrave designs',
        'Carve materials',
        'Create patterns',
        'Ensure precision',
        'Quality check'
      ],
      skills: ['Engraving', 'Carving', 'Artistic Skill', 'Precision', 'Manual Dexterity'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + engraving/carving training',
      salary: '$35,000 - $75,000',
      careerPath: 'Engraver → Master Engraver → Artistic Director',
      environment: ['Engraving shop', 'Specialty manufacturing', 'Hands-on', 'Artistic'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'etcher',
      name: 'Etcher',
      summary: 'Etch designs into materials.',
      responsibilities: [
        'Etch designs',
        'Use chemicals',
        'Monitor process',
        'Quality control',
        'Maintain equipment'
      ],
      skills: ['Etching', 'Chemical Knowledge', 'Precision', 'Attention to Detail', 'Safety'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + etching training',
      salary: '$35,000 - $70,000',
      careerPath: 'Etcher → Lead Etcher → Supervisor',
      environment: ['Etching shop', 'Manufacturing', 'Chemical processes', 'Precision-focused'],
      jobGrowth: '-5% decline through 2032'
    },
    {
      id: 'etcher-engraver',
      name: 'Etcher and Engraver',
      summary: 'Both etch and engrave designs.',
      responsibilities: [
        'Etch and engrave',
        'Create patterns',
        'Use equipment',
        'Quality control',
        'Maintain tools'
      ],
      skills: ['Etching', 'Engraving', 'Precision', 'Artistic Skill', 'Technical Knowledge'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + etching/engraving training',
      salary: '$35,000 - $75,000',
      careerPath: 'Artisan → Master Artisan → Shop Owner',
      environment: ['Specialty shop', 'Manufacturing', 'Hands-on', 'Artistic'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'etcher-hand',
      name: 'Etcher, Hand',
      summary: 'Etch designs by hand.',
      responsibilities: [
        'Hand etch',
        'Create designs',
        'Use hand tools',
        'Ensure precision',
        'Quality check'
      ],
      skills: ['Hand Etching', 'Precision', 'Artistic Skill', 'Attention to Detail', 'Manual Dexterity'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School + etching apprenticeship',
      salary: '$35,000 - $75,000',
      careerPath: 'Etcher → Master Etcher → Artistic Director',
      environment: ['Etching studio', 'Specialty manufacturing', 'Hands-on', 'Artistic'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'extruding-drawing-operator',
      name: 'Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic',
      summary: 'Set up and operate extruding and drawing machines.',
      responsibilities: [
        'Set up equipment',
        'Operate machines',
        'Monitor production',
        'Adjust settings',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Setup', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$40,000 - $80,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Metal/plastic processing', 'Equipment-focused', 'Safety-oriented'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'extruding-forming-fibers-operator',
      name: 'Extruding and Forming Machine Operators and Tenders, Synthetic or Glass Fibers',
      summary: 'Operate extruding and forming machines for fibers.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor production',
        'Remove products',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Safety', 'Attention to Detail', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Fiber manufacturing', 'Production', 'Equipment operation', 'Safety-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'extruding-forming-fibers-setter',
      name: 'Extruding and Forming Machine Setters, Operators, and Tenders, Synthetic and Glass Fibers',
      summary: 'Set up and operate fiber manufacturing equipment.',
      responsibilities: [
        'Set up equipment',
        'Operate machines',
        'Monitor process',
        'Adjust settings',
        'Maintain equipment'
      ],
      skills: ['Equipment Setup', 'Operation', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$40,000 - $80,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Fiber manufacturing', 'Production', 'Equipment-focused', 'Safety-oriented'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'extruding-compacting-operator',
      name: 'Extruding, Forming, Pressing, and Compacting Machine Operators and Tenders',
      summary: 'Operate machines for extruding, forming, pressing, and compacting.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor production',
        'Remove items',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'Safety', 'Attention to Detail', 'Problem-solving', 'Physical Ability'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$35,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment operation', 'Safety-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'extruding-compacting-setter',
      name: 'Extruding, Forming, Pressing, and Compacting Machine Setters and Set-Up Operators',
      summary: 'Set up extrusion, forming, and compacting machines.',
      responsibilities: [
        'Set up equipment',
        'Configure systems',
        'Test settings',
        'Troubleshoot issues',
        'Train operators'
      ],
      skills: ['Equipment Setup', 'Technical Knowledge', 'Problem-solving', 'Communication', 'Attention to Detail'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$40,000 - $80,000',
      careerPath: 'Setter → Lead Setter → Technical Supervisor',
      environment: ['Manufacturing', 'Production', 'Technical setup', 'Problem-solving'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'extruding-compacting-all',
      name: 'Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders',
      summary: 'Set up, operate, and maintain extruding and forming machines.',
      responsibilities: [
        'Set up equipment',
        'Operate machines',
        'Monitor process',
        'Maintain equipment',
        'Ensure quality'
      ],
      skills: ['Equipment Operation', 'Setup', 'Maintenance', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + training',
      salary: '$40,000 - $80,000',
      careerPath: 'Technician → Lead Tech → Supervisor',
      environment: ['Manufacturing', 'Production', 'Equipment focus', 'Safety-oriented'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'fabric-patternmaker',
      name: 'Fabric and Apparel Patternmaker',
      summary: 'Create patterns for fabric and apparel production.',
      responsibilities: [
        'Create patterns',
        'Modify designs',
        'Use software',
        'Ensure accuracy',
        'Quality check'
      ],
      skills: ['Pattern Making', 'Design', 'Technical Knowledge', 'Precision', 'Attention to Detail'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'High School or Associate\'s in fashion design',
      salary: '$40,000 - $80,000',
      careerPath: 'Patternmaker → Lead Patternmaker → Design Lead',
      environment: ['Garment factory', 'Fashion industry', 'Design-focused', 'Precision work'],
      jobGrowth: '-2% decline through 2032'
    },
    {
      id: 'fabric-mender',
      name: 'Fabric Mender, Except Garment',
      summary: 'Repair and mend fabric items.',
      responsibilities: [
        'Repair fabrics',
        'Mend items',
        'Replace sections',
        'Match patterns',
        'Quality check'
      ],
      skills: ['Sewing', 'Repair', 'Attention to Detail', 'Manual Dexterity', 'Color Matching'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + sewing skills',
      salary: '$28,000 - $55,000',
      careerPath: 'Mender → Lead Mender → Supervisor',
      environment: ['Textile repair', 'Laundry', 'Fabric service', 'Detail-focused'],
      jobGrowth: '-3% decline through 2032'
    },
    {
      id: 'fiber-cutting-operator',
      name: 'Fiber Product Cutting Machine Setters and Set-Up Operators',
      summary: 'Set up fiber product cutting equipment.',
      responsibilities: [
        'Set up equipment',
        'Configure settings',
        'Program patterns',
        'Troubleshoot issues',
        'Maintain machines'
      ],
      skills: ['Equipment Setup', 'Fiber Knowledge', 'Problem-solving', 'Attention to Detail', 'Technical Skills'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + equipment training',
      salary: '$40,000 - $80,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Fiber manufacturing', 'Textile', 'Equipment operation', 'Technical'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'fiberglass-laminator',
      name: 'Fiberglass Laminator and Fabricator',
      summary: 'Laminate and fabricate fiberglass products.',
      responsibilities: [
        'Laminate materials',
        'Fabricate products',
        'Apply resins',
        'Cure products',
        'Quality control'
      ],
      skills: ['Fiberglass Work', 'Lamination', 'Fabrication', 'Safety', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + fiberglass training',
      salary: '$35,000 - $70,000',
      careerPath: 'Fabricator → Lead Fabricator → Supervisor',
      environment: ['Manufacturing', 'Composites', 'Production', 'Hands-on'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  media: [
    {
      id: 'broadcast-news-analyst',
      name: 'Broadcast News Analyst',
      summary: 'Analyze and report on news events for broadcast media.',
      responsibilities: [
        'Research stories',
        'Analyze events',
        'Write reports',
        'Present analysis',
        'Interview sources'
      ],
      skills: ['Journalism', 'Communication', 'Research', 'Presentation', 'Critical Thinking'],
      talentFit: 'Communication, Analytical Problem Solver',
      education: 'Bachelor\'s in Journalism or Communication',
      salary: '$50,000 - $100,000',
      careerPath: 'Reporter → News Analyst → Senior Analyst → News Director',
      environment: ['News station', 'Broadcasting', 'Breaking news', 'Fast-paced'],
      jobGrowth: '-2% decline through 2032'
    },
    {
      id: 'broadcast-technician',
      name: 'Broadcast Technician',
      summary: 'Operate equipment for radio and television broadcasts.',
      responsibilities: [
        'Operate cameras',
        'Mix audio',
        'Manage signals',
        'Maintain equipment',
        'Test systems'
      ],
      skills: ['Broadcasting Equipment', 'Technical Skills', 'Problem-solving', 'Communication', 'Safety'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + technical training',
      salary: '$45,000 - $85,000',
      careerPath: 'Technician → Senior Technician → Lead Tech → Engineering Manager',
      environment: ['Broadcasting', 'Studio', 'Technical focus', 'Live production'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'camera-operator',
      name: 'Camera Operator',
      summary: 'Operate cameras to capture images and video.',
      responsibilities: [
        'Operate cameras',
        'Frame shots',
        'Adjust settings',
        'Maintain equipment',
        'Collaborate with crew'
      ],
      skills: ['Camera Operation', 'Composition', 'Technical Skills', 'Creativity', 'Problem-solving'],
      talentFit: 'Creative Thinker, Practical Builder',
      education: 'High School + film/video training',
      salary: '$45,000 - $90,000',
      careerPath: 'Camera Operator → Lead Operator → Director of Photography',
      environment: ['Film/TV production', 'Video', 'Creative', 'Team-based'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'caption-writer',
      name: 'Caption Writer',
      summary: 'Write captions for broadcast and video content.',
      responsibilities: [
        'Write captions',
        'Time text',
        'Ensure accuracy',
        'Follow style guides',
        'Meet deadlines'
      ],
      skills: ['Writing', 'Editing', 'Timing', 'Communication', 'Attention to Detail'],
      talentFit: 'Creative Thinker, Detail-Oriented Organizer',
      education: 'Bachelor\'s or high school + training',
      salary: '$40,000 - $75,000',
      careerPath: 'Caption Writer → Senior Writer → Production Manager',
      environment: ['Broadcasting', 'Media production', 'Detail-focused', 'Fast-paced'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'cartographer',
      name: 'Cartographer and Photogrammetrist',
      summary: 'Create maps and analyze aerial photography.',
      responsibilities: [
        'Create maps',
        'Analyze photos',
        'Update maps',
        'Use GIS software',
        'Ensure accuracy'
      ],
      skills: ['GIS Software', 'Cartography', 'Analysis', 'Attention to Detail', 'Spatial Thinking'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Geography, GIS, or Cartography',
      salary: '$60,000 - $110,000',
      careerPath: 'Cartographer → Senior Cartographer → Lead Analyst',
      environment: ['Government', 'Environmental', 'Technical', 'Mapping focus'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'cartoonist',
      name: 'Cartoonist',
      summary: 'Create cartoons and comic art.',
      responsibilities: [
        'Draw cartoons',
        'Develop characters',
        'Create stories',
        'Develop concepts',
        'Deliver work'
      ],
      skills: ['Drawing', 'Creativity', 'Storytelling', 'Humor', 'Artistic Skill'],
      talentFit: 'Creative Thinker',
      education: 'High School or degree in fine arts',
      salary: '$40,000 - $90,000',
      careerPath: 'Cartoonist → Graphic Novelist → Art Director',
      environment: ['Publishing', 'Media', 'Creative', 'Freelance possible'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'camera-operator-tv',
      name: 'Camera Operator, Television, Video, and Motion Picture',
      summary: 'Operate cameras for television, video, and film production.',
      responsibilities: [
        'Operate cameras',
        'Frame scenes',
        'Adjust focus',
        'Maintain equipment',
        'Coordinate with crew'
      ],
      skills: ['Camera Operation', 'Cinematography', 'Technical Skills', 'Creativity', 'Problem-solving'],
      talentFit: 'Creative Thinker, Practical Builder',
      education: 'High School + film/video training',
      salary: '$50,000 - $110,000',
      careerPath: 'Camera Operator → Lead Camera → Director of Photography',
      environment: ['Film/TV/Video production', 'Creative', 'Team-based', 'Project-based'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'choreographer',
      name: 'Choreographer',
      summary: 'Create and teach dance movements and routines.',
      responsibilities: [
        'Create routines',
        'Teach dancers',
        'Attend rehearsals',
        'Attend performances',
        'Develop concepts'
      ],
      skills: ['Dance', 'Creativity', 'Teaching', 'Communication', 'Artistic Vision'],
      talentFit: 'Creative Thinker, People-Oriented Helper',
      education: 'High School or degree in dance',
      salary: '$40,000 - $85,000',
      careerPath: 'Choreographer → Master Choreographer → Artistic Director',
      environment: ['Theater', 'Dance company', 'Film/TV', 'Creative'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'director-stage-film-tv',
      name: 'Director, Stage, Motion Pictures, Television, and Radio',
      summary: 'Direct performers and production for entertainment media.',
      responsibilities: [
        'Direct production',
        'Guide performers',
        'Make creative decisions',
        'Manage budget',
        'Oversee crew'
      ],
      skills: ['Direction', 'Creativity', 'Leadership', 'Communication', 'Artistic Vision'],
      talentFit: 'Leadership & Visionary, Creative Thinker',
      education: 'Bachelor\'s in Film/Theater + experience',
      salary: '$75,000 - $200,000+',
      careerPath: 'Director → Established Director → Producer',
      environment: ['Film/TV/Theater', 'Production', 'Creative', 'High-pressure'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'grips-set-up-workers',
      name: 'Grips and Set-Up Workers, Motion Picture Sets, Studios, and Stages',
      summary: 'Set up, move, and secure equipment for film, TV, and stage productions.',
      responsibilities: [
        'Set up rigging and supports',
        'Move set pieces and gear',
        'Secure equipment safely',
        'Assist camera and lighting crews',
        'Break down and store equipment'
      ],
      skills: ['Rigging', 'Safety Awareness', 'Physical Stamina', 'Teamwork', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $65,000',
      careerPath: 'Grip → Key Grip → Best Boy Grip → Department Head',
      environment: ['Film/TV sets', 'Physical work', 'Fast-paced', 'Safety focused'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'hand-compositors-typesetters',
      name: 'Hand Compositors and Typesetters',
      summary: 'Arrange type and layout for printed materials and publications.',
      responsibilities: [
        'Arrange text and layouts',
        'Prepare copy for printing',
        'Proof and correct errors',
        'Operate typesetting tools',
        'Coordinate with print teams'
      ],
      skills: ['Typography', 'Layout', 'Attention to Detail', 'Print Production', 'Computer Skills'],
      talentFit: 'Detail-Oriented Organizer, Creative Thinker',
      education: 'High School + print/graphic training',
      salary: '$35,000 - $60,000',
      careerPath: 'Typesetter → Senior Typesetter → Prepress Specialist',
      environment: ['Print shop', 'Deadlines', 'Computer-based', 'Quality focused'],
      jobGrowth: '0% growth through 2032'
    },
    {
      id: 'job-printers',
      name: 'Job Printers',
      summary: 'Set up and operate printing presses for short-run print jobs.',
      responsibilities: [
        'Set up presses',
        'Run print jobs',
        'Mix inks and adjust color',
        'Check print quality',
        'Maintain equipment'
      ],
      skills: ['Printing', 'Machinery Operation', 'Color Matching', 'Troubleshooting', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + print training',
      salary: '$35,000 - $60,000',
      careerPath: 'Printer → Lead Printer → Shop Supervisor',
      environment: ['Print shop', 'Machinery', 'Hands-on', 'Deadlines'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  military: [
    {
      id: 'armored-assault-vehicle-crew-members',
      name: 'Armored Assault Vehicle Crew Members',
      summary: 'Operate and maintain armored military vehicles in combat and support roles.',
      responsibilities: [
        'Operate armored vehicles',
        'Maintain vehicle systems',
        'Operate weapons systems',
        'Execute combat missions',
        'Coordinate with command'
      ],
      skills: ['Vehicle Operation', 'Weapons Systems', 'Teamwork', 'Combat Skills', 'Technical Aptitude'],
      talentFit: 'Practical Builder, Leadership & Visionary',
      education: 'High School + Military Training',
      salary: '$30,000 - $60,000',
      careerPath: 'Crew Member → Squad Leader → Vehicle Commander → Training Officer',
      environment: ['Combat operations', 'Team-based', 'High responsibility', 'Equipment intensive'],
      jobGrowth: 'Varies with military needs'
    },
    {
      id: 'armored-assault-vehicle-officers',
      name: 'Armored Assault Vehicle Officers',
      summary: 'Command and oversee armored vehicle operations and personnel.',
      responsibilities: [
        'Lead armored vehicle operations',
        'Direct tactical movements',
        'Manage personnel',
        'Plan missions',
        'Ensure safety and compliance'
      ],
      skills: ['Leadership', 'Tactical Planning', 'Decision-making', 'Communication', 'Military Strategy'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Officer Commission + Military Training',
      salary: '$70,000 - $150,000',
      careerPath: 'Second Lieutenant → Captain → Major → Battalion Commander',
      environment: ['Command authority', 'Strategic decisions', 'Military operations', 'Leadership'],
      jobGrowth: 'Varies with military needs'
    },
    {
      id: 'artillery-missile-crew-members',
      name: 'Artillery and Missile Crew Members',
      summary: 'Operate and maintain artillery and missile systems in support operations.',
      responsibilities: [
        'Operate artillery systems',
        'Maintain equipment',
        'Load and fire weapons',
        'Calculate firing solutions',
        'Follow targeting instructions'
      ],
      skills: ['Technical Skills', 'Mathematics', 'Team Coordination', 'Equipment Maintenance', 'Precision'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Military Technical Training',
      salary: '$30,000 - $60,000',
      careerPath: 'Crew Member → Team Leader → Section Sergeant → Instructor',
      environment: ['Technical operations', 'Team-based', 'Artillery systems', 'Training focus'],
      jobGrowth: 'Varies with military needs'
    },
    {
      id: 'artillery-missile-officers',
      name: 'Artillery and Missile Officers',
      summary: 'Command artillery and missile units and operations.',
      responsibilities: [
        'Command artillery units',
        'Plan fire missions',
        'Coordinate with other units',
        'Manage personnel',
        'Ensure operational readiness'
      ],
      skills: ['Leadership', 'Military Strategy', 'Fire Direction', 'Planning', 'Communication'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Officer Commission + Artillery School',
      salary: '$70,000 - $150,000',
      careerPath: 'Second Lieutenant → Captain → Major → Regiment Commander',
      environment: ['Command leadership', 'Strategic planning', 'Unit operations', 'Technical expertise'],
      jobGrowth: 'Varies with military needs'
    },
    {
      id: 'infantry',
      name: 'Infantry',
      summary: 'Conduct ground combat operations in military missions.',
      responsibilities: [
        'Execute ground missions',
        'Operate weapons systems',
        'Maintain equipment',
        'Follow tactical orders',
        'Participate in training'
      ],
      skills: ['Combat Skills', 'Weapons Operation', 'Physical Fitness', 'Teamwork', 'Discipline'],
      talentFit: 'Practical Builder, Leadership & Visionary',
      education: 'High School + Military Training',
      salary: '$30,000 - $60,000',
      careerPath: 'Private → Specialist → Sergeant → Staff Sergeant',
      environment: ['Combat operations', 'Physical demands', 'Team-based', 'High risk'],
      jobGrowth: 'Varies with military needs'
    },
    {
      id: 'infantry-officers',
      name: 'Infantry Officers',
      summary: 'Lead infantry units in combat and training operations.',
      responsibilities: [
        'Command infantry units',
        'Plan tactical missions',
        'Lead troops in combat',
        'Manage personnel',
        'Ensure unit readiness'
      ],
      skills: ['Leadership', 'Tactical Planning', 'Decision-making', 'Communication', 'Military Strategy'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Officer Commission + Infantry School',
      salary: '$70,000 - $150,000',
      careerPath: 'Second Lieutenant → Captain → Major → Battalion Commander',
      environment: ['Command leadership', 'Combat operations', 'Strategic planning', 'High responsibility'],
      jobGrowth: 'Varies with military needs'
    },
    {
      id: 'highway-patrol-pilots',
      name: 'Highway Patrol Pilots',
      summary: 'Conduct aerial patrols and support law enforcement operations.',
      responsibilities: [
        'Fly patrol aircraft',
        'Monitor traffic from air',
        'Support ground units',
        'Conduct surveillance',
        'Coordinate rescue operations'
      ],
      skills: ['Pilot Skills', 'Law Enforcement', 'Communication', 'Navigation', 'Decision-making'],
      talentFit: 'Leadership & Visionary, Practical Builder',
      education: 'High School + pilot license + law enforcement training',
      salary: '$70,000 - $120,000',
      careerPath: 'Pilot → Senior Pilot → Flight Operations Manager',
      environment: ['Aviation', 'Law enforcement', 'Public safety', 'High responsibility'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'command-control-officer',
      name: 'Command and Control Center Officer',
      summary: 'Oversee military command and control operations.',
      responsibilities: [
        'Direct operations',
        'Manage communications',
        'Make strategic decisions',
        'Oversee personnel',
        'Ensure readiness'
      ],
      skills: ['Military Leadership', 'Strategy', 'Decision-making', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary',
      education: 'Military officer training',
      salary: '$100,000 - $200,000+',
      careerPath: 'Officer → Senior Officer → Command Position',
      environment: ['Military base', 'Command center', 'Strategic', 'Leadership'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'command-control-specialist',
      name: 'Command and Control Center Specialist',
      summary: 'Operate communications and control systems in military settings.',
      responsibilities: [
        'Operate systems',
        'Monitor communications',
        'Process information',
        'Alert personnel',
        'Maintain readiness'
      ],
      skills: ['System Operation', 'Communication', 'Attention to Detail', 'Quick Thinking', 'Technical Skills'],
      talentFit: 'Detail-Oriented Organizer, Technical Aptitude',
      education: 'High School + military training',
      salary: '$50,000 - $95,000',
      careerPath: 'Specialist → Senior Specialist → Operations Supervisor',
      environment: ['Military base', 'Command center', 'Technical', 'Strategic operations'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'intelligence-analysts',
      name: 'Intelligence Analysts',
      summary: 'Analyze information to support military or national security operations.',
      responsibilities: [
        'Collect and analyze intelligence',
        'Prepare intelligence reports',
        'Brief leadership on threats',
        'Monitor emerging situations',
        'Support operations planning'
      ],
      skills: ['Analysis', 'Critical Thinking', 'Research', 'Communication', 'Attention to Detail'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s + military/security training',
      salary: '$60,000 - $120,000',
      careerPath: 'Analyst → Senior Analyst → Chief Analyst → Director',
      environment: ['Intelligence community', 'Security clearance', 'Analysis focus', 'Strategic impact'],
      jobGrowth: '6% growth through 2032'
    },
  ],
  religion: [
    {
      id: 'clergy',
      name: 'Clergy',
      summary: 'Provide spiritual leadership and guidance to congregations.',
      responsibilities: [
        'Conduct services',
        'Provide counseling',
        'Guide congregations',
        'Teach spiritual concepts',
        'Perform ceremonies'
      ],
      skills: ['Spiritual Leadership', 'Communication', 'Empathy', 'Teaching', 'Guidance'],
      talentFit: 'People-Oriented Helper, Leadership & Visionary',
      education: 'Bachelor\'s or seminary degree',
      salary: '$40,000 - $85,000',
      careerPath: 'Clergy → Senior Clergy → Head Pastor/Priest',
      environment: ['Religious institution', 'Community', 'Spiritual focus', 'Counseling'],
      jobGrowth: '2% growth through 2032'
    },
  ],
  sales: [
    {
      id: 'sales-representative',
      name: 'Sales Representative',
      summary: 'Sell products or services to customers and meet sales targets.',
      responsibilities: [
        'Prospecting new customers',
        'Present products/services',
        'Negotiate deals',
        'Close sales',
        'Build customer relationships'
      ],
      skills: ['Communication', 'Persuasion', 'Relationship Building', 'Self-motivation', 'Product Knowledge'],
      talentFit: 'People-Oriented Helper, Leadership & Visionary',
      education: 'High School or Bachelor\'s degree',
      salary: '$40,000 - $100,000 (salary + commission)',
      careerPath: 'Sales Rep → Senior Rep → Sales Manager → Director → VP',
      environment: ['Customer interaction', 'Target-driven', 'Relationship focus', 'Negotiation'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'account-executive',
      name: 'Account Executive',
      summary: 'Manage key customer accounts and drive account growth.',
      responsibilities: [
        'Manage customer accounts',
        'Identify upsell opportunities',
        'Build strategic relationships',
        'Present solutions',
        'Meet revenue targets'
      ],
      skills: ['Sales', 'Relationship Building', 'Strategic Thinking', 'Communication', 'Negotiation'],
      talentFit: 'People-Oriented Helper, Leadership & Visionary',
      education: 'Bachelor\'s degree preferred',
      salary: '$70,000 - $150,000+',
      careerPath: 'Sales Rep → Account Executive → Key Account Manager → Sales Director',
      environment: ['Account management', 'Strategic focus', 'Relationship depth', 'Revenue responsibility'],
      jobGrowth: 'Growing in B2B'
    },
    {
      id: 'marketing-manager',
      name: 'Marketing Manager',
      summary: 'Develop and execute marketing strategies to promote products.',
      responsibilities: [
        'Develop marketing plans',
        'Create campaigns',
        'Manage marketing budgets',
        'Analyze marketing metrics',
        'Lead marketing team'
      ],
      skills: ['Strategic Planning', 'Creativity', 'Analytics', 'Communication', 'Leadership'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Marketing or related field',
      salary: '$70,000 - $130,000',
      careerPath: 'Marketing Coordinator → Marketing Manager → Senior Manager → Director',
      environment: ['Strategic marketing', 'Creativity', 'Data-driven', 'Campaign focus'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'brand-manager',
      name: 'Brand Manager',
      summary: 'Develop and maintain brand identity and strategy.',
      responsibilities: [
        'Develop brand strategy',
        'Manage brand positioning',
        'Create brand guidelines',
        'Oversee brand communications',
        'Track brand performance'
      ],
      skills: ['Strategic Thinking', 'Creativity', 'Communication', 'Analytics', 'Leadership'],
      talentFit: 'Creative Thinker, Leadership & Visionary',
      education: 'Bachelor\'s in Marketing or related field',
      salary: '$80,000 - $140,000',
      careerPath: 'Assistant Brand Manager → Brand Manager → Senior Manager → Director',
      environment: ['Brand strategy', 'Creative vision', 'Long-term focus', 'Strategic influence'],
      jobGrowth: 'Stable; varies by industry'
    },
    {
      id: 'event-manager',
      name: 'Event Manager',
      summary: 'Plan and execute events including conferences, weddings, and promotions.',
      responsibilities: [
        'Plan event details',
        'Manage budgets',
        'Coordinate vendors',
        'Handle logistics',
        'Ensure event success'
      ],
      skills: ['Organization', 'Communication', 'Problem-solving', 'Leadership', 'Creativity'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'Bachelor\'s in Event Management or related field',
      salary: '$50,000 - $95,000',
      careerPath: 'Event Coordinator → Event Manager → Senior Manager → Director',
      environment: ['Event planning', 'Problem-solving', 'Team coordination', 'Creative details'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'business-development',
      name: 'Business Development Manager',
      summary: 'Identify and pursue new business opportunities and partnerships.',
      responsibilities: [
        'Research market opportunities',
        'Identify new markets',
        'Develop partnerships',
        'Create growth strategies',
        'Present opportunities'
      ],
      skills: ['Strategic Planning', 'Market Research', 'Relationship Building', 'Communication', 'Negotiation'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s degree (any field)',
      salary: '$80,000 - $150,000+',
      careerPath: 'Coordinator → Business Development Manager → Senior Manager → Director',
      environment: ['Growth focus', 'Strategic partnerships', 'Market exploration', 'Relationship building'],
      jobGrowth: 'Growing with business expansion'
    },
    {
      id: 'assessor',
      name: 'Assessor',
      summary: 'Estimate the value of property for taxation and appraisal purposes.',
      responsibilities: [
        'Assess property value',
        'Research property data',
        'Conduct inspections',
        'Prepare property descriptions',
        'Maintain property records'
      ],
      skills: ['Property Valuation', 'Data Analysis', 'Attention to Detail', 'Communication', 'Mathematics'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Associate\'s + state certification',
      salary: '$50,000 - $95,000',
      careerPath: 'Assessor → Senior Assessor → Assessment Officer → Director',
      environment: ['Property evaluation', 'Community service', 'Detail-focused', 'Public sector'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'auditor',
      name: 'Auditor',
      summary: 'Examine financial records and ensure compliance with regulations.',
      responsibilities: [
        'Conduct audits',
        'Review financial records',
        'Test internal controls',
        'Prepare audit reports',
        'Communicate findings'
      ],
      skills: ['Financial Analysis', 'Attention to Detail', 'Problem-solving', 'Communication', 'Technical Auditing'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Accounting + CPA or CMA License',
      salary: '$70,000 - $130,000',
      careerPath: 'Junior Auditor → Auditor → Senior Auditor → Audit Manager → Audit Director',
      environment: ['Financial focus', 'Compliance', 'Detail-oriented', 'Professional services'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'demonstrator-product-promoter',
      name: 'Demonstrator and Product Promoter',
      summary: 'Demonstrate and promote products to consumers.',
      responsibilities: [
        'Demonstrate products',
        'Promote features',
        'Answer questions',
        'Generate interest',
        'Collect feedback'
      ],
      skills: ['Communication', 'Sales', 'Product Knowledge', 'Enthusiasm', 'Customer Engagement'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or some college',
      salary: '$28,000 - $55,000',
      careerPath: 'Demonstrator → Lead Demonstrator → Promotions Manager',
      environment: ['Retail', 'Trade shows', 'Events', 'Customer-facing'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'designer-all-other',
      name: 'Designer, All Other',
      summary: 'Create designs for various purposes.',
      responsibilities: [
        'Create designs',
        'Develop concepts',
        'Modify designs',
        'Present ideas',
        'Collaborate'
      ],
      skills: ['Design', 'Creativity', 'Software Knowledge', 'Communication', 'Problem-solving'],
      talentFit: 'Creative Thinker',
      education: 'Bachelor\'s in design or related field',
      salary: '$55,000 - $120,000',
      careerPath: 'Designer → Senior Designer → Lead Designer',
      environment: ['Design studio', 'Corporate', 'Advertising', 'Creative'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'door-to-door-sales',
      name: 'Door-To-Door Sales Worker, News and Street Vendor, and Related Worker',
      summary: 'Sell products and services directly to consumers.',
      responsibilities: [
        'Sell products',
        'Contact customers',
        'Provide information',
        'Close sales',
        'Maintain records'
      ],
      skills: ['Sales', 'Communication', 'Persuasion', 'Physical Ability', 'Independence'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School or equivalent',
      salary: '$28,000 - $55,000',
      careerPath: 'Sales Rep → Lead Rep → Sales Manager',
      environment: ['Field-based', 'Direct sales', 'Door-to-door', 'Independent'],
      jobGrowth: '-8% decline through 2032'
    },
    {
      id: 'driver-sales-worker',
      name: 'Driver-Sales Worker',
      summary: 'Drive and sell products to customers.',
      responsibilities: [
        'Drive vehicle',
        'Deliver products',
        'Make sales',
        'Collect payments',
        'Maintain vehicle'
      ],
      skills: ['Sales', 'Driving', 'Customer Service', 'Organization', 'Time Management'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School + commercial driver license',
      salary: '$35,000 - $70,000',
      careerPath: 'Driver-Sales → Lead Driver → Route Manager',
      environment: ['Field-based', 'Sales', 'Delivery', 'Customer-facing'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'insurance-sales-agents',
      name: 'Insurance Sales Agents',
      summary: 'Sell insurance policies and advise clients on coverage options.',
      responsibilities: [
        'Prospect new clients',
        'Explain coverage options',
        'Quote premiums',
        'Close sales',
        'Service client accounts'
      ],
      skills: ['Sales', 'Communication', 'Customer Service', 'Negotiation', 'Product Knowledge'],
      talentFit: 'People-Oriented Helper, Leadership & Visionary',
      education: 'High School + insurance license',
      salary: '$40,000 - $90,000',
      careerPath: 'Agent → Senior Agent → Sales Manager',
      environment: ['Office/Field mix', 'Client-focused', 'Sales-driven', 'Relationship-based'],
      jobGrowth: '6% growth through 2032'
    },
  ],
  science: [
    {
      id: 'biologist',
      name: 'Biologist / Life Scientist',
      summary: 'Study living organisms and life processes through research.',
      responsibilities: [
        'Conduct biological research',
        'Design experiments',
        'Analyze biological data',
        'Publish research findings',
        'Collaborate with teams'
      ],
      skills: ['Research', 'Laboratory Skills', 'Attention to Detail', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s (Master\'s/PhD often needed)',
      salary: '$65,000 - $130,000+',
      careerPath: 'Research Assistant → Biologist → Senior Scientist → Research Director',
      environment: ['Scientific research', 'Laboratory work', 'Innovation', 'Collaboration'],
      jobGrowth: 'Varies by specialty'
    },
    {
      id: 'chemist',
      name: 'Chemist',
      summary: 'Study chemical reactions and develop new materials and compounds.',
      responsibilities: [
        'Conduct chemical research',
        'Design experiments',
        'Test hypotheses',
        'Analyze results',
        'Develop new materials'
      ],
      skills: ['Chemistry Knowledge', 'Laboratory Skills', 'Problem-solving', 'Attention to Detail', 'Research'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s (Master\'s/PhD often needed)',
      salary: '$65,000 - $130,000+',
      careerPath: 'Chemist → Senior Chemist → Research Manager',
      environment: ['Laboratory work', 'Research focus', 'Precision', 'Innovation'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'environmental-scientist',
      name: 'Environmental Scientist',
      summary: 'Study environmental issues and develop solutions for sustainability.',
      responsibilities: [
        'Conduct environmental research',
        'Analyze environmental data',
        'Develop sustainability solutions',
        'Write environmental reports',
        'Assess environmental impact'
      ],
      skills: ['Ecology Knowledge', 'Data Analysis', 'Research', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Environmental Science or related',
      salary: '$65,000 - $120,000',
      careerPath: 'Environmental Scientist → Senior Scientist → Manager → Director',
      environment: ['Environmental impact', 'Research', 'Sustainability focus', 'Field and office work'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'geologist',
      name: 'Geologist',
      summary: 'Study Earth\'s materials and structures to understand geology.',
      responsibilities: [
        'Conduct geological surveys',
        'Analyze rock and mineral samples',
        'Study Earth processes',
        'Predict geological events',
        'Conduct field research'
      ],
      skills: ['Geological Knowledge', 'Field Research', 'Analysis', 'Problem-solving', 'Technical Skills'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in Geology or related field',
      salary: '$70,000 - $130,000',
      careerPath: 'Junior Geologist → Geologist → Senior Scientist → Project Manager',
      environment: ['Field research', 'Laboratory work', 'Discovery', 'Natural science'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'astronomer',
      name: 'Astronomer',
      summary: 'Study celestial objects and phenomena to understand the universe.',
      responsibilities: [
        'Observe celestial objects',
        'Collect astronomical data',
        'Analyze observations',
        'Publish research',
        'Teach and communicate findings'
      ],
      skills: ['Astronomy Knowledge', 'Data Analysis', 'Research', 'Mathematics', 'Writing'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in Astronomy; PhD usually required',
      salary: '$70,000 - $130,000+',
      careerPath: 'Postdoc → Astronomer → Senior Scientist → Department Head',
      environment: ['Space science', 'Research', 'Discovery', 'Theoretical focus'],
      jobGrowth: 'Competitive field'
    },
    {
      id: 'historians',
      name: 'Historians',
      summary: 'Research and interpret past events, cultures, and societies.',
      responsibilities: [
        'Research historical records',
        'Analyze artifacts and documents',
        'Write historical accounts',
        'Present findings',
        'Advise on historical matters'
      ],
      skills: ['Research', 'Analysis', 'Writing', 'Critical Thinking', 'Attention to Detail'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Master\'s or PhD in history',
      salary: '$50,000 - $95,000',
      careerPath: 'Historian → Senior Historian → Director',
      environment: ['Museums', 'Archives', 'Academia', 'Research'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'industrial-organizational-psychologists',
      name: 'Industrial-Organizational Psychologists',
      summary: 'Apply psychology to workplace behavior and organizational practices.',
      responsibilities: [
        'Conduct workplace research',
        'Assess employee behavior',
        'Design training programs',
        'Advise on hiring strategies',
        'Improve organizational effectiveness'
      ],
      skills: ['Psychology', 'Research', 'Data Analysis', 'Communication', 'Consulting'],
      talentFit: 'Analytical Problem Solver, People-Oriented Helper',
      education: 'Master\'s or PhD in I-O psychology',
      salary: '$80,000 - $150,000',
      careerPath: 'Consultant → Senior Psychologist → Director',
      environment: ['Corporate', 'Consulting', 'Research', 'Organizational development'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'agricultural-food-science-technician',
      name: 'Agricultural and Food Science Technician',
      summary: 'Conduct tests and provide technical support for agricultural research.',
      responsibilities: [
        'Conduct laboratory tests',
        'Collect samples',
        'Analyze agricultural products',
        'Document results',
        'Support research'
      ],
      skills: ['Laboratory Techniques', 'Attention to Detail', 'Problem-solving', 'Data Analysis', 'Safety'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'High School or Associate\'s in Food/Agricultural Science',
      salary: '$40,000 - $75,000',
      careerPath: 'Technician → Senior Technician → Lead Technician → Supervisor',
      environment: ['Laboratory work', 'Research support', 'Food safety focus', 'Technical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'animal-breeder',
      name: 'Animal Breeder',
      summary: 'Breed animals to improve desirable genetic traits.',
      responsibilities: [
        'Select breeding animals',
        'Manage breeding programs',
        'Monitor animal health',
        'Keep breeding records',
        'Improve herds/flocks'
      ],
      skills: ['Animal Genetics', 'Animal Husbandry', 'Problem-solving', 'Record Keeping', 'Scientific Knowledge'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School or Bachelor\'s in Animal Science',
      salary: '$40,000 - $80,000',
      careerPath: 'Breeder → Lead Breeder → Farm Manager → Owner',
      environment: ['Animal agriculture', 'Hands-on', 'Problem-solving', 'Science-based'],
      jobGrowth: '-1% decline through 2032'
    },
    {
      id: 'animal-control-worker',
      name: 'Animal Control Worker',
      summary: 'Respond to animal control calls and manage stray animals.',
      responsibilities: [
        'Respond to animal complaints',
        'Capture and transport animals',
        'Investigate animal cruelty',
        'Enforce animal regulations',
        'Keep records'
      ],
      skills: ['Animal Handling', 'Safety Protocol', 'Communication', 'Problem-solving', 'Compassion'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School + Training + License',
      salary: '$35,000 - $65,000',
      careerPath: 'Officer → Senior Officer → Supervisor → Manager',
      environment: ['Community service', 'Public interaction', 'Animal welfare', 'Safety focus'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'animal-scientist',
      name: 'Animal Scientist',
      summary: 'Study animals and conduct research to improve livestock production.',
      responsibilities: [
        'Conduct animal research',
        'Analyze animal performance',
        'Develop breeding protocols',
        'Write research papers',
        'Test nutritional approaches'
      ],
      skills: ['Research', 'Animal Science', 'Data Analysis', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s or Master\'s in Animal Science',
      salary: '$50,000 - $100,000',
      careerPath: 'Researcher → Senior Scientist → Lead Scientist → Department Head',
      environment: ['Research focus', 'Agriculture', 'Scientific work', 'Laboratory/field'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'animal-trainer',
      name: 'Animal Trainer',
      summary: 'Train and condition animals for work, sport, and performance.',
      responsibilities: [
        'Train animals',
        'Develop training programs',
        'Manage animal behavior',
        'Care for animals',
        'Document progress'
      ],
      skills: ['Animal Behavior', 'Training', 'Communication', 'Patience', 'Physical Fitness'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School + Animal Training Certification',
      salary: '$35,000 - $75,000',
      careerPath: 'Trainer → Senior Trainer → Training Manager → Facility Owner',
      environment: ['Animal-focused', 'Hands-on', 'Behavioral work', 'Outdoor possible'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'anthropologist',
      name: 'Anthropologist',
      summary: 'Study human cultures and societies through research.',
      responsibilities: [
        'Conduct fieldwork',
        'Analyze cultural data',
        'Write research reports',
        'Publish findings',
        'Present research'
      ],
      skills: ['Research', 'Cultural Knowledge', 'Analysis', 'Communication', 'Writing'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Master\'s or PhD in Anthropology',
      salary: '$50,000 - $100,000',
      careerPath: 'Researcher → Anthropologist → Senior Scientist → Department Head',
      environment: ['Research', 'Cultural studies', 'Fieldwork', 'Academic'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'anthropologist-archeologist',
      name: 'Anthropologist and Archeologist',
      summary: 'Excavate and study archaeological sites and artifacts.',
      responsibilities: [
        'Conduct excavations',
        'Catalog artifacts',
        'Analyze historical data',
        'Document findings',
        'Publish research'
      ],
      skills: ['Archaeology Methods', 'Research', 'Analysis', 'Communication', 'Documentation'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Master\'s or PhD in Archaeology/Anthropology',
      salary: '$50,000 - $110,000',
      careerPath: 'Field Archaeologist → Research Archaeologist → Senior Scientist → Director',
      environment: ['Archaeological sites', 'Research', 'Fieldwork', 'Laboratory work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'archeologist',
      name: 'Archeologist',
      summary: 'Conduct archaeological research to uncover and study ancient civilizations.',
      responsibilities: [
        'Conduct excavations',
        'Analyze artifacts',
        'Catalog findings',
        'Document discoveries',
        'Publish research'
      ],
      skills: ['Archaeological Methods', 'Analysis', 'Research', 'Documentation', 'Field Work'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Master\'s or PhD in Archaeology',
      salary: '$50,000 - $100,000',
      careerPath: 'Research Archaeologist → Senior Archaeologist → Department Head → Museum Director',
      environment: ['Field research', 'Excavation', 'Museum work', 'Historical discovery'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'astronomer',
      name: 'Astronomer',
      summary: 'Study celestial objects and phenomena to advance astronomical knowledge.',
      responsibilities: [
        'Observe celestial objects',
        'Analyze astronomical data',
        'Conduct research',
        'Publish findings',
        'Use telescopes and instruments'
      ],
      skills: ['Observational Astronomy', 'Data Analysis', 'Physics', 'Statistics', 'Research Methods'],
      talentFit: 'Analytical Problem Solver',
      education: 'PhD in Astronomy or Physics',
      salary: '$65,000 - $130,000',
      careerPath: 'Research Astronomer → Senior Astronomer → Observatory Director → Principal Investigator',
      environment: ['Research focus', 'Observatory work', 'Data analysis', 'Discovery-driven'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'atmospheric-space-scientist',
      name: 'Atmospheric and Space Scientist',
      summary: 'Study atmospheric and space phenomena affecting Earth and climate.',
      responsibilities: [
        'Analyze atmospheric data',
        'Study space weather',
        'Conduct research studies',
        'Model climate patterns',
        'Publish research'
      ],
      skills: ['Atmospheric Science', 'Data Analysis', 'Modeling', 'Research', 'Physics'],
      talentFit: 'Analytical Problem Solver, Research-oriented',
      education: 'Bachelor\'s or Master\'s in Atmospheric Science or Physics',
      salary: '$60,000 - $120,000',
      careerPath: 'Research Scientist → Senior Scientist → Research Director → Program Manager',
      environment: ['Research focus', 'Climate data', 'Modeling work', 'Environmental science'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'biochemical-engineer',
      name: 'Biochemical Engineer',
      summary: 'Design processes for manufacturing biochemical products.',
      responsibilities: [
        'Design bioreactors',
        'Optimize processes',
        'Develop protocols',
        'Conduct experiments',
        'Analyze results'
      ],
      skills: ['Biochemical Engineering', 'Process Design', 'Problem-solving', 'Research', 'Technical Knowledge'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Biochemical or Biomedical Engineering',
      salary: '$70,000 - $130,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer → Manager',
      environment: ['Biotech industry', 'Laboratory', 'Process optimization', 'Research-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'biochemist',
      name: 'Biochemist',
      summary: 'Study chemical processes within living organisms.',
      responsibilities: [
        'Conduct research',
        'Analyze molecules',
        'Document findings',
        'Publish results',
        'Develop theories'
      ],
      skills: ['Biochemistry', 'Research', 'Analysis', 'Lab Skills', 'Writing'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'PhD in Biochemistry or related field',
      salary: '$65,000 - $130,000',
      careerPath: 'Researcher → Senior Researcher → Principal Investigator → Department Head',
      environment: ['Research labs', 'Biotech', 'Pharmaceutical', 'Academia'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'biofuels-processing-technician',
      name: 'Biofuels Processing Technician',
      summary: 'Operate equipment for biofuel production.',
      responsibilities: [
        'Operate processing equipment',
        'Monitor systems',
        'Test products',
        'Maintain equipment',
        'Follow procedures'
      ],
      skills: ['Equipment Operation', 'Chemistry', 'Problem-solving', 'Safety', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + technical training in biofuels',
      salary: '$45,000 - $80,000',
      careerPath: 'Technician → Lead Tech → Supervisor → Production Manager',
      environment: ['Biofuel plant', 'Production', 'Technical focus', 'Sustainability'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'biofuels-production-manager',
      name: 'Biofuels Production Manager',
      summary: 'Manage biofuel production operations and teams.',
      responsibilities: [
        'Oversee production',
        'Manage staff',
        'Optimize processes',
        'Ensure quality',
        'Budget management'
      ],
      skills: ['Leadership', 'Production Management', 'Biofuels Knowledge', 'Problem-solving', 'Communication'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in engineering or management',
      salary: '$75,000 - $140,000',
      careerPath: 'Supervisor → Production Manager → Operations Manager → Director',
      environment: ['Biofuel production', 'Leadership', 'Sustainability focus', 'Team management'],
      jobGrowth: '11% growth through 2032'
    },
    {
      id: 'biofuels-tech-product-manager',
      name: 'Biofuels/Biodiesel Technology Manager',
      summary: 'Manage technology development for biofuel products.',
      responsibilities: [
        'Develop technology',
        'Manage R&D',
        'Improve processes',
        'Coordinate projects',
        'Report to leadership'
      ],
      skills: ['Technology Management', 'Innovation', 'Leadership', 'Biofuels Knowledge', 'Project Management'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s or Master\'s in engineering',
      salary: '$80,000 - $150,000',
      careerPath: 'Engineer → Tech Lead → Technology Manager → Director of R&D',
      environment: ['Biofuel company', 'R&D', 'Innovation focus', 'Sustainability'],
      jobGrowth: '12% growth through 2032'
    },
    {
      id: 'bioinformatics-scientist',
      name: 'Bioinformatics Scientist',
      summary: 'Analyze biological data using computational methods.',
      responsibilities: [
        'Analyze sequences',
        'Develop algorithms',
        'Manage databases',
        'Publish findings',
        'Collaborate on research'
      ],
      skills: ['Bioinformatics', 'Programming', 'Data Analysis', 'Statistics', 'Research'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Master\'s or PhD in Bioinformatics',
      salary: '$70,000 - $140,000',
      careerPath: 'Scientist → Senior Scientist → Lead Scientist → Team Lead',
      environment: ['Research lab', 'Computational', 'Biotech', 'Academic'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'bioinformatics-technician',
      name: 'Bioinformatics Technician',
      summary: 'Provide technical support for bioinformatics research.',
      responsibilities: [
        'Manage databases',
        'Process data',
        'Assist scientists',
        'Maintain systems',
        'Technical support'
      ],
      skills: ['Databases', 'Tech Support', 'Data Management', 'Problem-solving', 'Organization'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Associate\'s or Bachelor\'s in bioinformatics/IT',
      salary: '$50,000 - $90,000',
      careerPath: 'Technician → Senior Tech → Support Manager',
      environment: ['Biotech company', 'Laboratory', 'Computational', 'Technical support'],
      jobGrowth: '12% growth through 2032'
    },
    {
      id: 'biological-science-teacher',
      name: 'Biological Science Teacher, Postsecondary',
      summary: 'Teach biological sciences at college level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Conduct research',
        'Advise students',
        'Mentor'
      ],
      skills: ['Teaching', 'Biology', 'Research', 'Communication', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'PhD in Biological Sciences',
      salary: '$65,000 - $125,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Research', 'Teaching', 'Laboratory'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'biological-scientist-other',
      name: 'Biological Scientist, All Other',
      summary: 'Conduct research in specialized biological fields.',
      responsibilities: [
        'Conduct research',
        'Design studies',
        'Analyze data',
        'Publish findings',
        'Collaborate'
      ],
      skills: ['Research', 'Analysis', 'Writing', 'Problem-solving', 'Critical Thinking'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'PhD in relevant biological field',
      salary: '$60,000 - $120,000',
      careerPath: 'Researcher → Senior Researcher → Principal Investigator',
      environment: ['Research lab', 'Academic', 'Biotech', 'Field work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'biological-technician',
      name: 'Biological Technician',
      summary: 'Assist biologists with research and laboratory work.',
      responsibilities: [
        'Prepare specimens',
        'Conduct tests',
        'Maintain equipment',
        'Record data',
        'Clean lab'
      ],
      skills: ['Lab Skills', 'Attention to Detail', 'Organization', 'Problem-solving', 'Safety'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'Associate\'s in biology or life sciences',
      salary: '$40,000 - $75,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Lab Manager',
      environment: ['Laboratory', 'Research', 'Hands-on', 'Technical'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'biologist',
      name: 'Biologist',
      summary: 'Study living organisms and biological systems.',
      responsibilities: [
        'Conduct research',
        'Observe organisms',
        'Collect data',
        'Analyze findings',
        'Publish research'
      ],
      skills: ['Biology', 'Research', 'Observation', 'Analysis', 'Writing'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Master\'s or PhD in Biology',
      salary: '$60,000 - $125,000',
      careerPath: 'Biologist → Senior Biologist → Research Lead → Senior Scientist',
      environment: ['Research lab', 'Field research', 'Academic', 'Biotech'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'biomass-technician',
      name: 'Biomass Plant Technician',
      summary: 'Operate and maintain biomass energy production equipment.',
      responsibilities: [
        'Operate equipment',
        'Monitor systems',
        'Maintain plant',
        'Test fuel',
        'Log data'
      ],
      skills: ['Equipment Operation', 'Safety', 'Problem-solving', 'Maintenance', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + technical training',
      salary: '$50,000 - $90,000',
      careerPath: 'Technician → Lead Tech → Supervisor → Plant Manager',
      environment: ['Biomass plant', 'Production', 'Technical', 'Safety-focused'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'biomass-manager',
      name: 'Biomass Power Plant Manager',
      summary: 'Manage biomass power generation operations.',
      responsibilities: [
        'Oversee operations',
        'Manage staff',
        'Optimize efficiency',
        'Ensure safety',
        'Budget management'
      ],
      skills: ['Leadership', 'Operations Management', 'Technical Knowledge', 'Communication', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in engineering or management',
      salary: '$80,000 - $150,000',
      careerPath: 'Supervisor → Plant Manager → Regional Manager → Director',
      environment: ['Biomass facility', 'Leadership', 'Operations', 'Sustainability'],
      jobGrowth: '9% growth through 2032'
    },
    {
      id: 'biomedical-engineer',
      name: 'Biomedical Engineer',
      summary: 'Design medical devices and equipment using engineering principles.',
      responsibilities: [
        'Design devices',
        'Develop prototypes',
        'Test systems',
        'Ensure safety compliance',
        'Improve designs'
      ],
      skills: ['Biomedical Engineering', 'Design', 'Problem-solving', 'Testing', 'Creativity'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Biomedical Engineering',
      salary: '$75,000 - $140,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer → Engineering Manager',
      environment: ['Medical device company', 'R&D', 'Healthcare', 'Innovation-focused'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'biophysicist',
      name: 'Biophysicist',
      summary: 'Apply physics to biological problems.',
      responsibilities: [
        'Conduct research',
        'Analyze data',
        'Model systems',
        'Publish findings',
        'Collaborate'
      ],
      skills: ['Biophysics', 'Physics', 'Research', 'Analysis', 'Modeling'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'PhD in Biophysics',
      salary: '$65,000 - $130,000',
      careerPath: 'Researcher → Senior Researcher → Principal Investigator → Department Head',
      environment: ['Research lab', 'Academic', 'Biotech', 'Laboratory'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'biostatistician',
      name: 'Biostatistician',
      summary: 'Apply statistical methods to biological and medical research.',
      responsibilities: [
        'Analyze data',
        'Design studies',
        'Interpret results',
        'Create reports',
        'Consult on methods'
      ],
      skills: ['Statistics', 'Data Analysis', 'Research Methods', 'Communication', 'Software'],
      talentFit: 'Analytical Problem Solver',
      education: 'Master\'s or PhD in Biostatistics',
      salary: '$70,000 - $140,000',
      careerPath: 'Biostatistician → Senior Biostatistician → Lead Statistician → Director',
      environment: ['Research institution', 'Pharmaceutical', 'Healthcare', 'Data-driven'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'boat-builder',
      name: 'Boat Builder and Shipwright',
      summary: 'Construct and repair boats and ships.',
      responsibilities: [
        'Build boats',
        'Repair hulls',
        'Install systems',
        'Test vessels',
        'Follow specifications'
      ],
      skills: ['Boat Building', 'Welding', 'Carpentry', 'Problem-solving', 'Blueprint Reading'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + apprenticeship',
      salary: '$55,000 - $110,000',
      careerPath: 'Apprentice → Builder → Master Builder → Shop Owner',
      environment: ['Shipyard', 'Hands-on', 'Construction', 'Specialized craft'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'chemical-engineer',
      name: 'Chemical Engineer',
      summary: 'Design and improve chemical manufacturing processes.',
      responsibilities: [
        'Design processes',
        'Troubleshoot issues',
        'Optimize production',
        'Ensure safety',
        'Develop new products'
      ],
      skills: ['Chemical Engineering', 'Process Design', 'Problem-solving', 'Safety', 'Project Management'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Chemical Engineering',
      salary: '$80,000 - $150,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer → Manager',
      environment: ['Chemical plant', 'Manufacturing', 'Technical', 'Innovation focus'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'chemical-equipment-operator',
      name: 'Chemical Equipment Operator and Tender',
      summary: 'Operate chemical processing equipment.',
      responsibilities: [
        'Operate equipment',
        'Monitor processes',
        'Adjust controls',
        'Perform maintenance',
        'Log data'
      ],
      skills: ['Equipment Operation', 'Chemistry', 'Safety', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + chemical training',
      salary: '$50,000 - $95,000',
      careerPath: 'Operator → Senior Operator → Lead Operator → Supervisor',
      environment: ['Chemical plant', 'Production', 'Safety-focused', 'Technical'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'chemical-technician',
      name: 'Chemical Technician',
      summary: 'Provide technical support for chemical operations.',
      responsibilities: [
        'Test samples',
        'Maintain equipment',
        'Record data',
        'Assist engineers',
        'Follow procedures'
      ],
      skills: ['Lab Skills', 'Chemistry', 'Attention to Detail', 'Organization', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School or Associate\'s in chemistry',
      salary: '$45,000 - $85,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Lab Manager',
      environment: ['Chemical lab', 'Manufacturing', 'Technical', 'Hands-on'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'chemist',
      name: 'Chemist',
      summary: 'Conduct research and develop new chemical products.',
      responsibilities: [
        'Conduct research',
        'Perform experiments',
        'Analyze results',
        'Develop products',
        'Publish findings'
      ],
      skills: ['Chemistry', 'Research', 'Analysis', 'Lab Skills', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s or Master\'s in Chemistry',
      salary: '$65,000 - $130,000',
      careerPath: 'Chemist → Senior Chemist → Research Lead → Principal Scientist',
      environment: ['Research lab', 'Pharmaceutical', 'Manufacturing', 'Academic'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'chemistry-teacher',
      name: 'Chemistry Teacher, Postsecondary',
      summary: 'Teach chemistry at college level.',
      responsibilities: [
        'Teach courses',
        'Develop labs',
        'Conduct research',
        'Advise students',
        'Grade assignments'
      ],
      skills: ['Teaching', 'Chemistry', 'Research', 'Communication', 'Lab Management'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'PhD in Chemistry or related field',
      salary: '$65,000 - $125,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Laboratory'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  shipping: [
    {
      id: 'captain-pilot-water',
      name: 'Captain, Mate, and Pilot of Water Vessel',
      summary: 'Command and navigate ships and boats.',
      responsibilities: [
        'Navigate vessel',
        'Manage crew',
        'Ensure safety',
        'Follow regulations',
        'Maintain vessel'
      ],
      skills: ['Navigation', 'Leadership', 'Communication', 'Safety', 'Sea Knowledge'],
      talentFit: 'Leadership & Visionary, Practical Builder',
      education: 'High School + maritime license + experience',
      salary: '$80,000 - $180,000',
      careerPath: 'Mate → Captain → Senior Captain',
      environment: ['Ships/boats', 'Ocean/inland', 'Leadership', 'Navigation'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'cargo-freight-agent',
      name: 'Cargo and Freight Agent',
      summary: 'Arrange and expedite cargo shipments.',
      responsibilities: [
        'Process shipments',
        'Arrange logistics',
        'Handle documentation',
        'Track cargo',
        'Customer service'
      ],
      skills: ['Logistics', 'Organization', 'Communication', 'Problem-solving', 'Attention to Detail'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Associate\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Agent → Senior Agent → Supervisor → Manager',
      environment: ['Shipping/Logistics', 'Office/Warehouse', 'Documentation focus', 'Customer contact'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'cashier',
      name: 'Cashier',
      summary: 'Process customer transactions at point of sale.',
      responsibilities: [
        'Process payments',
        'Operate register',
        'Handle cash',
        'Provide service',
        'Bag items'
      ],
      skills: ['Customer Service', 'Math', 'Attention to Detail', 'Communication', 'Organization'],
      talentFit: 'People-Oriented Helper, Detail-Oriented Organizer',
      education: 'High School or equivalent',
      salary: '$26,000 - $45,000',
      careerPath: 'Cashier → Head Cashier → Store Supervisor',
      environment: ['Retail store', 'Fast-paced', 'Customer-facing', 'Team-based'],
      jobGrowth: '-5% decline through 2032'
    },
    {
      id: 'casting-machine-operator',
      name: 'Casting Machine Set-Up Operator',
      summary: 'Set up and operate metal casting machines.',
      responsibilities: [
        'Set up equipment',
        'Monitor casting',
        'Remove castings',
        'Adjust settings',
        'Perform maintenance'
      ],
      skills: ['Equipment Setup', 'Machine Operation', 'Problem-solving', 'Attention to Detail', 'Safety'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + technical training',
      salary: '$40,000 - $75,000',
      careerPath: 'Operator → Lead Operator → Supervisor → Production Manager',
      environment: ['Foundry', 'Manufacturing', 'Machine operation', 'Safety-focused'],
      jobGrowth: '0% growth through 2032'
    },
  ],
  social: [
    {
      id: 'community-social-service-specialist',
      name: 'Community and Social Service Specialists, All Other',
      summary: 'Provide community and social services to various populations.',
      responsibilities: [
        'Provide services',
        'Connect resources',
        'Advocate for clients',
        'Document work',
        'Maintain relationships'
      ],
      skills: ['Social Services', 'Communication', 'Empathy', 'Problem-solving', 'Organization'],
      talentFit: 'People-Oriented Helper',
      education: 'High School or Associate\'s degree',
      salary: '$35,000 - $70,000',
      careerPath: 'Specialist → Senior Specialist → Program Manager',
      environment: ['Social agency', 'Community', 'Service-focused', 'Advocacy'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'community-health-worker',
      name: 'Community Health Worker',
      summary: 'Provide health information and support to communities.',
      responsibilities: [
        'Educate community',
        'Provide health info',
        'Support patients',
        'Connect to services',
        'Document work'
      ],
      skills: ['Health Education', 'Communication', 'Community Engagement', 'Empathy', 'Cultural Awareness'],
      talentFit: 'People-Oriented Helper',
      education: 'High School + health training',
      salary: '$35,000 - $70,000',
      careerPath: 'Community Health Worker → Coordinator → Manager',
      environment: ['Community organizations', 'Field-based', 'Health-focused', 'Service-oriented'],
      jobGrowth: '18% growth through 2032'
    },
    {
      id: 'interpreters-translators',
      name: 'Interpreters and Translators',
      summary: 'Convert written or spoken language from one language to another.',
      responsibilities: [
        'Translate documents',
        'Interpret conversations',
        'Maintain accuracy',
        'Preserve meaning and tone',
        'Specialize in subject areas'
      ],
      skills: ['Bilingual/Multilingual', 'Communication', 'Cultural Knowledge', 'Attention to Detail', 'Listening'],
      talentFit: 'Detail-Oriented Organizer, People-Oriented Helper',
      education: 'Bachelor\'s + language proficiency',
      salary: '$50,000 - $95,000',
      careerPath: 'Interpreter → Senior Interpreter → Translation Manager',
      environment: ['Various settings', 'Multicultural', 'Communication-focused', 'Flexible work'],
      jobGrowth: '4% growth through 2032'
    },
  ],
  sports: [
    {
      id: 'athletes-sports-competitors',
      name: 'Athletes and Sports Competitors',
      summary: 'Compete professionally in organized sports at various levels.',
      responsibilities: [
        'Train and practice',
        'Compete in events',
        'Maintain physical fitness',
        'Follow team strategies',
        'Promote sport and team'
      ],
      skills: ['Athletic Ability', 'Competitive Drive', 'Teamwork', 'Mental Toughness', 'Sport-Specific Skills'],
      talentFit: 'Practical Builder, Leadership & Visionary',
      education: 'High School or College Athletics',
      salary: '$30,000 - $1,000,000+',
      careerPath: 'Amateur Athlete → Professional → Team Leader → Coach → Sports Management',
      environment: ['Competitive', 'Physical demanding', 'Team-based', 'Performance-driven'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'coach-scout',
      name: 'Coach and Scout',
      summary: 'Train athletes and recruit talent for sports organizations.',
      responsibilities: [
        'Train athletes',
        'Scout talent',
        'Develop strategies',
        'Manage games',
        'Evaluate performance'
      ],
      skills: ['Athletics', 'Leadership', 'Strategy', 'Communication', 'Evaluation'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'High School or Associate\'s degree',
      salary: '$40,000 - $90,000',
      careerPath: 'Coach → Head Coach → Coaching Staff Director',
      environment: ['Sports facility', 'Team environment', 'Competitive', 'Athletic'],
      jobGrowth: '5% growth through 2032'
    },
  ],
  tech: [
    {
      id: 'software-engineer',
      name: 'Software Engineer',
      summary: 'Design, develop, and maintain software applications and systems.',
      responsibilities: [
        'Write clean, efficient code',
        'Develop software features and functionality',
        'Debug and troubleshoot issues',
        'Collaborate with team members',
        'Review code and maintain documentation'
      ],
      skills: ['Programming (Python, Java, C++, etc.)', 'Problem-solving', 'Debugging', 'Version Control (Git)', 'System Design'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Computer Science or equivalent',
      degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Software Engineering', 'Coding Bootcamp (alternative)'],
      degreeCost: '$40,000 - $120,000 (4-year degree) or $10,000 - $20,000 (bootcamp)',
      salary: '$100,000 - $160,000',
      careerPath: 'Junior Developer → Developer → Senior Developer → Tech Lead → Engineering Manager',
      environment: ['Remote work options', 'Collaborative team', 'Modern tech stack', 'Continuous learning'],
      jobGrowth: 'Expected to grow 13% through 2032 - faster than average'
    },
    {
      id: 'data-scientist',
      name: 'Data Scientist',
      summary: 'Analyze complex data sets to help organizations make informed decisions.',
      responsibilities: [
        'Collect and analyze large datasets',
        'Build predictive models',
        'Create visualizations and reports',
        'Present findings to stakeholders',
        'Implement machine learning algorithms'
      ],
      skills: ['Python, R, SQL', 'Machine Learning', 'Data Visualization', 'Statistical Analysis', 'Big Data Tools'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in Statistics, Math, or Computer Science',
      degrees: ['Bachelor of Science in Statistics', 'Bachelor of Science in Mathematics', 'Bachelor of Science in Computer Science', 'Master of Science in Data Science (preferred)'],
      degreeCost: '$40,000 - $120,000 (Bachelor) or $30,000 - $80,000 (Master)',
      salary: '$95,000 - $150,000',
      careerPath: 'Junior Data Analyst → Data Scientist → Senior Data Scientist → ML Engineer → Director',
      environment: ['Data-driven decisions', 'Research-oriented', 'Cross-functional teams', 'Problem-solving focus'],
      jobGrowth: 'Growing 36% through 2032 - much faster than average'
    },
    {
      id: 'it-manager',
      name: 'IT Manager / Systems Administrator',
      summary: 'Manage computer networks, systems, and IT infrastructure for organizations.',
      responsibilities: [
        'Oversee IT staff and operations',
        'Maintain network security and integrity',
        'Troubleshoot technical issues',
        'Plan IT upgrades and expansions',
        'Manage IT budgets'
      ],
      skills: ['Network Administration', 'Cloud Services', 'Security', 'Leadership', 'System Design'],
      talentFit: 'Detail-Oriented Organizer, Leadership & Visionary',
      education: 'Bachelor\'s in Computer Science or IT',
      degrees: ['Bachelor of Science in Information Technology', 'Bachelor of Science in Computer Science', 'Bachelor of Science in Network Administration'],
      degreeCost: '$40,000 - $100,000 (4-year degree)',
      salary: '$90,000 - $140,000',
      careerPath: 'Systems Admin → Senior Admin → IT Manager → Director of IT',
      environment: ['24/7 support needs', 'Problem-solving', 'Leadership opportunities', 'Technical expertise'],
      jobGrowth: 'Growing 5% through 2032'
    },
    {
      id: 'information-security-analysts',
      name: 'Information Security Analysts',
      summary: 'Protect computer networks and systems from cyber threats.',
      responsibilities: [
        'Monitor network security',
        'Investigate security breaches',
        'Implement security measures',
        'Conduct security audits',
        'Develop security policies'
      ],
      skills: ['Cybersecurity', 'Network Security', 'Risk Assessment', 'Problem-solving', 'Technical Skills'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in cybersecurity or IT',
      degrees: ['Bachelor of Science in Cybersecurity', 'Bachelor of Science in Information Technology', 'Professional certifications (CISSP, CEH, Security+)'],
      degreeCost: '$40,000 - $100,000 (degree) + $2,000 - $5,000 (certifications)',
      salary: '$90,000 - $140,000',
      careerPath: 'Analyst → Senior Analyst → Security Manager → CISO',
      environment: ['Security focus', 'Fast-paced', 'Critical role', 'Continuous learning'],
      jobGrowth: '32% growth through 2032'
    },
    {
      id: 'it-project-managers',
      name: 'Information Technology Project Managers',
      summary: 'Lead IT projects from planning through implementation.',
      responsibilities: [
        'Plan IT projects',
        'Manage project teams',
        'Coordinate resources',
        'Monitor progress',
        'Ensure on-time delivery'
      ],
      skills: ['Project Management', 'Leadership', 'Communication', 'Technical Knowledge', 'Budget Management'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in IT or related field',
      degrees: ['Bachelor of Science in Information Technology', 'Bachelor of Science in Business', 'PMP Certification (recommended)'],
      degreeCost: '$40,000 - $100,000 (degree) + $2,000 - $3,000 (PMP certification)',
      salary: '$90,000 - $150,000',
      careerPath: 'Project Coordinator → PM → Senior PM → Director',
      environment: ['Project-driven', 'Leadership', 'Cross-functional teams', 'Deadline-focused'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'web-developer',
      name: 'Web Developer',
      summary: 'Build and maintain websites and web applications.',
      responsibilities: [
        'Code website features and functionality',
        'Optimize website performance',
        'Test and debug code',
        'Collaborate with designers',
        'Stay updated with web technologies'
      ],
      skills: ['HTML/CSS/JavaScript', 'Frontend Frameworks (React, Vue)', 'Backend Development', 'Database Design', 'UX/UI Awareness'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s or Bootcamp in Web Development',
      degrees: ['Bachelor of Science in Web Development', 'Bachelor of Science in Computer Science', 'Coding Bootcamp (alternative)', 'Associate Degree in Web Development'],
      degreeCost: '$10,000 - $20,000 (bootcamp), $20,000 - $50,000 (Associate), or $40,000 - $100,000 (Bachelor)',
      salary: '$70,000 - $120,000',
      careerPath: 'Junior Developer → Web Developer → Senior Developer → Tech Lead',
      environment: ['Creative + technical', 'Remote opportunities', 'Fast-paced', 'Innovation-focused'],
      jobGrowth: '23% growth through 2032 - much faster than average'
    },
    {
      id: 'mobile-app-developer',
      name: 'Mobile App Developer',
      summary: 'Develop applications for smartphones and tablets (iOS/Android).',
      responsibilities: [
        'Code mobile applications',
        'Optimize for mobile devices',
        'Test apps across devices',
        'Debug and fix issues',
        'Update and maintain apps'
      ],
      skills: ['Swift/Kotlin/Java', 'Mobile Frameworks', 'Problem-solving', 'Testing', 'UI/UX Understanding'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Computer Science or equivalent',
      degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Software Engineering', 'Mobile Development Bootcamp (alternative)'],
      degreeCost: '$40,000 - $120,000 (Bachelor) or $10,000 - $20,000 (bootcamp)',
      salary: '$80,000 - $140,000',
      careerPath: 'Junior App Developer → App Developer → Senior Developer → Tech Lead',
      environment: ['Remote opportunities', 'Creative development', 'Fast-paced innovation', 'Collaborative'],
      jobGrowth: '22% growth through 2032'
    },
    {
      id: 'devops-engineer',
      name: 'DevOps Engineer',
      summary: 'Manage infrastructure, deployment, and operations for software systems.',
      responsibilities: [
        'Manage cloud infrastructure',
        'Automate deployment processes',
        'Monitor system performance',
        'Troubleshoot infrastructure',
        'Implement security measures'
      ],
      skills: ['Cloud Platforms (AWS, Azure)', 'Linux/Docker', 'Scripting', 'CI/CD', 'System Administration'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Computer Science or IT',
      degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Information Technology', 'Cloud certifications (AWS, Azure, GCP)'],
      degreeCost: '$40,000 - $100,000 (degree) + $1,000 - $3,000 (cloud certifications)',
      salary: '$110,000 - $160,000',
      careerPath: 'Junior DevOps → DevOps Engineer → Senior Engineer → DevOps Manager',
      environment: ['Infrastructure focus', 'Automation', 'Problem-solving', 'On-call expectations'],
      jobGrowth: 'Growing 13% through 2032'
    },
    {
      id: 'qa-engineer',
      name: 'QA Engineer / Test Engineer',
      summary: 'Test software applications to ensure quality and reliability.',
      responsibilities: [
        'Create test plans',
        'Execute test cases',
        'Find and document bugs',
        'Automate test procedures',
        'Report quality issues'
      ],
      skills: ['Testing Frameworks', 'Attention to Detail', 'Automation', 'Documentation', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Computer Science or related field',
      degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Software Engineering', 'QA Certification programs'],
      degreeCost: '$40,000 - $120,000 (Bachelor) or $2,000 - $5,000 (certification)',
      salary: '$70,000 - $120,000',
      careerPath: 'QA Tester → QA Engineer → QA Manager',
      environment: ['Quality focus', 'Attention to detail', 'Problem-solving', 'Teamwork'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'machine-learning-engineer',
      name: 'Machine Learning Engineer',
      summary: 'Build AI/ML systems and models for various applications.',
      responsibilities: [
        'Build machine learning models',
        'Train models on data',
        'Optimize model performance',
        'Deploy ML systems',
        'Monitor model accuracy'
      ],
      skills: ['Machine Learning', 'Python/TensorFlow', 'Data Analysis', 'Mathematics', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s (Master\'s preferred) in CS/ML',
      degrees: ['Bachelor of Science in Computer Science', 'Master of Science in Machine Learning', 'Master of Science in Artificial Intelligence', 'PhD in Computer Science (for research roles)'],
      degreeCost: '$40,000 - $120,000 (Bachelor) or $30,000 - $100,000 (Master/PhD)',
      salary: '$120,000 - $180,000',
      careerPath: 'ML Engineer → Senior ML Engineer → ML Architect → Director',
      environment: ['Cutting-edge tech', 'Problem-solving', 'Research-oriented', 'Collaborative'],
      jobGrowth: 'Expected to grow 35% through 2032'
    },
    {
      id: 'cloud-architect',
      name: 'Cloud Solutions Architect',
      summary: 'Design cloud infrastructure and solutions for organizations.',
      responsibilities: [
        'Design cloud systems',
        'Plan cloud migrations',
        'Optimize cloud costs',
        'Ensure security',
        'Advise on cloud technology'
      ],
      skills: ['Cloud Platforms', 'System Design', 'Security', 'Cost Optimization', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in CS + cloud certifications',
      degrees: ['Bachelor of Science in Computer Science', 'Cloud Architecture certifications (AWS Solutions Architect, Azure Architect)', 'Master of Science in Information Systems (optional)'],
      degreeCost: '$40,000 - $120,000 (Bachelor) + $2,000 - $5,000 (certifications)',
      salary: '$130,000 - $200,000',
      careerPath: 'Cloud Engineer → Cloud Architect → Principal Architect → CTO',
      environment: ['Strategic planning', 'Technical leadership', 'Innovation focus', 'Consulting'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'frontend-engineer',
      name: 'Frontend Engineer',
      summary: 'Build user interfaces and frontend systems using web technologies.',
      responsibilities: [
        'Build UI components',
        'Implement designs',
        'Optimize performance',
        'Test frontend code',
        'Collaborate with designers'
      ],
      skills: ['React/Vue/Angular', 'HTML/CSS/JavaScript', 'UI/UX', 'Performance Optimization', 'Testing'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in CS or bootcamp',
      degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Web Development', 'Frontend Development Bootcamp', 'Bachelor of Science in Software Engineering'],
      degreeCost: '$10,000 - $20,000 (bootcamp) or $40,000 - $120,000 (Bachelor)',
      salary: '$85,000 - $145,000',
      careerPath: 'Junior Frontend → Frontend Engineer → Senior Frontend → Tech Lead',
      environment: ['Creative + technical', 'User-focused', 'Modern frameworks', 'Collaborative'],
      jobGrowth: '22% growth through 2032'
    },
    {
      id: 'backend-engineer',
      name: 'Backend Engineer',
      summary: 'Build server-side systems and databases for applications.',
      responsibilities: [
        'Build APIs and services',
        'Design databases',
        'Implement business logic',
        'Optimize performance',
        'Ensure security'
      ],
      skills: ['Node/Python/Java', 'Database Design', 'API Design', 'System Design', 'Security'],
      talentFit: 'Analytical Problem Solver, Practical Builder',
      education: 'Bachelor\'s in Computer Science',
      degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Software Engineering', 'Backend Development Bootcamp (alternative)'],
      degreeCost: '$40,000 - $120,000 (Bachelor) or $10,000 - $20,000 (bootcamp)',
      salary: '$90,000 - $150,000',
      careerPath: 'Junior Backend → Backend Engineer → Senior Backend → Tech Lead',
      environment: ['System architecture', 'Problem-solving', 'Scalability focus', 'Collaborative'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'cybersecurity-specialist',
      name: 'Cybersecurity Specialist',
      summary: 'Protect organizational systems from cyber threats and attacks.',
      responsibilities: [
        'Monitor security threats',
        'Implement security measures',
        'Conduct penetration testing',
        'Manage incidents',
        'Update security protocols'
      ],
      skills: ['Network Security', 'Threat Analysis', 'Penetration Testing', 'Compliance', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Cybersecurity or CS + certifications',
      degrees: ['Bachelor of Science in Cybersecurity', 'Bachelor of Science in Computer Science', 'Security certifications (CISSP, CEH, OSCP, Security+)'],
      degreeCost: '$40,000 - $120,000 (Bachelor) + $2,000 - $8,000 (certifications)',
      salary: '$100,000 - $160,000',
      careerPath: 'Security Analyst → Specialist → Senior Specialist → Security Manager',
      environment: ['High stakes', 'Continuous learning', 'Threat focus', 'Problem-solving'],
      jobGrowth: '33% growth through 2032'
    },
    {
      id: 'database-administrator',
      name: 'Database Administrator (DBA)',
      summary: 'Manage and maintain databases for organizations.',
      responsibilities: [
        'Manage databases',
        'Backup and recovery',
        'Optimize performance',
        'Ensure security',
        'Monitor database operations'
      ],
      skills: ['SQL', 'Database Management', 'System Administration', 'Problem-solving', 'Performance Tuning'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in CS or IT',
      degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Information Technology', 'Database certifications (Oracle DBA, Microsoft SQL Server)'],
      degreeCost: '$40,000 - $100,000 (degree) + $1,000 - $3,000 (certifications)',
      salary: '$85,000 - $140,000',
      careerPath: 'Junior DBA → Database Administrator → Senior DBA → Database Manager',
      environment: ['Data focus', 'Technical expertise', 'System monitoring', 'Reliability critical'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'systems-architect',
      name: 'Systems Architect',
      summary: 'Design complex systems and technical architecture.',
      responsibilities: [
        'Design system architecture',
        'Plan technical solutions',
        'Evaluate technologies',
        'Ensure scalability',
        'Guide implementation'
      ],
      skills: ['System Design', 'Architecture Patterns', 'Technical Leadership', 'Problem-solving', 'Various Technologies'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in CS + extensive experience',
      degrees: ['Bachelor of Science in Computer Science', 'Master of Science in Software Engineering', 'Enterprise Architecture certifications (TOGAF)'],
      degreeCost: '$40,000 - $120,000 (Bachelor) or $30,000 - $80,000 (Master) + $2,000 - $4,000 (certifications)',
      salary: '$120,000 - $180,000',
      careerPath: 'Senior Developer → Solutions Architect → Enterprise Architect',
      environment: ['Strategic vision', 'Technical leadership', 'Innovation', 'High-level decisions'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'product-manager-tech',
      name: 'Product Manager (Tech)',
      summary: 'Define product strategy and roadmap for technology products.',
      responsibilities: [
        'Define product vision',
        'Create roadmap',
        'Gather requirements',
        'Work with teams',
        'Analyze metrics'
      ],
      skills: ['Product Strategy', 'Communication', 'Data Analysis', 'Leadership', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s degree + product experience',
      degrees: ['Bachelor of Science in Business', 'Bachelor of Science in Computer Science', 'MBA (optional)', 'Product Management certifications'],
      degreeCost: '$30,000 - $100,000 (Bachelor) or $40,000 - $150,000 (MBA)',
      salary: '$100,000 - $180,000',
      careerPath: 'Associate PM → Product Manager → Senior PM → Director → VP Product',
      environment: ['Strategic focus', 'Cross-functional', 'Data-driven', 'Innovation'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'technical-writer',
      name: 'Technical Writer',
      summary: 'Create documentation and technical content for software products.',
      responsibilities: [
        'Write technical documentation',
        'Create user guides',
        'Document APIs',
        'Make complex topics clear',
        'Maintain documentation'
      ],
      skills: ['Writing', 'Technical Knowledge', 'Communication', 'Organization', 'Research'],
      talentFit: 'Detail-Oriented Organizer, Creative Thinker',
      education: 'Bachelor\'s in Writing/Journalism or related',
      degrees: ['Bachelor of Arts in Technical Writing', 'Bachelor of Arts in English', 'Bachelor of Science in Communications', 'Technical Writing Certificate'],
      degreeCost: '$30,000 - $80,000 (Bachelor) or $3,000 - $8,000 (certificate)',
      salary: '$65,000 - $110,000',
      careerPath: 'Technical Writer → Senior Writer → Documentation Manager',
      environment: ['Documentation focus', 'Technical depth', 'Writing-centered', 'Collaborative'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'actuary',
      name: 'Actuary',
      summary: 'Analyze financial risks and uncertainties using mathematics and statistics.',
      responsibilities: [
        'Analyze financial data',
        'Calculate risks',
        'Create projections',
        'Test assumptions',
        'Present findings'
      ],
      skills: ['Mathematics', 'Statistics', 'Data Analysis', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in Actuarial Science or Math + Certifications',
      salary: '$110,000 - $170,000',
      careerPath: 'Actuarial Analyst → Actuary → Senior Actuary → Principal',
      environment: ['Risk analysis', 'Data-driven', 'Financial focus', 'Detail-oriented'],
      jobGrowth: '18% growth through 2032'
    },
    {
      id: 'auditor',
      name: 'Auditor',
      summary: 'Examine financial records and ensure compliance with regulations.',
      responsibilities: [
        'Review financial records',
        'Conduct audits',
        'Verify transactions',
        'Report findings',
        'Recommend improvements'
      ],
      skills: ['Auditing', 'Accounting Knowledge', 'Attention to Detail', 'Analysis', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'Bachelor\'s in Accounting or related field',
      salary: '$80,000 - $140,000',
      careerPath: 'Junior Auditor → Auditor → Senior Auditor → Audit Manager',
      environment: ['Financial auditing', 'Compliance focus', 'Detail-oriented', 'Regulatory'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'advertising-manager',
      name: 'Advertising and Promotions Manager',
      summary: 'Oversee advertising campaigns and promotional strategies.',
      responsibilities: [
        'Develop campaigns',
        'Manage advertising budgets',
        'Oversee creative team',
        'Monitor campaign results',
        'Coordinate with clients'
      ],
      skills: ['Advertising Strategy', 'Leadership', 'Creativity', 'Communication', 'Analytics'],
      talentFit: 'Leadership & Visionary, Creative Thinker',
      education: 'Bachelor\'s in Advertising or Marketing',
      salary: '$75,000 - $140,000',
      careerPath: 'Coordinator → Manager → Senior Manager → Director',
      environment: ['Campaign focus', 'Creative direction', 'Team leadership', 'Results-driven'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'advertising-sales-agent',
      name: 'Advertising Sales Agent',
      summary: 'Sell advertising space and services to businesses.',
      responsibilities: [
        'Sell advertising space',
        'Develop client relationships',
        'Create proposals',
        'Negotiate contracts',
        'Meet sales targets'
      ],
      skills: ['Sales', 'Communication', 'Negotiation', 'Relationship Building', 'Product Knowledge'],
      talentFit: 'People-Oriented Helper, Leadership & Visionary',
      education: 'High School or Bachelor\'s degree',
      salary: '$50,000 - $110,000 (salary + commission)',
      careerPath: 'Sales Agent → Senior Agent → Sales Manager → Director',
      environment: ['Sales-driven', 'Client interaction', 'Negotiation', 'Target-oriented'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'administrative-services-manager',
      name: 'Administrative Services Manager',
      summary: 'Manage administrative operations and services for organizations.',
      responsibilities: [
        'Oversee administrative staff',
        'Manage facilities',
        'Control budgets',
        'Coordinate services',
        'Ensure efficiency'
      ],
      skills: ['Administration', 'Leadership', 'Organization', 'Problem-solving', 'Budget Management'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Business Administration or related field',
      salary: '$70,000 - $130,000',
      careerPath: 'Administrator → Administrative Services Manager → Director',
      environment: ['Operations focus', 'Administrative leadership', 'Efficiency', 'Coordination'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'agents-business-managers-artists',
      name: 'Agents and Business Managers of Artists, Performers, and Athletes',
      summary: 'Manage careers and negotiate contracts for artists and athletes.',
      responsibilities: [
        'Manage client careers',
        'Negotiate contracts',
        'Handle finances',
        'Develop strategies',
        'Represent clients'
      ],
      skills: ['Business Management', 'Negotiation', 'Communication', 'Financial Management', 'Relationship Building'],
      talentFit: 'Leadership & Visionary, People-Oriented Helper',
      education: 'Bachelor\'s in Business or Entertainment Management',
      salary: '$50,000 - $150,000+',
      careerPath: 'Agent → Senior Agent → Agency Owner',
      environment: ['Entertainment industry', 'Client management', 'Negotiation', 'Financial focus'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'business-analyst',
      name: 'Business Analyst',
      summary: 'Analyze business requirements and recommend IT solutions.',
      responsibilities: [
        'Gather business requirements',
        'Analyze processes',
        'Recommend solutions',
        'Create specifications',
        'Test solutions'
      ],
      skills: ['Requirements Analysis', 'Communication', 'Problem-solving', 'Documentation', 'Technical Knowledge'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Business or CS',
      salary: '$75,000 - $130,000',
      careerPath: 'Junior BA → Business Analyst → Senior BA → Manager',
      environment: ['Requirements focus', 'Collaboration', 'Problem-solving', 'Stakeholder interaction'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'solutions-engineer',
      name: 'Solutions Engineer',
      summary: 'Design customized technology solutions for clients.',
      responsibilities: [
        'Understand client needs',
        'Design solutions',
        'Present to clients',
        'Manage implementations',
        'Provide support'
      ],
      skills: ['Technical Knowledge', 'Problem-solving', 'Communication', 'Sales Acumen', 'Presentation'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in CS or related field',
      salary: '$90,000 - $150,000',
      careerPath: 'Associate SE → Solutions Engineer → Senior SE → Pre-Sales Engineer',
      environment: ['Client interaction', 'Problem-solving', 'Technical sales', 'Collaborative'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'aerospace-engineer',
      name: 'Aerospace Engineer',
      summary: 'Design, develop, and test aircraft and spacecraft systems.',
      responsibilities: [
        'Design aircraft/spacecraft',
        'Conduct structural analysis',
        'Test designs and systems',
        'Solve engineering problems',
        'Follow regulations and standards'
      ],
      skills: ['Aerospace Engineering', 'CAD Software', 'Physics', 'Mathematics', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Aerospace Engineering',
      salary: '$110,000 - $180,000',
      careerPath: 'Junior Engineer → Aerospace Engineer → Senior Engineer → Technical Lead',
      environment: ['Innovation focus', 'Technical design', 'Testing', 'Precision'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'aerospace-technician',
      name: 'Aerospace Engineering and Operations Technician',
      summary: 'Support aerospace engineering with technical and operational tasks.',
      responsibilities: [
        'Operate test equipment',
        'Assist with testing',
        'Maintain equipment',
        'Record data',
        'Support engineering work'
      ],
      skills: ['Technical Skills', 'Equipment Operation', 'Attention to Detail', 'Problem-solving', 'Mathematics'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'Associate\'s in Aerospace Technology or related field',
      salary: '$70,000 - $110,000',
      careerPath: 'Technician → Senior Technician → Lead Technician',
      environment: ['Aerospace industry', 'Technical support', 'Testing', 'Precision'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'game-developer',
      name: 'Game Developer',
      summary: 'Develop video games and interactive entertainment.',
      responsibilities: [
        'Code game features',
        'Debug and optimize',
        'Implement gameplay',
        'Work with artists',
        'Test and iterate'
      ],
      skills: ['C++/C#/Java', 'Game Engines', 'Problem-solving', 'Creativity', 'Collaboration'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Game Development or CS',
      salary: '$70,000 - $130,000',
      careerPath: 'Junior Developer → Developer → Senior Developer → Lead Designer',
      environment: ['Creative + technical', 'Game engines', 'Fun atmosphere', 'Team-based'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'ux-researcher',
      name: 'UX Researcher / Designer',
      summary: 'Study user behavior and design intuitive digital experiences.',
      responsibilities: [
        'Conduct user research and testing',
        'Analyze user data and feedback',
        'Create wireframes and prototypes',
        'Design user interfaces',
        'Iterate based on user testing'
      ],
      skills: ['User Research', 'Prototyping', 'Wireframing', 'UI Design', 'Data Analysis', 'Communication'],
      talentFit: 'Creative Thinker, Analytical Problem Solver, People-Oriented Helper',
      education: 'Bachelor\'s in Design, HCI, or equivalent experience',
      salary: '$85,000 - $130,000',
      careerPath: 'Junior Designer → UX Designer → Senior Designer → Design Manager',
      environment: ['Creative collaboration', 'User-focused', 'Problem-solving', 'Rapid prototyping'],
      jobGrowth: 'Growing steadily with digital transformation'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Analyst',
      summary: 'Protect computer networks and systems from cyber attacks.',
      responsibilities: [
        'Monitor network security',
        'Identify vulnerabilities',
        'Implement security measures',
        'Investigate security breaches',
        'Maintain security protocols'
      ],
      skills: ['Network Security', 'Ethical Hacking', 'Threat Analysis', 'Compliance Knowledge', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Cybersecurity or IT + Certifications',
      salary: '$95,000 - $140,000',
      careerPath: 'Security Analyst → Senior Analyst → Security Manager → Chief Information Security Officer',
      environment: ['High responsibility', 'Continuous learning', 'Critical importance', 'Problem-solving'],
      jobGrowth: 'Projected to grow 35% through 2032 - much faster than average'
    },
    {
      id: 'product-manager',
      name: 'Product Manager (Tech)',
      summary: 'Guide product development strategy and oversee product lifecycle.',
      responsibilities: [
        'Define product vision and roadmap',
        'Gather user requirements',
        'Work with engineering teams',
        'Analyze market trends',
        'Make go/no-go decisions'
      ],
      skills: ['Strategic Thinking', 'Communication', 'Data Analysis', 'Leadership', 'Technical Literacy'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s degree (any field) + tech experience',
      salary: '$120,000 - $180,000',
      careerPath: 'Associate PM → Product Manager → Senior PM → Director of Product',
      environment: ['Cross-functional leadership', 'Strategic thinking', 'Fast-paced', 'High impact'],
      jobGrowth: 'Growing with tech industry expansion'
    },
    {
      id: 'agricultural-engineer',
      name: 'Agricultural Engineer',
      summary: 'Design and develop agricultural machinery and systems.',
      responsibilities: [
        'Design farm equipment',
        'Test machinery',
        'Improve agricultural systems',
        'Solve soil and water problems',
        'Optimize crop production'
      ],
      skills: ['Mechanical Engineering', 'Problem-solving', 'CAD Software', 'Physics', 'Environmental Knowledge'],
      talentFit: 'Analytical Problem Solver, Practical Builder',
      education: 'Bachelor\'s in Agricultural Engineering',
      salary: '$70,000 - $120,000',
      careerPath: 'Junior Engineer → Agricultural Engineer → Senior Engineer → Lead Designer',
      environment: ['Engineering focus', 'Agricultural industry', 'Problem-solving', 'Innovation'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'air-crew-member',
      name: 'Air Crew Member',
      summary: 'Provide service and safety on commercial aircraft flights.',
      responsibilities: [
        'Ensure passenger safety',
        'Provide in-flight service',
        'Handle emergency procedures',
        'Manage cabin operations',
        'Assist during boarding'
      ],
      skills: ['Customer Service', 'Safety Protocol', 'Communication', 'Problem-solving', 'Physical Fitness'],
      talentFit: 'People-Oriented Helper, Leadership & Visionary',
      education: 'High School + Training + FAA Certification',
      salary: '$35,000 - $80,000',
      careerPath: 'Flight Attendant → Senior Attendant → Purser → Manager',
      environment: ['Aviation industry', 'Travel', 'Customer focus', 'Safety critical'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'air-crew-officer',
      name: 'Air Crew Officer',
      summary: 'Lead flight crew and manage aircraft safety operations.',
      responsibilities: [
        'Lead flight crew',
        'Manage in-flight emergencies',
        'Ensure safety compliance',
        'Oversee cabin operations',
        'Train junior crew'
      ],
      skills: ['Leadership', 'Safety Protocol', 'Decision-making', 'Communication', 'Emergency Response'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'High School + Training + Years of Experience',
      salary: '$80,000 - $150,000',
      careerPath: 'Flight Attendant → Purser → Flight Service Manager → Director',
      environment: ['Aviation leadership', 'High responsibility', 'Travel', 'Safety critical'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'air-traffic-controller',
      name: 'Air Traffic Controller',
      summary: 'Direct aircraft movements and ensure safe air traffic operations.',
      responsibilities: [
        'Guide aircraft takeoffs/landings',
        'Monitor radar systems',
        'Issue flight clearances',
        'Maintain safe spacing',
        'Manage emergency situations'
      ],
      skills: ['Safety Management', 'Problem-solving', 'Technical Knowledge', 'Decision-making', 'Communication'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'High School + FAA Training + Federal Certification',
      salary: '$70,000 - $140,000',
      careerPath: 'Tower Controller → Terminal Controller → Supervisor → Manager',
      environment: ['Safety critical', 'High stress', 'Technical', 'Aviation focus'],
      jobGrowth: '0% growth through 2032 - stable field'
    },
    {
      id: 'aircraft-body-repairer',
      name: 'Aircraft Body and Bonded Structure Repairer',
      summary: 'Repair and maintain aircraft fuselage and structural components.',
      responsibilities: [
        'Repair aircraft structures',
        'Replace damaged sections',
        'Perform inspections',
        'Maintain quality standards',
        'Test repairs'
      ],
      skills: ['Aircraft Structural Repair', 'Welding', 'Problem-solving', 'Attention to Detail', 'Manual Skills'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Aircraft Maintenance Training',
      salary: '$65,000 - $110,000',
      careerPath: 'Technician → Senior Technician → Lead Technician → Supervisor',
      environment: ['Aircraft maintenance', 'Hands-on', 'Safety focus', 'Precision work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'aircraft-cargo-supervisor',
      name: 'Aircraft Cargo Handling Supervisor',
      summary: 'Supervise loading, unloading, and securing of aircraft cargo.',
      responsibilities: [
        'Supervise cargo operations',
        'Ensure proper loading',
        'Manage safety procedures',
        'Coordinate with pilots',
        'Handle hazardous materials'
      ],
      skills: ['Leadership', 'Safety Protocol', 'Organization', 'Problem-solving', 'Safety Compliance'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'High School + Supervisory Training',
      salary: '$60,000 - $105,000',
      careerPath: 'Cargo Handler → Supervisor → Manager → Operations Manager',
      environment: ['Aviation services', 'Leadership role', 'Safety focus', 'Operational'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'aircraft-engine-specialist',
      name: 'Aircraft Engine Specialist',
      summary: 'Maintain, repair, and overhaul aircraft engines.',
      responsibilities: [
        'Inspect aircraft engines',
        'Perform engine maintenance',
        'Diagnose engine problems',
        'Perform overhauls',
        'Test engine performance'
      ],
      skills: ['Aircraft Engines', 'Problem-solving', 'Mechanical Knowledge', 'Precision', 'Troubleshooting'],
      talentFit: 'Analytical Problem Solver, Practical Builder',
      education: 'High School + Aircraft Maintenance + Certification',
      salary: '$65,000 - $120,000',
      careerPath: 'Technician → Engine Specialist → Senior Specialist → Technical Lead',
      environment: ['Aircraft maintenance', 'Technical work', 'Safety critical', 'Precision'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'aircraft-launch-recovery-officer',
      name: 'Aircraft Launch and Recovery Officer',
      summary: 'Direct aircraft launching and recovery operations on aircraft carriers.',
      responsibilities: [
        'Coordinate launch operations',
        'Direct recovery procedures',
        'Ensure flight deck safety',
        'Manage personnel',
        'Handle emergency situations'
      ],
      skills: ['Leadership', 'Safety Management', 'Communication', 'Coordination', 'Decision-making'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Military Training + Specialized Certification',
      salary: '$70,000 - $130,000',
      careerPath: 'Petty Officer → Launch/Recovery Officer → Chief → Senior Chief',
      environment: ['Military aviation', 'High stakes', 'Safety critical', 'Leadership'],
      jobGrowth: 'Military dependent'
    },
    {
      id: 'aircraft-launch-recovery-specialist',
      name: 'Aircraft Launch and Recovery Specialist',
      summary: 'Conduct aircraft launching and recovery operations on aircraft carriers.',
      responsibilities: [
        'Launch aircraft safely',
        'Coordinate recovery procedures',
        'Monitor flight deck operations',
        'Operate launch equipment',
        'Maintain safety protocols'
      ],
      skills: ['Equipment Operation', 'Safety Protocol', 'Problem-solving', 'Communication', 'Technical Knowledge'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Military Training + Certification',
      salary: '$40,000 - $95,000',
      careerPath: 'Specialist → Senior Specialist → Petty Officer → Chief',
      environment: ['Military aviation', 'Flight deck operations', 'Safety focus', 'Team-based'],
      jobGrowth: 'Military dependent'
    },
    {
      id: 'aircraft-mechanic',
      name: 'Aircraft Mechanics and Service Technicians',
      summary: 'Maintain and repair aircraft to ensure safe operations.',
      responsibilities: [
        'Perform maintenance checks',
        'Replace parts',
        'Troubleshoot problems',
        'Test aircraft systems',
        'Document maintenance'
      ],
      skills: ['Aircraft Systems', 'Problem-solving', 'Manual Skills', 'Technical Knowledge', 'Attention to Detail'],
      talentFit: 'Analytical Problem Solver, Practical Builder',
      education: 'High School + Aircraft Maintenance Training + FAA Certification',
      salary: '$60,000 - $110,000',
      careerPath: 'Technician → Senior Technician → Inspector → Supervisor',
      environment: ['Aircraft maintenance', 'Safety critical', 'Hands-on', 'Quality focus'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'aircraft-rigging-assembler',
      name: 'Aircraft Rigging Assembler',
      summary: 'Assemble and rig aircraft structural components and control systems.',
      responsibilities: [
        'Assemble aircraft parts',
        'Install control cables',
        'Rig flight control systems',
        'Perform inspections',
        'Test assemblies'
      ],
      skills: ['Aircraft Assembly', 'Technical Drawing', 'Precision', 'Problem-solving', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Aircraft Assembly Training',
      salary: '$50,000 - $90,000',
      careerPath: 'Assembler → Senior Assembler → Lead Assembler → Supervisor',
      environment: ['Aircraft manufacturing', 'Precision work', 'Assembly line', 'Quality focus'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'aircraft-structure-assembler',
      name: 'Aircraft Structure Assemblers, Precision',
      summary: 'Assemble and fit aircraft structures with precision.',
      responsibilities: [
        'Assemble fuselage sections',
        'Fit structural components',
        'Perform quality checks',
        'Make precision adjustments',
        'Inspect assemblies'
      ],
      skills: ['Precision Assembly', 'Technical Drawing', 'Problem-solving', 'Attention to Detail', 'Quality Control'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Precision Assembly Training',
      salary: '$50,000 - $95,000',
      careerPath: 'Assembler → Senior Assembler → Quality Inspector → Lead',
      environment: ['Aircraft manufacturing', 'Precision environment', 'Quality focus', 'Technical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'aircraft-structure-surfaces-rigging-systems-assembler',
      name: 'Aircraft Structure, Surfaces, Rigging, and Systems Assemblers',
      summary: 'Assemble various aircraft structures, surfaces, and rigging systems.',
      responsibilities: [
        'Install aircraft skins',
        'Rig control systems',
        'Assemble structural components',
        'Perform system tests',
        'Quality assurance'
      ],
      skills: ['Aircraft Assembly', 'Rigging', 'Technical Knowledge', 'Precision', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Aircraft Assembly Comprehensive Training',
      salary: '$50,000 - $100,000',
      careerPath: 'Assembler → Senior Assembler → Lead → Supervisor',
      environment: ['Aircraft manufacturing', 'Multiple specializations', 'Quality focus', 'Technical'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'aircraft-systems-assembler',
      name: 'Aircraft Systems Assemblers, Precision',
      summary: 'Assemble and install complex aircraft systems with precision.',
      responsibilities: [
        'Assemble electronic systems',
        'Install hydraulic systems',
        'Connect flight systems',
        'Perform testing',
        'Troubleshoot issues'
      ],
      skills: ['Systems Assembly', 'Electronics', 'Hydraulics', 'Precision', 'Problem-solving'],
      talentFit: 'Analytical Problem Solver, Practical Builder',
      education: 'High School + Systems Assembly + Certification',
      salary: '$55,000 - $105,000',
      careerPath: 'Assembler → Systems Specialist → Lead Specialist → Supervisor',
      environment: ['Aircraft systems', 'Precision work', 'Technical', 'Quality focus'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'airfield-operations-specialist',
      name: 'Airfield Operations Specialist',
      summary: 'Manage airfield operations and ground support activities.',
      responsibilities: [
        'Coordinate ground operations',
        'Manage airfield safety',
        'Supervise maintenance crews',
        'Monitor weather conditions',
        'Ensure regulatory compliance'
      ],
      skills: ['Operations Management', 'Safety Protocol', 'Communication', 'Problem-solving', 'Leadership'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'High School + Airfield Operations Training',
      salary: '$50,000 - $95,000',
      careerPath: 'Operations Specialist → Senior Specialist → Supervisor → Manager',
      environment: ['Airfield operations', 'Safety focus', 'Coordination', 'Outside work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'airframe-power-plant-mechanic',
      name: 'Airframe-and-Power-Plant Mechanics',
      summary: 'Maintain and repair aircraft frames and engines.',
      responsibilities: [
        'Inspect airframes',
        'Maintain engines',
        'Replace components',
        'Perform system checks',
        'Document maintenance'
      ],
      skills: ['Airframe Systems', 'Engine Systems', 'Problem-solving', 'Mechanical Knowledge', 'Safety'],
      talentFit: 'Analytical Problem Solver, Practical Builder',
      education: 'High School + Airframe and Power Plant Training + License',
      salary: '$65,000 - $120,000',
      careerPath: 'Mechanic → Senior Mechanic → Inspector → Supervisor',
      environment: ['Aircraft maintenance', 'Hands-on', 'Safety critical', 'Technical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'airline-pilot',
      name: 'Airline Pilots, Copilots, and Flight Engineers',
      summary: 'Operate aircraft safely and navigate complex flight routes.',
      responsibilities: [
        'Navigate aircraft',
        'Perform flight checks',
        'Manage crew',
        'Handle emergencies',
        'Ensure passenger safety'
      ],
      skills: ['Aviation Knowledge', 'Decision-making', 'Leadership', 'Technical Skills', 'Problem-solving'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'High School + Flight Training + FAA Certification + 1,500+ Hours',
      salary: '$80,000 - $250,000+',
      careerPath: 'Flight Instructor → Copilot → Captain → Senior Captain',
      environment: ['Aviation operations', 'High responsibility', 'Leadership', 'Safety critical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'communication-equipment-mechanic',
      name: 'Communication Equipment Mechanics, Installers, and Repairers',
      summary: 'Install, maintain, and repair communications equipment.',
      responsibilities: [
        'Install equipment',
        'Repair systems',
        'Troubleshoot issues',
        'Test connections',
        'Document work'
      ],
      skills: ['Communications Equipment', 'Technical Skills', 'Problem-solving', 'Safety', 'Electrical Knowledge'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + telecommunications training',
      salary: '$50,000 - $100,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Supervisor',
      environment: ['Telecommunications', 'Field work', 'Technical', 'Problem-solving'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'communication-equipment-operator',
      name: 'Communications Equipment Operators, All Other',
      summary: 'Operate various communications equipment.',
      responsibilities: [
        'Operate equipment',
        'Monitor systems',
        'Process communications',
        'Troubleshoot issues',
        'Maintain logs'
      ],
      skills: ['Equipment Operation', 'Communication', 'Attention to Detail', 'Problem-solving', 'Technical Knowledge'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + training',
      salary: '$40,000 - $75,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Communications center', 'Equipment operation', 'Technical', 'Routine operations'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'communications-teacher',
      name: 'Communications Teacher, Postsecondary',
      summary: 'Teach communications at college level.',
      responsibilities: [
        'Teach courses',
        'Develop curriculum',
        'Research topics',
        'Advise students',
        'Grade assignments'
      ],
      skills: ['Teaching', 'Communications', 'Research', 'Mentoring', 'Writing'],
      talentFit: 'People-Oriented Helper, Creative Thinker',
      education: 'Master\'s in Communications',
      salary: '$60,000 - $115,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'computer-information-scientist',
      name: 'Computer and Information Research Scientist',
      summary: 'Conduct research in computer science and information technology.',
      responsibilities: [
        'Conduct research',
        'Develop algorithms',
        'Test theories',
        'Publish findings',
        'Collaborate with teams'
      ],
      skills: ['Computer Science', 'Research', 'Programming', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'PhD in Computer Science',
      salary: '$100,000 - $180,000',
      careerPath: 'Researcher → Senior Researcher → Research Lead',
      environment: ['Research lab', 'University', 'Tech company', 'Academic'],
      jobGrowth: '18% growth through 2032'
    },
    {
      id: 'computer-manager',
      name: 'Computer and Information Systems Manager',
      summary: 'Manage computer systems and IT operations.',
      responsibilities: [
        'Plan strategy',
        'Manage IT staff',
        'Oversee systems',
        'Budget planning',
        'Ensure security'
      ],
      skills: ['IT Management', 'Leadership', 'Strategic Planning', 'Problem-solving', 'Communication'],
      talentFit: 'Leadership & Visionary, Analytical Problem Solver',
      education: 'Bachelor\'s in IT + Management experience',
      salary: '$100,000 - $190,000',
      careerPath: 'Manager → Senior Manager → CIO',
      environment: ['Corporate office', 'IT department', 'Strategic', 'Management-focused'],
      jobGrowth: '11% growth through 2032'
    },
    {
      id: 'computer-hardware-engineer',
      name: 'Computer Hardware Engineer',
      summary: 'Design and develop computer hardware systems.',
      responsibilities: [
        'Design systems',
        'Develop prototypes',
        'Test components',
        'Solve problems',
        'Document designs'
      ],
      skills: ['Hardware Design', 'Engineering', 'Problem-solving', 'Creativity', 'Technical Knowledge'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in electrical or computer engineering',
      salary: '$100,000 - $180,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer',
      environment: ['Tech company', 'Hardware development', 'Design', 'Innovation'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'computer-network-architect',
      name: 'Computer Network Architect',
      summary: 'Design and build computer networks.',
      responsibilities: [
        'Design networks',
        'Plan infrastructure',
        'Solve problems',
        'Ensure security',
        'Document systems'
      ],
      skills: ['Network Design', 'IT Infrastructure', 'Problem-solving', 'Security', 'Communication'],
      talentFit: 'Analytical Problem Solver, Technical Aptitude',
      education: 'Bachelor\'s in IT + Network certification',
      salary: '$100,000 - $180,000',
      careerPath: 'Architect → Senior Architect → Infrastructure Director',
      environment: ['IT company', 'Corporate', 'Network design', 'Strategic'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'computer-network-support',
      name: 'Computer Network Support Specialist',
      summary: 'Provide support for computer networks.',
      responsibilities: [
        'Troubleshoot issues',
        'Maintain networks',
        'Support users',
        'Monitor systems',
        'Document problems'
      ],
      skills: ['Networking', 'Troubleshooting', 'Communication', 'Problem-solving', 'Technical Knowledge'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'Associate\'s or certificate in networking',
      salary: '$55,000 - $105,000',
      careerPath: 'Support Specialist → Senior Specialist → Network Administrator',
      environment: ['IT department', 'Help desk', 'Technical support', 'Problem-solving'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'computer-operator',
      name: 'Computer Operator',
      summary: 'Operate computer systems and equipment.',
      responsibilities: [
        'Operate systems',
        'Monitor performance',
        'Run programs',
        'Maintain equipment',
        'Report issues'
      ],
      skills: ['Equipment Operation', 'Attention to Detail', 'Problem-solving', 'Organization', 'Technical Knowledge'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School or Associate\'s degree',
      salary: '$40,000 - $75,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Server room', 'Data center', 'Equipment operation', 'Technical'],
      jobGrowth: '-20% decline through 2032'
    },
    {
      id: 'computer-programmer',
      name: 'Computer Programmer',
      summary: 'Write and test computer code for applications.',
      responsibilities: [
        'Write code',
        'Design programs',
        'Test applications',
        'Debug issues',
        'Document code'
      ],
      skills: ['Programming Languages', 'Software Development', 'Problem-solving', 'Logical Thinking', 'Attention to Detail'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Computer Science',
      salary: '$75,000 - $140,000',
      careerPath: 'Programmer → Senior Programmer → Development Lead',
      environment: ['Tech company', 'Software firm', 'Development', 'Detail-focused'],
      jobGrowth: '-10% decline through 2032'
    },
    {
      id: 'computer-scientist-teacher',
      name: 'Computer Science Teacher, Postsecondary',
      summary: 'Teach computer science at college level.',
      responsibilities: [
        'Teach courses',
        'Develop labs',
        'Conduct research',
        'Advise students',
        'Grade work'
      ],
      skills: ['Teaching', 'Computer Science', 'Research', 'Communication', 'Mentoring'],
      talentFit: 'People-Oriented Helper, Analytical Problem Solver',
      education: 'PhD in Computer Science or related field',
      salary: '$70,000 - $130,000',
      careerPath: 'Instructor → Assistant Professor → Associate Professor → Full Professor',
      environment: ['Higher education', 'Teaching', 'Research', 'Academic'],
      jobGrowth: '12% growth through 2032'
    },
    {
      id: 'computer-security-specialist',
      name: 'Computer Security Specialist',
      summary: 'Protect computer systems from security threats.',
      responsibilities: [
        'Monitor systems',
        'Identify threats',
        'Implement security',
        'Test vulnerabilities',
        'Train staff'
      ],
      skills: ['Cybersecurity', 'Problem-solving', 'Technical Knowledge', 'Communication', 'Attention to Detail'],
      talentFit: 'Analytical Problem Solver, Practical Builder',
      education: 'Bachelor\'s in IT or Cybersecurity',
      salary: '$80,000 - $150,000',
      careerPath: 'Specialist → Senior Specialist → Security Manager',
      environment: ['Corporate IT', 'Tech company', 'Security focus', 'Strategic'],
      jobGrowth: '15% growth through 2032'
    },
    {
      id: 'computer-software-engineer-applications',
      name: 'Computer Software Engineer, Applications',
      summary: 'Develop application software for users.',
      responsibilities: [
        'Design applications',
        'Write code',
        'Test software',
        'Maintain code',
        'Document systems'
      ],
      skills: ['Software Development', 'Programming', 'Problem-solving', 'Creativity', 'Teamwork'],
      talentFit: 'Analytical Problem Solver, Creative Thinker',
      education: 'Bachelor\'s in Computer Science or Software Engineering',
      salary: '$80,000 - $160,000',
      careerPath: 'Engineer → Senior Engineer → Lead Engineer → Manager',
      environment: ['Software company', 'Tech firm', 'Development', 'Collaborative'],
      jobGrowth: '22% growth through 2032'
    },
    {
      id: 'computer-software-engineer-systems',
      name: 'Computer Software Engineer, Systems Software',
      summary: 'Develop systems software and infrastructure.',
      responsibilities: [
        'Design systems',
        'Write code',
        'Optimize performance',
        'Debug issues',
        'Document code'
      ],
      skills: ['Systems Software', 'Programming', 'Problem-solving', 'Technical Knowledge', 'Architecture'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in Computer Science or Software Engineering',
      salary: '$85,000 - $165,000',
      careerPath: 'Engineer → Senior Engineer → Architect → Manager',
      environment: ['Software company', 'Tech firm', 'Systems development', 'Technical'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'computer-specialist-all-other',
      name: 'Computer Specialist, All Other',
      summary: 'Provide various computer and IT support services.',
      responsibilities: [
        'Provide support',
        'Troubleshoot issues',
        'Maintain systems',
        'Update software',
        'Train users'
      ],
      skills: ['IT Support', 'Problem-solving', 'Communication', 'Technical Knowledge', 'Customer Service'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School or Associate\'s degree',
      salary: '$45,000 - $90,000',
      careerPath: 'Specialist → Senior Specialist → Support Manager',
      environment: ['IT department', 'Tech support', 'Hybrid work', 'Service-focused'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'computer-support-specialist',
      name: 'Computer Support Specialist',
      summary: 'Provide technical support to computer users.',
      responsibilities: [
        'Support users',
        'Troubleshoot problems',
        'Provide training',
        'Document issues',
        'Escalate problems'
      ],
      skills: ['Tech Support', 'Problem-solving', 'Communication', 'Patience', 'Technical Knowledge'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School or Associate\'s degree + certification',
      salary: '$45,000 - $90,000',
      careerPath: 'Support Specialist → Senior Specialist → Tech Lead',
      environment: ['Help desk', 'IT department', 'Remote support', 'Customer-facing'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'computer-systems-analyst',
      name: 'Computer Systems Analyst',
      summary: 'Analyze and design computer systems for organizations.',
      responsibilities: [
        'Analyze systems',
        'Design solutions',
        'Recommend improvements',
        'Test systems',
        'Document work'
      ],
      skills: ['Systems Analysis', 'Problem-solving', 'Communication', 'Technical Knowledge', 'Business Acumen'],
      talentFit: 'Analytical Problem Solver',
      education: 'Bachelor\'s in IT or Computer Science',
      salary: '$75,000 - $145,000',
      careerPath: 'Analyst → Senior Analyst → Systems Architect',
      environment: ['Corporate IT', 'Tech firm', 'Analysis focus', 'Strategic'],
      jobGrowth: '13% growth through 2032'
    },
    {
      id: 'computer-systems-engineer',
      name: 'Computer Systems Engineer/Architect',
      summary: 'Design and architect complex computer systems.',
      responsibilities: [
        'Design systems',
        'Plan architecture',
        'Solve problems',
        'Document design',
        'Lead teams'
      ],
      skills: ['Systems Architecture', 'Engineering', 'Leadership', 'Problem-solving', 'Technical Knowledge'],
      talentFit: 'Analytical Problem Solver, Leadership & Visionary',
      education: 'Bachelor\'s in Computer Science + experience',
      salary: '$90,000 - $170,000',
      careerPath: 'Engineer → Senior Engineer → Architect → Principal',
      environment: ['Tech company', 'Enterprise IT', 'Strategic', 'Complex systems'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'computer-user-support',
      name: 'Computer User Support Specialist',
      summary: 'Support computer users in organizations.',
      responsibilities: [
        'Support users',
        'Troubleshoot issues',
        'Provide training',
        'Maintain systems',
        'Document problems'
      ],
      skills: ['User Support', 'Problem-solving', 'Communication', 'Technical Knowledge', 'Patience'],
      talentFit: 'People-Oriented Helper, Practical Builder',
      education: 'High School or Associate\'s + certification',
      salary: '$45,000 - $85,000',
      careerPath: 'Support Specialist → Senior Specialist → Help Desk Manager',
      environment: ['Corporate IT', 'Help desk', 'User-facing', 'Support-focused'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'computer-atm-machine-repairer',
      name: 'Computer, Automated Teller, and Office Machine Repairer',
      summary: 'Repair computers, ATMs, and office equipment.',
      responsibilities: [
        'Repair equipment',
        'Troubleshoot issues',
        'Replace parts',
        'Maintain systems',
        'Document work'
      ],
      skills: ['Equipment Repair', 'Technical Skills', 'Problem-solving', 'Attention to Detail', 'Safety'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + technical training',
      salary: '$45,000 - $85,000',
      careerPath: 'Technician → Senior Tech → Supervisor',
      environment: ['Field service', 'Retail', 'Banks', 'Hands-on repair'],
      jobGrowth: '-8% decline through 2032'
    },
    {
      id: 'computer-controlled-machine-operator',
      name: 'Computer-Controlled Machine Tool Operators, Metal and Plastic',
      summary: 'Operate computer-controlled machines for manufacturing.',
      responsibilities: [
        'Operate equipment',
        'Load programs',
        'Monitor production',
        'Adjust settings',
        'Perform maintenance'
      ],
      skills: ['Equipment Operation', 'CNC Programming', 'Problem-solving', 'Attention to Detail', 'Safety'],
      talentFit: 'Practical Builder, Technical Aptitude',
      education: 'High School + CNC training',
      salary: '$45,000 - $85,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Machine shop', 'CNC focus', 'Production'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  trades: [
    {
      id: 'electrician',
      name: 'Electrician',
      summary: 'Install, maintain, and repair electrical systems in buildings.',
      responsibilities: [
        'Install electrical wiring',
        'Troubleshoot electrical issues',
        'Perform repairs',
        'Inspect electrical systems',
        'Ensure safety compliance'
      ],
      skills: ['Electrical Systems Knowledge', 'Problem-solving', 'Safety', 'Manual Dexterity', 'Technical Skills'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + Apprenticeship (4-5 years)',
      salary: '$60,000 - $110,000',
      careerPath: 'Apprentice → Journeyman → Master → Contractor',
      environment: ['Hands-on work', 'Problem-solving', 'Safety-focused', 'Varied projects'],
      jobGrowth: '10% growth through 2032'
    },
    {
      id: 'plumber',
      name: 'Plumber',
      summary: 'Install and maintain plumbing systems for water, gas, and waste.',
      responsibilities: [
        'Install plumbing systems',
        'Diagnose plumbing issues',
        'Repair pipes and fixtures',
        'Maintain plumbing systems',
        'Ensure code compliance'
      ],
      skills: ['Plumbing Knowledge', 'Problem-solving', 'Manual Skills', 'Safety', 'Customer Service'],
      talentFit: 'Practical Builder',
      education: 'High School + Apprenticeship (4-5 years)',
      salary: '$60,000 - $110,000',
      careerPath: 'Apprentice → Journeyman → Master → Own Business',
      environment: ['Hands-on', 'Problem-solving', 'Varied locations', 'Customer interaction'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'hvac-technician',
      name: 'HVAC Technician',
      summary: 'Install and maintain heating, ventilation, and air conditioning systems.',
      responsibilities: [
        'Install HVAC systems',
        'Troubleshoot problems',
        'Perform maintenance',
        'Repair equipment',
        'Test system efficiency'
      ],
      skills: ['HVAC Knowledge', 'Problem-solving', 'Technical Skills', 'Safety', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + Apprenticeship (3-5 years)',
      salary: '$55,000 - $100,000',
      careerPath: 'Apprentice → Technician → Master → Contractor',
      environment: ['Hands-on', 'Technical work', 'Problem-solving', 'Seasonal variation'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'heating-air-conditioning-mechanics',
      name: 'Heating and Air Conditioning Mechanics',
      summary: 'Install and repair heating and AC systems.',
      responsibilities: [
        'Install HVAC systems',
        'Diagnose problems',
        'Repair equipment',
        'Maintain systems',
        'Follow regulations'
      ],
      skills: ['HVAC Systems', 'Troubleshooting', 'Technical Skills', 'Safety', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + HVAC training',
      salary: '$50,000 - $95,000',
      careerPath: 'Apprentice → Mechanic → Master Technician → Contractor',
      environment: ['Indoor/Outdoor', 'Hands-on', 'Technical', 'Seasonal demand'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'heating-ac-refrigeration-mechanics-installers',
      name: 'Heating, Air Conditioning, and Refrigeration Mechanics and Installers',
      summary: 'Install and service HVAC and refrigeration systems.',
      responsibilities: [
        'Install HVAC systems',
        'Service refrigeration equipment',
        'Diagnose issues',
        'Repair systems',
        'Test equipment performance'
      ],
      skills: ['HVAC/Refrigeration', 'Electrical Systems', 'Problem-solving', 'Safety', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + apprenticeship/certification',
      salary: '$50,000 - $95,000',
      careerPath: 'Apprentice → Technician → Senior Technician → Contractor',
      environment: ['Indoor/Outdoor', 'Hands-on', 'Technical', 'Varied locations'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'helpers-electricians',
      name: 'Helpers--Electricians',
      summary: 'Assist electricians with installations and repairs.',
      responsibilities: [
        'Carry tools and materials',
        'Prepare work sites',
        'Assist with installations',
        'Clean work areas',
        'Follow safety procedures'
      ],
      skills: ['Basic Electrical Knowledge', 'Physical Stamina', 'Safety', 'Teamwork', 'Attention to Detail'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $48,000',
      careerPath: 'Helper → Apprentice → Electrician',
      environment: ['Construction sites', 'Hands-on', 'Physical work', 'Learning opportunity'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'helpers-pipelayers-plumbers-pipefitters',
      name: 'Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters',
      summary: 'Assist with pipe installation and plumbing tasks.',
      responsibilities: [
        'Move materials and tools',
        'Prepare job sites',
        'Assist with pipe fitting',
        'Hold equipment',
        'Clean work areas'
      ],
      skills: ['Physical Stamina', 'Basic Tools', 'Safety', 'Teamwork', 'Reliability'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $48,000',
      careerPath: 'Helper → Apprentice → Plumber/Pipefitter',
      environment: ['Construction sites', 'Physical work', 'Hands-on', 'Learning-focused'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'home-appliance-installers',
      name: 'Home Appliance Installers',
      summary: 'Install household appliances in homes and businesses.',
      responsibilities: [
        'Deliver appliances',
        'Install appliances',
        'Connect utilities',
        'Test installations',
        'Explain operation to customers'
      ],
      skills: ['Installation Skills', 'Customer Service', 'Physical Ability', 'Problem-solving', 'Safety'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $60,000',
      careerPath: 'Installer → Lead Installer → Service Manager',
      environment: ['Customer homes', 'Physical work', 'Service-focused', 'Varied locations'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'carpenter',
      name: 'Carpenter',
      summary: 'Build and repair wooden structures and fixtures.',
      responsibilities: [
        'Build and frame structures',
        'Install cabinets and trim',
        'Create custom woodwork',
        'Repair wooden structures',
        'Interpret blueprints'
      ],
      skills: ['Woodworking', 'Blueprint Reading', 'Manual Skills', 'Problem-solving', 'Precision'],
      talentFit: 'Practical Builder, Creative Thinker',
      education: 'High School + Apprenticeship or OJT',
      salary: '$55,000 - $105,000',
      careerPath: 'Apprentice → Carpenter → Master Carpenter → Contractor',
      environment: ['Hands-on creation', 'Visible results', 'Problem-solving', 'Varied projects'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'civil-engineer',
      name: 'Civil Engineer',
      summary: 'Design and oversee construction of infrastructure and buildings.',
      responsibilities: [
        'Design infrastructure projects',
        'Create technical drawings',
        'Oversee construction',
        'Manage budgets',
        'Ensure safety and compliance'
      ],
      skills: ['Engineering Design', 'CAD', 'Project Management', 'Problem-solving', 'Communication'],
      talentFit: 'Analytical Problem Solver, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Civil Engineering + License',
      salary: '$75,000 - $130,000',
      careerPath: 'Entry-level Engineer → Engineer → Senior Engineer → Project Manager',
      environment: ['Design + construction', 'Large-scale projects', 'Technical expertise', 'Infrastructure focus'],
      jobGrowth: '7% growth through 2032'
    },
    {
      id: 'mechanic',
      name: 'Auto / Mechanical Technician',
      summary: 'Maintain and repair vehicles and mechanical systems.',
      responsibilities: [
        'Diagnose mechanical problems',
        'Perform repairs',
        'Maintain vehicles',
        'Replace parts',
        'Perform inspections'
      ],
      skills: ['Mechanical Knowledge', 'Troubleshooting', 'Manual Skills', 'Attention to Detail', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + Training or Apprenticeship',
      salary: '$45,000 - $85,000',
      careerPath: 'Apprentice → Technician → Senior Technician → Shop Manager',
      environment: ['Hands-on work', 'Problem-solving', 'Diagnostic work', 'Customer service'],
      jobGrowth: 'Varying by specialty'
    },
    {
      id: 'construction-manager',
      name: 'Construction Manager',
      summary: 'Oversee construction projects and manage teams.',
      responsibilities: [
        'Plan construction projects',
        'Manage budgets and schedules',
        'Oversee workforce',
        'Ensure safety compliance',
        'Quality control'
      ],
      skills: ['Project Management', 'Leadership', 'Technical Knowledge', 'Financial Management', 'Communication'],
      talentFit: 'Leadership & Visionary, Detail-Oriented Organizer',
      education: 'Bachelor\'s in Construction Management',
      salary: '$85,000 - $150,000',
      careerPath: 'Assistant Manager → Construction Manager → Senior Manager → Director',
      environment: ['Project leadership', 'Team management', 'Building', 'Problem-solving'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'carpenter',
      name: 'Carpenter',
      summary: 'Build, install, and repair wooden structures and fixtures.',
      responsibilities: [
        'Build structures',
        'Cut and shape wood',
        'Install fixtures',
        'Read blueprints',
        'Finish surfaces'
      ],
      skills: ['Carpentry Skills', 'Problem-solving', 'Manual Dexterity', 'Safety Knowledge', 'Precision'],
      talentFit: 'Practical Builder',
      education: 'High School + Apprenticeship (3-4 years)',
      salary: '$50,000 - $95,000',
      careerPath: 'Apprentice → Journey Carpenter → Master → Contractor',
      environment: ['Hands-on building', 'Varied projects', 'Outdoor/Indoor', 'Craftsmanship'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'welder',
      name: 'Welder',
      summary: 'Join metal parts together using various welding techniques.',
      responsibilities: [
        'Join metal parts',
        'Operate welding equipment',
        'Read blueprints',
        'Inspect welds',
        'Follow safety procedures'
      ],
      skills: ['Welding Techniques', 'Technical Skills', 'Attention to Detail', 'Safety', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Welding Training/Apprenticeship',
      salary: '$50,000 - $105,000',
      careerPath: 'Apprentice → Welder → Certified Welder → Supervisor',
      environment: ['Metal fabrication', 'Technical work', 'Safety-focused', 'Precision'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'roofer',
      name: 'Roofer',
      summary: 'Install and repair roofs on buildings.',
      responsibilities: [
        'Install roofing materials',
        'Repair damaged roofs',
        'Measure and cut materials',
        'Install flashing',
        'Follow safety protocols'
      ],
      skills: ['Roofing Knowledge', 'Manual Skills', 'Safety', 'Physical Fitness', 'Problem-solving'],
      talentFit: 'Practical Builder',
      education: 'High School + Apprenticeship or Training',
      salary: '$50,000 - $95,000',
      careerPath: 'Roofer → Senior Roofer → Lead → Contractor',
      environment: ['Heights work', 'Weather exposure', 'Hands-on', 'Project-based'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'landscape-architect',
      name: 'Landscape Architect',
      summary: 'Design outdoor areas and landscapes for various projects.',
      responsibilities: [
        'Design landscapes',
        'Create plans',
        'Consider environmental factors',
        'Manage projects',
        'Coordinate with contractors'
      ],
      skills: ['Landscape Design', 'CAD Software', 'Environmental Knowledge', 'Communication', 'Creativity'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Landscape Architecture + License',
      salary: '$65,000 - $125,000',
      careerPath: 'Landscape Architect → Senior Architect → Project Manager → Principal',
      environment: ['Design work', 'Outdoor focus', 'Sustainability', 'Project management'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'heavy-equipment-operator',
      name: 'Heavy Equipment Operator',
      summary: 'Operate heavy machinery for construction and mining.',
      responsibilities: [
        'Operate equipment',
        'Follow safety protocols',
        'Maintain equipment',
        'Communicate with crew',
        'Move materials'
      ],
      skills: ['Equipment Operation', 'Safety', 'Communication', 'Problem-solving', 'Precision'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + Training/Certification',
      salary: '$50,000 - $100,000',
      careerPath: 'Operator → Senior Operator → Lead → Supervisor',
      environment: ['Heavy machinery', 'Construction/Mining', 'Outdoor', 'Teamwork'],
      jobGrowth: '8% growth through 2032'
    },
    {
      id: 'cement-mason',
      name: 'Cement Mason / Concrete Specialist',
      summary: 'Work with concrete for structures, pavements, and surfaces.',
      responsibilities: [
        'Pour concrete',
        'Finish surfaces',
        'Create patterns',
        'Repair concrete',
        'Follow specifications'
      ],
      skills: ['Concrete Work', 'Manual Skills', 'Precision', 'Safety', 'Physical Fitness'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Apprenticeship',
      salary: '$45,000 - $90,000',
      careerPath: 'Apprentice → Mason → Senior Mason → Supervisor',
      environment: ['Concrete work', 'Hands-on', 'Outdoor/Indoor', 'Physical work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'surveyor',
      name: 'Surveyor',
      summary: 'Measure and map land for construction and legal purposes.',
      responsibilities: [
        'Measure land',
        'Create maps',
        'Document boundaries',
        'Use surveying equipment',
        'Prepare reports'
      ],
      skills: ['Surveying', 'GPS/GIS Technology', 'Mathematics', 'Attention to Detail', 'Communication'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Bachelor\'s in Surveying',
      salary: '$60,000 - $105,000',
      careerPath: 'Survey Technician → Surveyor → Senior Surveyor → Supervisor',
      environment: ['Land measurement', 'Technical work', 'Outdoor/Office', 'Legal precision'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'insulation-worker',
      name: 'Insulation Worker',
      summary: 'Install insulation materials in buildings.',
      responsibilities: [
        'Install insulation',
        'Cut and fit materials',
        'Apply sealants',
        'Follow specifications',
        'Safety compliance'
      ],
      skills: ['Insulation Knowledge', 'Manual Skills', 'Safety', 'Precision', 'Teamwork'],
      talentFit: 'Practical Builder',
      education: 'High School + Training',
      salary: '$40,000 - $75,000',
      careerPath: 'Insulation Worker → Lead Worker → Supervisor',
      environment: ['Insulation work', 'Hands-on', 'Building trade', 'Physical'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'locksmith',
      name: 'Locksmith',
      summary: 'Install, maintain, and repair locks and security systems.',
      responsibilities: [
        'Install locks',
        'Repair locks',
        'Install security systems',
        'Troubleshoot issues',
        'Customer service'
      ],
      skills: ['Lock/Security Knowledge', 'Technical Skills', 'Problem-solving', 'Precision', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + Apprenticeship/Training',
      salary: '$45,000 - $85,000',
      careerPath: 'Locksmith → Senior Locksmith → Shop Owner',
      environment: ['Security focus', 'Technical work', 'Customer service', 'Varied locations'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'glass-installer',
      name: 'Glass Installer / Glazier',
      summary: 'Install and repair glass and framing systems.',
      responsibilities: [
        'Install glass',
        'Cut glass pieces',
        'Install frames',
        'Repair glass',
        'Follow safety'
      ],
      skills: ['Glass Installation', 'Manual Skills', 'Safety', 'Precision', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Apprenticeship',
      salary: '$45,000 - $85,000',
      careerPath: 'Apprentice → Glazier → Senior Glazier → Supervisor',
      environment: ['Glass work', 'Precision', 'Safety', 'Construction'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'able-seaman',
      name: 'Able Seaman',
      summary: 'Perform deck duties on merchant ships and vessels.',
      responsibilities: [
        'Perform deck duties',
        'Maintain equipment',
        'Handle cargo',
        'Navigate waters',
        'Ensure safety'
      ],
      skills: ['Seamanship', 'Physical Fitness', 'Safety Knowledge', 'Problem-solving', 'Teamwork'],
      talentFit: 'Practical Builder',
      education: 'High School + Maritime Training + Certifications',
      salary: '$50,000 - $100,000',
      careerPath: 'Able Seaman → Bosun → Chief Officer → Captain',
      environment: ['Maritime industry', 'Ocean work', 'Teamwork', 'Physical work'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'agricultural-equipment-operator',
      name: 'Agricultural Equipment Operators',
      summary: 'Operate agricultural machinery and equipment for farming.',
      responsibilities: [
        'Operate farm equipment',
        'Maintain machinery',
        'Plant and harvest crops',
        'Prepare soil',
        'Troubleshoot equipment'
      ],
      skills: ['Equipment Operation', 'Mechanical Knowledge', 'Problem-solving', 'Attention to Detail', 'Safety'],
      talentFit: 'Practical Builder',
      education: 'High School + Equipment Operation Training',
      salary: '$35,000 - $65,000',
      careerPath: 'Operator → Senior Operator → Supervisor → Farm Manager',
      environment: ['Agriculture', 'Equipment operation', 'Seasonal work', 'Outdoor'],
      jobGrowth: '-2% decline through 2032'
    },
    {
      id: 'agricultural-technician',
      name: 'Agricultural Technicians',
      summary: 'Provide technical support for agricultural operations and research.',
      responsibilities: [
        'Assist with farming operations',
        'Conduct field tests',
        'Maintain equipment',
        'Collect data',
        'Support research projects'
      ],
      skills: ['Agricultural Knowledge', 'Technical Skills', 'Problem-solving', 'Attention to Detail', 'Data Collection'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School or Associate\'s in Agriculture',
      salary: '$40,000 - $75,000',
      careerPath: 'Technician → Senior Technician → Lead Technician → Supervisor',
      environment: ['Agriculture', 'Technical support', 'Field work', 'Research support'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'agricultural-worker',
      name: 'Agricultural Workers, All Other',
      summary: 'Perform various laboring duties in agricultural production.',
      responsibilities: [
        'Harvest crops',
        'Plant seeds',
        'Maintain fields',
        'Handle produce',
        'Assist with farming'
      ],
      skills: ['Physical Work', 'Problem-solving', 'Safety', 'Teamwork', 'Reliability'],
      talentFit: 'Practical Builder',
      education: 'High School or equivalent',
      salary: '$30,000 - $55,000',
      careerPath: 'Worker → Lead Worker → Supervisor → Farm Manager',
      environment: ['Agriculture', 'Physical labor', 'Seasonal', 'Outdoor work'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'architect',
      name: 'Architect, Except Landscape and Naval',
      summary: 'Design buildings and other structures for residential and commercial use.',
      responsibilities: [
        'Design buildings',
        'Create architectural plans',
        'Meet with clients',
        'Oversee construction',
        'Ensure compliance with codes'
      ],
      skills: ['Architectural Design', 'CAD/BIM', 'Communication', 'Technical Knowledge', 'Creativity'],
      talentFit: 'Creative Thinker, Analytical Problem Solver',
      education: 'Bachelor\'s in Architecture + License (5 years)',
      salary: '$80,000 - $150,000',
      careerPath: 'Intern Architect → Licensed Architect → Senior Architect → Design Principal',
      environment: ['Design-focused', 'Client interaction', 'Problem-solving', 'Creative expression'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'architectural-civil-drafter',
      name: 'Architectural and Civil Drafter',
      summary: 'Create technical drawings and plans for architectural and civil projects.',
      responsibilities: [
        'Create technical drawings',
        'Prepare blueprints',
        'Use CAD software',
        'Update drawings',
        'Document specifications'
      ],
      skills: ['CAD Software', 'Technical Drawing', 'Attention to Detail', 'Communication', 'Problem-solving'],
      talentFit: 'Detail-Oriented Organizer, Analytical Problem Solver',
      education: 'High School or Associate\'s in Drafting',
      salary: '$50,000 - $90,000',
      careerPath: 'Drafter → Senior Drafter → Lead Drafter → Project Manager',
      environment: ['Technical drafting', 'Design support', 'Computer-based', 'Precision focus'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'architectural-drafter',
      name: 'Architectural Drafter',
      summary: 'Create detailed architectural drawings and specifications for buildings.',
      responsibilities: [
        'Draw architectural details',
        'Create construction documents',
        'Revise drawings',
        'Coordinate with architects',
        'Manage design specifications'
      ],
      skills: ['Architectural CAD', 'Detail Drawing', 'Attention to Detail', 'Communication', 'Building Codes'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School or Associate\'s in Architecture',
      salary: '$48,000 - $88,000',
      careerPath: 'Junior Drafter → Architectural Drafter → Senior Drafter → Lead',
      environment: ['Architectural work', 'Design studio', 'Detail-oriented', 'Computer-based'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'assemblers-fabricators',
      name: 'Assemblers and Fabricators, All Other',
      summary: 'Assemble and fabricate products and components in various industries.',
      responsibilities: [
        'Assemble products',
        'Fabricate components',
        'Follow specifications',
        'Perform quality checks',
        'Operate assembly equipment'
      ],
      skills: ['Assembly Skills', 'Attention to Detail', 'Manual Dexterity', 'Quality Control', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School or vocational training',
      salary: '$35,000 - $65,000',
      careerPath: 'Assembler → Senior Assembler → Lead → Supervisor',
      environment: ['Manufacturing', 'Assembly line', 'Quality focus', 'Teamwork'],
      jobGrowth: '-1% decline through 2032'
    },
    {
      id: 'audio-video-technician',
      name: 'Audio and Video Equipment Technician',
      summary: 'Install, maintain, and repair audio and video equipment.',
      responsibilities: [
        'Install equipment',
        'Test systems',
        'Troubleshoot problems',
        'Perform maintenance',
        'Provide customer support'
      ],
      skills: ['Audio/Video Systems', 'Electronics', 'Problem-solving', 'Technical Skills', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School or vocational training',
      salary: '$40,000 - $80,000',
      careerPath: 'Technician → Senior Technician → Lead Tech → Service Manager',
      environment: ['Technical equipment', 'Problem-solving', 'Customer interaction', 'Varied locations'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'atm-servicer',
      name: 'Automatic Teller Machine Servicer',
      summary: 'Install, maintain, and repair automatic teller machines.',
      responsibilities: [
        'Install ATM machines',
        'Maintain ATMs',
        'Troubleshoot issues',
        'Restock ATMs',
        'Repair equipment'
      ],
      skills: ['Technical Skills', 'Problem-solving', 'Mechanical Knowledge', 'Attention to Detail', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + Technical training',
      salary: '$40,000 - $75,000',
      careerPath: 'Technician → Lead Technician → Supervisor → Regional Manager',
      environment: ['Field service', 'Technical work', 'Banking industry', 'Varied locations'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'automotive-body-repairer',
      name: 'Automotive Body and Related Repairer',
      summary: 'Repair and rebuild vehicle bodies and frames.',
      responsibilities: [
        'Repair vehicle bodies',
        'Straighten frames',
        'Replace body parts',
        'Paint vehicles',
        'Align components'
      ],
      skills: ['Auto Body Repair', 'Welding', 'Problem-solving', 'Manual Skills', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + Auto Body Training/Apprenticeship',
      salary: '$45,000 - $85,000',
      careerPath: 'Auto Body Technician → Lead Technician → Shop Supervisor → Shop Owner',
      environment: ['Auto repair', 'Body shop', 'Hands-on', 'Hands-on work'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'cabinetmaker-bench-carpenter',
      name: 'Cabinetmaker and Bench Carpenter',
      summary: 'Build and repair wooden cabinets and furniture.',
      responsibilities: [
        'Build cabinets',
        'Cut wood',
        'Join components',
        'Finish surfaces',
        'Repair furniture'
      ],
      skills: ['Woodworking', 'Carpentry', 'Precision', 'Creativity', 'Problem-solving'],
      talentFit: 'Creative Thinker, Practical Builder',
      education: 'High School + woodworking/carpentry training',
      salary: '$40,000 - $80,000',
      careerPath: 'Apprentice → Carpenter → Master Craftsman → Shop Owner',
      environment: ['Woodworking shop', 'Hands-on', 'Precision', 'Creative'],
      jobGrowth: '4% growth through 2032'
    },
    {
      id: 'calibration-technician',
      name: 'Calibration and Instrumentation Technician',
      summary: 'Calibrate and repair precision instruments.',
      responsibilities: [
        'Calibrate equipment',
        'Test instruments',
        'Repair systems',
        'Maintain accuracy',
        'Document work'
      ],
      skills: ['Instrument Calibration', 'Technical Skills', 'Problem-solving', 'Precision', 'Attention to Detail'],
      talentFit: 'Detail-Oriented Organizer, Practical Builder',
      education: 'High School + technical training',
      salary: '$50,000 - $95,000',
      careerPath: 'Technician → Senior Tech → Lead Tech → Supervisor',
      environment: ['Testing lab', 'Manufacturing', 'Precision focus', 'Technical'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'camera-equipment-repairer',
      name: 'Camera and Photographic Equipment Repairer',
      summary: 'Repair and maintain cameras and photographic equipment.',
      responsibilities: [
        'Repair cameras',
        'Replace parts',
        'Test equipment',
        'Maintain tools',
        'Customer service'
      ],
      skills: ['Camera Repair', 'Technical Skills', 'Precision', 'Problem-solving', 'Customer Service'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + equipment repair training',
      salary: '$40,000 - $75,000',
      careerPath: 'Technician → Senior Tech → Service Manager',
      environment: ['Repair shop', 'Technical work', 'Precision', 'Customer-focused'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'carpenter-assembler',
      name: 'Carpenter Assembler and Repairer',
      summary: 'Assemble and repair wooden structures and fixtures.',
      responsibilities: [
        'Assemble parts',
        'Repair structures',
        'Follow plans',
        'Use hand tools',
        'Quality check'
      ],
      skills: ['Carpentry', 'Assembly', 'Problem-solving', 'Precision', 'Technical Skills'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + carpentry training',
      salary: '$40,000 - $75,000',
      careerPath: 'Assembler → Lead Assembler → Supervisor',
      environment: ['Workshop', 'Manufacturing', 'Hands-on', 'Precision'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'carpet-installer',
      name: 'Carpet Installer',
      summary: 'Install carpet flooring in buildings.',
      responsibilities: [
        'Measure areas',
        'Install carpet',
        'Stretch material',
        'Secure edges',
        'Trim excess'
      ],
      skills: ['Carpet Installation', 'Measurement', 'Physical Ability', 'Attention to Detail', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + carpet installation training',
      salary: '$35,000 - $70,000',
      careerPath: 'Installer → Lead Installer → Supervisor',
      environment: ['Construction sites', 'Homes/businesses', 'Hands-on', 'Physical work'],
      jobGrowth: '5% growth through 2032'
    },
    {
      id: 'ceiling-tile-installer',
      name: 'Ceiling Tile Installer',
      summary: 'Install ceiling tiles and suspension systems.',
      responsibilities: [
        'Install tiles',
        'Install grids',
        'Ensure alignment',
        'Follow specifications',
        'Clean work area'
      ],
      skills: ['Tile Installation', 'Measurement', 'Precision', 'Physical Ability', 'Attention to Detail'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + technical training',
      salary: '$35,000 - $70,000',
      careerPath: 'Installer → Lead Installer → Supervisor',
      environment: ['Construction', 'Indoor', 'Precision focus', 'Team-based'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'cementing-gluing-machine-operator',
      name: 'Cementing and Gluing Machine Operator and Tender',
      summary: 'Operate machines that cement or glue materials together.',
      responsibilities: [
        'Operate equipment',
        'Load materials',
        'Monitor process',
        'Remove products',
        'Perform maintenance'
      ],
      skills: ['Machine Operation', 'Attention to Detail', 'Safety', 'Problem-solving', 'Organization'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + on-the-job training',
      salary: '$35,000 - $65,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Production', 'Machine operation', 'Safety-focused'],
      jobGrowth: '1% growth through 2032'
    },
    {
      id: 'central-office-installer',
      name: 'Central Office and PBX Installer and Repairer',
      summary: 'Install and repair telephone switching equipment.',
      responsibilities: [
        'Install equipment',
        'Repair systems',
        'Test connections',
        'Troubleshoot issues',
        'Document work'
      ],
      skills: ['Telecommunications', 'Technical Skills', 'Problem-solving', 'Safety', 'Electrical Knowledge'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + telecommunications training',
      salary: '$50,000 - $95,000',
      careerPath: 'Technician → Senior Tech → Lead Tech',
      environment: ['Telephone company', 'Technical work', 'Problem-solving', 'Equipment installation'],
      jobGrowth: '-8% decline through 2032'
    },
    {
      id: 'central-office-operator',
      name: 'Central Office Operator',
      summary: 'Operate telephone switching equipment.',
      responsibilities: [
        'Monitor systems',
        'Route calls',
        'Operate switches',
        'Troubleshoot issues',
        'Maintain logs'
      ],
      skills: ['Equipment Operation', 'Communication', 'Problem-solving', 'Attention to Detail', 'Multitasking'],
      talentFit: 'Detail-Oriented Organizer',
      education: 'High School + training',
      salary: '$40,000 - $70,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Telephone exchange', 'Equipment operation', 'Technical', 'Steady routine'],
      jobGrowth: '-10% decline through 2032'
    },
    {
      id: 'cutter-trimmer-hand',
      name: 'Cutter and Trimmer, Hand',
      summary: 'Cut and trim materials by hand.',
      responsibilities: [
        'Cut materials',
        'Trim edges',
        'Follow specifications',
        'Use hand tools',
        'Maintain quality'
      ],
      skills: ['Hand Tool Use', 'Precision', 'Attention to Detail', 'Physical Ability', 'Problem-solving'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + on-the-job training',
      salary: '$30,000 - $55,000',
      careerPath: 'Cutter → Lead Cutter → Supervisor',
      environment: ['Manufacturing', 'Production', 'Hands-on', 'Precision work'],
      jobGrowth: '1% growth through 2032'
    },
  ],
  vehicle: [
    {
      id: 'buffing-polishing-setup',
      name: 'Buffing and Polishing Set-Up Operator',
      summary: 'Set up and operate machines for buffing and polishing.',
      responsibilities: [
        'Set up equipment',
        'Load materials',
        'Monitor process',
        'Adjust settings',
        'Quality check'
      ],
      skills: ['Equipment Setup', 'Attention to Detail', 'Problem-solving', 'Safety', 'Technical Skills'],
      talentFit: 'Practical Builder, Detail-Oriented Organizer',
      education: 'High School + technical training',
      salary: '$40,000 - $75,000',
      careerPath: 'Operator → Lead Operator → Supervisor',
      environment: ['Manufacturing', 'Equipment operation', 'Precision focus', 'Production'],
      jobGrowth: '2% growth through 2032'
    },
    {
      id: 'bus-truck-mechanic',
      name: 'Bus and Truck Mechanic and Diesel Engine Specialist',
      summary: 'Maintain and repair diesel engines in buses and trucks.',
      responsibilities: [
        'Repair diesel engines',
        'Diagnose problems',
        'Replace parts',
        'Perform maintenance',
        'Test systems'
      ],
      skills: ['Diesel Engine Repair', 'Diagnostics', 'Problem-solving', 'Technical Knowledge', 'Manual Skills'],
      talentFit: 'Practical Builder, Analytical Problem Solver',
      education: 'High School + diesel training',
      salary: '$55,000 - $105,000',
      careerPath: 'Mechanic → Senior Mechanic → Lead Tech → Shop Supervisor',
      environment: ['Bus/truck shop', 'Hands-on repair', 'Diesel focus', 'Problem-solving'],
      jobGrowth: '6% growth through 2032'
    },
    {
      id: 'bus-driver-school',
      name: 'Bus Driver, School',
      summary: 'Transport students to and from school safely.',
      responsibilities: [
        'Drive school bus',
        'Ensure safety',
        'Follow route',
        'Maintain vehicle',
        'Manage students'
      ],
      skills: ['Driving', 'Student Management', 'Safety', 'Communication', 'Responsibility'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School + commercial driver license',
      salary: '$40,000 - $70,000',
      careerPath: 'School Bus Driver → Lead Driver → Transportation Coordinator',
      environment: ['School transportation', 'Student-focused', 'Regular schedule', 'Community service'],
      jobGrowth: '3% growth through 2032'
    },
    {
      id: 'bus-driver-transit',
      name: 'Bus Driver, Transit and Intercity',
      summary: 'Transport passengers on regular routes.',
      responsibilities: [
        'Drive bus',
        'Follow schedule',
        'Manage passengers',
        'Collect fares',
        'Maintain vehicle'
      ],
      skills: ['Driving', 'Customer Service', 'Route Knowledge', 'Safety', 'Communication'],
      talentFit: 'Practical Builder, People-Oriented Helper',
      education: 'High School + commercial driver license',
      salary: '$45,000 - $80,000',
      careerPath: 'Bus Driver → Lead Driver → Route Supervisor → Manager',
      environment: ['Public transportation', 'Fixed routes', 'Customer-facing', 'Safety-focused'],
      jobGrowth: '4% growth through 2032'
    }
  ]
};
