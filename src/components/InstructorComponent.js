import React, { Component } from "react";
import Tutor from './TutorComponent';
import PropTypes from "prop-types";

export default class InstructorsInfo extends Component {
  render() {
    const instList = this.props.instructors.map(instructor => {
      return (
        <Tutor
           key={instructor.id}
           name={instructor.name}
           avatar={instructor.avatar}
           hobby={instructor.hobby}
           />
         );
       });
      return (
      <div>
        <h1>Instructors</h1>
        <ul>{instList}</ul>
      </div>
    );
  }
}
