import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

import '../styles/header.css';

import pageIcon from '../assets/page.svg';
import componentIcon from '../assets/component.svg';
import animationIcon from '../assets/animation.svg';

const Header = () => {

    const [ toggle, setToggle ] = useState(true);
    const [ selected, setSelected ] = useState(0);

    const options = [
        {
            name: "Páginas",
            icon: pageIcon
        },
        {
            name: "Componentes",
            icon: componentIcon
        },
        {
            name: "Animações",
            icon: animationIcon
        }
    ]

    const changeToggle = () => {
        setToggle(!toggle);
    }

    const handleSelected = (value) => {
        setSelected(value);
    }

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

                    <h3>Voluta <span>Soluções Digitais</span></h3>
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
                {
                    options.map((option, index) => (
                        <div 
                            className={index === selected ? "option selected" : "option"}
                            onClick={() => handleSelected(index)} >
                            <img src={option.icon} alt={option.name} fill="red" />
                            <p>{option.name}</p>
                        </div>
                    ))
                }
            </aside>
        </section>
    );
}

export default Header;