import { FaCalendarAlt, FaIdBadge, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const certs = [
    { title: 'Introduction to Machine Learning', provider: 'NPTEL', image: '/images/Computer_comm.png', date: 'Nov 22, 2025', credentialId: 'NPTEL-ML', certificateLink: 'https://drive.google.com/file/d/1_s4CuB7keaVQnzP6reUfhM-EDy7D7bq-/view' },
    { title: 'Cloud Computing (Rank Top 2%)', provider: 'NPTEL', image: '/images/Computer_comm.png', date: 'Nov 18, 2025', credentialId: 'NPTEL-CC', certificateLink: 'https://drive.google.com/file/d/1rVmP0NiXoyIHMENeQuKyLgOlOjviN1HH/view' },
    { title: 'Oracle Database @AWS Architect (Professional)', provider: 'Oracle Cloud Infrastructure', image: '/images/awsr.jpg', date: 'Oct 31, 2025', credentialId: 'ORA-AWS-PRO', certificateLink: 'https://drive.google.com/file/d/1pIjEbkmJMWkujEdZckSaeSngudD-g_Tx/view' },
    { title: 'Oracle 2025 DevOps (Professional)', provider: 'Oracle Cloud Infrastructure', image: '/images/Oracle_GENAI.png', date: 'Oct 28, 2025', credentialId: 'ORA-DEVOPS-PRO', certificateLink: 'https://drive.google.com/file/d/1XOfs_udTXmeegYAROjIVRa1QzrvAXgw-/view' },
    { title: 'Oracle 2025 Generative AI (Professional)', provider: 'Oracle Cloud Infrastructure', image: '/images/Oracle_GENAI.png', date: 'Oct 07, 2025', credentialId: 'ORA-GENAI-PRO', certificateLink: 'https://drive.google.com/file/d/1BaT2MCJ-STA0iWz3D-DxJoZlwJ5zpJBZ/view' },
    { title: 'Oracle 2025 AI Foundations (Associate)', provider: 'Oracle Cloud Infrastructure', image: '/images/Oracle_AI_foundations.png', date: 'Sep 21, 2025', credentialId: 'ORA-AIF-ASSOC', certificateLink: 'https://drive.google.com/file/d/1yw-anxnlilKnRJ0N4mmOtPceUirJhFUl/view' },
    { title: 'Google Data Analytics (Professional)', provider: 'Google', image: '/images/Google_data_analytics.png', date: 'Dec 31, 2024', credentialId: 'GOOG-DA-PRO', certificateLink: 'https://www.coursera.org/account/accomplishments/specialization/HOB1II7WAX63' },
    { title: 'Exploratory Data Analysis for ML (Honors)', provider: 'IBM', image: '/images/IBM_EDA.png', date: 'Dec 20, 2024', credentialId: 'IBM-EDA-HON', certificateLink: 'https://www.coursera.org/account/accomplishments/verify/EGBI1QP4DODH' }
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
                                <div className="biz-text-block">
                                    <h3 className="biz-title">
                                        <span className="bold-text">{mainTitle}</span> {subTitle && <span className="light-text">{subTitle}</span>}
                                    </h3>
                                    <p className="biz-provider">{cert.provider}</p>
                                    
                                    <div className="biz-separator">
                                        <div className="bz-line-yellow"></div>
                                        <div className="bz-line-orange"></div>
                                        <div className="bz-line-dark"></div>
                                    </div>
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
                                
                                <div className="biz-image-container">
                                    <img src={cert.image} alt={cert.provider} />
                                </div>
                                
                                <p className="biz-logo-text">{cert.provider.split(' ')[0]}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Certifications;
