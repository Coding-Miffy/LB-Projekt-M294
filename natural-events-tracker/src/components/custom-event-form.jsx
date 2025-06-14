// React Hook zum Verwalten von Zuständen importieren
import { useState } from 'react';
// Wiederverwendbare Button-Komponente importieren
import Button from './button';

// Formular-Komponente für die Erstellung von benutzerdefinierten Events
const CustomEventForm = ({ onEventSubmit }) => {

    // Formularwerte als State definieren
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('wildfires');

    // Fehler-States für die Validierung der Eingabefelder
    const [titleError, setTitleError] = useState('');
    const [dateError, setDateError] = useState('');
    const [categoryError, setCategoryError] = useState('');

    // Zeigt an, ob gerade eine Speicherung im Gange ist
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Aktualisiert den Titel und entfernt evtl. vorhandene Fehlermeldung
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (titleError) setTitleError("");
    };

    // Aktualisiert das Datum und entfernt evtl. vorhandene Fehlermeldung
    const handleDateChange = (e) => {
        setDate(e.target.value);
        if (dateError) setDateError("");
    };

    // Aktualisiert die Kategorie und entfernt evtl. vorhandene Fehlermeldung
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (categoryError) setCategoryError("");
    };

    // Prüft, ob alle erforderlichen Felder ausgefüllt sind
    const validateForm = () => {
        let isValid = true;

        // Fehler zurücksetzen
        setTitleError("");
        setDateError("");
        setCategoryError("");

        // Titel darf nicht leer sein
        if (!title.trim()) {
            setTitleError("Enter title");
            isValid = false;
        }

        // Datum darf nicht leer sein
        if (!date.trim()) {
            setDateError("Choose a date");
            isValid = false;
        }

        return isValid;
    };

    // Handler für das Absenden des Formulars
    const handleSubmit = (e) => {
        e.preventDefault(); // verhindert Seitenreload

        // Validierung prüfen – falls ungültig, abbrechen
        if (!validateForm()) return;

        setIsSubmitting(true); // Status "wird gesendet" aktivieren

        // Neues Event zusammenstellen
        const newEvent = {
            title: title,
            date: date,
            category: category,
        };

        // Event an die Elternkomponente übergeben
        onEventSubmit(newEvent);

        // Formular zurücksetzen
        setTitle("");
        setDate("");
        setCategory("");
        setIsSubmitting(false);
    };

    // JSX – Das Formular zur Event-Erstellung
    return (
        <form onSubmit={handleSubmit} className="event-form">
            <h3>Create new event: </h3>

            {/* Titel-Eingabefeld */}
            <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                    className={`form-input ${titleError ? "form-input--error" : ""}`}
                />
                {/* Fehlermeldung anzeigen, falls vorhanden */}
                {titleError && (
                    <span className='error-message'>{titleError}</span>
                )}
            </div>

            {/* Datums-Eingabefeld */}
            <div className="form-group">
                <label htmlFor="date">Date: </label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    className={`form-input ${dateError ? "form-input--error" : ""}`}
                />
                {dateError && (
                    <span className='error-message'>{dateError}</span>
                )}
            </div>

            {/* Kategorie-Auswahl */}
            <div className="form-group">
                <label htmlFor="category">Category: </label>
                <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="form-input"
                >
                    {/* Liste der verfügbaren Kategorien */}
                    <option value="wildfires">🔥 Wildfire</option>
                    <option value="severeStorms">🌪️ Severe Storm</option>
                    <option value="volcanoes">🌋 Volcanoe</option>
                    <option value="seaLakeIce">🧊 Sea and Lake Ice</option>
                    <option value="earthquakes">🌍 Earthquake</option>
                    <option value="floods">🌊 Flood</option>
                    <option value="landslides">⛰️ Landslide</option>
                    <option value="snow">❄️ Snow</option>
                    <option value="drought">☀️ Drought</option>
                    <option value="dustHaze">🌫️ Dust Haze</option>
                    <option value="manmade">🏗️ Manmade</option>
                    <option value="waterColor">💧 Water Color</option>
                </select>
            </div>

            {/* Absende-Button */}
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