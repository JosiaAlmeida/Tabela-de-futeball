import React, { Component } from 'react'
import Time from './Time'
import Partida from './Partida'
export default class PlacarContainer extends Component{
    render(){
        return(
            <div>
                <div className="flex margin"> 
                    <h1>Casa</h1>
                    <Time timename="Vasca" /> 
                </div>
                <div className="flex margin"><Partida /></div>
                <div className="flex margin">
                    <h1>Visitante</h1>
                    <Time timename="Valesca" />
                    </div>
            </div>
        );
    }
}