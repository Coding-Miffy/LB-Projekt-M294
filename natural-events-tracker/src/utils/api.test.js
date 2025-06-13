import { fetchLiveEventsByCategory } from '../utils/api';
import { describe, it, expect } from "vitest";

global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ events: [{ id: '123', title: 'Test Event' }] }),
    })
);

describe('fetchLiveEventsByCategory', () => {
    it('fetches data and returns events', async () => {
        const data = await fetchLiveEventsByCategory('wildfires', 1);
        expect(data).toBeDefined();
        expect(data[0].title).toBe('Test Event');
    });

    it('throws error if fetch fails', async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({ ok: false, status: 500 })
        );
        await expect(fetchLiveEventsByCategory('wildfires', 1)).rejects.toThrow('Failed to fetch category-filtered live events');
    });
});