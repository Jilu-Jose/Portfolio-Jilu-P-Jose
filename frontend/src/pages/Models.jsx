import { useState, useEffect } from 'react';
import './Models.css';

const Models = () => {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://portfolio-jilu-p-jose.onrender.com/api/models')
        //   .then(res => res.json())
        //   .then(data => setModels(data))
        fetch('https://portfolio-jilu-p-jose.onrender.com/api/models')
            .then(res => res.json())
            .then(data => {
                setModels(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching models:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="page-container" style={{ paddingTop: '100px' }}>
            {/* Pricing Section */}
            <section className="pricing-section">
                <h2 className="section-title">Model <span className="accent-text">API</span></h2>
                <div className="pricing-container">
                    <div className="pricing-card glass-panel animate-fade-in">
                        <h3>Free</h3>
                        <h2>$0<span>/mo</span></h2>
                        <ul>
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button className="btn outline-btn">Sign up for free</button>
                    </div>

                    <div className="pricing-card glass-panel highlight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h3>Pro</h3>
                        <h2>$15<span>/mo</span></h2>
                        <ul>
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button className="btn btn-primary">Get started</button>
                    </div>

                    <div className="pricing-card glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <h3>Enterprise</h3>
                        <h2>$29<span>/mo</span></h2>
                        <ul>
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email</li>
                            <li>Account manager</li>
                        </ul>
                        <button className="btn outline-btn">Contact us</button>
                    </div>
                </div>
            </section>

            {/* Models Section */}
            <section className="models-section" style={{ padding: '5rem 10%' }}>
                <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Open Source <span className="accent-text">Models</span>
                </h1>
                {loading ? (
                    <div style={{ textAlign: 'center' }}>Loading models...</div>
                ) : (
                    <div className="models-container">
                        {models.map((model, index) => (
                            <div className="model-card glass-panel animate-fade-in" key={model._id || index} style={{ animationDelay: `${index * 0.1}s` }}>
                                <h2>{model.name}</h2>
                                <p className="model-desc">{model.description}</p>
                                <div className="model-stats">
                                    <p>Accuracy: <span className="tag-model">{model.accuracy}</span></p>
                                    <p>Size: {model.size}</p>
                                </div>
                                <a href={model.link} target="_blank" rel="noopener noreferrer" className="model-link">
                                    Get Model ↗
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Models;
