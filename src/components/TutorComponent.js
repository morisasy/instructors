import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Tutor (props){

    return (
      <li>
        <h2>{props.name}</h2>
        <img src={props.avatar} alt={props.name} />
        <p>
          <strong>Hobby:</strong> {props.hobby}
        </p>
      </li>
    );

}

Tutor.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  hobby: PropTypes.string
};
