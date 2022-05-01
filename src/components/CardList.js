import React from "react";
import Card from './Card';

const CardList = ({userArray}) => {

    return (
        <div className="tc pa4">
            {
                userArray.map((username,index) => {
                    return (
                    <Card key={username+index} username={username} index={index+1}/>
                    )
                })
            }
        </div>

    )
};

export default CardList;



