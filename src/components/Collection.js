import React from "react";
import GameList from "./GameList/GameList"

const Collection = () => {
    return(
        <div>
        <h1>Your Collection!</h1>
            <GameList />
            <a href='/addToCollection' ><h1>Add More Games to Your Collection</h1></a>
        </div>
    )
}

export default Collection;