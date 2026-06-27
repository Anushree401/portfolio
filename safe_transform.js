const fs = require('fs');

let content = fs.readFileSync('app/components/AppPane.js', 'utf8');

// 1. Update imports
const importsLine = "import { ExternalLink, BookOpen, Github, Trophy, Rocket, Shield, Microscope, Users, Briefcase, GraduationCap, MessageSquare, Star, Target, Award, Globe } from 'lucide-react';";
content = content.replace(/import \{.*?\} from 'lucide-react';/, importsLine);

// 2. Define timelineData before switch
const timelineDataBlock = `
  const timelineData = [
    { year: '2025', title: 'Google Agentic AI Hackathon — Finalist', body: 'Built Sahayak, an AI teaching assistant. Reached finals out of ~5,000 teams.', icon: <Trophy size={16} /> },
    { year: '2025', title: 'nScanner v2 Shipped', body: 'Full-stack network scanning suite with Flask dashboard. Used by my university\\'s cybersec club.', icon: <Rocket size={16} /> },
    { year: '2025', title: 'Co-founder & Admin, CyphersNova Community', body: 'Building production-level projects, organizing events, and hosting speaker sessions to foster a community of tech enthusiasts.', icon: <Users size={16} /> },
    { year: '2024', title: 'Cybersecurity Intern @ WhizHack', body: 'Conducted deep vulnerability analysis on client datasets. Wrote 3 production tooling scripts automating threat triage.', icon: <Shield size={16} /> },
    { year: '2024', title: 'Subhead R&D, IEEE Research Committee', body: 'Leading research initiatives within the IEEE student chapter. Driving innovation-focused research across teams.', icon: <Microscope size={16} /> },
    { year: '2024', title: 'Cyber Cypher Taqneeq (NMIMS) — Finalist', body: 'Competed in cybersecurity pentest and forensics track. Finished as a finalist.', icon: <Target size={16} /> },
    { year: '2024', title: 'IEEE TechSafar — Finalist', body: 'Technical innovation competition. Finalist in the research category presenting intelligent systems and security data analytics.', icon: <Award size={16} /> },
    { year: '2024', title: 'Organizing Team, Paradox IIT Madras', body: 'Part of the organizing team for IIT Madras\\'s premier technical festival. Managed operations and participant coordination.', icon: <GraduationCap size={16} /> },
    { year: '2024', title: 'Technical Executive, IEC Committee', body: 'Helped organise Taqneeq, NMIMS\\'s annual tech fest. Managed technical event logistics and on-ground execution.', icon: <Briefcase size={16} /> },
    { year: '2024', title: 'Finance Executive, MBATech Connect Cell', body: 'Managing finances, budgeting, and operations for the student body bridging management and technology disciplines.', icon: <Briefcase size={16} /> },
    { year: '2024', title: 'Editorial Executive, 4C Marketing Club', body: 'Created and curated digital content for the college\\'s marketing and communication club.', icon: <MessageSquare size={16} /> },
    { year: '2024', title: 'Adappt Ideathon IETE — Participant', body: 'Pitched a tech innovation concept at the idea stage.', icon: <Star size={16} /> },
    { year: '2024', title: 'Mumbai MUN — Delegate of Australia', body: 'Developed skills in research, public speaking, diplomatic negotiation, and policy argumentation.', icon: <Globe size={16} /> }
  ];

  switch (id) {
`;
content = content.replace('switch (id) {', timelineDataBlock);


// 3. Replace leadership block
const leadershipStartRegex = /case 'leadership':[\s\S]*?(?=case 'publications':)/;
const newLeadershipBlock = `case 'leadership':
    case 'hackathons':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/leadership_&_hackathons/</span></h2>
          <div className="timeline">
            {timelineData.map((t, i) => (
              <div key={i} className="tl-item">
                <div className="tl-year">{t.year}</div>
                <div className="tl-line">
                  <div className="tl-dot" style={{ color: '#8be9fd' }}>{t.icon}</div>
                  {i < timelineData.length - 1 && <div className="tl-connector" style={{ width: '2px', background: 'rgba(80,250,123,0.3)', flex: 1, margin: '4px 0' }} />}
                </div>
                <div className="tl-content" style={{ paddingBottom: '24px' }}>
                  <h3 style={{ color: '#f8f8f2', fontSize: '15px', marginBottom: '4px' }}>{t.title}</h3>
                  <p style={{ color: '#c0c0c0', fontSize: '13px', lineHeight: '1.4' }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    `;
content = content.replace(leadershipStartRegex, newLeadershipBlock);

// 4. Delete the original hackathons block
const hackathonsStartRegex = /case 'hackathons':[\s\S]*?(?=case 'contact':)/;
content = content.replace(hackathonsStartRegex, '');

fs.writeFileSync('app/components/AppPane.js', content, 'utf8');
console.log("Safe timeline unification applied successfully.");
