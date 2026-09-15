# TalentMatch - Talent Discovery Website

A guided talent discovery quiz that helps people discover their natural talents, interests, and work styles, then maps them to careers they'll likely enjoy.

---

## 🎯 Project Overview

**Mission**: Help people find careers where they'll actually thrive, not just survive.

**How It Works**:
1. Users take a 15-question guided quiz
2. System analyzes their responses against 6 talent archetypes
3. Get personalized results showing strengths, ideal environments, and suggested careers

---

## 🗂️ Project Structure

```
JoshSite/
├── pages/                    # HTML pages
│   ├── index.html           # Home page
│   ├── how-it-works.html    # 3-step explanation
│   ├── quiz.html            # 15-question quiz
│   ├── results.html         # Personalized results
│   └── about.html           # Mission & archetypes
│
├── css/
│   └── styles.css           # Global styling (mobile-friendly)
│
├── js/
│   ├── quiz.js              # Quiz logic & scoring
│   └── results.js           # Results display
│
├── docs/
│   ├── WIX_SETUP_GUIDE.md   # Step-by-step Wix implementation
│   ├── DATABASE_SCHEMA.md   # Database structure
│   ├── VELO_CODE.md         # Velo/JavaScript templates
│   └── README.md            # This file
│
└── assets/                  # Images, icons (optional)
```

---

## 🎨 The Six Talent Archetypes

### 🎨 Creative Thinker
**Natural innovators** who see possibilities everywhere, thrive when experimenting, and need autonomy.
- **Careers**: Product Designer, UX Designer, Entrepreneur, Marketing Director, Architect
- **Thrives in**: Freedom, experimentation, variety, collaboration

### 🔬 Analytical Problem Solver
**Break down complexity** with logic and data. Love understanding how things work.
- **Careers**: Software Engineer, Data Scientist, Researcher, Financial Analyst, Consultant
- **Thrives in**: Deep work, research, complexity, evidence-based decisions

### 🔧 Practical Builder
**Get things done** with hands-on approach. Resourceful and results-oriented.
- **Careers**: Project Manager, Operations Manager, Mechanical Engineer, Site Manager
- **Thrives in**: Tangible results, clear objectives, autonomy, real-world problems

### 👥 People-Oriented Helper
**Naturally empathetic**, energized by connecting with others, driven to help.
- **Careers**: Counselor, Teacher, Nurse, HR Manager, Coach, Sales Professional
- **Thrives in**: Teams, collaboration, helping others, relationship-building

### 👑 Leadership & Visionary
**Take charge naturally**, set direction, inspire and drive teams toward goals.
- **Careers**: CEO, Executive Director, Founder, Manager, Director
- **Thrives in**: Authority, strategy, leading teams, ambitious goals

### 📋 Detail-Oriented Organizer
**Create systems and order** through precision and methodical approach.
- **Careers**: Project Administrator, Accountant, Lawyer, Quality Assurance Manager
- **Thrives in**: Clear processes, defined roles, excellence, structure

---

## 🎯 Quiz Design

### Question Strategy
- **15 questions** total (achieves balance of depth and completion time)
- **Multiple-choice** with 4 options each
- **Designed to test**:
  - How you think (creative vs. analytical vs. logical)
  - What you enjoy (energizers vs. drains)
  - Your work style (teams vs. solo, structure vs. freedom)

### Scoring
```
- Each question: 1 point to one talent type
- Total: 15 points distributed across 6 types
- Dominant type: The one with highest score
```

### Sample Questions
1. "When solving a problem, you tend to..."
2. "In a team project, you naturally..."
3. "What environment makes you most productive?"
4. "You feel most energized when you..."
5. "What kind of work feels like a burden to you?"

---

## 🎨 Design System

### Colors
```css
Primary:     #1E293B  (Dark Blue)
Accent:      #38BDF8  (Soft Blue)
Light BG:    #F8FAFC
Text Dark:   #1E293B
Text Gray:   #64748B
Border:      #E2E8F0
White:       #FFFFFF
```

### Typography
- **Font Family**: Inter, Poppins, or system fonts
- **H1**: 3rem, 700 weight
- **H2**: 2.2rem, 600 weight
- **Body**: 1.1rem, regular weight

### Components
- **Buttons**: 8-12px border-radius, min 48px height
- **Cards**: 10px border-radius
- **Spacing**: 1rem base unit

### Mobile Rules
- Stack everything vertically
- One CTA per screen
- 48px min button height
- Touch-friendly tap targets

---

## 📱 Pages Overview

### 1. Home Page
**Goal**: Explain mission & push users to quiz

**Sections**:
- Hero section ("Discover What You're Naturally Good At")
- Brief explanation (no fluff)
- CTA button → Start Quiz
- How it works (3-step preview)
- Footer

**Key Elements**:
- Clear value proposition
- Social proof / testimonials (optional)
- Strong CTA placement

### 2. How It Works Page
**Goal**: Build trust & clarity

**Sections**:
- Step 1: Answer questions about preferences & strengths
- Step 2: We analyze patterns (not just interests)
- Step 3: You get career directions that fit you
- Why our approach is different
- CTA to take quiz

### 3. Quiz Page
**Goal**: Collect responses & calculate profile

**Features**:
- Progress bar showing 1 of 15
- 15 multiple-choice questions
- Radio button selections (one per question)
- Visual feedback on selection
- Submit button at end
- JavaScript handles scoring & redirect

### 4. Results Page
**Goal**: Show personalized output

**Displays**:
- Your talent type (e.g., "Analytical Problem Solver")
- Description of your talent type
- Core strengths
- Ideal work environments
- What drains you
- Suggested career paths
- Industries to explore
- Next steps
- Button to retake quiz

### 5. About Page
**Goal**: Humanize the project

**Sections**:
- Mission statement
- Why we built it
- Our approach
- The 6 talent archetypes (cards)
- Why this is different from other tests
- Call to action

---

## 🚀 Getting Started

### For HTML Prototype
1. Open `/pages/index.html` in a browser
2. Navigate through pages
3. Take the quiz
4. View results (sample data shown)

### For Wix Implementation
See detailed guide: [`docs/WIX_SETUP_GUIDE.md`](docs/WIX_SETUP_GUIDE.md)

**Quick Start**:
1. Enable Velo in Wix Editor
2. Create 5 pages (Home, How It Works, Quiz, Results, About)
3. Copy HTML content from `/pages/` files
4. Apply CSS from `/css/styles.css`
5. Implement Velo code from `/js/` files
6. Set up database (see [`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md))
7. Test and publish

---

## 💻 Technical Implementation

### Frontend Stack
- **HTML5** for semantic structure
- **CSS3** for responsive design (mobile-first)
- **JavaScript (Vanilla)** for quiz logic
- **Session Storage** for temporary data

### Backend Stack (Wix)
- **Wix Velo** for server-side code
- **Wix Collections** for data storage
- **URL parameters** for passing data between pages

### Key Technologies
- No framework dependencies (vanilla JavaScript)
- Cross-browser compatible
- Progressive enhancement (works without JavaScript, too)

### Files Overview

#### `/js/quiz.js`
- Handles quiz form submission
- Calculates talent scores
- Stores results in session storage
- Redirects to results page
- Includes Velo conversion notes

#### `/js/results.js`
- Retrieves results from session storage
- Populates talent type information
- Displays personalized strengths, environments, careers
- Shows next steps
- Handles retake button

#### `/css/styles.css`
- Global styles (1200+ lines)
- Responsive grid system
- Mobile-first approach
- All 6 colors defined as CSS variables
- Accessible color contrast

---

## 🔧 Database Structure

### QuizResults Collection

| Field | Type | Purpose |
|-------|------|---------|
| sessionId | Text | Unique identifier |
| creative | Number | Talent score (0-15) |
| analytical | Number | Talent score (0-15) |
| practical | Number | Talent score (0-15) |
| people | Number | Talent score (0-15) |
| leader | Number | Talent score (0-15) |
| organizer | Number | Talent score (0-15) |
| resultType | Text | Dominant type (e.g., "analytical") |
| timestamp | Date | When quiz was taken |
| userEmail | Text | Optional contact |

See [`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md) for full schema details.

---

## 📋 Implementation Checklist

### Phase 1: Design & Planning ✓
- [x] Define talent archetypes
- [x] Design 6-color scheme
- [x] Create page structure
- [x] Design quiz questions

### Phase 2: HTML/CSS ✓
- [x] Build 5 pages
- [x] Create responsive CSS
- [x] Mobile optimization
- [x] Cross-browser testing

### Phase 3: JavaScript ✓
- [x] Quiz scoring logic
- [x] Results display
- [x] Session storage
- [x] Form validation

### Phase 4: Wix Integration (Ready)
- [ ] Create Wix pages
- [ ] Set up Velo files
- [ ] Create QuizResults collection
- [ ] Implement database saving
- [ ] Test quiz flow
- [ ] Deploy to production

### Phase 5: Optimization
- [ ] Add analytics
- [ ] Implement user accounts (optional)
- [ ] Email results to users (optional)
- [ ] PDF export (optional)

---

## 📈 Future Enhancements

1. **User Accounts**: Save results, retake history
2. **Analytics Dashboard**: See talent distribution
3. **Career Exploration**: Expanded career descriptions
4. **Social Features**: Share results, compare with friends
5. **Mobile App**: Native iOS/Android version
6. **Email Integration**: Auto-send results
7. **PDF Reports**: Downloadable talent profiles
8. **Career Recommendations**: AI-powered suggestions

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Quiz questions display correctly
- [ ] Radio buttons work on all questions
- [ ] Progress bar updates as you answer
- [ ] Form submission calculates scores
- [ ] Results page shows personalized data
- [ ] Navigation menu works on all pages
- [ ] Mobile layout is readable
- [ ] Touch/click targets are adequate (48px+)
- [ ] Links work (external and internal)

### Browser Testing
- [ ] Chrome (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Edge (Latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 📚 Documentation

1. **WIX_SETUP_GUIDE.md** - Complete Wix implementation walkthrough
2. **DATABASE_SCHEMA.md** - Data structure and validation rules
3. **VELO_CODE.md** - Velo JavaScript templates (if created)
4. **README.md** - This file

---

## 🎓 Learning Resources

### For Wix Development
- [Wix Dev Center](https://dev.wix.com)
- [Velo API Documentation](https://dev.wix.com/docs)
- [Wix Collections Guide](https://support.wix.com/en/article/about-wix-data)

### For Career Assessments
- [CareerOneStop](https://www.careeronestop.org/)
- [O*NET Online](https://www.onetonline.org/)
- [Bureau of Labor Statistics](https://www.bls.gov/ooh/)

---

## 📝 License & Usage

This is a project template. Feel free to:
- ✅ Customize the questions
- ✅ Modify the talent archetypes
- ✅ Adjust colors and fonts
- ✅ Deploy on Wix or your own platform
- ✅ Add your own features

---

## 📞 Support & Questions

### Implementation Questions
- Refer to `WIX_SETUP_GUIDE.md` for Wix-specific steps
- Check `DATABASE_SCHEMA.md` for data structure questions

### Content Questions
- Talent definitions are in `/js/quiz.js` and `/js/results.js`
- Edit career suggestions, strengths, and environments there

### Technical Issues
- Check browser console for errors
- Verify database collection name matches exactly
- Ensure Velo code is in the right file location

---

## 🎉 Launch Checklist

Before going live:
- [ ] All pages tested on desktop and mobile
- [ ] Quiz calculates scores correctly
- [ ] Results display personalized data
- [ ] Database is set up and working
- [ ] Navigation menu works everywhere
- [ ] SEO metadata added to each page
- [ ] Branded with your logo/colors
- [ ] Mobile-friendly verified
- [ ] GDPR privacy policy added
- [ ] Domain connected (if using Wix)

---

## 📊 Success Metrics

Track these to measure success:
- Total quiz completions
- Most common talent types
- Return visitor rate (retakes)
- User feedback/ratings
- Average time to complete quiz
- Mobile vs. desktop usage ratio

---

**Created**: February 2026  
**Last Updated**: February 18, 2026  
**Version**: 1.0

---

Enjoy building! 🚀
