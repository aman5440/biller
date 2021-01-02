import React from 'react'
import style from './input.css'
export default function Ifloat(props) {
    return (
            <input onKeyDown={props.handleEnter} style={{border:'1px solid #000'}} style={{border:'1px solid #000'}} type="number" />
    )
}
