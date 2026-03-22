import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './JobRoles.css';

const rolesData = [
    { title: 'Data Scientist', subtitle: 'Target Role', desc: 'Predictive modeling, deep data analytics, and actionable insights.' },
    { title: 'Data Analyst', subtitle: 'Target Role', desc: 'Interpreting complex data to help businesses strategize effectively.' },
    { title: 'ML Engineer', subtitle: 'Target Role', desc: 'Designing and deploying scalable machine learning algorithms.' },
    { title: 'MLOps Engineer', subtitle: 'Target Role', desc: 'Streamlining deployment and operations of robust ML models in cloud.' },
    { title: 'RPA Developer', subtitle: 'Target Role', desc: 'Automating critical business processes to increase operational efficiency.' },
    { title: 'MERN Developer', subtitle: 'Target Role', desc: 'Building dynamic full-stack web applications using modern web tech.' }
];

const JobRoles = () => {
    return (
        <section id="roles" className="roles-section">
            <h2 className="section-title">Eligible Job <span>Roles</span></h2>
            <div className="roles-grid">
                {rolesData.map((role, index) => {
                    const titleParts = role.title.split(' ');
                    const firstWord = titleParts[0];
                    const restWords = titleParts.slice(1).join(' ');

                    return (
                        <div className="role-card-lightdark" key={index} style={{ animationDelay: `${index * 0.4}s` }}>
                            <div className="rc-red-layer"></div>
                            
                            <div className="rc-white-layer">
                                <div className="rc-header">
                                    <h3 className="rc-title-ld">
                                        <span className="text-black">{firstWord}</span> <span className="text-red">{restWords}</span>
                                    </h3>
                                    <p className="rc-subtitle-ld">{role.subtitle}</p>
                                </div>
                                <div className="rc-contacts-ld">
                                    <div className="contact-item">
                                        <div className="contact-icon bg-dark"><FaPhoneAlt /></div>
                                        <div className="contact-text">
                                            <span>+91 7503176535</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-icon bg-dark"><FaEnvelope /></div>
                                        <div className="contact-text">
                                            <span>jilupjose111@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-icon bg-red"><FaMapMarkerAlt /></div>
                                        <div className="contact-text">
                                            <span>Jalandhar, Punjab</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Dark Side Content */}
                            <div className="rc-dark-content">
                                <div className="hexagon-wrapper">
                                    <div className="red-hexagon">
                                        <div className="red-hexagon-inner"></div>
                                    </div>
                                </div>
                                <h4 className="dark-title">{role.title}</h4>
                                <p className="dark-subtitle">CORE RESPONSIBILITY</p>
                                <div className="dark-desc-box">
                                    {role.desc}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default JobRoles;
