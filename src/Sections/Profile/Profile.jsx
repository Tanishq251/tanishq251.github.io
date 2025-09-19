import "./Profile.css";
import '../../Components/Icons/Icons.css';
import '../../Components/Button/Button.css';
import { useScrollAnimationClass } from '../../hooks/useScrollAnimationClass';
import { useState, useEffect } from 'react';

const Profile = () => {
  const roles = [
    "A Student",
    "A Researcher",
    "Computer Vision Enthusiast",
    "Software Developer",
    "Problem Solver"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Animation hooks
  const [picRef, picClass] = useScrollAnimationClass('fade-in-left', 0.1, 200);
  const [greetingRef, greetingClass] = useScrollAnimationClass('fade-in-up', 0.1, 100);
  const [titleRef, titleClass] = useScrollAnimationClass('fade-in-up', 0.1, 200);
  const [roleRef, roleClass] = useScrollAnimationClass('fade-in-up', 0.1, 300);
  const [btnRef, btnClass] = useScrollAnimationClass('scale-in', 0.1, 400);
  const [socialRef, socialClass] = useScrollAnimationClass('bounce-in', 0.1, 500);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);
  return (
    <section id="profile">
      <div ref={picRef} className={`section__pic-container ${picClass}`}>
        <img src="/assets/Tani2.png" alt="Tani" />
      </div>
      <div className="section__text">
        <p ref={greetingRef} className={`section-text-p1 ${greetingClass}`}>Hello, I am</p>
        <h1 ref={titleRef} className={`title ${titleClass}`}>TanishQ Rachamalla</h1>
        <p ref={roleRef} className={`section_text_p2 ${roleClass}`}>
          {displayText}
          <span className="cursor">|</span>
        </p>
        <div ref={btnRef} className={`btn-container ${btnClass}`}>
          <button
            className="btn btn-color-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1JrIYm3gQyw9bn2nlgF3oDrfvpJAaJO4v/view"
              )
            }
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
        <div ref={socialRef} id="socials-container" className={socialClass}>
          <a href="https://www.linkedin.com/in/tanishq-rachamalla-5a759b234/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/linkedin2.png"
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a href="https://github.com/Tanishq251/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/github.png"
              alt="My Github profile"
              className="icon"
            />
          </a>
          <a href="https://www.instagram.com/__.tanii___/?hl=en" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/insta3.png"
              alt="Instagram profile"
              className="icon"
            />
          </a>
          <a href="https://www.codechef.com/users/tanishq_16503" target="_blank" rel="noopener noreferrer">
            <img
              src="../../../public/assets/Codechef.png"
              alt="Codechef Profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
