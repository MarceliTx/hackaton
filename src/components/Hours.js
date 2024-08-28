// Placeholder to host a component
// Placeholder to host a component
import React from 'react';

const Hours = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const hours = [];

    let startHour, endHour;

    if (currentDay >= 1 && currentDay <= 5) {
        // Lunes a Viernes
        startHour = 10;
        endHour = 16;
    } else {
        // Sábado y Domingo
        startHour = 9;
        endHour = 20;
    }
    
    for (let i = startHour; i <= endHour; i++) {
        hours.push(`${i}:00`);
    }

    return (
        <div>
            <h2>Hours of {currentDate.toLocaleDateString('en-us', { weekday: 'long' })}</h2>
            <ul>
                {hours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hours;
