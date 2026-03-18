import { FaBrain, FaDatabase, FaServer, FaCodeBranch } from 'react-icons/fa';
import './Services.css';

const servicesData = [
    {
        icon: <FaBrain />,
        title: 'Machine Learning',
        description: 'Custom predictive models, NLP pipelines, and computer vision solutions tailored to business needs.'
    },
    {
        icon: <FaDatabase />,
        title: 'Data Engineering',
        description: 'Designing robust data lakes, ETL pipelines, and optimizing big data infrastructure for analytics.'
    },
    {
        icon: <FaServer />,
        title: 'MLOps Deployment',
        description: 'End-to-end model deployment, monitoring setup, and scalable cloud architecture on AWS/GCP.'
    },
    {
        icon: <FaCodeBranch />,
        title: 'Fullstack Dev',
        description: 'Seamlessly building backend APIs and dynamic frontends to serve complex AI models to end users.'
    }
];

const WaveBackground = () => (
    <svg className="wavy-bg-svg" viewBox="0 0 1000 400" preserveAspectRatio="none">
        <defs>
            <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff0044" />
                <stop offset="100%" stopColor="#aa0011" />
            </linearGradient>
        </defs>
        {/* White Background underneath */}
        <path d="M0,400 L0,260 C300,400 700,340 1000,320 L1000,400 Z" fill="#ffffff" />
        
        {/* Minor Red Splinter (the fork) */}
        <path d="M200,400 C400,360 800,380 1000,350 L1000,370 C800,400 400,380 200,400 Z" fill="#aa0011" />

        {/* Main Red Swoosh */}
        <path d="M0,150 C400,380 700,320 1000,300 C700,350 400,420 0,260 Z" fill="url(#redGrad)" />
    </svg>
);

const Services = () => {
    return (
        <section id="services" className="services-section">
            <h2 className="section-title">What I <span>Do</span></h2>
            <div className="services-grid">
                {servicesData.map((service, index) => {
                    const titleParts = service.title.split(' ');
                    const firstWord = titleParts[0];
                    const restWords = titleParts.slice(1).join(' ');

                    return (
                        <div className="service-card-wavy animate-fade-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                            <WaveBackground />
                            <div className="sc-content">
                                <div className="sc-icon">
                                    {service.icon}
                                </div>
                                <h3 className="sc-title">
                                    <span className="t-white">{firstWord} </span>
                                    <span className="t-red">{restWords}</span>
                                </h3>
                                <p className="sc-desc">{service.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
