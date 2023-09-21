import React from 'react';

const InfoCrd = ({ card }) => {
    const { name, description, icon } = card;

    < div className={`card text-white p-6 md:card-side shadow-xl `}>
        <figure>
            <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
        </div>
    </div >

};

export default InfoCrd;