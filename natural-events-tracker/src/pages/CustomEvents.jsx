// Import von React sowie Hooks für lokalen Zustand und Seiteneffekte
import { useState, useEffect } from 'react';
// Import der Hilfsfunktionen zur Speicherung und zum Laden aus dem LocalStorage
import { saveCustomEvents, loadCustomEvents } from "../utils/localStorage";
// Import des Formulars zum Erstellen neuer Events
import CustomEventForm from '../components/custom-event-form';
// Import der Komponente zur Darstellung einzelner Events
import CustomEventCard from '../components/custom-event-card';

const CustomEvents = () => {
    // Zustand für alle lokal gespeicherten Events
    const [savedEvents, setSavedEvents] = useState([]);

    // Lädt beim ersten Rendern alle lokal gespeicherten Events aus dem Browser
    useEffect(() => {
        const loadedEvents = loadCustomEvents();
        setSavedEvents(loadedEvents);
    }, []);

    // Wird aufgerufen, wenn ein neues Event im Formular erstellt wurde
    const handleEventSubmit = (newEventData) => {
        const newEvent = {
            ...newEventData,
            id: Date.now(), // Eindeutige ID generieren basierend auf Zeitstempel
        };

        const updatedEvents = [...savedEvents, newEvent]; // Neues Event zur Liste hinzufügen
        setSavedEvents(updatedEvents); // Zustand aktualisieren
        saveCustomEvents(updatedEvents); // Im LocalStorage speichern

        alert("Event successfully created and saved!");
    };

    // Wird aufgerufen, wenn ein bestehendes Event bearbeitet wurde
    const handleEventEdit = (updatedEvent) => {
        const updatedEvents = savedEvents.map((e) =>
            e.id === updatedEvent.id ? updatedEvent : e
        );

        setSavedEvents(updatedEvents); // Zustand aktualisieren
        saveCustomEvents(updatedEvents); // Änderungen im LocalStorage speichern
        alert("Event successfully updated!");
    };

    // Wird aufgerufen, wenn ein Event gelöscht werden soll
    const handleEventDelete = (eventId) => {
        const updatedEvents = savedEvents.filter((e) => e.id !== eventId);
        setSavedEvents(updatedEvents); // Zustand aktualisieren
        saveCustomEvents(updatedEvents); // Im LocalStorage speichern
    };

    return (
        <div className="page-container">
            <h1 className="section-title">Your Custom Events</h1>

            {/* Formular zum Erstellen neuer Events */}
            <CustomEventForm onEventSubmit={handleEventSubmit} />

            <div className='saved-events-section'>
                <h2>Saved events: ({savedEvents.length})</h2>

                {/* Wenn keine Events gespeichert sind, wird ein Hinweis angezeigt */}
                {savedEvents.length === 0 ? (
                    <div className='no-events'>
                        <p>No events created yet.</p>
                        <p>Use the form above to create your first event!</p>
                    </div>
                ) : (
                    // Darstellung der Liste aller gespeicherten Events
                    <div className='custom-events-list'>
                        {savedEvents.map((event) => (
                            <CustomEventCard
                                key={event.id}
                                event={event}
                                onEdit={handleEventEdit}
                                onDelete={handleEventDelete}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomEvents;