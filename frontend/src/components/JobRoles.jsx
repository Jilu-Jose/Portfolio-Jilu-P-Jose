import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './JobRoles.css';

const rolesData = [
    { title: 'Data Scientist', subtitle: 'Target Role', desc: 'Predictive modeling, deep data analytics, and uncovering actionable insights.' },
    { title: 'Data Analyst', subtitle: 'Target Role', desc: 'Interpreting complex data to help businesses strategize effectively and scale.' },
    { title: 'ML Engineer', subtitle: 'Target Role', desc: 'Designing and deploying scalable machine learning algorithms into production.' },
    { title: 'MLOps Engineer', subtitle: 'Target Role', desc: 'Streamlining deployment and operations of robust ML models in the cloud.' },
    { title: 'RPA Developer', subtitle: 'Target Role', desc: 'Automating critical business processes to increase systemic operational efficiency.' },
    { title: 'MERN Developer', subtitle: 'Target Role', desc: 'Building dynamic full-stack web applications using modern web technologies.' }
];

const JobRoles = () => {
    return (
        <section id="roles" className="roles-section">
            <h2 className="section-title">Eligible Job <span>Roles</span></h2>
            <div className="roles-grid">
                {rolesData.map((role, index) => (
                    <div className="role-card-bc animate-fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        {/* Unified red geometric shape */}
                        <div className="rc-shape"></div>
                        
                        <div className="rc-top-left">
                            <h3 className="rc-title">{role.title}</h3>
                            <p className="rc-subtitle">{role.subtitle}</p>
                            <div className="rc-line"></div>
                        </div>

                        <div className="rc-icons-overlay">
                            <FaMapMarkerAlt />
                            <FaPhoneAlt />
                            <FaEnvelope />
                            <FaGlobe />
                        </div>

                        <div className="rc-bottom-right">
                            <p className="rc-desc">{role.desc}</p>
                            <p className="rc-contact">+00 1234 5XXX 9012</p>
                            <p className="rc-contact">info@jilupjose.com</p>
                            <p className="rc-contact">www.jilupjose.com</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobRoles;
