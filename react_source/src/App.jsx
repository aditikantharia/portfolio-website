import { useState, useEffect } from 'react';
import './index.css';
import profileImg from './assets/profile.jpg';
import project1Img from './assets/project1.jpg';
import project2Img from './assets/project2.jpg';
import project3Img from './assets/project3.jpg';

function App() {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header id="header">
        <div className="nav-container">
          <a href="#" className="logo">Kantharia<span>.dev</span></a>
          <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#blog" onClick={closeMobileMenu}>Blog</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </nav>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero fade-in">
          <div className="container hero-content">
            <div className="hero-text">
              <h2 className="greeting">Hi, I am</h2>
              <h1 className="name">Kantharia Aditi</h1>
              <h3 className="role">Full Stack Engineer</h3>
              <p className="tagline">Crafting high-performance, scalable web applications with beautiful user experiences.</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-outline">Contact Me</a>
              </div>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-wrapper">
                <img src={profileImg} alt="Kantharia Aditi" id="profile-img" />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="about section fade-in">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>I'm a passionate full-stack developer with over 5 years of experience in building modern, scalable, and responsive web applications. I specialize in bridging the gap between elegant design and complex technical requirements.</p>
                <p>When I'm not coding, I enjoy exploring new technologies, writing technical blogs, and contributing to open-source projects.</p>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-card">
                  <h3>10+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section fade-in">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-list">
                  <div className="skill-item">
                    <span>HTML/CSS</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '95%' }}></div></div>
                  </div>
                  <div className="skill-item">
                    <span>JavaScript (ES6+)</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '90%' }}></div></div>
                  </div>
                  <div className="skill-item">
                    <span>React & Vite</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-list">
                  <div className="skill-item">
                    <span>Node.js / Express</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
                  </div>
                  <div className="skill-item">
                    <span>Python / Django</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '75%' }}></div></div>
                  </div>
                  <div className="skill-item">
                    <span>RESTful APIs</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '90%' }}></div></div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Database & Tools</h3>
                <div className="skill-list">
                  <div className="skill-item">
                    <span>MongoDB</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
                  </div>
                  <div className="skill-item">
                    <span>PostgreSQL</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
                  </div>
                  <div className="skill-item">
                    <span>Git & Docker</span>
                    <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section fade-in">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {/* Project 1 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={project1Img} alt="E-Commerce Platform" />
                </div>
                <div className="project-info">
                  <h3>NextGen E-Commerce</h3>
                  <p className="project-desc"><strong>Problem:</strong> Slow legacy e-commerce system losing sales.<br /><strong>Solution:</strong> Built a headless e-commerce platform using React, Node.js, and Stripe, increasing conversion by 40%.</p>
                  <div className="tech-stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Stripe API</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-sm btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-sm btn-outline">Case Study</a>
                  </div>
                </div>
              </div>
              {/* Project 2 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={project2Img} alt="Analytics Dashboard" />
                </div>
                <div className="project-info">
                  <h3>DataPulse Analytics</h3>
                  <p className="project-desc"><strong>Problem:</strong> Scattered business data making decisions hard.<br /><strong>Solution:</strong> Created a unified analytics dashboard with real-time data visualization and custom reporting.</p>
                  <div className="tech-stack">
                    <span>Vue.js</span>
                    <span>Python</span>
                    <span>PostgreSQL</span>
                    <span>D3.js</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-sm btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-sm btn-outline">Case Study</a>
                  </div>
                </div>
              </div>
              {/* Project 3 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={project3Img} alt="Task Management App" />
                </div>
                <div className="project-info">
                  <h3>TaskMaster Mobile</h3>
                  <p className="project-desc"><strong>Problem:</strong> Teams struggling with remote collaboration.<br /><strong>Solution:</strong> Developed a cross-platform mobile app with real-time sync, boosting team productivity by 35%.</p>
                  <div className="tech-stack">
                    <span>React Native</span>
                    <span>Firebase</span>
                    <span>Redux</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-sm btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-sm btn-outline">Case Study</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="blog section fade-in">
          <div className="container">
            <h2 className="section-title">Latest Articles</h2>
            <div className="blog-grid">
              <div className="blog-card">
                <div className="blog-content">
                  <span className="blog-date">Apr 24, 2026</span>
                  <h3>Optimizing React Performance</h3>
                  <p>Discover advanced techniques to speed up your React applications and improve user experience.</p>
                  <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-content">
                  <span className="blog-date">Mar 15, 2026</span>
                  <h3>The Future of Web Design</h3>
                  <p>Exploring upcoming trends in web design, from AI-driven layouts to immersive 3D experiences.</p>
                  <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section fade-in">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's talk about your next project</h3>
                <p>I'm currently available for freelance opportunities. If you have a project that needs some creative touch or just want to say hi, feel free to reach out.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>hello@kantharia.dev</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <div className="contact-form-container">
                {/* Web3Forms Form */}
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                  {/* Replace with your Access Key */}
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  <input type="hidden" name="subject" value="New Submission from Portfolio" />
                  
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
                  </div>
                  
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Kantharia<span>.dev</span></div>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <p className="copyright">&copy; 2026 Kantharia.dev. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
