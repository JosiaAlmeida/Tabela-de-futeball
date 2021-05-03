import React, { useState } from 'react'
import Botao from './Botao'

export default function Time(props){
    const {timename}= props
    const [gol, setgol]=useState(0)
    const onGol = ()=>{
        setgol(gol+1)
    }
    return(
        <div>
            <h2>{timename}</h2>
            <h2> {gol} </h2>
            <Botao onClic={onGol} ></Botao>
        </div>
    );
}