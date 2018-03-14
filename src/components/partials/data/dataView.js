import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import HotTable from 'react-handsontable';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';

const DataView = props => {
  return (
    <div style={{ height: '300px' }}>
      <Area>
        <AreaTitle>Data</AreaTitle>
        <HotTable root="hot" data={props.store.data} colHeaders={true} rowHeaders={true} height="300" stretchH="all" />
      </Area>
    </div>
  );
};

DataView.propTypes = {
  store: PropTypes.object,
};

export default view(DataView);
