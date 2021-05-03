import React from 'react'
import Botao from './Botao'

export default function Time(props){
    const {timename}= props
    return(
        <div>
            <h2>{timename}</h2>
            <h2>0</h2>
            <Botao></Botao>
        </div>
    );
}