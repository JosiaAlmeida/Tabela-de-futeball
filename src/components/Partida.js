import React, {useState, useEffect} from 'react'

export default function Partida(props){
    const {tempo,Estado,data}= props
    return(
        <div>
            <h1>{Estado}</h1>
            <h3>Data: {data} Tempo: {tempo} </h3>
        </div>
    );
}