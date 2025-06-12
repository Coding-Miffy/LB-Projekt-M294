import React from 'react';

const categoryEmojis = {
    wildfires: '🔥',
    severeStorms: '🌪️',
    volcanoes: '🌋',
    seaLakeIce: '🧊',
    earthquakes: '🌍',
    floods: '🌊',
    landslides: '⛰️',
    snow: '❄️',
    temperatureExtremes: '🌡️',
    drought: '☀️',
    dustHaze: '🌫️',
    manmade: '🏗️',
    waterColor: '💧'
};

const ArchiveEventCard = ({ title, date, category }) => {

    const categoryKey = Object.keys(categoryEmojis).find(key =>
        category?.toLowerCase().includes(key)
    );
    const emoji = categoryEmojis[categoryKey] || '❓';

    return (
        <div className="archive-card">
            <div className="emoji" style={{ fontSize: '2rem' }}>{emoji}</div>
            <h3 className="archive-card-title">{title}</h3>
            <p className="archive-card-detail">
                <strong>Datum:</strong> {date ? new Date(date).toLocaleDateString() : 'Unbekannt'}
            </p>
            <p className="archive-card-detail">
                <strong>Kategorie:</strong> {category ?? 'Unbekannt'}
            </p>
        </div>
    );
};

export default ArchiveEventCard;