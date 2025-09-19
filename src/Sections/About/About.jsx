import "./About.css";
import { useScrollAnimationClass } from '../../hooks/useScrollAnimationClass';
import { useStaggeredAnimation } from '../../hooks/useStaggeredAnimation';
// import '../../media.css'
const About = () => {
  const [subtitleRef, subtitleClass] = useScrollAnimationClass('fade-in-up', 0.3, 0);
  const [titleRef, titleClass] = useScrollAnimationClass('fade-in-up', 0.3, 100);
  const [containerRef, isContainerVisible] = useStaggeredAnimation(0.2);
  const [arrowRef, arrowClass] = useScrollAnimationClass('bounce-in', 0.5, 0);

  return (
    <section id="about">
      <p ref={subtitleRef} className={`section-text-p1 ${subtitleClass}`}>Get To Know More</p>
      <h1 ref={titleRef} className={`title ${titleClass}`}>About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="text-container">
              <div className="about-content">
                <div ref={containerRef} className={`about-single-column stagger-container ${isContainerVisible ? 'visible' : ''}`}>
                  <div className="about-me-section animate-item stagger-item">
                    <h3><span className="icon-about">■</span> About Me</h3>
                    <p>I'm an enthusiastic technologist and creative coder, passionate about pushing boundaries in AI and data-driven innovation. I specialize in transforming complex problems into practical, high-impact solutions using deep learning and modern engineering tools.</p>
                    <p>From participating in national coding contests to hands-on research in computer vision and remote sensing, I thrive on intellectual challenge and continuous learning.</p>
                  </div>

                  <div className="education-section animate-item stagger-item">
                    <h3><span className="icon-education">▲</span> Education</h3>
                    <p><strong>B.Tech, Information Technology, 2021-2025</strong><br />
                      VR Siddhartha Engineering College (now SAHE Deemed to be University), Vijayawada</p>
                  </div>

                  <div className="current-role-section animate-item stagger-item">
                    <h3><span className="icon-research">●</span> Current Role</h3>
                    <p>Researcher in Computer Vision, Remote Sensing, Deep Learning, & Generative AI (Stable Diffusion)</p>
                  </div>

                  <div className="experience-section animate-item stagger-item">
                    <h3><span className="icon-experience">◆</span> Experience & Internships</h3>
                    <div className="experience-item">
                      <p><strong><span className="icon-fellowship">▶</span> Chanakya Fellowship Intern</strong> - IIT Tirupati Navavishkar I-Hub Foundation<br />
                        <em>Flood Risk Mapping Using Remote Sensing (Dec 2024 – June 2025)</em></p>
                    </div>
                    <div className="experience-item">
                      <p><strong><span className="icon-phone">▶</span> Intern, Nothing (Phone Tester)</strong><br />
                        <em>Tested unreleased smartphone devices and reported critical software bugs.</em></p>
                    </div>
                    <div className="experience-item">
                      <p><strong><span className="icon-ml">▶</span> ML Intern, IIIT Allahabad (Collab Engineercore)</strong><br />
                        <em>Research and implementation, June–July 2024.</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        ref={arrowRef}
        src="/assets/down.jpg"
        alt="Arrow icon"
        className={`icon ${arrowClass}`}
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
};

export default About;
