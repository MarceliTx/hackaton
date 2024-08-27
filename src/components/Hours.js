// Placeholder to host a component
import React from 'react';

const Hours = () => {
    const hours = [];
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' });

    for (let i = 0; i < 24; i++) {
        hours.push(`${i}:00`);
    }

    return (
        <div>
            <h2>Hours of {currentDay}</h2>
            <ul>
                {hours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hours;
