// React Hooks für Zustand und Nebeneffekte
import { useEffect, useState } from 'react';
// Importiert die API-Funktion zum Abrufen vergangener Ereignisse
import { fetchPastEventsByCategory } from '../utils/api';
// Importiert die Komponente zum Anzeigen eines archivierten Events
import ArchiveEventCard from '../components/archive-event-card';

const Archive = () => {

    // Zustand für die angezeigten Events
    const [events, setEvents] = useState([]);
    // Zustand für potenzielle Fehler beim Laden
    const [error, setError] = useState(null);

    // Zustände für Filter: Kategorie, Datum, Begrenzung
    const [selectedCategory, setSelectedCategory] = useState('wildfires');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [limit, setLimit] = useState(20);

    // useEffect wird ausgeführt, wenn Filter verändert werden
    useEffect(() => {
        fetchPastEventsByCategory(selectedCategory, limit)
            .then(fetchedEvents => {
                // Filtert die Events nach Datum
                const filteredByDate = fetchedEvents.filter(event => {
                    const eventDate = new Date(event.geometry[0]?.date);

                    const isAfterStart = startDate ? eventDate >= new Date(startDate) : true;
                    const isBeforeEnd = endDate ? eventDate <= new Date(endDate) : true;

                    return isAfterStart && isBeforeEnd;
                });

                // Setzt die gefilterten Events in den Zustand
                setEvents(filteredByDate);
            })
            .catch(err => {
                console.error(err);
                setError('Could not load events.');
            });
    }, [selectedCategory, limit, startDate, endDate]); // Triggert den Effekt bei Änderung

    return (
        <div className="past-events-container" style={{ padding: '1rem' }}>
            {/* Filterbereich für Kategorie, Datum und Limit */}
            <div className="filters">
                <label>
                    Category:
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='form-input'
                    >
                        {/* Auswahlmöglichkeit für verschiedene Naturereignis-Kategorien */}
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

                {/* Filter: Startdatum */}
                <label>
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className='form-input'
                    />
                </label>

                {/* Filter: Enddatum */}
                <label>
                    End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className='form-input'
                    />
                </label>

                {/* Filter: Anzahl der Events (Range-Slider) */}
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

            {/* Fehleranzeige */}
            {error && <p>{error}</p>}

            {/* Liste der angezeigten Event-Karten */}
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