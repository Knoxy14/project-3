import React from "react";

let APIKEY = process.env.REACT_APP_RAWG_API_KEY;
console.log("here is the APIKEY, remove before deployment " + APIKEY)

let game = "tetris"

export default class FetchGame extends React.Component {

    state={
        loading: true
    };

    async componentDidMount(){
        const url = "https://rawg.io/api/games/" + game + "/screenshots`" ;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    }

    render(){

        return (<div>
            {this.state.loading ? <div>loading...</div> : <div>game...</div>}
        </div>
        );
    }
}