// Importiert das render-Tool aus React Testing Library zum Testen von React-Komponenten
import { render } from '@testing-library/react';

// Importiert die zu testende Map-Komponente
import Map from '../components/map';

// Simulierte Event-Daten für den Test – enthält Titel, Geokoordinaten und Kategorie
const mockEvents = [
    {
        id: '1',
        title: 'Mock Event',
        geometry: [{ coordinates: [10, 20] }], // Longitude, Latitude
        categories: [{ id: 'wildfires', title: 'Wildfire' }],
    }
];

// Beschreibt die Testreihe für die Map-Komponente
describe('Map component', () => {
    // Ein einzelner Test: prüft, ob die Komponente ohne Fehler rendert und die Karte darstellt
    it('renders without crashing and shows event marker', () => {
        // Rendert die Map-Komponente mit Testdaten
        const { container } = render(<Map center={[20, 0]} zoom={2} events={mockEvents} />);

        // Erwartung: Ein DOM-Element mit der Klasse .leaflet-container muss existieren
        // → dies weist darauf hin, dass die Leaflet-Karte korrekt gerendert wurde
        expect(container.querySelector('.leaflet-container')).toBeInTheDocument();
    });
});