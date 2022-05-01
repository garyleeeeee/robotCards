import React from "react";

const Card = ({username, index}) => {

    return (
        <div className="tc grow ma3 pa4 br4 bg-dark-green white dib" style={{width:"300px"}}>
            <h1 className="f2">{index}</h1>
            <h1 className="f1">{username}</h1>
            <img src={`https://robohash.org/${username}/size=30x50`} alt={`${username}'s robot`} />
        </div>
    )
}

export default Card;
