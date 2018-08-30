import React, { Component } from "react";

import PropTypes from "prop-types";

export default class InstructorsInfo extends Component {
  render() {
    const instList = this.props.instructors.map(instructor => {
      return (
        <li key={instructor.id}>
          <h2>{instructor.name}</h2>
          <img src={instructor.avatar} alt={instructor.name} />
          <p>
            <strong>Hobby:</strong> {instructor.hobby}
          </p>
        </li>
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

InstructorsInfo.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  hobby: PropTypes.string
};
