import React, { useState, useEffect, useLocation } from 'react';
import { FiLogOut, FiHeart, FiBook, FiSearch } from 'react-icons/fi';
import { Switch, Route, Link, BrowserRouter, matchPath } from 'react-router-dom';

import api from '../services/api';
import '../styles/header.css';

import Search from './Search';
import Favorites from './Favorites';
import Browse from './Browse';

const Dashboard = () => {

    const [ toggle, setToggle ] = useState(true);
    const [ selected, setSelected ] = useState(0);
    const [ location, setLocation ] = useState('');

    const [ superheroes, setSuperHeroes ] = useState([]);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    const handleSelected = (value) => {
        setSelected(value);
    }

    useEffect(() => {
        setLocation(window.location.pathname);
        // Verifies path and matches with selected link in drawer
        if (location === './browse') setSelected(0);
        else if (location === '/search') setSelected(1);
        else if (location === '/favorites') setSelected(2);
    }, [location]);

    return(
        <section id="header">
            <BrowserRouter>
            <header>
                <div id="left-header">
                    <div 
                        className={toggle === true ? 'burger' : 'fries'}
                        onClick={() => changeToggle()}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>

                    <h3>Super Heros<span>by Rafael Coelho</span></h3>
                </div>
                
                <div id="logout">
                    <FiLogOut />
                    <p>Sair</p>
                </div>
            </header>
            <aside id="drawer" className={!toggle && 'open'} >
                <span 
                    id="anim"
                    style={{
                        top: `${(60 * selected) + 10}px`
                    }}
                ></span>

                <Link to="/browse" className="header-link" >
                    <div 
                        className={0 === selected ? "option selected" : "option"}
                        onClick={() => handleSelected(0)} >
                        <FiBook className="icon" />
                        <p>Explore</p>
                    </div>
                </Link>

                <Link to="/search" className="header-link">
                    <div 
                        className={1 === selected ? "option selected" : "option"}
                        onClick={() => handleSelected(1)} >
                        <FiSearch className="icon" />
                        <p>Search</p>
                    </div>
                </Link>
                
                <Link to="/favorites" className="header-link"> 
                    <div 
                        className={2 === selected ? "option selected" : "option"}
                        onClick={() => handleSelected(2)} >
                        <FiHeart className="icon" />
                        <p>Favorites</p>
                    </div>
                </Link>
                

            </aside>


            <Switch>
                <Route path="/" exact={true} component={Browse}/>
                <Route path="/search" exact={false} component={Search}/>
                <Route path="/favorites" exact={true} component={Favorites}/>
                <Route path="/browse" exact={true} component={Browse}/>
            </Switch>
            
            </BrowserRouter>
        </section>
    );
}

export default Dashboard;