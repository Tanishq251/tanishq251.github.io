/* eslint-disable no-undef */
import "./Experience.css";
import "../../Components/Icons/Icons.css";
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
      <p className="section-text-p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="ex-about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Web Development</h2>
            <div className="article-container">
              {renderSkills(webDevelopmentSkills)}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              {renderSkills(programmingLanguages)}
            </div>
          </div>
        </div>
        <div className="ex-about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Technologies</h2>
            <div className="article-container">
              {renderSkills(technologies)}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Tools</h2>
            <div className="article-container">
              {renderSkills(tools)}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="ex-icon"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
