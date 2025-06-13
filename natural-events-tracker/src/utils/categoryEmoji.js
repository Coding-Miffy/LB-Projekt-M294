const emojiMap = {
    wildfires: '🔥',
    wildfire: '🔥',
    '🔥 wildfire': '🔥',

    severestorms: '🌪️',
    'severe storms': '🌪️',
    '🌪️ severe storm': '🌪️',

    volcanoes: '🌋',
    volcano: '🌋',
    '🌋 volcanoe': '🌋',

    sealakeice: '🧊',
    'seaandlakeice': '🧊',
    'sea lake ice': '🧊',
    '🧊 sea lake ice': '🧊',

    earthquakes: '🌍',
    earthquake: '🌍',
    '🌍 earthquake': '🌍',

    floods: '🌊',
    flood: '🌊',
    '🌊 flood': '🌊',

    landslides: '⛰️',
    landslide: '⛰️',
    '⛰️ landslide': '⛰️',

    snow: '❄️',
    '❄️ snow': '❄️',

    drought: '☀️',
    '☀️ drought': '☀️',

    dusthaze: '🌫️',
    'dust haze': '🌫️',
    'dustandhaze': '🌫️',
    '🌫️ dust haze': '🌫️',

    manmade: '🏗️',
    '🏗️ manmade': '🏗️',

    watercolor: '💧',
    'water color': '💧',
    '💧 water color': '💧',
};

const categoryEmoji = (category) => {
    if (!category) return '❓';
    return emojiMap[category.toLowerCase().replace(/\s/g, '')] || '❓';
};

export default categoryEmoji;