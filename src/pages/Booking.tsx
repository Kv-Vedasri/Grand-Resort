import React from 'react';
import BookingForm from '../components/BookingForm';
import './Booking.css';

const Booking: React.FC = () => {
    return (
        <div className="booking">
            <h2>Book Your Stay</h2>
            <BookingForm />
        </div>
    );
};

export default Booking;
