import React, { Component } from 'react';
import "./styles/index.css";
//import ways from "../constants/db.json";

//const gg = require('./db.json');
const ways = [];
ways[0] = {start_stop: "Черкаси -", finish_stop: "Чигирин"};
ways[1] = {start_stop: "Чигирин -", finish_stop: "Черкаси"};
//var listWays = JSON.parse(ways);
//const ways = [1, 2, 3, 4, 5];

const listItems = ways.map(way =>
    <li>{way}</li>
);



class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="board">
                    Розклад руху автобусів за напрямком:
                </div>
                <div className="board" >
                    {ways.map(way =>
                        <li>
                            {way.start_stop} {way.finish_stop}
                        </li>
                    )}
                </div>
            </div>
        );
    }
}

export default Content;