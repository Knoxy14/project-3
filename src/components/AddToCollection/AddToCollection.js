import React, { useState } from 'react';
import './styles.css'
import FetchGame from '../FetchGame/FetchGame'

let APIKEY = process.env.REACT_APP_RAWG_API_KEY;
console.log("here is the APIKEY, remove before deployment " + APIKEY)


const AddToCollection = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm

        setGameResults([])
        fetch('https://rawg.io/api/games?search=' + slug )
        .then(resp => resp.json())
        .then(({results}) => {
            results === undefined ? alert('no games found') : setGameResults(results)
            console.log(results[0].name, results[0])
        })
        setSearchTerm("");
        
    }

    return (
        
        <div className="game-search">
            <h1>Find Game for Collection</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" value={searchTerm} onChange={handleChange} />
                    <br></br>
                    <input type="submit" />
                </form><FetchGame>
                </FetchGame>
        </div>
    )
}

export default AddToCollection;

