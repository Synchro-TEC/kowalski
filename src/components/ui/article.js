import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Styledarticle = styled.article`
  overflow-y: hidden;
  -webkit-box-flex: 2;
  -o-box-flex: 2;
  box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  background: #f7f7f7;
`;

const Article = props => {
  return <Styledarticle style={props.style}>{props.children}</Styledarticle>;
};

Article.propTypes = {
  style: PropTypes.object,
};

export default Article;
