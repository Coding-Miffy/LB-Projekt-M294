// Importiert die nötigen Funktionen zum Testen
import { describe, it, expect } from "vitest";

// Importiert die zu testende Utility-Funktion
import categoryEmoji from '../utils/categoryEmoji';

// Test-Suite für die Funktion categoryEmoji
describe('categoryEmoji', () => {

    // Testet, ob für bekannte Kategorien das richtige Emoji zurückgegeben wird
    it('returns correct emoji for known categories', () => {
        expect(categoryEmoji('wildfires')).toBe('🔥');
        expect(categoryEmoji('severeStorms')).toBe('🌪️');
        expect(categoryEmoji('volcanoes')).toBe('🌋');
        expect(categoryEmoji('sealakeice')).toBe('🧊');
        expect(categoryEmoji('earthquakes')).toBe('🌍');
    });

    // Testet, ob für eine unbekannte Kategorie das Fallback-Emoji zurückgegeben wird
    it('returns fallback for unknown category', () => {
        expect(categoryEmoji('unknownCategory')).toBe('❓');
    });

    // Testet, ob null oder ein leerer String korrekt als ungültig behandelt wird
    it('handles null or empty input', () => {
        expect(categoryEmoji(null)).toBe('❓');
        expect(categoryEmoji('')).toBe('❓');
    });
});