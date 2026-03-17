import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
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
                <form className="contact-form animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="input-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
