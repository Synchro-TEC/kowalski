import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import Values from '../../../../echarts-props/options/values';
import Area from '../../../ui/area';
import Switcher from '../../../ui/switcher';
import compnentsUtils from '../../../../utils/componentsUtils';
import Title from '../../../../constants/titles';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Collapsible from 'react-collapsible';

const radiusOptions = props => {
  const changeLabel = value => {
    props.store.setValue('chart.series[0].label.normal.show', value === 'true');
    props.store.setValue('chart.series[0].labelLine.normal.show', value === 'true');
  };
  const changeInnerRadius = e => props.store.setValue('chart.series[0].radius[0]', `${e.target.value}%`);
  const changeOuterRadius = e => props.store.setValue('chart.series[0].radius[1]', `${e.target.value}%`);
  const changeVerticalAlign = e => props.store.setValue('chart.series[0].center[0]', `${e.target.value}%`);
  const changeHorizontalAlign = e => props.store.setValue('chart.series[0].center[1]', `${e.target.value}%`);
  const changeRoseType = value => props.store.setValue('chart.series[0].roseType', value);

  return (
    <Area>
      <Collapsible
        trigger={compnentsUtils.generateColapsableTitle(Title.collapsible.radiusOptions, 'closed')}
        triggerWhenOpen={compnentsUtils.generateColapsableTitle(Title.collapsible.radiusOptions, 'openned')}
        transitionTime={200}
        transitionCloseTime={100}
        open={false}
      >
        <Tabs>
          <TabList>
            <Tab>Raios</Tab>
            <Tab>Exibição</Tab>
          </TabList>

          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1 sv-form">
              <label>
                <span>
                  Raio Interno: <b>[{props.store.chart.series[0].radius[0]}]</b>
                </span>
                <input
                  type="range"
                  min="0"
                  max="95"
                  value={props.store.chart.series[0].radius[0].replace('%', '')}
                  onChange={changeInnerRadius}
                  style={{ width: '100%' }}
                />
              </label>
              <label>
                <span>
                  Raio Externo: <b>[{props.store.chart.series[0].radius[1]}]</b>
                </span>
                <input
                  type="range"
                  min="0"
                  max="95"
                  value={parseInt(props.store.chart.series[0].radius[1].replace('%', ''), 10)}
                  onChange={changeOuterRadius}
                  style={{ width: '100%' }}
                />
              </label>
              <label>
                <span>
                  Alinhamento Horizontal: <b>[{props.store.chart.series[0].center[0]}]</b>
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={props.store.chart.series[0].center[0].replace('%', '')}
                  onChange={changeVerticalAlign}
                  style={{ width: '100%' }}
                />
              </label>
              <label>
                <span>
                  Alinhamento Vertical: <b>[{props.store.chart.series[0].center[1]}]</b>
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={parseInt(props.store.chart.series[0].center[1].replace('%', ''), 10)}
                  onChange={changeHorizontalAlign}
                  style={{ width: '100%' }}
                />
              </label>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1 sv-form">
              <Switcher
                fields={Values.pie.roseType}
                title="Formato"
                currentValue={props.store.chart.series[0].roseType}
                changeHandler={changeRoseType}
              />

              <Switcher
                fields={Values.pie.label}
                title="Rótulos"
                currentValue={props.store.chart.series[0].label.normal.show}
                changeHandler={changeLabel}
              />
            </div>
          </TabPanel>
        </Tabs>
      </Collapsible>
    </Area>
  );
};

radiusOptions.propTypes = {
  store: PropTypes.object,
};

export default view(radiusOptions);
