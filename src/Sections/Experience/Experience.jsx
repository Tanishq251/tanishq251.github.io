/* eslint-disable no-undef */
import "./Experience.css";
import "../../Components/Icons/Icons.css";
import { useScrollAnimationClass } from '../../hooks/useScrollAnimationClass';
import tickIcon from "/assets/tick2.png"; // Adjust the path accordingly
import arrowIcon from "/assets/down.jpg"; // Adjust the path accordingly

const Experience = () => {
  const webDevelopmentSkills = [
    { skill: "HTML", level: "Advanced" },
    { skill: "CSS", level: "Advanced" },
    { skill: "React", level: "Intermediate" },
    { skill: "TypeScript", level: "Basics" },
    { skill: "Nodejs", level: "Intermediate" },
    { skill: "TailwindCSS", level: "Basics" },
    // { skill: "Bootstrap", level: "Intermediate" },
    { skill: "Socket.io", level: "Basics" },
  ];

  const programmingLanguages = [
    { skill: "C", level: "Advanced" },
    { skill: "C++", level: "Advanced" },
    { skill: "Python", level: "Advanced" },
    { skill: "Java", level: "Intermediate" },
    { skill: "R", level: "Intermediate" },
    { skill: "JavaScript", level: "Intermediate" },
  ];

  const technologies = [
    { skill: "ML", level: "Intermediate" },
    { skill: "AI", level: "Intermediate" },
    { skill: "DL", level: "Advanced" },
    { skill: "DBMS", level: "Intermediate" },
    { skill: "ComputerVision", level: "Intermediate" },
  ];

  const tools = [
    { skill: "Git", level: "Advanced" },
    { skill: "VSCode", level: "Advanced" },
    { skill: "MATLAB", level: "Intermediate" },
    { skill: "Jupyter", level: "Advanced" },
    { skill: "Kaggle", level: "Advanced" },
    { skill: "Colab", level: "Advanced" },
  ];

  // Animation hooks
  const [subtitleRef, subtitleClass] = useScrollAnimationClass('fade-in-up', 0.1, 0);
  const [titleRef, titleClass] = useScrollAnimationClass('fade-in-up', 0.1, 100);
  const [webRef, webClass] = useScrollAnimationClass('fade-in-left', 0.1, 200);
  const [langRef, langClass] = useScrollAnimationClass('fade-in-right', 0.1, 300);
  const [techRef, techClass] = useScrollAnimationClass('fade-in-left', 0.1, 400);
  const [toolsRef, toolsClass] = useScrollAnimationClass('fade-in-right', 0.1, 500);
  const [arrowRef, arrowClass] = useScrollAnimationClass('bounce-in', 0.1, 600);

  const renderSkills = (skills) =>
    skills.map((item, index) => (
      <article key={index}>
        <img src={tickIcon} alt="Experience icon" className="ex-icon" />
        <div>
          <h3>{item.skill}</h3>
          <p>{item.level}</p>
        </div>
      </article>
    ));

  return (
    <section id="experience">
      <p ref={subtitleRef} className={`section-text-p1 ${subtitleClass}`}>Explore My</p>
      <h1 ref={titleRef} className={`title ${titleClass}`}>Experience</h1>
      <div className="experience-details-container">
        <div className="ex-about-containers">
          <div ref={webRef} className={`details-container ${webClass}`}>
            <h2 className="experience-sub-title">Web Development</h2>
            <div className="article-container">
              {renderSkills(webDevelopmentSkills)}
            </div>
          </div>
          <div ref={langRef} className={`details-container ${langClass}`}>
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              {renderSkills(programmingLanguages)}
            </div>
          </div>
        </div>
        <div className="ex-about-containers">
          <div ref={techRef} className={`details-container ${techClass}`}>
            <h2 className="experience-sub-title">Technologies</h2>
            <div className="article-container">
              {renderSkills(technologies)}
            </div>
          </div>
          <div ref={toolsRef} className={`details-container ${toolsClass}`}>
            <h2 className="experience-sub-title">Tools</h2>
            <div className="article-container">
              {renderSkills(tools)}
            </div>
          </div>
        </div>
      </div>
      <img
        ref={arrowRef}
        src={arrowIcon}
        alt="Arrow icon"
        className={`ex-icon ${arrowClass}`}
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
