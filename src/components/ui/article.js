import React from 'react';
import styled from 'styled-components';

const Styledarticle = styled.article`
  overflow-y: auto;
  -webkit-box-flex: 2;
  -o-box-flex: 2;
  box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  background: #f0eeee;
`;

const Article = props => {
  return <Styledarticle>{props.children}</Styledarticle>;
};

export default Article;
