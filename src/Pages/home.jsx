import React, { useEffect, useRef } from 'react';
import styles from './home.module.css'; // Import your CSS Module

const Home = () => {

  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const outlineRef = useRef(null);
  useEffect(() => {
    console.log(dotRef.current); // This should log the div element if it's correctly rendered
    // Other code...
  }, []);

  useEffect(() => {
    const THREE = window.THREE;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    const shinyMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0e0e0, 
      metalness: 1, 
      roughness: 0.5, 
    });

    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torus = new THREE.Mesh(torusGeometry, shinyMaterial);
    torus.position.set(0, -30, 0);
    scene.add(torus);

    const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 32);
    const cylinder = new THREE.Mesh(cylinderGeometry, shinyMaterial);
    cylinder.position.set(-90, 25, 0); 
    scene.add(cylinder);

    const coneGeometry = new THREE.ConeGeometry(5, 20, 32);
    const cone = new THREE.Mesh(coneGeometry, shinyMaterial);
    cone.position.set(80, 25, 0); 
    scene.add(cone);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    camera.position.z = 50;

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      cylinder.rotation.x += 0.01;
      cylinder.rotation.y += 0.01;
      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (window.innerWidth <= 912) {
        camera.position.z = 80;
      } else {
        camera.position.z = 50;
      }
    };

    const handleMouseMove = (event) => {

      if (canvasRef.current && overlayRef.current) {
        const { clientX, clientY } = event;
        const xOffset = (clientX / window.innerWidth) * 20 - 10;
        const yOffset = (clientY / window.innerHeight) * 20 - 10;
        canvasRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        overlayRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }
     
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (menuIconRef.current && navbarRef.current) {
      menuIconRef.current.classList.toggle(styles.active);
      navbarRef.current.classList.toggle(styles.active);
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
        <div className={styles.container}>
          <div className={styles.homedesc}>
            <h1>Hello There!</h1>
            <h2>I'm Naman Jangid, <div>a creative Frontend developer.</div></h2>
            <div className={styles.seeprojectss}><a href="/work">See my projects</a></div>
          </div>
        </div>
        <div className={styles.filmOverlay} ref={overlayRef}></div>
        <canvas ref={canvasRef} id="three-canvas"></canvas>

      </div>
    </>
  );
};

export default Home;
