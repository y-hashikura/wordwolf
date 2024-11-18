import React from "react";

export const ResultText = (props) => {
    
    const players = props.players
    const words = props.words

    return (
        <div>
            {players.map((player, index) => (
                <div>    
                    <p key={index}>{player}'s topic is</p>
                    <p>"{words[index]}"</p>
                </div>
            ))}
        </div>
    )
}