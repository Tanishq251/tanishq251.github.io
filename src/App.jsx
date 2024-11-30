import { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Sections/Profile/Profile";
import Experience from "./Sections/Experience/Experience";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";
import "./index.css";
import "./App.css";
import Contacts from "./Sections/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const navbarRef = useRef(null);
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  // const certificationsRef = useRef(null);
  const contactsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (navbarRef.current) observer.observe(navbarRef.current);
    if (profileRef.current) observer.observe(profileRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    // if (certificationsRef.current) observer.observe(certificationsRef.current);
    if (contactsRef.current) observer.observe(contactsRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <section ref={navbarRef}>
        <Navbar />
      </section>
      <section ref={profileRef}>
        <Profile />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactsRef}>
        <Contacts />
      </section>
      <section ref={footerRef}>
        <Footer />
      </section>
    </div>
  );
};

export default App;
