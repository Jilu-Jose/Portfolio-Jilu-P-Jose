import './Certifications.css';

const certs = [
    { title: 'Oracle Generative AI (Professional)', provider: 'Oracle Cloud Infrastructure', image: '/images/Oracle_GENAI.png' },
    { title: 'Google Data Analytics (Professional)', provider: 'Google', image: '/images/Google_data_analytics.png' },
    { title: 'IBM Machine Learning & EDA (Honours)', provider: 'IBM', image: '/images/IBM_EDA.png' },
    { title: 'Oracle AI Foundations (Associate)', provider: 'Oracle', image: '/images/Oracle_AI_foundations.png' },
    { title: 'Chicago University-Computer Communications', provider: 'Chicago University', image: '/images/Computer_comm.png' },
    { title: 'Google Analytics (Professional)', provider: 'Google', image: '/images/google-analytics.png' }
];

const Certifications = () => {
    return (
        <section className="certifications-section" id="certifications">
            <h2 className="section-title">Certifi<span>cations</span></h2>
            <div className="cert-grid">
                {certs.map((cert, index) => (
                    <div className="cert-card glass-panel animate-fade-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                        <div className="cert-img-wrapper">
                            <img src={cert.image} alt={cert.title} />
                        </div>
                        <div className="cert-info">
                            <h3>{cert.title}</h3>
                            <p>{cert.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
