import { useEffect, useState } from 'react';
import { fetchLiveEventsByCategory } from '../utils/api';
import Map from '../components/map';

const LiveEvents = () => {

    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState('wildfires'); // Default-Kategorie
    const [limit, setLimit] = useState(50);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetchLiveEventsByCategory(selectedCategory, limit)
            .then(setEvents)
            .catch(err => {
                console.error(err);
                setError('Error loading events.');
            })
            .finally(() => setIsLoading(false));
    }, [selectedCategory, limit]);

    return (

        <div className="page-container">
            <h1 className="section-title">Live Earth Natural Events</h1>

            <div className="filters">
                <label>
                    Category:
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="form-input"
                    >
                        <option value="wildfires">🔥 Wildfire</option>
                        <option value="severeStorms">🌪️ Severe Storm</option>
                        <option value="volcanoes">🌋 Volcano</option>
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
                    Limit: {limit}
                    <input
                        type="range"
                        min="10"
                        max="100"
                        step="10"
                        value={limit}
                        onChange={(e) => setLimit(parseInt(e.target.value))}
                        className="form-input"
                    />
                </label>
            </div>

            {isLoading && <p>🔄 Loading...</p>}
            {error && <p>❌ {error}</p>}

            <Map center={[20, 0]} zoom={2} events={events} />
        </div>
    );
};

export default LiveEvents;