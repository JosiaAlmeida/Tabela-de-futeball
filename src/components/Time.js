import React from 'react'
import Botao from './Botao'

export default function Time(props){
    const {timename}= props
    return(
        <div>
            <h1>{timename}</h1>
            <h2>0</h2>
            <Botao></Botao>
        </div>
    );
}