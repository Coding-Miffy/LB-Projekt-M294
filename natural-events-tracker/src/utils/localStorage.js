const EVENTS_KEY = "customEvents"; // Key for localStorage

export const saveCustomEvents = (events) => {
    try {
        const jsonString = JSON.stringify(events);
        localStorage.setItem(EVENTS_KEY, jsonString);
        console.log("Events saved: ", events.length);
    } catch (error) {
        console.error("Error saving: ", error);
    };
};

export const loadCustomEvents = () => {
    try {
        const jsonString = localStorage.getItem(EVENTS_KEY);

        if (!jsonString) {
            return [];
        };

        const events = JSON.parse(jsonString);
        console.log("Events loaded: ", events.length);
        return events;
    } catch (error) {
        console.error("Error loading: ", error)
        return [];
    };
};

export const deleteCustomEvent = (eventId) => {
    try {
        const events = loadCustomEvents();
        console.log("Events before deleting: ", events);

        const filteredEvents = events.filter((e) => e.id !== eventId);
        console.log("Filtered events: ", filteredEvents);

        saveCustomEvents(filteredEvents);
        console.log("Event deleted. Remaining events: ", filteredEvents.length);

        return filteredEvents;
    } catch (error) {
        console.error("Error deleting: ", error);
        return loadCustomEvents();
    };
};