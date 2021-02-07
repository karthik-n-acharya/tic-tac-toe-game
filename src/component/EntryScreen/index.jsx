import React, { Component } from 'react';
import './index.css';
import { useHistory } from "react-router-dom";



function EntryScreen() {

    const history = useHistory();

    const onSubmit = ()=>{
        history.push({
            pathname:'/game',
            state: { name1: "karthik", name2:"John"}
        })
    }

    return (
        <div className="pad">
            <div className="game-title">TIC TAC TOE</div>
            <div className="content">
                <label>Player 1</label>
                <input type="text" name="name" />
                <label>Player 2</label>
                <input type="text" name="name" />
                <input type="submit" value="Submit" onClick={onSubmit} />
            </div>
        </div>
    )
}

export default EntryScreen;