import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/button';

describe('Button component', () => {
    it('renders with text', () => {
        render(<Button text="Click me" onButtonClick={() => { }} />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('calls function on click', () => {
        const handleClick = vi.fn();
        render(<Button text="Press" onButtonClick={handleClick} />);
        fireEvent.click(screen.getByText('Press'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('disables button if disabled is true', () => {
        render(<Button text="Disabled" disabled={true} onButtonClick={() => { }} />);
        expect(screen.getByText('Disabled')).toBeDisabled();
    });
});
