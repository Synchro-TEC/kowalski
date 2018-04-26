import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h5`
  background: #eaecf1;
  padding: 10px 5px;
  font-weight: 400;
  margin: 0;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

const AreaTitle = props => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default AreaTitle;
