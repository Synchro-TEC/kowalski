import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
// import Values from '../../../../echarts-props/options/values';
import Area from '../../../ui/area';
import AreaTitle from '../../../ui/areaTitle';
// import Switcher from '../../../ui/switcher';
// import Cancan from '../../../ui/Cancan';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
// import ColorPicker from '../../../ui/colorPicker';

const radiusOptions = props => {
  // const changeSplitLine = value => props.store.setValue('chart.xAxis.splitLine.show', value === 'true');
  // const changeAxisLine = value => props.store.setValue('chart.xAxis.axisLine.show', value === 'true');
  // const changeRotate = e => props.store.setValue('chart.xAxis.axisLabel.rotate', e.target.value);
  // const changeLabelColor = color => props.store.setValue('chart.xAxis.axisLabel.color', color);
  const changeInnerRadius = e => props.store.setValue('chart.series[0].radius[0]', `${e.target.value}%`);
  const changeOuterRadius = e => props.store.setValue('chart.series[0].radius[1]', `${e.target.value}%`);
  const changeVerticalAlign = e => props.store.setValue('chart.series[0].center[0]', `${e.target.value}%`);
  const changeHorizontalAlign = e => props.store.setValue('chart.series[0].center[1]', `${e.target.value}%`);

  return (
    <Area>
      <Collapsible
        trigger={
          <AreaTitle>
            Raio
            <i className="fa fa-fw fa-angle-double-down sv-pull-right" />
          </AreaTitle>
        }
        triggerWhenOpen={
          <AreaTitle>
            Raio
            <i className="fa fa-fw fa-angle-double-up sv-pull-right" />
          </AreaTitle>
        }
        transitionTime={200}
        transitionCloseTime={100}
        open={false}
      >
        <Tabs>
          <TabList>
            <Tab>Diâmetros</Tab>
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
        </Tabs>
      </Collapsible>
    </Area>
  );
};

radiusOptions.propTypes = {
  store: PropTypes.object,
};

export default view(radiusOptions);
