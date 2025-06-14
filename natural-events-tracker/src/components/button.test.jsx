// Importiere die Testfunktionen von Vitest
import { describe, it, expect } from "vitest";

// Importiere Hilfsfunktionen zum Testen von React-Komponenten
import { render, screen, fireEvent } from '@testing-library/react';

// Importiere die zu testende Button-Komponente
import Button from '../components/button';

// Gruppiere alle Tests zur Button-Komponente
describe('Button component', () => {

    // Testfall 1: Prüft, ob der Button mit dem angegebenen Text korrekt gerendert wird
    it('renders with text', () => {
        render(<Button text="Click me" onButtonClick={() => { }} />);
        // Erwartung: Ein Element mit dem Text "Click me" ist im Dokument
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    // Testfall 2: Prüft, ob beim Klick auf den Button die übergebene Funktion aufgerufen wird
    it('calls function on click', () => {
        // Erstelle eine Mock-Funktion
        const handleClick = vi.fn();
        // Rendere den Button mit der Mock-Funktion
        render(<Button text="Press" onButtonClick={handleClick} />);
        // Simuliere einen Klick auf den Button
        fireEvent.click(screen.getByText('Press'));
        // Erwartung: Die Funktion wurde genau einmal aufgerufen
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Testfall 3: Prüft, ob der Button deaktiviert ist, wenn das disabled-Attribut gesetzt ist
    it('disables button if disabled is true', () => {
        render(<Button text="Disabled" disabled={true} onButtonClick={() => { }} />);
        // Erwartung: Der Button mit dem Text "Disabled" ist deaktiviert
        expect(screen.getByText('Disabled')).toBeDisabled();
    });
});