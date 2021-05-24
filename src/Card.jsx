import React from 'react';

const Card = ({username, name, id, email}) => {
    const url = "https://robohash.org/";
    return (
        <div className="bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5 tc c#fff">
            <img src={`${url}${id}?200x200`} alt="robot" />
            <div>
                <h1>{username}</h1>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
