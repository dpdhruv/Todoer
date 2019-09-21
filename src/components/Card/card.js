import React from 'react';
import './card.scss';

export const Card = props => {
    return (
        <div className={`card todo-card ${props.className}`}>
            <div className="container">
                <div className="todo-card-title">
                    {props.title}
                </div>
                <div className={`todo-card-body ${props.bodyAlign}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

