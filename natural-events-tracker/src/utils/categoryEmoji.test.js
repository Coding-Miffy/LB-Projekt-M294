import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import categoryEmoji from '../utils/categoryEmoji';

describe('categoryEmoji', () => {
    it('returns correct emoji for known categories', () => {
        expect(categoryEmoji('wildfires')).toBe('🔥');
        expect(categoryEmoji('severeStorms')).toBe('🌪️');
        expect(categoryEmoji('volcanoes')).toBe('🌋');
        expect(categoryEmoji('sealakeice')).toBe('🧊');
        expect(categoryEmoji('earthquakes')).toBe('🌍');
    });

    it('returns fallback for unknown category', () => {
        expect(categoryEmoji('unknownCategory')).toBe('❓');
    });

    it('handles null or empty input', () => {
        expect(categoryEmoji(null)).toBe('❓');
        expect(categoryEmoji('')).toBe('❓');
    });
});
