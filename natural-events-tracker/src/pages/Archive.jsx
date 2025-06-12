import React, { useEffect, useState } from 'react';
import { fetchPastEvents } from '../utils/api';
import ArchiveEventCard from '../components/archive-event-card';

const Archive = () => {

    const [events, setEvents] = useState([]);
    const [limit, setLimit] = useState(20);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPastEvents(limit)
            .then(setEvents)
            .catch(err => {
                console.error(err);
                setError('Events konnten nicht geladen werden');
            });
    }, [limit]);

    return (
        <div className="past-events-container" style={{ padding: '1rem' }}>
            <label htmlFor="range" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Anzahl Events: {limit}
            </label>
            <input
                id="range"
                type="range"
                min="10"
                max="100"
                step="10"
                value={limit}
                onChange={e => setLimit(parseInt(e.target.value))}
                style={{ width: '100%', marginBottom: '2rem' }}
            />

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