import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v3/categories');
                setCategories(response.data.categories);
            } catch (error) {
                console.error("Failed to load categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories }}>
            {children}
        </CategoryContext.Provider>
    );
};