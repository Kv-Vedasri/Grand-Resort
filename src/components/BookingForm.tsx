import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [roomType, setRoomType] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !date || !roomType) {
            setError('Please fill in all fields.');
            return;
        }

        setError('');
        setSuccess('');

        try {
            // Simulate a successful form submission
            setTimeout(() => {
                // Clear form fields and show success message
                setName('');
                setEmail('');
                setDate('');
                setRoomType('');
                setSuccess('Booking successful! We will contact you soon.');
            }, 500); // Simulate a network request delay
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book Your Stay</h2>

            {error && <div className="form-feedback error">{error}</div>}
            {success && <div className="form-feedback success">{success}</div>}

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
            >
                <option value="" disabled>Select Room Type</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Suite">Suite</option>
            </select>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
