import "./Profile.css";
import '../../Components/Icons/Icons.css';
import '../../Components/Button/Button.css';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/assets/tani6.png" alt="Tani" />
      </div>
      <div className="section__text">
        <p className="section-text-p1">Hello, I am</p>
        <h1 className="title">TanishQ Rachamalla</h1>
        <p className="section_text_p2">A Student</p>
        <div className="btn-container">
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
        <div id="socials-container">
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
          {/* <a href="https://www.codechef.com/users/tanishq_16503" target="_blank" rel="noopener noreferrer">
            <img
              src="../../../public/assets/Codechef.png"
              alt="Codechef Profile"
              className="icon"
            />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
