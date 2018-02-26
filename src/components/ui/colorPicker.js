import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.props.handleChange(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`, color);
  };

  shouldComponentUpdate(nextProps) {
    return !this.props.color !== nextProps.color;
  }

  _extractRGBA(stringColor) {
    const color = stringColor
      .replace('rgba(', '')
      .replace(')', '')
      .split(',')
      .map(s => s.trim());

    return { r: color[0], g: color[1], b: color[2], a: color[3] };
  }

  render() {
    const color = this._extractRGBA(this.props.color);
    const styles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    };

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={this.props.color} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  color: 'rgba(250,250,250,1)',
};

ColorPicker.propTypes = {
  color: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default ColorPicker;
