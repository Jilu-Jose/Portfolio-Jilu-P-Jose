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
        title: 'MLOps & Deployment',
        description: 'End-to-end model deployment, monitoring setup, and scalable cloud architecture on AWS/GCP.'
    },
    {
        icon: <FaCodeBranch />,
        title: 'Full-Stack Integration',
        description: 'Seamlessly building backend APIs and dynamic frontends to serve complex AI models to end users.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <h2 className="section-title">What I <span>Do</span></h2>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card glass-panel animate-fade-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                        <div className="service-icon">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
