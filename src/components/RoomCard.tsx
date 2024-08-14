import React from 'react';
import './RoomCard.css';

interface RoomCardProps {
    title: string;
    description: string;
    image: string;
    price: string;
    className?: string; // Allow for additional custom classes
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, image, price, className }) => {
    return (
        <div className={`room-card ${className}`}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="price">{price}</p>
        </div>
    );
};

export default RoomCard;
