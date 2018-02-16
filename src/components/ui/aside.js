import React from 'react';
import styled from 'styled-components';

const Styledaside = styled.aside`
  overflow-y: auto;
  -webkit-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -ms-flex: 0 0 200px;
  flex: 0 0 230px;
  background: #f7f7f7;
`;

const Aside = props => {
  return <Styledaside>{props.children}</Styledaside>;
};

export default Aside;
