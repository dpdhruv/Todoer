import React from 'react';
import './button.scss';
export const SolidButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className={`btn todo-solid-button ${props.className}`}>{props.title}</button>
    )
}

export const OutlineButton = props =>{
    return(
        <button className="outline-button btn">{props.title}</button>
    )
}


