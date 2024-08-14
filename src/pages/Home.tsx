import React from 'react';
import './Home.css';
import wifiIcon from '../assets/images/wifi-icon.png';
import roomServiceIcon from '../assets/images/room-service-icon.png';
import poolIcon from '../assets/images/pool-icon.jpeg';
import spaIcon from '../assets/images/spa-icon.jpeg';

const Home: React.FC = () => {
    return (
        <div className="home">
            <header className="home-hero">
                <div className="hero-content">
                    <h1>Welcome to Our Hotel</h1>
                    <p>Experience luxury and comfort with us</p>
                    <a href="/booking" className="cta-button">Book Your Stay</a>
                </div>
            </header>
            <section className="home-services">
                <h2><a href="/booking">Our Services - Book Now</a></h2>
                <div className="service-cards">
                    <div className="service-card">
                        <img src={wifiIcon} alt="Free WiFi" className="service-icon" />
                        <h3>Free WiFi</h3>
                        <p>Stay connected with high-speed internet throughout the hotel.</p>
                    </div>
                    <div className="service-card">
                        <img src={roomServiceIcon} alt="24/7 Room Service" className="service-icon" />
                        <h3>24/7 Room Service</h3>
                        <p>Enjoy delicious meals and beverages delivered to your room anytime.</p>
                    </div>
                    <div className="service-card">
                        <img src={poolIcon} alt="Swimming Pool" className="service-icon" />
                        <h3>Swimming Pool</h3>
                        <p>Relax and unwind in our beautifully designed swimming pool.</p>
                    </div>
                    <div className="service-card">
                        <img src={spaIcon} alt="Spa & Wellness" className="service-icon" />
                        <h3>Spa & Wellness</h3>
                        <p>Indulge in our luxurious spa treatments and wellness services.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
