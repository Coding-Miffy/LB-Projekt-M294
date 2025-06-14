// Basis-URL der NASA EONET v3 API
const BASE_URL = 'https://eonet.gsfc.nasa.gov/api/v3';

// Holt alle aktuellen (offenen) Naturereignisse, optional limitiert
export async function fetchLiveEvents(limit = 100) {
    const response = await fetch(`${BASE_URL}/events?status=open&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch live events'); // Fehlerbehandlung bei fehlgeschlagenem Request
    const data = await response.json();
    return data.events; // Gibt das Events-Array zurück
}

// Holt aktuelle Events nach Kategorie gefiltert, optional limitiert
export async function fetchLiveEventsByCategory(category, limit = 50) {
    const response = await fetch(`${BASE_URL}/events?category=${category}&status=open&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch category-filtered live events');
    const data = await response.json();
    return data.events;
}

// Holt abgeschlossene (vergangene) Events, optional limitiert
export async function fetchPastEvents(limit = 20) {
    const response = await fetch(`${BASE_URL}/events?status=closed&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch past events');
    const data = await response.json();
    return data.events;
}

// Holt vergangene Events nach Kategorie gefiltert, optional limitiert
export async function fetchPastEventsByCategory(category, limit = 50) {
    const response = await fetch(`${BASE_URL}/events?category=${category}&status=closed&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch category-filtered past events');
    const data = await response.json();
    return data.events;
}

// Holt Detailinformationen zu einem Event anhand der Event-ID
export async function fetchEventDetails(eventId) {
    const response = await fetch(`${BASE_URL}/events/${eventId}`);
    if (!response.ok) throw new Error('Failed to fetch event details');
    return await response.json(); // Gibt das gesamte Event-Objekt zurück
}