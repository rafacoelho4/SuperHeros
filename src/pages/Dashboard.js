import React, { useState, useEffect } from 'react';
import { FiLogOut, FiHeart, FiBook } from 'react-icons/fi';
import { Switch, Route, Link } from 'react-router-dom';

import api from '../services/api';
import '../styles/header.css';
import Search from './Search';

const Dashboard = () => {

    const [ toggle, setToggle ] = useState(true);
    const [ selected, setSelected ] = useState(0);

    const [ superheroes, setSuperHeroes ] = useState([]);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    const handleSelected = (value) => {
        setSelected(value);
    }

    const searchHero = async () => {
        try {

            // for(var i = 1; i < 10; i++) {
            //     await api.get(`/${i}`).then(hero => {
            //         console.log(i)
            //         console.log(hero)
            //         setSuperHeroes([superheroes, hero.data]);
            //         // console.log(superheroes)
            //     })
            // }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        searchHero();
    }, [])

    return(
        <section id="header">
            <header>
                <div id="left-header">
                    <div 
                        className={toggle === true ? 'burger' : 'fries'}
                        onClick={() => changeToggle()}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>

                    <h3>Super Herois<span>by Rafael Coelho</span></h3>
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

                <div 
                    className={0 === selected ? "option selected" : "option"}
                    onClick={() => handleSelected(0)} >
                    <FiBook className="icon" />
                    <p>Explorar</p>
                </div>

                <div 
                    className={1 === selected ? "option selected" : "option"}
                    onClick={() => handleSelected(1)} >
                    <FiHeart className="icon" />
                    <p>Favoritos</p>
                </div>

            </aside>

            <main id="dashboard-content">
                {/* <Switch>
                    <Route path="/search" exact={true} component={Search}/>
                </Switch> */}
            </main>

            <Search />

        </section>
    );
}

export default Dashboard;