import React from "react";
import { Button } from "../Button/Button";
import './Input.css';

export const Search = (props) => {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>
    )
}
