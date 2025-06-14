// Importiert die zu testende API-Funktion
import { fetchLiveEventsByCategory } from '../utils/api';
// Importiert Vitest-Funktionen für Testdefinitionen und Assertions
import { describe, it, expect } from "vitest";

// Mockt die globale fetch-Funktion, damit keine echten HTTP-Anfragen ausgeführt werden.
// Gibt ein erfolgreiches Response-Objekt mit einer Beispiel-Eventliste zurück.
global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ events: [{ id: '123', title: 'Test Event' }] }),
    })
);

// Beschreibt die Testsuite für die Funktion fetchLiveEventsByCategory
describe('fetchLiveEventsByCategory', () => {
    // Testet, ob bei erfolgreichem Abruf die erwarteten Daten zurückgegeben werden
    it('fetches data and returns events', async () => {
        const data = await fetchLiveEventsByCategory('wildfires', 1);
        expect(data).toBeDefined(); // Überprüft, dass Daten vorhanden sind
        expect(data[0].title).toBe('Test Event'); // Überprüft, dass das erste Event den korrekten Titel hat
    });

    // Testet, ob bei einem Fehler vom Server ein Fehler geworfen wird
    it('throws error if fetch fails', async () => {
        // Mockt ein fehlgeschlagenes Response mit Status 500
        fetch.mockImplementationOnce(() =>
            Promise.resolve({ ok: false, status: 500 })
        );
        // Erwartet, dass die Funktion bei fehlerhaftem Abruf einen spezifischen Fehler wirft
        await expect(fetchLiveEventsByCategory('wildfires', 1)).rejects.toThrow('Failed to fetch category-filtered live events');
    });
});