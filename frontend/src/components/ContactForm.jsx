import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
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
            const response = await fetch('http://localhost:5001/api/contact', {
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
            <h2 className="section-title">Get in <span>Touch</span></h2>
            <div className="contact-container glass-panel">
                <div className="contact-info animate-fade-in">
                    <div className="contact-item">
                        <div className="icon-wrapper"><FaEnvelope /></div>
                        <p>jilupjose2004@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <div className="icon-wrapper"><FaMapMarkerAlt /></div>
                        <p>Kerala, India</p>
                    </div>
                    <div className="contact-item">
                        <div className="icon-wrapper"><FaPhone /></div>
                        <p>+1 234 567 890</p>
                    </div>
                </div>
                <form className="contact-form animate-fade-in" style={{ animationDelay: '0.2s' }} onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    {status.msg && (
                        <div className={`form-status ${status.type}`}>
                            {status.msg}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
