import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h5`
  background: #d3dce7;
  padding: 5px;
  font-weight: 400;
  margin: 0 0 10px 0;
  text-align: center;
`;

const AreaTitle = props => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default AreaTitle;
