import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setStatus('Thank you for contacting us! We will get back to you shortly.');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <header className="contact-header">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you. Reach out to us with any questions, comments, or inquiries.</p>
            </header>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Our Address</h3>
                        <p>123 Hotel Lane, New York, 12345</p>
                    </div>
                    <div className="contact-item">
                        <h3>Phone Number</h3>
                        <p>+123 456 7890</p>
                    </div>
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>Kvgroups@hotel.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>Business Hours</h3>
                        <p>Mon - Fri: 9 AM - 6 PM</p>
                        <p>Sat - Sun: 10 AM - 4 PM</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className="submit-button">Send Message</button>
                        {status && <p className="status-message">{status}</p>}
                    </form>
                </div>
            </div>
            <div className="contact-map">
                <h3>Find Us Here</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.247658157955!2d-74.00811248468155!3d40.71277627933041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a181b4bbfbb%3A0x8f3dfd825a2a8e0!2sOne%20World%20Trade%20Center%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1600299122691!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    aria-hidden="false"
                    tabIndex={0}
                    title="Hotel Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
