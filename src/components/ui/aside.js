import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styledaside = styled.aside`
  overflow-y: auto;
  -webkit-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -ms-flex: 0 0 270px;
  flex: 0 0 270px;
  background: #f7f7f7;
  padding: 10px;
`;
//-ms-flex: 0 0 ${props => (props.allowSeriesChange ? '270px' : '0')};
//flex: 0 0 ${ props => (props.allowSeriesChange ? '540px' : '0') };

const Aside = props => {
  return (
    <Styledaside style={props.style} allowSeriesChange={props.allowSeriesChange}>
      {props.children}
    </Styledaside>
  );
};

Aside.propTypes = {
  style: PropTypes.object,
  allowSeriesChange: PropTypes.any,
};

export default Aside;
