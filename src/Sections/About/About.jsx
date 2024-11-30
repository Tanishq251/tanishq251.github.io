import "./About.css";
// import '../../media.css'
const About = () => {
  return (
    <section id="about">
      <p className="section-text-p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section_pic-container">
          <img
            src="/assets/Tani2.jpg"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="text-container">
              <p className="text-a">
                &nbsp;&nbsp;&nbsp;&nbsp;I'm TanishQ Rachamalla, a final-year
                student of the Bachelor of Technology in Information Technology
                at{" "}
                <a href="https://en.wikipedia.org/wiki/Velagapudi_Ramakrishna_Siddhartha_Engineering_College">
                  <i>@VRSEC</i>
                </a>
                .
                As a passionate coder with expertise in
                various programming languages and frameworks, I excel in
                transforming complex ideas into efficient code. My participation
                in coding contests on{" "}
                <a href="https://www.codechef.com/users/tanishq_16503">
                  <i>@CodeChef</i>
                </a>{" "}
                ,{" "}
                <a href="https://leetcode.com/u/Tanishq165/">
                  <i>@LeetCode</i>
                </a>{" "}
                and{" "}
                <a href="https://www.hackerrank.com/profile/218W1A12B9">
                  <i>@HackerRank</i>
                </a>{" "}
                has sharpened my skills in time management and adaptability.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;I have completed projects such as HSI
                Classification using Deep Transfer Learning, a Plant Analysis
                for Ayurvedic Applications, and an IoT-based Real-Time Person
                and PPE Detection system.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;My experience includes an internship as
                a Phone Tester at Nothing, where I identified bugs in unreleased
                devices, Machine Learning Internship at IIIT Allahabad Collab Engineercore(Jun 2024 – Jul 2024) an AI-ML Virtual Internship with Edu Skills.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;I am driven by a desire to explore new
                technological advancements and continually expand my knowledge.
                Outside of coding, I enjoy playing sports, watching web series
                on{" "}
                <a href="https://app.tvtime.com/users/50445773">
                  <i>@TVTIME</i>
                </a>
                , and capturing moments through photography.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/down.jpg"
        alt="Arrow icon"
        className="icon"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
};

export default About;
