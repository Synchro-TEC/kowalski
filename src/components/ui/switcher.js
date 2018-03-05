import React from 'react';
import styled from 'styled-components';

const SwitchField = styled.div`
  overflow: hidden;

  input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  label {
    float: left;
    displsay: inline-block;
    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    text-shadow: none;
    padding: 6px 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  label:hover {
    cursor: pointer;
  }

  input:checked + label {
    background-color: #a5dc86;
  }

  label:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  label:last-of-type {
    border-radius: 0 4px 4px 0;
  }
`;

const SwitchFieldTitle = styled.div`
  margin-bottom: 6px;
`;

const Switcher = props => {
  return (
    <SwitchField>
      <SwitchFieldTitle>Is this awesome?</SwitchFieldTitle>
      <input type="radio" id="switch_left" name="switch_2" value="yes" checked />
      <label htmlFor="switch_left">Horizontal</label>
      <input type="radio" id="switch_right" name="switch_2" value="no" />
      <label htmlFor="switch_right">Vertical</label>
    </SwitchField>
  );
};

export default Switcher;
