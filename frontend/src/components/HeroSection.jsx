import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content animate-fade-in">
                <h1>Jilu. P<span className="accent-text">. Jose</span></h1>
                <h2 className="title">
                    <span>Data</span> Scientist
                    <span className="separator"> || </span>
                    <span>ML</span> Engineer
                    <span className="separator"> || </span>
                    <span>MLOps</span> Engineer
                </h2>
                <p className="description">
                    Transforming data into actionable insights through advanced analytics
                    and machine learning. Specializing in predictive modeling and data-driven decision making.
                </p>
                <div className="social-links">
                    <a href="https://github.com/Jilu-Jose" className="social-icon"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/jilu-p-jose/" className="social-icon"><FaLinkedin /></a>
                    <a href="mailto:jilupjose2004@gmail.com" className="social-icon"><FaEnvelope /></a>
                </div>
            </div>
            <div className="hero-image animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="profile-circle glass-panel">
                    <img src="/images/profile_portfolio.png" alt="Jilu P. Jose" className="profile-img" />
                    <div className="glow-ring"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
