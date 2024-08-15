import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h2>About Us</h2>
                <p>Discover our story, mission, and values that define our commitment to excellence.</p>
            </header>
            <div className="about-content">
                <section className="about-section">
                    <h3>Our Story</h3>
                    <p>
                        Welcome to <span className="highlight">[Harsh Grand Resort]</span>, a haven where luxury and comfort intertwine. Established in <span className="highlight">[2007]</span>, we have been dedicated to providing an unparalleled experience in <span className="highlight">[New York]</span>. Our hotel blends modern amenities with classic elegance, creating a sanctuary for travelers seeking exceptional service and relaxation.
                    </p>
                </section>
                <section className="about-section">
                    <h3>Our Mission</h3>
                    <p>
                        Our mission at <span className="highlight">[Harsh Grand Resort]</span> is to deliver a warm, inviting environment for each guest. We aim to surpass expectations with our outstanding service, sophisticated accommodations, and personalized experiences that make every stay memorable.
                    </p>
                </section>
                <section className="about-section">
                    <h3>Our Values</h3>
                    <ul className="values-list">
                        <li><strong>Excellence:</strong> Upholding the highest standards in everything we do.</li>
                        <li><strong>Integrity:</strong> Committed to honesty and transparency.</li>
                        <li><strong>Customer-Centric:</strong> Focusing on the needs and preferences of our guests.</li>
                        <li><strong>Innovation:</strong> Continuously improving our services and offerings.</li>
                    </ul>
                </section>
                <section className="about-section team-section">
                    <h3>Meet Our Team</h3>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={require('../assets/images/team-member1.jpeg')} alt="John Doe" className="team-image"/>
                            <h4>John Doe</h4>
                            <p>General Manager</p>
                        </div>
                        <div className="team-member">
                            <img src={require('../assets/images/team-member2.jpeg')} alt="Jane Smith" className="team-image"/>
                            <h4>Jane Smith</h4>
                            <p>Guest Relations Manager</p>
                        </div>
                        <div className="team-member">
                            <img src={require('../assets/images/team-member3.jpeg')} alt="Emily Johnson" className="team-image"/>
                            <h4>Emily Johnson</h4>
                            <p>Head Chef</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
