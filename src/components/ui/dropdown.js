import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropDownTrigger = styled.div`
  height: 40px;
  background: #fff;
  position: relative;
`;

const Selected = styled.div`
  height: 40px;
  padding: 0 10px;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
`;

const BoxOptions = styled.div`
  padding: 0 10px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  position: absolute;
  top: 40px;
  left: -1px;
  right: -1px;
  z-index: 9999;
  background: #fff;
  box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, 0.1);
  transform: ${props => (props.vivsible ? 'scale3d(1, 1, 1)' : 'scale3d(1, 0, 1)')};
  transform-origin: top;
  transition: all, 120ms;
`;

const UlStyled = styled.ul`
  padding-bottom: 5px;

  li {
    padding: 5px;
    cursor: pointer;
  }
  li:hover {
    background: #f9f9f9;
  }
`;

class DropDown extends React.Component {
  state = {
    displayDropDown: false,
  };

  toggle = () => {
    this.setState({ displayDropDown: !this.state.displayDropDown });
  };

  handleChange = option => {
    this.toggle();
    this.props.onSelect(option);
  };

  shouldComponentUpdate(nextProps) {
    return !this.props.selected !== nextProps.selected;
  }

  render() {
    return (
      <DropDownTrigger>
        <Selected onClick={this.toggle}>
          {this.props.selected ? this.props.selected[this.props.dataKey] : 'Escolha um opção'}
        </Selected>
        <BoxOptions vivsible={this.state.displayDropDown}>
          <UlStyled>
            {this.props.options.map(opt => (
              <li key={`opt-${opt[this.props.dataId]}`} onClick={_ => this.handleChange(opt)}>
                {opt[this.props.dataKey]}
              </li>
            ))}
          </UlStyled>
        </BoxOptions>
      </DropDownTrigger>
    );
  }
}

DropDown.defaultProps = {
  options: [],
};

DropDown.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
  selected: PropTypes.any,
  dataKey: PropTypes.string,
  dataId: PropTypes.any,
};

export default DropDown;
