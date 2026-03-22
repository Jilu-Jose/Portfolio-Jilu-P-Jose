import { useState, useEffect } from 'react';
import { FaCode, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectsGrid.css';

const ProjectsGrid = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        fetch('https://portfolio-jilu-p-jose.onrender.com/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching projects:', err);
                setLoading(false);
            });
    }, []);

    const handleNext = () => {
        setStartIndex((prev) => (prev + 3 >= projects.length ? 0 : prev + 3));
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev === 0 ? Math.max(0, projects.length - 3) : Math.max(0, prev - 3)));
    };

    const visibleProjects = projects.slice(startIndex, startIndex + 3);

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My <span>Projects</span></h2>

            {loading ? (
                <div className="loading-spinner">Loading projects...</div>
            ) : (
                <div className="carousel-container">
                    <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Previous Projects">
                        <FaChevronLeft />
                    </button>

                    <div className="projects-deck">
                        {visibleProjects.map((project, index) => (
                            <div className="project-card-ribbon animate-fade-in" key={project._id || `${startIndex}-${index}`} style={{ animationDelay: `${index * 0.15}s` }}>
                                {/* Decorative Ribbons */}
                                <div className="pc-ribbon pc-tr-black"></div>
                                <div className="pc-ribbon pc-tr-red"></div>
                                <div className="pc-ribbon pc-tr-black-small"></div>
                                <div className="pc-ribbon pc-bl-red"></div>

                                <div className="pc-content-wrapper">
                                    
                                    <div className="pc-img-container">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    
                                    <div className="pc-info">
                                        <h3 className="pc-title">{project.title}</h3>
                                        <p className="pc-desc">{project.description}</p>
                                        <div className="pc-tech-stack">
                                            {project.techStack?.map((tech, i) => (
                                                <span key={i} className="pc-tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="pc-links">
                                            <a href={project.githubLink || '#'} target="_blank" rel="noopener noreferrer" className="pc-link">
                                                <FaCode /> Code
                                            </a>
                                            {project.liveLink && (
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pc-link">
                                                    <FaExternalLinkAlt /> Live
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next Projects">
                        <FaChevronRight />
                    </button>

                    <div className="carousel-indicators">
                        {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`indicator-dot ${Math.floor(startIndex / 3) === idx ? 'active' : ''}`}
                                onClick={() => setStartIndex(idx * 3)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsGrid;
