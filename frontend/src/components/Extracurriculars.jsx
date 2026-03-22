import { FaTrophy, FaCalendarAlt, FaMedal, FaCode, FaChalkboardTeacher, FaUsers, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Extracurriculars.css';

const extracurriculars = [
    {
        title: 'Amazon ML Hackathon',
        type: 'Hackathon',
        description: 'Participated in Amazon\'s Machine Learning Hackathon, building and optimizing ML models under competitive constraints.',
        date: 'Aug 5, 2025',
        link: ''
    },
    {
        title: 'Concoction - CTF Hackathon',
        type: 'Hackathon',
        description: 'Competed in a Capture The Flag cybersecurity hackathon, solving challenges across cryptography, forensics, and exploitation.',
        date: 'April 20, 2024',
        award: 'Rank 19th',
        link: ''
    },
    {
        title: 'Blockchain Hackathon',
        type: 'Hackathon',
        description: 'Built decentralized application prototypes leveraging blockchain technology in a competitive hackathon setting.',
        date: 'April 15, 2025',
        link: ''
    },
    {
        title: 'EduRev - AI Model Showcase',
        type: 'Competition',
        description: 'Showcased AI/ML models in a competitive exhibition, demonstrating innovative approaches to real-world problems.',
        date: 'Oct 18, 2025',
        award: 'Rank 5th',
        link: ''
    },
    {
        title: 'Kaggle - Agentic AI Workshop',
        type: 'Workshop',
        description: 'Attended a hands-on workshop exploring agentic AI paradigms, autonomous agents, and multi-agent systems on Kaggle.',
        date: 'Nov 20, 2025',
        link: ''
    },
    {
        title: 'Cyber-Symposium Workshop',
        type: 'Workshop',
        description: 'Participated in cybersecurity symposium covering threat analysis, penetration testing, and modern defense strategies.',
        date: 'May 16, 2024',
        link: ''
    }
];

const typeConfig = {
    Hackathon:   { icon: <FaCode />,              label: 'Hackathon Event' },
    Workshop:    { icon: <FaChalkboardTeacher />,  label: 'Workshop / Seminar' },
    Competition: { icon: <FaMedal />,              label: 'Competition' },
    Club:        { icon: <FaUsers />,              label: 'Club / Community' },
};

const Extracurriculars = () => {
    return (
        <section className="extracurriculars-section" id="extracurriculars">
            <h2 className="section-title">Extracurri<span>culars</span></h2>
            <div className="extra-grid">
                {extracurriculars.map((item, index) => {
                    const config = typeConfig[item.type] || typeConfig.Club;
                    // Split title for accent styling on first word
                    const words = item.title.split(' ');
                    const firstWord = words[0];
                    const rest = words.slice(1).join(' ');

                    return (
                        <div
                            className="extra-biz-card animate-fade-in"
                            key={index}
                            style={{ animationDelay: `${index * 0.13}s` }}
                        >
                            {/* Left Section */}
                            <div className="extra-biz-left">
                                <h3 className="extra-biz-title">
                                    <span className="accent">{firstWord}</span> {rest}
                                </h3>
                                <span className="extra-biz-type-label">{config.label}</span>

                                <div className="extra-biz-info">
                                    <div className="extra-biz-info-row">
                                        <div className="extra-biz-info-icon icon-orange">
                                            <FaCalendarAlt />
                                        </div>
                                        <span className="extra-biz-info-text">{item.date}</span>
                                    </div>
                                    {item.award && (
                                        <div className="extra-biz-info-row">
                                            <div className="extra-biz-info-icon icon-dark">
                                                <FaTrophy />
                                            </div>
                                            <span className="extra-biz-info-text">{item.award}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Top Right Ribbon Group */}
                            <div className="extra-biz-ribbon-group">
                                <div className="extra-biz-slash-1"></div>
                                <div className="extra-biz-slash-2"></div>
                                <div className="extra-biz-ribbon-main">
                                    <div className="extra-biz-ribbon-text">
                                        <h3>{item.type.toUpperCase()}</h3>
                                        <p>{config.label}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content Details */}
                            <div className="extra-biz-right-content">
                                <p className="extra-biz-description">{item.description}</p>
                                {item.award && (
                                    <div className="extra-biz-award">
                                        <FaStar className="award-icon" />
                                        {item.award}
                                    </div>
                                )}
                            </div>

                            {/* Bottom Shapes */}
                            <div className="extra-biz-bottom-orange"></div>
                            <div className="extra-biz-type-icon-box">
                                {config.icon}
                            </div>

                            <div className="extra-biz-bottom-dark">
                                <div className="extra-biz-footer-label">
                                    <div className="footer-dot"><FaStar /></div>
                                    {item.type}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Extracurriculars;
