import React, { useEffect, useState } from 'react';
import { fetchLiveEvents } from '../utils/api';
import Map from '../components/map';

const LiveEvents = () => {

    const [events, setEvents] = useState([]);
    const [limit, setLimit] = useState(50);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLiveEvents(limit)
            .then(setEvents)
            .catch(err => {
                console.error(err);
                setError('Events konnten nicht geladen werden');
            });
    }, [limit]);

    return (
        <div className='map-container'>
            <div style={{ padding: '1rem' }}>
                <label htmlFor="range">Anzahl Events: {limit}</label>
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