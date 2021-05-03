import React, { Component } from 'react'
import Time from './Time'
import Partida from './Partida'


const dados = {
    partida:{
        estado: "Marcanã/RJ",
        data: "01/06/2022",
        horario: "19h"
    },
    casa:{
        nome:"Vasco"
    },
    visitante:{
        nome:"Flamengo"
    }
}
export default function PlacarContainer(){
    return(
        <div>
            <div className="flex margin"> 
                <h1>Casa</h1>
                <Time timename={dados.casa.nome} /> 
            </div>

            <div className="flex margin">
                <Partida data={dados.partida.data}
                    Estado={dados.partida.estado} tempo={dados.partida.horario} />
             </div>

            <div className="flex margin">
                <h1>Visitante</h1>
                <Time timename={dados.visitante.nome} />
            </div>
        </div>
    );
}