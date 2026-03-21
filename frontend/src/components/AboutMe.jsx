import { FaBrain, FaChartBar, FaCode } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About <span>Me</span></h2>
            
            <div className="about-container">
                {/* Visual Left Column */}
                <div className="about-visual animate-slide-right">
                    <div className="glowing-orb orb-primary"></div>
                    <div className="glowing-orb orb-secondary"></div>
                    
                    <div className="visual-card main-card glass-panel">
                        <div className="card-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="card-body">
                            <h3>J.I.L.U</h3>
                            <p className="subtitle">AI & Data Expert</p>
                            <div className="stats-grid">
                                <div className="stat-box">
                                    <span className="stat-val">Tech</span>
                                    <span className="stat-label">Innovator</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-val">Data</span>
                                    <span className="stat-label">Scientist</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badges */}
                    <div className="floating-badge badge-1">
                        <FaBrain className="badge-icon" /> AI Lead
                    </div>
                    <div className="floating-badge badge-2">
                        <FaChartBar className="badge-icon" /> ML Models
                    </div>
                    <div className="floating-badge badge-3">
                        <FaCode className="badge-icon" /> Big Data
                    </div>
                </div>

                {/* Text Right Column */}
                <div className="about-text animate-slide-left">
                    <div className="text-block glass-panel">
                        <h3>Who I Am</h3>
                        <p>
                            I am an <strong>AI Lead</strong> and <strong>Data Scientist</strong> at Tezzera, specializing in building intelligent, scalable, and data-driven solutions. With a BTech in Computer Science and Data Science from Lovely Professional University, I have developed a strong foundation in machine learning, deep learning, and advanced statistical analysis.
                        </p>
                    </div>
                    
                    <div className="text-block glass-panel" style={{animationDelay: "0.2s"}}>
                        <h3>What Drives Me</h3>
                        <p>
                            My experience spans leading AI initiatives, developing predictive modeling pipelines, and scaling enterprise data infrastructure. I am passionate about transforming raw data into actionable insights and creating impactful technology to solve complex business problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
