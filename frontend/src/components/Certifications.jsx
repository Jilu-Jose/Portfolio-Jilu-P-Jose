import { FaCalendarAlt, FaIdBadge, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const certs = [
    { title: 'Oracle Generative AI (Professional)', provider: 'Oracle Cloud Infrastructure', image: '/images/Oracle_GENAI.png', date: 'Date Issued', credentialId: 'Credential ID', certificateLink: '#' },
    { title: 'Google Data Analytics (Professional)', provider: 'Google', image: '/images/Google_data_analytics.png', date: 'Date Issued', credentialId: 'Credential ID', certificateLink: '#' },
    { title: 'IBM Machine Learning & EDA (Honours)', provider: 'IBM', image: '/images/IBM_EDA.png', date: 'Date Issued', credentialId: 'Credential ID', certificateLink: '#' },
    { title: 'Oracle AI Foundations (Associate)', provider: 'Oracle', image: '/images/Oracle_AI_foundations.png', date: 'Date Issued', credentialId: 'Credential ID', certificateLink: '#' },
    { title: 'Chicago University Computer Comms', provider: 'Chicago University', image: '/images/Computer_comm.png', date: 'Date Issued', credentialId: 'Credential ID', certificateLink: '#' },
    { title: 'Google Analytics (Professional)', provider: 'Google', image: '/images/google-analytics.png', date: 'Date Issued', credentialId: 'Credential ID', certificateLink: '#' }
];

const Certifications = () => {
    return (
        <section className="certifications-section" id="certifications">
            <h2 className="section-title">Certifi<span>cations</span></h2>
            <div className="cert-grid">
                {certs.map((cert, index) => {
                    // Extract parenthesis info for subtitle aesthetic (e.g. "Oracle Gen AI" (bold), "(Professional)" (light))
                    const nameMatch = cert.title.match(/(.*?)\s*(\(.*?\))/);
                    const mainTitle = nameMatch ? nameMatch[1] : cert.title;
                    const subTitle = nameMatch ? nameMatch[2] : '';

                    return (
                        <div className="cert-card-biz animate-fade-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                            {/* Layered curved shadows matching the image bottom edge */}
                            <div className="biz-shape-gray"></div>
                            <div className="biz-shape-orange"></div>

                            <div className="biz-content">
                                <div className="biz-left">
                                    <h3 className="biz-title">
                                        <span className="bold-text">{mainTitle}</span> {subTitle && <span className="light-text">{subTitle}</span>}
                                    </h3>
                                    <p className="biz-provider">{cert.provider}</p>
                                    
                                    <div className="biz-separator">
                                        <div className="bz-line-yellow"></div>
                                        <div className="bz-line-orange"></div>
                                        <div className="bz-line-dark"></div>
                                    </div>
                                    
                                    <ul className="biz-details">
                                        <li><FaCalendarAlt className="biz-icon"/> {cert.date}</li>
                                        <li><FaIdBadge className="biz-icon"/> {cert.credentialId}</li>
                                        <li>
                                            <FaExternalLinkAlt className="biz-icon"/> 
                                            {cert.certificateLink !== '#' ? (
                                                <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer" className="biz-link">View Certificate</a>
                                            ) : (
                                                <span className="biz-link-pending">Link to be added</span>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="biz-right">
                                    <div className="biz-logo-container">
                                        <img src={cert.image} alt={cert.provider} />
                                    </div>
                                    <p className="biz-logo-text">{cert.provider.split(' ')[0]}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Certifications;
