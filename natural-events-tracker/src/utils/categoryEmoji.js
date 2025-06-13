const categoryEmoji = (category) => {
    switch (category?.toLowerCase()) {
        case 'wildfires':
            return '🔥';
        case 'severeStorms':
            return '🌪️';
        case 'volcanoes':
            return '🌋';
        case 'seaLakeIce':
            return '🧊';
        case 'earthquakes':
            return '🌎';
        case 'floods':
            return '🌊';
        case 'landslides':
            return '⛰️';
        case 'snow':
            return '❄️';
        case 'temperatureExtremes':
            return '🌡️';
        case 'drought':
            return '☀️';
        case 'dustHaze':
            return '🌫️';
        case 'manmade':
            return '🏗️';
        case 'waterColor':
            return '💧';
        default:
            return '❓'; // Fallback
    }
};

export default categoryEmoji;