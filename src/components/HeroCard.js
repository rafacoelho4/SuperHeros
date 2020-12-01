import React from 'react';

import '../styles/components/heroCard.css';

const HeroCard = (props) => {
    return(
        <section id="hero-card">
            <img src={props.info.image.url} alt={props.info.name}/>
            <main>
                <h4>{props.info.name}</h4>
                <p>{props.info.biography["full-name"]}</p>
                <p>{props.info.biography["publisher"]}</p>
                <p>{props.info.appearance.race}</p>
                {/* <p>{props.info.appearance.height[1]}</p>
                <p>{props.info.appearance.weight[1]}</p> */}
            </main>
        </section>
    )
}

export default HeroCard;