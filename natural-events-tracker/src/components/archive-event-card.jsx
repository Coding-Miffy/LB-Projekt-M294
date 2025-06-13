import React, { useContext } from 'react';
import categoryEmoji from '../utils/categoryEmoji';
import { CategoryContext } from '../contexts/CategoryContext';


const ArchiveEventCard = ({ title, date, category }) => {

    const { categories } = useContext(CategoryContext);

    const emoji = categoryEmoji(category);

    const match = categories.find(cat =>
        category?.toLowerCase().includes(cat.id.toLowerCase())
    );
    const titleText = match?.title || category || 'Unknown';

    return (
        <div className="archive-card">
            <div className="emoji" style={{ fontSize: '2rem' }}>{emoji}</div>
            <h3 className="archive-card-title">{title}</h3>
            <p className="archive-card-detail">
                <strong>Date:</strong> {date ? new Date(date).toLocaleDateString() : 'Unknown'}
            </p>
            <p className="archive-card-detail">
                <strong>Category:</strong> {titleText}
            </p>
        </div>
    );
};

export default ArchiveEventCard;