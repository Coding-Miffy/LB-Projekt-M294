import { useState } from 'react';
import Button from './button';

const CustomEventForm = ({ onEventSubmit }) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const [titleError, setTitleError] = useState('');
    const [dateError, setDateError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (titleError) setTitleError("");
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        if (dateError) setDateError("");
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (categoryError) setCategoryError("");
    };

    const validateForm = () => {
        let isValid = true;

        setTitleError("");
        setDateError("");
        setCategoryError("");

        if (!title.trim()) {
            setTitleError("Enter title")
            isValid = false;
        }

        if (!date.trim()) {
            setDateError("Choose a date")
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const newEvent = {
            title: title,
            date: date,
            category: category,
        }

        onEventSubmit(newEvent);

        setTitle("");
        setDate("");
        setCategory("");
    };


    return (
        <form onSubmit={handleSubmit} className="event-form">
            <h1>Create new event</h1>

            <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                    className={`form-input ${titleError ? "form-input--error" : ""}`}
                />
                {titleError && (
                    <span className='error-message'>{titleError}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    placeholder=""
                    className={`form-input ${dateError ? "form-input--error" : ""}`}
                />
                {dateError && (
                    <span className='error-message'>{dateError}</span>
                )}
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
    );
};

export default CustomEventForm;