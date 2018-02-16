import React from 'react';
import styled from 'styled-components';

const Styledmain = styled.main`
  -webkit-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

const Main = props => {
  return <Styledmain>{props.children}</Styledmain>;
};

export default Main;
