import React from 'react';

const HeroCard = ({props}) => {
    return(
        <>
            <h4>{props.name}</h4>
            <p>{props.appearance.height[1]}</p>
            <img src={props.image.url} alt={props.name}/>
        </>
    )
}

export default HeroCard;