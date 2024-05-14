'use client'

import styles from '../components/SearchInput.module.css';

import { useState } from 'react';

const SearchInput = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input className={styles.searchInput}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            <button className={styles.searchButton} type="submit">Search</button>
        </form>
    );
};

export default SearchInput;
