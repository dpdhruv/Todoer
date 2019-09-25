import React from 'react'
import './loader.scss'

export const ButtonLoader = props => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-text ml-2">{props.children}</div>
    </div>
  )
}

export const ScreenLoader = props => {
console.log("loading")
  return (
    <div className="loading">
      <div className="loader">
      </div>  
    </div>
  )
}
