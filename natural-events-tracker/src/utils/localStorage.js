// Schlüssel unter dem die benutzerdefinierten Events im localStorage gespeichert werden
const EVENTS_KEY = "customEvents";

// Funktion zum Speichern eines Event-Arrays im localStorage
export const saveCustomEvents = (events) => {
    try {
        // Wandelt das Array in einen JSON-String um
        const jsonString = JSON.stringify(events);
        // Speichert den String unter dem Schlüssel im localStorage
        localStorage.setItem(EVENTS_KEY, jsonString);
        console.log("Events saved: ", events.length);
    } catch (error) {
        // Fehlerbehandlung beim Speichern
        console.error("Error saving: ", error);
    };
};

// Funktion zum Laden der Events aus dem localStorage
export const loadCustomEvents = () => {
    try {
        // Holt den gespeicherten JSON-String
        const jsonString = localStorage.getItem(EVENTS_KEY);

        // Falls nichts gespeichert ist, wird ein leeres Array zurückgegeben
        if (!jsonString) {
            return [];
        };

        // Wandelt den JSON-String zurück in ein Array von Objekten
        const events = JSON.parse(jsonString);
        console.log("Events loaded: ", events.length);
        return events;
    } catch (error) {
        // Fehlerbehandlung beim Laden
        console.error("Error loading: ", error)
        return [];
    };
};

// Funktion zum Löschen eines Events anhand seiner ID
export const deleteCustomEvent = (eventId) => {
    try {
        // Lädt alle gespeicherten Events
        const events = loadCustomEvents();
        console.log("Events before deleting: ", events);

        // Filtert das Event mit der passenden ID heraus
        const filteredEvents = events.filter((e) => e.id !== eventId);
        console.log("Filtered events: ", filteredEvents);

        // Speichert die gefilterte Liste erneut
        saveCustomEvents(filteredEvents);
        console.log("Event deleted. Remaining events: ", filteredEvents.length);

        // Gibt die aktualisierte Liste zurück
        return filteredEvents;
    } catch (error) {
        // Fehlerbehandlung beim Löschen
        console.error("Error deleting: ", error);
        // Gibt im Fehlerfall den aktuellen Stand aus dem Storage zurück
        return loadCustomEvents();
    };
};