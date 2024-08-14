import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Hotel Management. All rights reserved.</p>
            <div className="footer-socials">
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://x.com/?lang=en">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;
