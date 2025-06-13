import React, { useEffect, useState } from 'react';
import { fetchPastEventsByCategory } from '../utils/api';
import ArchiveEventCard from '../components/archive-event-card';

const Archive = () => {

    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('wildfires');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        fetchPastEventsByCategory(selectedCategory, limit)
            .then(fetchedEvents => {
                const filteredByDate = fetchedEvents.filter(event => {
                    const eventDate = new Date(event.geometry[0]?.date);

                    // Wenn ein Startdatum gesetzt ist, muss das Eventdatum >= Startdatum sein
                    const isAfterStart = startDate ? eventDate >= new Date(startDate) : true;

                    // Wenn ein Enddatum gesetzt ist, muss das Eventdatum <= Enddatum sein
                    const isBeforeEnd = endDate ? eventDate <= new Date(endDate) : true;

                    return isAfterStart && isBeforeEnd;
                });

                setEvents(filteredByDate);
            })
            .catch(err => {
                console.error(err);
                setError('Could not load events.');
            });
    }, [selectedCategory, limit, startDate, endDate]);

    return (
        <div className="past-events-container" style={{ padding: '1rem' }}>
            <div className="filters">
                <label>
                    Category:
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='form-input'
                    >
                        <option value="wildfires">🔥 Wildfire</option>
                        <option value="severeStorms">🌪️ Severe Storm</option>
                        <option value="volcanoes">🌋 Volcanoe</option>
                        <option value="seaLakeIce">🧊 Sea and Lake Ice</option>
                        <option value="earthquakes">🌍 Earthquake</option>
                        <option value="floods">🌊 Flood</option>
                        <option value="landslides">⛰️ Landslide</option>
                        <option value="snow">❄️ Snow</option>
                        <option value="drought">☀️ Drought</option>
                        <option value="dustHaze">🌫️ Dust Haze</option>
                        <option value="manmade">🏗️ Manmade</option>
                        <option value="waterColor">💧 Water Color</option>
                    </select>
                </label>

                <label>
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className='form-input'
                    />
                </label>

                <label>
                    End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className='form-input'
                    />
                </label>

                <label>
                    Limit: {limit}
                    <input
                        type="range"
                        min="10"
                        max="100"
                        step="10"
                        value={limit}
                        onChange={(e) => setLimit(parseInt(e.target.value))}
                        className='form-input'
                    />
                </label>
            </div>

            {error && <p>{error}</p>}

            <div className="event-list">
                {events.map(event => (
                    <ArchiveEventCard
                        key={event.id}
                        title={event.title}
                        date={event.geometry[0]?.date}
                        category={event.categories[0]?.title}
                    />
                ))}
            </div>
        </div>
    );
};
export default Archive; 