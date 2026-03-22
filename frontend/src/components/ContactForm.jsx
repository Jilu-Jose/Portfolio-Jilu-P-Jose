import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', msg: 'Sending message...' });

        try {
            const response = await fetch('https://portfolio-jilu-p-jose.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', msg: data.message || 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', msg: data.error || 'Failed to send message.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', msg: 'Could not connect to the server.' });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus({ type: '', msg: '' }), 6000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>Get in <span>Touch</span></h2>
            <div className="contact-wrapper animate-fade-in">
                <div className="contact-accent-bar"></div>
                <div className="contact-card">
                    {/* Left Column */}
                    <div className="contact-info-col">
                        <div className="contact-info-item">
                            <div className="contact-icon"><FaEnvelope /></div>
                            <div className="contact-text">
                                <p>jilupjose111@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-icon"><FaMapMarkerAlt /></div>
                            <div className="contact-text">
                                <p>Jalandhar, Punjab</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-icon"><FaPhoneAlt /></div>
                            <div className="contact-text">
                                <p>+91 7503176535</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <form className="contact-form-col" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Enter a valid email address" value={formData.email} onChange={handleChange} required />
                        <textarea name="message" placeholder="Enter your message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                        
                        {status.msg && (
                            <div className={`form-status ${status.type}`}>
                                {status.msg}
                            </div>
                        )}
                        
                        <div className="submit-row">
                            <button type="submit" className="cf-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
