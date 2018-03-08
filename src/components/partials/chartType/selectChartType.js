import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
import DropDown from '../../ui/dropdown';

const SelectChartType = props => {
  const onSelectPlot = plot => {
    props.store.setPlot(plot);
  };

  return (
    <Area>
      <AreaTitle>Tipo do Gráfico</AreaTitle>
      <DropDown
        selected={props.store.selectedPlot}
        options={props.store.plots}
        onSelect={onSelectPlot}
        dataKey="title"
        dataId="id"
      />
    </Area>
  );
};

SelectChartType.propTypes = {
  store: PropTypes.object,
};

export default view(SelectChartType);
