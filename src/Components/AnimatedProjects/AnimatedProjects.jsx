import { useState, useEffect } from "react";
import "./AnimatedProjects.css";

const AnimatedProjects = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');

    // Auto-rotate projects
    useEffect(() => {
        if (!isAutoPlaying || isTransitioning) return;

        const interval = setInterval(() => {
            handleTransition((prev) => (prev + 1) % projects.length, 'right');
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [projects.length, isAutoPlaying, isTransitioning]);

    const handleTransition = (newIndex, direction) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setSlideDirection(direction);

        setTimeout(() => {
            setCurrentIndex(typeof newIndex === 'function' ? newIndex(currentIndex) : newIndex);
            setSlideDirection('');
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 400);
    };

    const goToProject = (index) => {
        if (index === currentIndex || isTransitioning) return;

        const direction = index > currentIndex ? 'right' : 'left';
        handleTransition(index, direction);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const nextProject = () => {
        const newIndex = (currentIndex + 1) % projects.length;
        handleTransition(newIndex, 'right');
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const prevProject = () => {
        const newIndex = (currentIndex - 1 + projects.length) % projects.length;
        handleTransition(newIndex, 'left');
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    return (
        <div className="animated-projects-container">
            <div className="projects-carousel">
                <div className="project-display">
                    {/* Main project card */}
                    <div className={`main-project-card ${slideDirection ? `slide-out-${slideDirection}` : ''}`}>
                        <div className="project-image-container">
                            <img
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                className="project-main-image"
                                loading="lazy"
                            />
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{projects[currentIndex].title}</h3>
                            <p className="project-description">{projects[currentIndex].description}</p>
                            <p className="project-details">{projects[currentIndex].details}</p>
                            <div className="project-actions">
                                {projects[currentIndex].link && (
                                    <a
                                        href={projects[currentIndex].link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link-btn"
                                    >
                                        View Project
                                    </a>
                                )}
                                <button className="project-details-btn">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <button className="nav-arrow nav-arrow-left" onClick={prevProject}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="nav-arrow nav-arrow-right" onClick={nextProject}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Project thumbnails */}
                <div className="project-thumbnails">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                            onClick={() => goToProject(index)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="thumbnail-image"
                            />
                            <div className="thumbnail-overlay">
                                <span className="thumbnail-title">{project.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress indicators */}
                <div className="progress-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`progress-dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => goToProject(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Project counter */}
            <div className="project-meta">
                <span className="project-number">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
            </div>
        </div>
    );
};

export default AnimatedProjects;