import { render, fireEvent, screen } from '@testing-library/react';
import CustomEventForm from './custom-event-form';

describe('CustomEventForm', () => {
    it('shows validation error when required fields are empty', () => {
        const mockSubmit = vi.fn();
        render(<CustomEventForm onEventSubmit={mockSubmit} />);
        fireEvent.click(screen.getByText('Create Event'));

        expect(screen.getByText('Enter title')).toBeInTheDocument();
        expect(screen.getByText('Choose a date')).toBeInTheDocument();
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('submits form with valid inputs', () => {
        const mockSubmit = vi.fn();
        render(<CustomEventForm onEventSubmit={mockSubmit} />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-01-01' } });
        fireEvent.click(screen.getByText('Create Event'));

        expect(mockSubmit).toHaveBeenCalledWith({
            title: 'Test Title',
            date: '2024-01-01',
            category: 'wildfires'
        });
    });
});
