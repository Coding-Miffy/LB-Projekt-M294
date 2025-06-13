import React, { useEffect, useState } from 'react';
import { fetchLiveEvents } from '../utils/api';
import { fetchLiveEventsByCategory } from '../utils/api';
import Map from '../components/map';

const LiveEvents = () => {

    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('wildfires'); // Default-Kategorie
    const [limit, setLimit] = useState(50);

    useEffect(() => {
        fetchLiveEventsByCategory(selectedCategory, limit)
            .then(setEvents)
            .catch(err => {
                console.error(err);
                setError('Events konnten nicht geladen werden');
            });
    }, [selectedCategory, limit]);

    return (

        <div className='map-container'>

            <div className="filters">
                <label>
                    Category:
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="wildfires">🔥 Wildfire</option>
                        <option value="severeStorms">🌪️ Severe Storm</option>
                        <option value="volcanoes">🌋 Volcanoe</option>
                        <option value="seaLakeIce">🧊 Sea and Lake Ice</option>
                        <option value="earthquakes">🌍 Earthquake</option>
                        <option value="floods">🌊 Flood</option>
                        <option value="landslides">⛰️ Landslide</option>
                        <option value="snow">❄️ Snow</option>
                        <option value="temperatureExtremes">🌡️ Temperature Extremes</option>
                        <option value="drought">☀️ Drought</option>
                        <option value="dustHaze">🌫️ Dust Haze</option>
                        <option value="manmade">🏗️ Manmade</option>
                        <option value="waterColor">💧 Water Color</option>
                    </select>
                </label>
            </div>

            <div style={{ padding: '1rem' }}>
                <label htmlFor="range">Limit Events: {limit}</label>
                <input
                    id="range"
                    type="range"
                    min="10"
                    max="100"
                    step="10"
                    value={limit}
                    onChange={e => setLimit(parseInt(e.target.value))}
                />
            </div>

            {error && <p>{error}</p>}
            <Map center={[20, 0]} zoom={2} events={events} />
        </div>
    );
};

export default LiveEvents;