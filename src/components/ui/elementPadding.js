import React from 'react';
import PropTypes from 'prop-types';
class ElementPadding extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeVal = this.onChangeVal.bind(this);
  }

  onChangeVal() {
    const top = parseInt(this.topVal.value || 0, 10);
    const right = parseInt(this.rightVal.value || 0, 10);
    const bottom = parseInt(this.bottomVal.value || 0, 10);
    const left = parseInt(this.leftVal.value || 0, 10);

    this.props.handlerChange([top, right, bottom, left], {
      top: top,
      right: right,
      bottom: bottom,
      left: left,
    });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td />
            <td>
              <input
                type="number"
                step="1"
                min="0"
                max="1000"
                ref={input => {
                  this.topVal = input;
                }}
                value={this.props.values[0]}
                onChange={this.onChangeVal}
              />
            </td>
            <td />
          </tr>
          <tr>
            <td>
              <input
                type="number"
                step="1"
                min="0"
                max="1000"
                ref={input => {
                  this.leftVal = input;
                }}
                value={this.props.values[3]}
                onChange={this.onChangeVal}
              />
            </td>
            <td />
            <td>
              <input
                type="number"
                step="1"
                min="0"
                max="1000"
                ref={input => {
                  this.rightVal = input;
                }}
                value={this.props.values[1]}
                onChange={this.onChangeVal}
              />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <input
                type="number"
                step="1"
                min="0"
                max="1000"
                ref={input => {
                  this.bottomVal = input;
                }}
                value={this.props.values[2]}
                onChange={this.onChangeVal}
              />
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    );
  }
}
ElementPadding.defaultProps = {
  values: [0, 0, 0, 0],
};

ElementPadding.propTypes = {
  values: PropTypes.array.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default ElementPadding;
