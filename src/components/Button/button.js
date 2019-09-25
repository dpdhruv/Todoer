import React from "react";
import { ButtonLoader } from "../Loader/index";
import "./button.scss";
export const SolidButton = props => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`btn todo-solid-button ${props.loading?`todo-button-loading`:''} ${props.className}`}
    >
			{props.loading && (<ButtonLoader>{props.children}</ButtonLoader>)}
			{!props.loading&&props.children}
    </button>
  );
};

export const OutlineButton = props => {
  return <button className="outline-button btn">{props.title}</button>;
};
