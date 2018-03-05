import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.h6`
  background: none;
  border-bottom: 1px dotted #d3dce7;
  padding: 5px;
  font-weight: 400;
  margin: 0;
`;

const AreaSubTitle = props => {
  return <StyledSubTitle>{props.children}</StyledSubTitle>;
};

export default AreaSubTitle;
