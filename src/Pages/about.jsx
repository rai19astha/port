import React, { useEffect, useRef } from 'react';
import styles from './about.module.css'; // Import your CSS Module
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css'; // Import the WOW.js CSS
const About = () => {

  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const projectsSectionRef = useRef(null); // Reference for the Projects section

  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW.WOW();
    wow.init(); 
 }, []);

  const toggleMenu = () => {
    if (menuIconRef.current && navbarRef.current) {
      menuIconRef.current.classList.toggle(styles.active);
      navbarRef.current.classList.toggle(styles.active);
    }
  };
  const scrollToProjects = () => {
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
  <>
  <div className={styles.mainhome}>
      <div className={styles.menuIcon} ref={menuIconRef} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={styles.navbar} ref={navbarRef}>
        <div className={styles.socialIcons}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Mail" />
          </a>
        </div>
        <ul>
          <li><a href="/" className={styles.active}>Home</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/about">About</a></li>

        </ul>
      </nav>
      <div className={styles.containerabout}>
      <div className={styles.aboutSection}>
        <h5 className={styles.headingabout}>ABOUT ME & MY EXPERIENCE</h5>
        <p className={styles.descriptionabout}>
          Experienced Frontend Developer creating high-quality web applications that balance functionality and visual appeal. 
          With a global perspective, I’m eager to explore innovative approaches and grow my skills. 
          Feel free to reach out—I’m open for new, exciting opportunities!
        </p>
        
        <p > <span onClick={scrollToProjects} className={styles.scrollText}>Scroll for Skills &nbsp;</span> &#x2193;</p>
            
      </div>

    </div>
    <div className={styles.skillsSection} ref={projectsSectionRef}>
        <ul className={styles.skillsList}>
        <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     C++/C</li>
          <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     Java</li>
          <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     Python</li>
        <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     HTML</li>
        <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     CSS/SCSS</li>
        <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     JavaScript</li>
        <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     NextJs</li>
        <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     ReactJs</li>
          <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     Bootstrap</li>
          <li className="wow fadeInUp">  <div className={styles.hr}>
            <div className="row"></div>
          </div>     ExpressJs</li>
        </ul>
    
    </div>

    <div className={styles.filmOverlayabout}></div>
    </div>
      

  </>
  
   
  );
};

export default About;
