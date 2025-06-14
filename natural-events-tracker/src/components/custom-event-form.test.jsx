// Importiere notwendige Funktionen aus Testing Library
import { render, fireEvent, screen } from '@testing-library/react';
// Importiere die zu testende Komponente
import CustomEventForm from './custom-event-form';

describe('CustomEventForm', () => {

    // Testfall: Prüft die Validierung bei leeren Pflichtfeldern
    it('shows validation error when required fields are empty', () => {
        // Erstellt eine Mock-Funktion für das Event-Submit-Callback
        const mockSubmit = vi.fn();

        // Rendert das Formular in der Testumgebung
        render(<CustomEventForm onEventSubmit={mockSubmit} />);

        // Simuliert Klick auf den "Create Event"-Button, ohne Felder auszufüllen
        fireEvent.click(screen.getByText('Create Event'));

        // Erwartet, dass Fehlermeldungen angezeigt werden
        expect(screen.getByText('Enter title')).toBeInTheDocument();
        expect(screen.getByText('Choose a date')).toBeInTheDocument();

        // Erwartet, dass das Submit-Callback nicht aufgerufen wurde
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    // Testfall: Erfolgreiches Absenden bei gültiger Eingabe
    it('submits form with valid inputs', () => {
        const mockSubmit = vi.fn();

        // Formular wird mit dem Mock-Callback gerendert
        render(<CustomEventForm onEventSubmit={mockSubmit} />);

        // Füllt das Titelfeld aus
        fireEvent.change(screen.getByLabelText(/Title/i), {
            target: { value: 'Test Title' }
        });

        // Füllt das Datumsfeld aus
        fireEvent.change(screen.getByLabelText(/Date/i), {
            target: { value: '2024-01-01' }
        });

        // Klickt auf den Button zum Absenden des Formulars
        fireEvent.click(screen.getByText('Create Event'));

        // Erwartet, dass das Submit-Callback mit den richtigen Daten aufgerufen wurde
        expect(mockSubmit).toHaveBeenCalledWith({
            title: 'Test Title',
            date: '2024-01-01',
            category: 'wildfires' // Standardwert in der Komponente
        });
    });
});