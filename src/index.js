import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Kowalski extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.appName}</h2>
      </div>
    );
  }
}

Kowalski.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Kowalski;
