const categoryEmoji = (category) => {
    if (!category) return '❓';

    const normalized = category.toLowerCase();

    // Vergleicht sowohl mit IDs als auch mit Titles
    switch (normalized) {
        case 'wildfires':
        case 'wildfire':
        case '🔥 wildfire':
            return '🔥';
        case 'severestorms':
        case 'severe storms':
        case '🌪️ severe storm':
            return '🌪️';
        case 'volcanoes':
        case 'volcano':
        case '🌋 volcanoe':
            return '🌋';
        case 'sealakeice':
        case 'sea and lake ice':
        case '🧊 sea lake ice':
            return '🧊';
        case 'earthquakes':
        case 'earthquake':
        case '🌍 earthquake':
            return '🌍';
        case 'floods':
        case 'flood':
        case '🌊 flood':
            return '🌊';
        case 'landslides':
        case 'landslide':
        case '⛰️ landslide':
            return '⛰️';
        case 'snow':
        case '❄️ snow':
            return '❄️';
        case 'drought':
        case '☀️ drought':
            return '☀️';
        case 'dusthaze':
        case 'dust and haze':
        case '🌫️ dust haze':
            return '🌫️';
        case 'manmade':
        case '🏗️ manmade':
            return '🏗️';
        case 'watercolor':
        case 'water color':
        case '💧 water color':
            return '💧';
        default:
            return '❓';
    }
};

export default categoryEmoji;