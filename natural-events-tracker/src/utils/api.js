const BASE_URL = 'https://eonet.gsfc.nasa.gov/api/v3';

// Fetch all current (open) events
export async function fetchLiveEvents(limit = 100) {
    const response = await fetch(`${BASE_URL}/events?status=open&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch live events');
    const data = await response.json();
    return data.events;
}

// Fetch all past (closed) events
export async function fetchPastEvents(limit = 20) {
    const response = await fetch(`${BASE_URL}/events?status=closed&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch past events');
    const data = await response.json();
    return data.events;
}
// Fetch details of a single event by ID
export async function fetchEventDetails(eventId) {
    const response = await fetch(`${BASE_URL}/events/${eventId}`);
    if (!response.ok) throw new Error('Failed to fetch event details');
    return await response.json();
}