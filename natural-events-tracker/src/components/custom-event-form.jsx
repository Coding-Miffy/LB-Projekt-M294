import { useState } from 'react';
import Button from './button';

const CustomEventForm = () => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [titleError, setTitleError] = useState('');
    const [dateError, setDateError] = useState('');
    const [categoryError, setCategoryError] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className='events-form-manager'>
            <h1>Create new event</h1>

            <form onSubmit={handleSubmit} className="event-form">

                <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Title"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={handleDateChange}
                        placeholder="Date"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="form-input"
                    >
                        <option value="wildfires">🔥 Wildfire</option>
                        <option value="severeStorms">🌪️ Severe Storm</option>
                        <option value="volcanoes">🌋 Volcanoe</option>
                        <option value="seaLakeIce">🧊 Sea Lake Ice</option>
                        <option value="earthquakes">🌍 Earthquake</option>
                        <option value="floods">🌊 Flood</option>
                        <option value="landslides">⛰️ Landslide</option>
                        <option value="snow">❄️ Snow</option>
                        <option value="temperatureExtremes">🌡️ Temperature Extremes</option>
                        <option value="drought">☀️ Drought</option>
                        <option value="dustHaze">🌫️ Dust Haze</option>
                        <option value="manmade">🏗️ Manmade</option>
                        <option value="waterColor">💧 Water Color</option>
                    </select>
                </div>

                <div className="form-submit">
                    <Button
                        text={isSubmitting ? "Saving..." : "Create Event"}
                        onButtonClick={handleSubmit}
                        disabled={isSubmitting}
                        className="submit-button"
                    />
                </div>
            </form>
        </div>

    )
}

export default CustomEventForm