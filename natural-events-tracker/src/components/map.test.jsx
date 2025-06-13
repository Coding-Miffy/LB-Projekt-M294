import { render } from '@testing-library/react';
import Map from '../components/map';

const mockEvents = [
    {
        id: '1',
        title: 'Mock Event',
        geometry: [{ coordinates: [10, 20] }],
        categories: [{ id: 'wildfires', title: 'Wildfire' }],
    }
];

describe('Map component', () => {
    it('renders without crashing and shows event marker', () => {
        const { container } = render(<Map center={[20, 0]} zoom={2} events={mockEvents} />);
        expect(container.querySelector('.leaflet-container')).toBeInTheDocument();
    });
});