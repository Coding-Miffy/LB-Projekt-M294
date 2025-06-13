import { useState, useContext } from "react";
import Button from "./button";
import categoryEmoji from "../utils/categoryEmoji";
import { CategoryContext } from "../contexts/CategoryContext";

const CustomEventCard = ({ event, onEdit, onDelete }) => {

    const emoji = categoryEmoji(event.category);

    const [isEditing, setIsEditing] = useState(false);

    const [editTitle, setEditTitle] = useState(event.title);
    const [editDate, setEditDate] = useState(event.date);
    const [editCategory, setEditcategory] = useState(event.category);

    const { categories } = useContext(CategoryContext);
    const getCategoryTitle = (id) => {
        const match = categories.find(c => c.id === id);
        return match ? match.title : id;
    };

    const startEditing = () => {
        setIsEditing(true);

        setEditTitle(event.title);
        setEditDate(event.date);
        setEditcategory(event.category);
    };

    const cancelEditing = () => {
        setIsEditing(false);
    };

    const saveChanges = () => {
        if (!editTitle.trim() || !editDate.trim()) {
            alert("Fill out Title and Date");
            return;
        };

        const updatedEvent = {
            title: editTitle,
            date: editDate,
            category: editCategory,
        };

        onEdit(updatedEvent);
        setIsEditing(false);
    };

    const handleDelete = () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this event?\nThis process cannot be undone."
        );
        if (isConfirmed) {
            onDelete(event.id);
        };
    };

    return (
        <div className="event-card">
            {isEditing ? (
                // EDIT-MODE
                <div className="editing-form">
                    <h3>Edit Event</h3>

                    <div className="edit-field">
                        <label>Title</label>
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="edit-field">
                        <label>Date</label>
                        <input
                            type="date"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="edit-field">
                        <label>Category</label>
                        <select
                            value={editCategory}
                            onChange={(e) => setEditcategory(e.target.value)}
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
                            <option value="drought">☀️ Drought</option>
                            <option value="dustHaze">🌫️ Dust Haze</option>
                            <option value="manmade">🏗️ Manmade</option>
                            <option value="waterColor">💧 Water Color</option>
                        </select>
                    </div>

                    <div className="edit-actions">
                        <Button
                            text={"Save"}
                            onButtonClick={saveChanges}
                            className={"save-button"}
                        />
                        <Button
                            text={"Cancel"}
                            onButtonClick={saveChanges}
                            className={"cancel-button"}
                        />
                    </div>
                </div>
            ) : (
                // SHOW-MODE
                <>
                    <div className="event-content">
                        <h3>
                            {emoji} {event.title}
                        </h3>
                        <div className="event-meta">
                            <p className="date-badge"><strong>Date:</strong> {event.date = new Date(event.date).toLocaleDateString()}</p>
                            <p className="category-badge"><strong>Category:</strong> {getCategoryTitle(event.category)}</p>
                        </div>
                    </div>

                    <div className="event-actions">
                        <Button
                            text={"Edit"}
                            onButtonClick={startEditing}
                            className={"edit-button"}
                        />
                        <Button
                            text={"Delete"}
                            onButtonClick={handleDelete}
                            className={"delete-button"}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CustomEventCard;