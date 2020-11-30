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
            <h2>Procurando algum super herói?</h2>
            <form>
                <input 
                    type="text"
                    value={searchName}
                    onChange={e => handleUpdateSearchName(e)}
                    />
                <button
                    onClick={e => submitSearch(e)}
                >Procurar</button>
            </form>

            {
                results.map(result => {
                    return(
                        <HeroCard props={result} />
                    )
                })
            }
        </section>
    );
}

export default Search;