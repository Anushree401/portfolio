'use client';

export default function AppPane({ id }) {
  switch (id) {

    case 'projects':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/projects/</span></h2>

          <div className="app-card glow-hover cyan">
            <h3> nScanner  Online Network Scanning Tool</h3>
            <div className="app-meta">Python · Flask · Cybersecurity</div>
            <p>Hybrid passive + active network scanner. Performs TCP scanning, reconnaissance, and vulnerability analysis. Presents findings through a Flask-based dashboard. Identifies open ports, misconfigurations, and exploitable vectors.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Python</span>
              <span className="tag green">Flask</span>
              <span className="tag purple">Nmap</span>
              <a className="contact-link" href="https://github.com/Anushree401/nScanner" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/nScanner</a>
            </div>
          </div>

          <div className="app-card glow-hover green">
            <h3> Sahayak  AI Teaching Assistant</h3>
            <div className="app-meta">Google Agentic AI · Firebase · Hackathon Finalist</div>
            <p>Built during the Google Agentic AI Hackathon. Full AI model to assist teachers with lesson planning, generating visual aids, and supporting classrooms with limited resources. Backend automation with Firebase integration.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag green">Finalist</span>
              <span className="tag">Firebase</span>
              <span className="tag purple">Agentic AI</span>
              <a className="contact-link" href="https://github.com/ak-kk-21/VAANGuard-Devs-Sahayak" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/ak-kk-21/VAANGuard-Devs-Sahayak</a>
            </div>
          </div>

          <div className="app-card glow-hover purple">
            <h3> Market Trends Dashboard</h3>
            <div className="app-meta">Python · Plotly · React · Live API Data</div>
            <p>Interactive dashboard processing live API data for real-time market trend analysis. Features trend forecasting and anomaly detection with dynamic Plotly/React visualisation. Built with Python backend and React frontend.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Python</span>
              <span className="tag purple">Plotly</span>
              <span className="tag">React</span>
              <a className="contact-link" href="https://github.com/Anushree401/market-dashboard" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/market-dashboard</a>
            </div>
          </div>

          <div className="app-card glow-hover yellow">
            <h3> Explainable AI Credit Scoring <span style={{ fontSize: 11, opacity: 0.7 }}>(ongoing)</span></h3>
            <div className="app-meta">Research · ML · Interpretability</div>
            <p>Ongoing research project on interpretable financial risk prediction models. Combining transparency, explainability, and predictive analytics. Focus on making AI decisions auditable for financial use-cases.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">ML</span>
              <span className="tag yellow">Explainable AI</span>
              <span className="tag">Python</span>
            </div>
          </div>

          <div className="app-card glow-hover orange">
            <h3>️ Keylogger &amp; Email Bomber</h3>
            <div className="app-meta">Python · Security Research · Sandboxed</div>
            <p>Built purely for learning purposes in a sandboxed, isolated environment. Developed to deeply understand attack vectors, keylogging mechanisms, and email-based attack patterns  and how to defend against them. Code not disclosed.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag orange">Learning Only</span>
              <span className="tag">Python</span>
              <span className="tag">Sandboxed</span>
              <a className="contact-link" href="https://github.com/Anushree401/sandbox-research" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/sandbox-research</a>
            </div>
          </div>

          <div className="app-card glow-hover pink">
            <h3> Digital Banking Application</h3>
            <div className="app-meta">Full Stack Simulation</div>
            <p>Full stack digital banking system with a simulation of core banking processes such as account management, funds transfer, loans, fixed deposits, card management, and admin management. A structural simulation of a modern banking workflow with role-based access.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag pink">Banking</span>
              <span className="tag">Full Stack</span>
              <a className="contact-link" href="https://github.com/Anushree401/Digital-Banking-Application" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/Digital-Banking-Application</a>
            </div>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>️ PAFA (Predictive Adversarial Fraud Architecture) <span style={{ fontSize: 11, opacity: 0.7 }}>(ongoing)</span></h3>
            <div className="app-meta">Mobile Malware Security Pipeline</div>
            <p>An automated, self-improving security pipeline designed for banking institutions to detect and immunize systems against financial mobile malware (.apk / .aab). Uses topological machine learning and an Adversarial AI Warfare Loop to predict dynamic malware mutations.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag cyan">Security</span>
              <span className="tag">AI</span>
              <span className="tag">Malware Analysis</span>
              <a className="contact-link" href="https://github.com/Anushree401/apk-analyzer" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/apk-analyzer</a>
            </div>
          </div>

          <div className="app-card glow-hover green">
            <h3>️ Web Scraper &amp; Crawler</h3>
            <div className="app-meta">Web Scraping</div>
            <p>A full working web crawler that takes a website URL as input, crawls all pages, scrapes each page to extract details (title, links, images, headings), and reports what was found on each page.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Scraping</span>
              <span className="tag green">Crawler</span>
              <a className="contact-link" href="https://github.com/Anushree401/scraper-crawler" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/scraper-crawler</a>
            </div>
          </div>

          <div className="app-card glow-hover purple">
            <h3> FastAPI E-Wallet</h3>
            <div className="app-meta">FastAPI · JWT · Transactions</div>
            <p>A FastAPI-based e-commerce system with integrated wallet functionality, JWT authentication, and comprehensive transaction management.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">FastAPI</span>
              <span className="tag purple">E-commerce</span>
              <a className="contact-link" href="https://github.com/Anushree401/ewallet" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/ewallet</a>
            </div>
          </div>

          <div className="app-card glow-hover yellow">
            <h3> QuickNotes AI</h3>
            <div className="app-meta">MERN Stack · Real-time</div>
            <p>Fast, lightweight MERN stack project designed to be built in 1 hour by a team of 4 developers. Allows users to create notes, see them update in real time, and use AI to generate summaries or titles for the notes.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">MERN</span>
              <span className="tag yellow">AI</span>
              <a className="contact-link" href="https://github.com/Anushree401/QuickNotesAI_Anushree" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/QuickNotesAI_Anushree</a>
            </div>
          </div>

          <div className="app-card glow-hover orange">
            <h3> GrabMEDIA</h3>
            <div className="app-meta">CLI · yt-dlp · Python</div>
            <p>A powerful command-line tool for downloading videos, audio, PDFs, and images from YouTube and direct URLs. Built with yt-dlp, urllib, and Python threading, supporting multi-threaded downloads and YouTube audio-only mode.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag orange">CLI</span>
              <span className="tag">Python</span>
              <a className="contact-link" href="https://github.com/Anushree401/GrabMEDIA" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/GrabMEDIA</a>
            </div>
          </div>

          <div className="app-card glow-hover cyan">
            <h3> TCP Network Scanner</h3>
            <div className="app-meta">Python · python-nmap</div>
            <p>A TCP port scanner built using Python that leverages python-nmap to scan a target host for open TCP ports, identify running services, and display filtered or closed ports.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag cyan">Nmap</span>
              <span className="tag">Python</span>
              <a className="contact-link" href="https://github.com/Anushree401/TCP-network-scanner" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> github.com/Anushree401/TCP-network-scanner</a>
            </div>
          </div>
        </div>
      );

    case 'internships':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/internships/</span></h2>

          <div className="app-card glow-hover cyan">
            <h3>Cyber Security Innovation Intern</h3>
            <div className="app-meta">Cyber Secured India · Oct 2025  Jan 2026</div>
            <p>Worked as a Cyber Security Innovation Intern, deeply involved in various research-related tasks to innovate within the cybersecurity domain.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag cyan">Innovation</span>
              <span className="tag">Research</span>
              <span className="tag">Security</span>
            </div>
          </div>

          <div className="app-card glow-hover yellow">
            <h3>Technical Developer Intern</h3>
            <div className="app-meta">Auracle Labs · Ongoing</div>
            <p>Working on real-world AI and software systems, bridging research ideas with production-ready implementations.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag yellow">Applied AI</span>
              <span className="tag">System Integration</span>
              <span className="tag">Experimentation Pipelines</span>
            </div>
          </div>

          <div className="app-card glow-hover green">
            <h3>Cybersecurity Intern @ WhizHack</h3>
            <div className="app-meta">WhizHack · Cybersecurity</div>
            <p>Performed vulnerability analysis using security datasets. Conducted security dataset visualisation and integrated dashboards with backend APIs for real-time data display. Worked hands-on with SQLi, brute force, and threat simulation tools.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">Python</span>
              <span className="tag green">BurpSuite</span>
              <span className="tag">Nmap</span>
              <span className="tag purple">SQLi</span>
            </div>
          </div>

          <div className="app-card glow-hover purple">
            <h3>Threat Simulation Intern @ 1Stop.ai</h3>
            <div className="app-meta">1Stop.ai · Threat Prism · Full Stack + Security</div>
            <p>Simulated threat scenarios and analyzed attack patterns using Python. Designed RESTful APIs using Express.js and MongoDB. Worked on UI optimization and real-time event rendering for the Threat Prism platform.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag purple">Threat Modelling</span>
              <span className="tag">Express.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Python</span>
            </div>
          </div>
        </div>
      );

    case 'academics':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/academics/</span></h2>

          <div className="app-card glow-hover pink">
            <h3>B.Tech Data Science + MBA (MBATech)</h3>
            <div className="app-meta">NMIMS MPSTME · Ongoing (2021-2026)</div>
            <p>Pursuing a 5-year integrated MBATech program specializing in Data Science at NMIMS Mukesh Patel School of Technology Management & Engineering.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag pink">NMIMS</span>
              <span className="tag">B.Tech</span>
              <span className="tag">MBA</span>
            </div>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>IIT Madras Foundation Certification</h3>
            <div className="app-meta">IIT Madras · Programming &amp; Data Science · Completed</div>
            <p>Completed foundational coursework in programming, data science, and web systems through IIT Madras's online BS programme.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">IIT Madras</span>
              <span className="tag cyan">BS Degree</span>
              <span className="tag">Data Science</span>
            </div>
          </div>
        </div>
      );

    case 'skills':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/skills/</span></h2>

          <div className="skill-grid">
            <div className="app-card glow-hover cyan">
              <h3>Languages</h3>
              <ul>
                <li>Python (Pandas, NumPy, Matplotlib, SciPy)</li>
                <li>JavaScript</li>
                <li>HTML &amp; CSS</li>
                <li>SQL (PostgreSQL)</li>
              </ul>
            </div>

            <div className="app-card glow-hover green">
              <h3>Data / ML</h3>
              <ul>
                <li>EDA &amp; Feature Engineering</li>
                <li>PyTorch, TensorFlow, scikit-learn</li>
                <li>Streamlit, Plotly/Dash, Plotly/React</li>
                <li>Model Building (in progress)</li>
                <li>Explainable AI</li>
              </ul>
            </div>

            <div className="app-card glow-hover purple">
              <h3>Security Tools</h3>
              <ul>
                <li>Nmap, Wireshark, Aircrack-ng</li>
                <li>Hydra, BurpSuite, Sqlmap, Zphisher</li>
                <li>Nikto, DirBuster, Gobuster</li>
                <li>Metasploit, OWASP ZAP, VulnHub</li>
                <li>Pentest, SQLi, Brute Force, OSINT</li>
              </ul>
            </div>

            <div className="app-card glow-hover yellow">
              <h3>Backend / Web</h3>
              <ul>
                <li>Node.js, Express.js</li>
                <li>Flask, FastAPI, Jinja2</li>
                <li>REST APIs, JWT Auth</li>
                <li>MERN Stack (learning)</li>
                <li>React + Node (just begun)</li>
              </ul>
            </div>

            <div className="app-card glow-hover orange">
              <h3>Databases</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>NoSQL basics</li>
                <li>CRUD expert</li>
              </ul>
            </div>

            <div className="app-card glow-hover pink">
              <h3>DevOps &amp; Tools</h3>
              <ul>
                <li>Git &amp; GitHub</li>
                <li>Docker (basic)</li>
                <li>Render, Netlify, Vercel</li>
                <li>Postman</li>
                <li>Tailwind CSS, Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      );

    case 'leadership':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/leadership/</span></h2>

          <div className="app-card glow-hover pink">
            <h3>Co-founder & Admin, CyphersNova Community</h3>
            <div className="app-meta">Ongoing</div>
            <p>Building production-level projects, organizing events, and hosting speaker sessions to foster a community of tech enthusiasts.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag pink">Project Development</span>
              <span className="tag">Community Building</span>
              <span className="tag">Technical Leadership</span>
            </div>
          </div>

          <div className="app-card glow-hover green">
            <h3>Subhead  R&amp;D, IEEE Research Committee</h3>
            <div className="app-meta">Ongoing · NMIMS MPSTME</div>
            <p>Leading research initiatives and technical projects within the IEEE student chapter's R&amp;D division. Driving innovation-focused research and coordinating technical deliverables across teams.</p>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>Finance Executive, MBATech Connect Cell</h3>
            <div className="app-meta">Ongoing · NMIMS MPSTME</div>
            <p>Managing finances and operations for the MBATech Connect Cell, a student body bridging management and technology disciplines. Responsible for budgeting, accounts, and financial planning for events.</p>
          </div>

          <div className="app-card glow-hover purple">
            <h3>Technical Executive, IEC Committee</h3>
            <div className="app-meta">Taqneeq  NMIMS Tech Fest · Aug 2024  May 2025</div>
            <p>Served as Technical Executive for the IEC Committee and helped organise Taqneeq, NMIMS's annual tech fest. Managed technical event logistics, volunteer coordination, and on-ground execution.</p>
          </div>

          <div className="app-card glow-hover yellow">
            <h3>Organizing Team, Paradox  IIT Madras</h3>
            <div className="app-meta">IIT Madras Technical Festival</div>
            <p>Part of the organizing team for Paradox, IIT Madras's premier technical festival. Contributed to operations, event management, and participant coordination at one of India's top technical fests.</p>
          </div>

          <div className="app-card glow-hover orange">
            <h3>Editorial Executive, 4C Marketing Club</h3>
            <div className="app-meta">College Content &amp; Communication Club · Aug 2024  Apr 2025</div>
            <p>Created and curated content for the college's marketing and communication club. Contributed to editorial planning, digital content, and club communications across multiple platforms.</p>
          </div>
        </div>
      );

    case 'publications':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/publications/</span></h2>

          <div className="app-card glow-hover pink">
            <h3>Research Publication: Food Allergens in India</h3>
            <div className="app-meta">Contributor · ResearchGate</div>
            <p>Contributed to a research paper titled "Food Allergens in India: Evidence, Regulation, and the State of Current Knowledge", published on ResearchGate.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag pink">Research</span>
              <span className="tag">Publication</span>
              <a className="contact-link" href="https://www.researchgate.net/publication/404289052_Food_Allergens_in_India_Evidence_Regulation_and_the_State_of_Current_Knowledge" target="_blank" rel="noreferrer" style={{ marginLeft: 8, fontSize: 12 }}> View on ResearchGate</a>
            </div>
          </div>
        </div>
      );

    case 'hackathons':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/hackathons/</span></h2>

          <div className="app-card glow-hover green">
            <h3> Google Agentic AI Hackathon</h3>
            <div className="app-meta">Finalist · National Level</div>
            <p>Built <strong>Sahayak</strong>, an AI teaching assistant using Google's Agentic AI stack. The platform helps teachers plan lessons, generate visual aids, and support classrooms with limited resources. Selected as a national finalist.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag green">Finalist</span>
              <span className="tag">Agentic AI</span>
              <span className="tag">Firebase</span>
            </div>
          </div>

          <div className="app-card glow-hover cyan">
            <h3> Cyber Cypher  Taqneeq (NMIMS)</h3>
            <div className="app-meta">Finalist · Cybersecurity Track</div>
            <p>Competed in Cyber Cypher, the cybersecurity competition at Taqneeq (NMIMS's annual tech fest). Finished as a finalist in the pentest and forensics track. Also participated in the UI/UX track.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag cyan">Finalist</span>
              <span className="tag">Pentest</span>
              <span className="tag">Forensics</span>
            </div>
          </div>

          <div className="app-card glow-hover purple">
            <h3> IEEE TechSafar</h3>
            <div className="app-meta">Finalist · Research Track</div>
            <p>Technical innovation competition organized by the IEEE student chapter. Finished as a finalist in the research category, presenting work on intelligent systems and security-focused data analytics.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag purple">Finalist</span>
              <span className="tag">Research</span>
              <span className="tag">IEEE</span>
            </div>
          </div>

          <div className="app-card glow-hover yellow">
            <h3>Adappt Ideathon  IETE</h3>
            <div className="app-meta">Participant · Idea-Stage Innovation</div>
            <p>Participated in the Adappt Ideathon organised by IETE (Institution of Electronics and Telecommunication Engineers). Pitched a tech innovation concept at the idea stage.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">IETE</span>
              <span className="tag yellow">Ideathon</span>
            </div>
          </div>

          <div className="app-card glow-hover orange">
            <h3>Mumbai MUN</h3>
            <div className="app-meta">Delegate of Australia</div>
            <p>Participated in Mumbai Model United Nations as the Delegate of Australia. Developed skills in research, public speaking, diplomatic negotiation, and policy argumentation across international committee sessions.</p>
            <div style={{ marginTop: 8 }}>
              <span className="tag">MUN</span>
              <span className="tag orange">Delegate</span>
            </div>
          </div>
        </div>
      );

    case 'contact':
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text"> ~/contact.txt</span></h2>

          <div className="app-card glow-hover green">
            <h3>Email</h3>
            <p><a className="contact-link" href="mailto:anushree1606balaji@gmail.com">anushree1606balaji@gmail.com</a></p>
          </div>

          <div className="app-card glow-hover cyan">
            <h3>GitHub</h3>
            <p><a className="contact-link" href="https://github.com/Anushree401" target="_blank" rel="noreferrer">github.com/Anushree401</a></p>
          </div>

          <div className="app-card glow-hover purple">
            <h3>LinkedIn</h3>
            <p><a className="contact-link" href="https://www.linkedin.com/in/anushree-balaji-a71b9a255" target="_blank" rel="noreferrer">linkedin.com/in/anushree-balaji-a71b9a255</a></p>
          </div>

          <div className="app-card glow-hover yellow">
            <h3>Phone</h3>
            <p> +91 91527 92056</p>
          </div>

          <div className="app-card glow-hover orange">
            <h3>Open to</h3>
            <ul>
              <li>Data Science &amp; ML internships</li>
              <li>Cybersecurity roles &amp; research</li>
              <li>Full-stack web development projects</li>
              <li>Research collaborations</li>
            </ul>
          </div>

          <div className="app-card glow-hover pink" style={{ marginTop: 8 }}>
            <p style={{ color: '#50fa7b', fontSize: 12 }}>
               Best reached via email or LinkedIn. Usually responds within 24 hours.
            </p>
          </div>
        </div>
      );

    default:
      return (
        <div className="app-pane">
          <h2><span className="typewriter-text">Unknown section</span></h2>
          <p>No content found for: {id}</p>
        </div>
      );
  }
}
