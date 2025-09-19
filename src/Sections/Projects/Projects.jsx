import { useState } from "react";
import "./Projects.css";
import { useScrollAnimationClass } from '../../hooks/useScrollAnimationClass';

const projects = [
  {
    title: "Pet Monitoring System",
    description: "Monitors pet 24/7",
    details: "Prototyped an IoT model for 24/7 pet monitoring, featuring real-time tracking of location, activity, and health, along with protection from other dogs. The system utilizes robust Arduino code for reliable performance and sends seamless notifications to the owner's device via ThingSpeak applets. This project ensures pet owners can continuously monitor and safeguard their pets with ease.",
    image: "/assets/pet.jpg",
  },
  {
    title: "HerbSScan",
    description: "Classifies the leaf for Ayurvedic purposes",
    details: "I pre-processed over 9,300 images using the Image Data Generator module in Keras and developed and fine-tuned CNN and MobileNetV2 models for accurate leaf classification. Additionally, I designed a dynamic website using React Native and deployed the model with Flask, enabling real-time capture and classification of leaf images for Ayurvedic uses.",
    link: "https://github.com/Tanishq251/A-Deep-Learning-Based-Plant-Analysis-for-Ayurvedic-Application",
    image: "/assets/leaf.jpg",
  },
  {
    title: "Custom Email Sender",
    description: "Helps to custom and schedule an email",
    details: "The Custom Email Sender is a web application built with React, Node.js, and Express, integrating LLMs for dynamic, personalized email content. It features a scheduling system for precise email delivery, enabling users to create tailored, impactful messages with ease and efficiency.",
    link: "https://github.com/Tanishq251/Custom_Email_Sender",
    image: "/assets/email.jpg",
  },
  {
    title: "HSI classification",
    description:
      "Classifies the Hyperspectral imaging with the help of Transfer ensemble ",
    details: "Designed a transfer ensemble model to automate hyperspectral image classification using dimension reduction techniques. I developed and implemented 2D and 3D CNNs, leveraging transfer learning models such as MobileNetV2, VGG16, and ResNet50 for enhanced accuracy. This approach successfully classified four datasets, producing comprehensive classification maps as output.",
    link: "https://github.com/Tanishq251/Enhancing-HSI-Classification-by-the-Fusion-of-Transfer-Learning-Models",
    image: "/assets/hsi.png",
  },
  {
    title: "Face Emotion Detection",
    description: "Facial emotion detection with the help of CNNs",
    details: "The face emotion detection project is a CNN-based system that identifies and classifies emotions such as happiness, sadness, anger, surprise, fear, and disgust from facial expressions. It processes images in real-time, and can be integrated into existing systems or used as a standalone application.",
    link: "https://github.com/Tanishq251/Emotional-Detection-Using-CNN",
    image: "assets/Face.jpeg",
  },
  {
    title: "Wallet",
    description: "Expenses tracking web-application",
    details: "Developed an expenses tracking web application using the MERN stack. This application helps users manage and track their expenses efficiently, offering features such as detailed expense categorization, visualization of spending patterns, and secure data handling.",
    link: "https://github.com/Tanishq251/Mini-Expense-Tracker",
    image: "/assets/Wallet.jpeg",
  },
  {
    title: "PPE Detection",
    description: "IOT based Person and PPE Detection Using Camera",
    details: "Used YOLOv8 for real-time detection of individuals and workers' PPE, such as helmets, vests, and masks, enhancing construction site safety. I pre-processed 3,000 images using Keras Data Generator for robust performance and implemented a real-time camera feed for continuous monitoring and detection.",
    link: "https://github.com/Tanishq251/Person-and-PEE-detection-Using-yoloV8",
    image: "/assets/PPE_2.jpeg",
  },
  {
    title: "File-Sharing",
    description: "Website using the Socket.io",
    details: "Designed a web application for seamless file transfers up to 2GB using Socket.io. This application allows users to share files from anywhere with an internet connection via unique room codes.",
    link: "https://github.com/Tanishq251/File_Sharing",
    image: "/assets/Fille.png",
  },
];

const Projects = () => {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  // Animation hooks
  const [subtitleRef, subtitleClass] = useScrollAnimationClass('fade-in-up', 0.1, 0);
  const [titleRef, titleClass] = useScrollAnimationClass('fade-in-up', 0.1, 100);
  const [containerRef, containerClass] = useScrollAnimationClass('slide-in-up', 0.1, 200);

  return (
    <section id="projects">
      <p ref={subtitleRef} className={`section-text-p1 ${subtitleClass}`}>show case</p>
      <h1 ref={titleRef} className={`title ${titleClass}`}>Projects</h1>
      <div ref={containerRef} className={`workflow-card-slider ${containerClass}`}>
        <div className="workflow-card-track">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`workflow-card ${flipped[index] ? "flipped" : ""}`}
            >
              <div className="workflow-card-inner">
                <div className="workflow-card-front">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="workflow-card-image"
                  />
                  <div className="workflow-card-content">
                    <h3 className="workflow-card-title">{project.title}</h3>
                    <p className="workflow-card-description">
                      {project.description}
                    </p>
                    <button
                      onClick={() => handleFlip(index)}
                      className="workflow-card-link"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="workflow-card-back">
                  <div className="workflow-card-content">
                    <h3 className="workflow-card-title">{project.title}</h3>
                    <p className="workflow-card-details">{project.details}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        GitHub
                      </a>
                    )}
                    <button
                      onClick={() => handleFlip(index)}
                      className="workflow-card-link"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
