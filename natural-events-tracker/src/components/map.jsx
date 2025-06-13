import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const categoryEmojis = {
    wildfires: '🔥',
    severeStorms: '🌪️',
    volcanoes: '🌋',
    seaLakeIce: '🧊',
    earthquakes: '🌍',
    floods: '🌊',
    landslides: '⛰️',
    snow: '❄️',
    drought: '☀️',
    dustHaze: '🌫️',
    manmade: '🏗️',
    waterColor: '💧'
};

const getEmojiIcon = (emoji) =>
    L.divIcon({
        html: `<div style="font-size: 24px;">${emoji}</div>`,
        className: 'emoji-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

const Map = ({ center, zoom, events }) => {
    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '80vh', width: '100%' }}>
            <TileLayer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {events.map(event => {
                const coords = event.geometry[0]?.coordinates;
                const categoryId = event.categories[0]?.id;
                const emoji = categoryEmojis[categoryId] || '❓'; // Fallback: Fragezeichen

                if (!coords) return null;

                const [lon, lat] = coords;
                return (
                    <Marker
                        key={event.id}
                        position={[lat, lon]}
                        icon={getEmojiIcon(emoji)}
                    >
                        <Popup>
                            <strong>{event.title}</strong><br />
                            Category: {event.categories[0]?.title}
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default Map;