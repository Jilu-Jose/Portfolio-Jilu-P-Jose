import { FaGithub, FaLinkedin, FaEnvelope, FaPenNib, FaMobileAlt, FaBoxOpen } from 'react-icons/fa';
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
                    I am here ready to help you in making creative digital products.
                    Transforming data into actionable insights through advanced analytics and machine learning.
                </p>
                <button className="discuss-btn">Let's Discuss</button>

                <div className="services-area">
                    <h3 className="services-title">OUR SERVICE</h3>
                    <div className="services-grid">
                        <div className="service-item">
                            <div className="service-icon"><FaPenNib /></div>
                            <h4>Data Science</h4>
                            <p>Predictive modeling, data-driven decision making, and advanced analytics.</p>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><FaMobileAlt /></div>
                            <h4>ML Engineering</h4>
                            <p>Developing scalable algorithms and machine learning solutions.</p>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><FaBoxOpen /></div>
                            <h4>MLOps</h4>
                            <p>Deploying, monitoring, and maintaining machine learning models in production.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-image-new animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="blob-background">
                    <div className="dot-pattern top-right"></div>
                    <div className="dot-pattern bottom-left"></div>
                    <img src="/images/profile_portfolio.png" alt="Jilu P. Jose" className="hero-person-img" />
                    
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
                            <span className="num">4.8</span>
                            <span className="label">Satisfaction</span>
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
            
            <div className="social-links-fixed">
                <a href="https://github.com/Jilu-Jose" className="social-icon-new"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jilu-p-jose/" className="social-icon-new"><FaLinkedin /></a>
                <a href="mailto:jilupjose2004@gmail.com" className="social-icon-new"><FaEnvelope /></a>
            </div>
        </section>
    );
};

export default HeroSection;
