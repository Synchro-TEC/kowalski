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
        height: `${this.props.colorHeight}px`,
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        display: 'inline-block',
        cursor: 'pointer',
        border: '1px solid #c0ccda',
        boxShadow: 'inset 0 0 3px #e0e6ed',
        height: '32px',
        width: this.props.outerWidth,
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
            <SketchPicker color={this.props.color} onChange={this.handleChange} presetColors={[]} />
          </div>
        ) : null}
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  color: 'rgba(250,250,250,1)',
  colorHeight: 21,
  outerWidth: '50px',
};

ColorPicker.propTypes = {
  color: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  colorHeight: PropTypes.number,
  outerWidth: PropTypes.string,
};

export default ColorPicker;
