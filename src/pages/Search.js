import React, { useState } from 'react';

import api from '../services/api';
import '../styles/search.css';
import HeroCard from '../components/HeroCard';

const Search = () => {

    const [ searchName, setSearchName ] = useState('');
    const [ results, setResults ] = useState([]);

    const submitSearch = async e => {
        e.preventDefault();
        await api.get(`/search/${searchName}`).then(res => setResults(res.data.results));
    }

    const handleUpdateSearchName = e => {
        e.preventDefault();
        setSearchName(e.target.value);
    }

    return(
        <section id="search">
            <h2>Looking for a superhero?</h2>
            <form>
                <input 
                    type="text"
                    placeholder="Batman..."
                    value={searchName}
                    onChange={e => handleUpdateSearchName(e)}
                    />
                <button
                    onClick={e => submitSearch(e)}
                >Search</button>
            </form>

            <main className="container">
                {
                    results && results.length !== 0 && (
                        <p id="results">{results.length} results</p>
                    )
                }
                {
                    results && results.length !== 0 && results.map(result => {
                        return(
                            <HeroCard key={result.id} info={result} />
                        )
                    })
                }
            </main>
        </section>
    );
}

export default Search;