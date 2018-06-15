import React from 'react';
import PropTypes from 'prop-types';

class Cancan extends React.Component {
  renderChildren() {
    const children = this.props.children;
    return React.Children.map(children, child => {
      return child;
    });
  }

  render() {
    return this.props.condition ? <React.Fragment>{this.renderChildren()}</React.Fragment> : '';
  }
}

Cancan.defaultProps = {
  condition: false,
};

Cancan.propTypes = {
  condition: PropTypes.bool.isRequired,
};

export default Cancan;
