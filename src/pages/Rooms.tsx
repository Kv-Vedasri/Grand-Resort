import React from 'react';
import RoomCard from '../components/RoomCard';
import './Rooms.css';

// Import images
import deluxeRoomImage from '../assets/images/deluxe-room.jpg';
import suiteImage from '../assets/images/suite.jpg';
import standardRoomImage from '../assets/images/standard-room.jpg';
import vipRoomImage from '../assets/images/vips-room.jpeg';
import premiumRoomImage from '../assets/images/premium-room.jpeg';

const Rooms: React.FC = () => {
    return (
        <div className="rooms">
            <h2>Our Rooms</h2>
            <div className="room-cards">
                <RoomCard
                    title="Deluxe Room"
                    description="A luxurious room with all modern amenities."
                    image={deluxeRoomImage}
                    price="$3500/night"
                />
                <RoomCard
                    title="Suite"
                    description="An elegant suite with a separate living area."
                    image={suiteImage}
                    price="$3500/night"
                />
                <RoomCard
                    title="Standard Room"
                    description="A comfortable room for a pleasant stay."
                    image={standardRoomImage}
                    price="$5500/night"
                />
                {/* VIP Room */}
                <RoomCard
                    title="VIP Room"
                    description="Exclusive VIP room with premium services."
                    image={vipRoomImage}
                    price="$50000/night"
                    className="vip-room"
                />
                {/* Premium Room */}
                <RoomCard
                    title="Premium Room"
                    description="Premium room with luxurious amenities."
                    image={premiumRoomImage}
                    price="$70000/night"
                    className="premium-room"
                />
            </div>
        </div>
    );
};

export default Rooms;
