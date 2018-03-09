import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AreaStyled = styled.div`
  border: 1px solid #dcdcdc;
  margin-bottom: 13px;
  box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, 0.1);
`;

const Area = props => {
  return <AreaStyled style={props.style}>{props.children}</AreaStyled>;
};

Area.propTypes = {
  style: PropTypes.object,
};

export default Area;
