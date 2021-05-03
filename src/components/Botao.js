import React,{useState} from 'react'

export default function botao(props){
    const {onClic}=props
    return(
        <div>
            <button onClick={onClic} >GOL</button>
        </div>
    );
}