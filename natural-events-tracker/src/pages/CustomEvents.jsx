import React, { useState, useEffect } from 'react';
import { saveCustomEvents, loadCustomEvents } from "../utils/localStorage";
import CustomEventForm from '../components/custom-event-form';
import CustomEventCard from '../components/custom-event-card';

const CustomEvents = () => {

    const [savedEvents, setSavedEvents] = useState([]);

    useEffect(() => {
        const loadedEvents = loadCustomEvents();
        setSavedEvents(loadedEvents);
    }, []);

    const handleEventSubmit = (newEventData) => {
        const newEvent = {
            ...newEventData,
            id: Date.now(),
        };

        const updatedEvents = [...savedEvents, newEvent];
        setSavedEvents(updatedEvents);
        saveCustomEvents(updatedEvents);

        alert("Event successfully created and saved!");
    };

    const handleEventEdit = (updatedEvent) => {
        const updatedEvents = savedEvents.map((e) => e.id === updatedEvent.id ? updatedEvent : e);

        setSavedEvents(updatedEvents);
        saveCustomEvents(updatedEvents);
        alert("Event successfully updated!")
    };

    const handleEventDelete = (eventId) => {
        const updatedEvents = savedEvents.filter((e) => e.id !== eventId);
        setSavedEvents(updatedEvents);
        saveCustomEvents(updatedEvents);
    };

    return (
        <div className='custom-events-manager'>
            <h1>Manage events</h1>

            <CustomEventForm onEventSubmit={handleEventSubmit} />

            <div className='saved-events-section'>
                <h2>Saved events: ({savedEvents.length})</h2>

                {savedEvents.length === 0 ? (
                    <div className='no-events'>
                        <p>No events created yet.</p>
                        <p>Use the form above to create your first event!</p>
                    </div>
                ) : (
                    <div className='events-list'>
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