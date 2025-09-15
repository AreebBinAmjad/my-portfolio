import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Mustafai App",
      description: "A comprehensive Islamic social platform featuring geolocation services, Bluetooth integrations, and advanced API handling. Built with React Native, Redux Toolkit, and modern mobile development practices.",
      icon: "fas fa-mosque",
      image: "/api/placeholder/400/250",
      tech: ["React Native", "Redux Toolkit", "Geolocation", "Bluetooth"],
      links: [
        { type: "ios", url: "https://apps.apple.com/us/app/mustafai/id6463597149", label: "iOS App" },
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.mustafai.pk", label: "Android App" }
      ],
      featured: true
    },
    {
      title: "Fineme App",
      description: "Revolutionary online salon marketplace in Germany with real-time booking, payment integration, and seamless user experience. Features advanced search and filtering capabilities.",
      icon: "fas fa-cut",
      image: "/api/placeholder/400/250",
      tech: ["React Native", "Node.js", "Payment Gateway", "Real-time Booking"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.clevpro.fineme&gl=DE&pli=1", label: "Android App" }
      ],
      featured: true
    },
    {
      title: "Göl Fresh Market App",
      description: "Modern grocery marketplace application for Germany with focus on scalability, performance optimization, and intuitive shopping experience.",
      icon: "fas fa-shopping-cart",
      image: "/api/placeholder/400/250",
      tech: ["React Native", "API Integration", "E-commerce", "Performance Optimization"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.rexsolution.golfreshmarket", label: "Android App" }
      ],
      featured: false
    },
    {
      title: "AR Taxi App",
      description: "Innovative ride-hailing application with real-time GPS tracking, optimized routing algorithms, and user-friendly interface for seamless transportation.",
      icon: "fas fa-taxi",
      image: "/api/placeholder/400/250",
      tech: ["React Native", "GPS Tracking", "Real-time Updates", "Maps Integration"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.rexsolution.taxiapp", label: "Android App" }
      ],
      featured: false
    }
  ];

  const skills = [
    { name: "React Native", level: 95, category: "mobile" },
    { name: "TypeScript", level: 90, category: "language" },
    { name: "Redux Toolkit", level: 92, category: "state" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "React.js", level: 88, category: "frontend" },
    { name: "MongoDB", level: 80, category: "database" },
    { name: "JavaScript", level: 93, category: "language" },
    { name: "Git", level: 87, category: "tools" }
  ];

  const experiences = [
    {
      title: "Senior React Native Developer",
      company: "Transend Technologies Ltd",
      location: "Lahore",
      date: "2024 – Present",
      description: "Leading mobile development team, architecting scalable solutions, and mentoring junior developers.",
      achievements: ["Led 5+ mobile projects", "Improved app performance by 40%", "Mentored 8 junior developers"]
    },
    {
      title: "Senior React Native Developer",
      company: "Arhamsoft Ltd",
      location: "Lahore",
      date: "2021 – 2022",
      description: "Developed cross-platform applications with focus on performance and user experience.",
      achievements: ["Reduced development time by 30%", "Built 10+ mobile applications", "Implemented CI/CD pipelines"]
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`App ${isLoaded ? 'fade-in' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Areeb</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="greeting">Hi, I'm</span>
                <span className="name">Areeb Bin Amjad</span>
              </h1>
              <h2 className="hero-subtitle">Senior React Native Developer</h2>
              <p className="hero-description">
                Crafting exceptional mobile experiences with 5+ years of expertise in React Native, 
                TypeScript, and cross-platform development. Passionate about building scalable, 
                user-centric applications that make a difference.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-avatar">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="floating-elements">
                  <div className="floating-icon react"><i className="fab fa-react"></i></div>
                  <div className="floating-icon js"><i className="fab fa-js-square"></i></div>
                  <div className="floating-icon mobile"><i className="fas fa-mobile"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                I'm a passionate Senior React Native Developer with over 5 years of experience 
                creating innovative mobile solutions. My journey in mobile development has led me 
                to work with cutting-edge technologies and deliver applications that serve thousands of users.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100K+</span>
                  <span className="stat-label">App Downloads</span>
                </div>
              </div>
            </div>
            <div className="about-experience">
              <h3>Professional Journey</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p className="company">{exp.company} • {exp.location}</p>
                    <span className="date">{exp.date}</span>
                    <p className="description">{exp.description}</p>
                    <ul className="achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best mobile applications and development work</p>
          
          <div className="featured-projects">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="featured-project">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                          <i className={link.type === 'ios' ? 'fab fa-apple' : 'fab fa-google-play'}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="all-projects">
            <h3>All Projects</h3>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className={link.type === 'ios' ? 'fab fa-apple' : 'fab fa-google-play'}></i>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Ready to bring your mobile app ideas to life?</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:areeb.ch123789@gmail.com">areeb.ch123789@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+923174014924">+92 317 4014924</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/areeb-chaudhary-723684360/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/AreebBinAmjad" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Areeb Bin Amjad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
