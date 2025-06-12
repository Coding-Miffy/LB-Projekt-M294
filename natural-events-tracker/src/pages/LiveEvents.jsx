import React from 'react'
import Map from '../components/map';

const LiveEvents = () => {
    return (
        <div className='map-container'>
            <Map center={[20, 0]} zoom={2} />
        </div>
    );
};

export default LiveEvents;