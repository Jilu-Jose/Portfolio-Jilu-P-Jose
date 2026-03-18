import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="home" className="hero-section-new">
            <div className="hero-content-new animate-fade-in">
                <p className="greeting">Hi, there!</p>
                <h1 className="main-heading">
                    <span className="name-highlight">JILU P. JOSE</span> IS HERE TO BE YOUR ASSISTANCE
                </h1>
                <p className="description-new">
                    Delivering scalable, intelligent, and data-driven solutions. 
                    Transforming raw data into actionable insights through advanced analytics and machine learning.
                </p>
                <div className="hero-actions">
                    <button className="discuss-btn">Let's Discuss</button>
                    <div className="social-links-inline">
                        <a href="https://github.com/Jilu-Jose" className="social-icon-new"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jilu-p-jose/" className="social-icon-new"><FaLinkedin /></a>
                        <a href="mailto:jilupjose2004@gmail.com" className="social-icon-new"><FaEnvelope /></a>
                    </div>
                </div>
            </div>

            <div className="hero-image-new animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="blob-background">
                    <div className="dot-pattern top-right"></div>
                    <div className="dot-pattern bottom-left"></div>
                    <img src="/images/Professional_Profilre_Photo_Portfolio.jpeg" alt="Jilu P. Jose" className="hero-person-img animated-person" />
                    
                    {/* Floating Cards */}
                    <div className="floating-card fl-projects">
                        <div className="fc-icon bg-pink">=</div>
                        <div className="fc-text">
                            <span className="num">15+</span>
                            <span className="label">Projects</span>
                        </div>
                    </div>

                    <div className="floating-card fl-satisfaction">
                        <div className="fc-icon text-yellow">★</div>
                        <div className="fc-text">
                            <span className="num">4x</span>
                            <span className="label">Oracle Certified</span>
                        </div>
                    </div>

                    <div className="floating-card fl-designer">
                        <div className="fc-icon bg-pink">👤</div>
                        <div className="fc-text">
                            <span className="num">ML Engineer</span>
                            <span className="label">1+ Years</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
