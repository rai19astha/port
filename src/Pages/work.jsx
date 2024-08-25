import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css'; // Import the WOW.js CSS
import styles from './work.module.css'; // Import the CSS module

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const typewriterRef = useRef(null);
  const projectRefs = useRef([]);
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW.WOW();
    wow.init();

    // GSAP animation for typewriter effect
    let text = "Scroll for my projects.";
    let index = 0;

    // Typewriting effect
    gsap.fromTo(
      typewriterRef.current,
      { width: '0' },
      {
        width: '100%',
        duration: 4,
        ease: 'steps(40)',
        delay: 1,
        repeat: -1,
        repeatDelay: 1,
      }
    );


    // Clean up the interval on component unmount
 


    // GSAP ScrollTrigger animations
    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    });
  
  }, []);
  const toggleMenu = () => {
    if (menuIconRef.current && navbarRef.current) {
      menuIconRef.current.classList.toggle(styles.active);
      navbarRef.current.classList.toggle(styles.active);
    }
  };
  return (
    <>
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
        <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.header}>
          <div ref={typewriterRef} className={styles.line}>
            Scroll for my projects.
          </div>
        </div>
      </div>

      <div className={styles.scrollDown}></div>

      <div className="container-fluid">
        <br />
        <br />
        <br />

        <h6>Selected projects</h6>

        <div className={styles.vertical}></div>
        <br />

        <div className={styles.whitespace}></div>
        <div className={styles.whitespace}></div>

        <div className="row">
          <div className="col-lg-8"></div>

          <div
            className={`col-lg-4 ${styles.project} ${styles.project1} wow fadeInUp`}
            ref={(el) => (projectRefs.current[0] = el)}
            onClick={() => (window.location.href = 'project.html')}
          ></div>
        </div>

        <div className={styles.whitespace}></div>

        <div className="row">
          <div
            className={`col-lg-6 ${styles.project} ${styles.project2} wow fadeInUp`}
            ref={(el) => (projectRefs.current[1] = el)}
            onClick={() => (window.location.href = 'project.html')}
          ></div>

          <div className="col-lg-6"></div>
        </div>

        <div className={styles.whitespace}></div>

        <div className="row">
          <div className="col-lg-7"></div>

          <div
            className={`col-lg-4 ${styles.project} ${styles.project3} wow fadeInUp`}
            ref={(el) => (projectRefs.current[2] = el)}
            onClick={() => (window.location.href = 'project.html')}
          ></div>

          <div className="col-lg-1"></div>
        </div>

        <div className={styles.whitespace}></div>



        <div className={styles.whitespace}></div>
      </div>

<div className={styles.smallwork}>
    <div >
      <div className={styles.projectpdesc}>     
        <div className={styles.projecttitle}>
        YTCreator 
        </div>
        <p className={styles.projectpara}>
        -A collaborative platform for YouTube creators and editors, streamling video upload process with direct upload to YouTube, making the process more convinient.
        </p>
      </div>
    </div>

  <div className={styles.projectpdesc}>
    <div className={styles.projecttitle}>
    File Sharing API
    </div>
    <p className={styles.projectpara}>
    - Developed a file sharing platform that allows users to upload files, generate sharable links and securly access and manage files through dedicated download page.
    </p>
  </div>
  <div className={styles.projectpdesc}>
    <div className={styles.projecttitle}>
    Water Quality Monitoring System
    </div>
    <p className={styles.projectpara}>
    - Developed a system using EPS32 to monitor water quality including TDs, pH and temperature with sensors.
    </p>
  </div>

</div>
      <div className="footer">
        <div className={styles.containerwork}>
          <br />
          <br />

          <div className={styles.collab}>
            <div className="row">
              <div className="col-lg-3 ">
                <p className="wow fadeInUp">Got an interesting project? I can help you.</p>
                <div className={styles.hr}>
            <div className="row"></div>
          </div>                
              </div>
              
            </div>
          </div>
      
          <div className={styles.got}>
            <p >Got an interesting project? I can help you.</p>
            <div className={styles.hr}>
            <div className="row"></div>
          </div>
          </div>  
          <br />

  
       
        </div>
      </div>
      <div className={styles.filmOverlay}></div>
    </div>
    </>

  );
};

export default Work;
