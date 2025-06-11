import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/button'


const Home = () => {
    // Initialize the navigation hook
    const navigate = useNavigate();

    // Function to navigate to the LiveEvents page when the button is clicked
    const handleClick = () => {
        navigate('/live-events');
    }

    return (
        <div>
            <h1>Earth Natural Event Tracker</h1>
            <Button
                text={'Check it out'}
                onButtonClick={handleClick}
            />
        </div>
    );
};

export default Home;