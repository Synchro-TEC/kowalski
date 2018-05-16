import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AxisX = props => {
  debugger;
  const cols = props.store.columns.map((col, i) => (
    <option value={col} key={`col-${i}`}>
      {col}
    </option>
  ));

  const showHideX = e => {
    props.store.setValue('chart.xAxis.show', e.target.checked);
  };

  const showHideXLine = e => {
    props.store.setValue('chart.xAxis.axisLine.show', e.target.checked);
  };

  return (
    <Area>
      <AreaTitle>Eixo X</AreaTitle>
      <Tabs>
        <TabList>
          <Tab>Coluna</Tab>
          <Tab>Opções</Tab>
        </TabList>

        <TabPanel>
          <div className="sv-form sv-pa--15 sv-bg-color--white-1">
            <label>
              <span>Coluna mapeada no eixo X</span>
              <select
                onChange={e => props.store.setAxisX(e.target.value)}
                value={props.store.chart.dataset.dimensions[0]}
              >
                <option value="">Escolha</option>
                {cols}
              </select>
            </label>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="sv-form sv-pa--15 sv-bg-color--white-1">
            <label>
              <input type="checkbox" checked={props.store.chart.xAxis.show} onChange={showHideX} /> Exibir
            </label>
            {props.store.chart.xAxis.show ? (
              <label>
                <input type="checkbox" checked={props.store.chart.xAxis.axisLine.show} onChange={showHideXLine} />{' '}
                Exibir Linha
              </label>
            ) : (
              ''
            )}
          </div>
        </TabPanel>
      </Tabs>
    </Area>
  );
};

AxisX.propTypes = {
  store: PropTypes.object,
};
export default view(AxisX);
