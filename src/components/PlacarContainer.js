import React, { Component } from 'react'
import Time from './Time'
import Partida from './Partida'
export default class PlacarContainer extends Component{
    render(){
        return(
            <div>
                <div> <Time timename="Vasca" /> </div>
                <div><Partida /></div>
                <div><Time timename="Valesca" /></div>
            </div>
        );
    }
}