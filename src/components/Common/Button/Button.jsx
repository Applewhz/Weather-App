import React from "react";
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props) => {
        return (
        <div>
            <button onClick={props.onClick} value={props.value} type={props.type}>{props.title}</button>
        </div>
        )
}

//TODO
export const CustomButton = (props) => {
    return (
        <div className="buttonContainer" onClick={props.onClick}>
            <FontAwesomeIcon className='Icon' icon={props.icon} />
        </div>
    )

}