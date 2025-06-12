import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ center = [20, 0], zoom = 2, markers = [] }) => {
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default Map;