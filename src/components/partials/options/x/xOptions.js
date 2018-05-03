import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import Values from '../../../../echarts-props/options/values';
import Area from '../../../ui/area';
import AreaTitle from '../../../ui/areaTitle';
import Switcher from '../../../ui/switcher';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
import ColorPicker from '../../../ui/colorPicker';

const xOptions = props => {
  const changeSplitLine = value => {
    const val = value === 'true';
    props.store.setValue('chart.xAxis.splitLine.show', val);
  };

  const changeAxisLine = value => {
    const val = value === 'true';
    props.store.setValue('chart.xAxis.axisLine.show', val);
  };

  const changeRotate = e => props.store.setValue('chart.xAxis.axisLabel.rotate', e.target.value);
  const changeLabelColor = color => props.store.setValue('chart.xAxis.axisLabel.color', color);

  return (
    <Area>
      <Collapsible
        trigger={
          <AreaTitle>
            Eixo X
            <i className="fa fa-fw fa-angle-double-down sv-pull-right" />
          </AreaTitle>
        }
        triggerWhenOpen={
          <AreaTitle>
            Eixo X
            <i className="fa fa-fw fa-angle-double-up sv-pull-right" />
          </AreaTitle>
        }
        transitionTime={200}
        transitionCloseTime={100}
        open={false}
      >
        <Tabs>
          <TabList>
            <Tab>Linhas</Tab>
            <Tab>Label</Tab>
          </TabList>

          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1">
              {Object.keys(props.store.chart).includes('xAxis') ? (
                <React.Fragment>
                  <Switcher
                    fields={Values.choice}
                    title="Exibir linhas guia"
                    currentValue={props.store.chart.xAxis.splitLine.show}
                    changeHandler={changeSplitLine}
                  />
                  <Switcher
                    fields={Values.choice}
                    title="Exibir linha no eixo"
                    currentValue={props.store.chart.xAxis.axisLine.show}
                    changeHandler={changeAxisLine}
                  />
                </React.Fragment>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1 sv-form">
              {Object.keys(props.store.chart).includes('xAxis') ? (
                <div className="sv-row--with-gutter sv-mb--0">
                  <div className="sv-column">
                    <label>
                      Cor:
                      <ColorPicker
                        color={props.store.chart.xAxis.axisLabel.color}
                        handleChange={changeLabelColor}
                        height={21}
                        outerWidth="100%"
                      />
                    </label>
                  </div>
                  <div className="sv-column">
                    <label className="sv-mb--0">
                      Rotação:
                      <input
                        type="number"
                        onChange={changeRotate}
                        value={props.store.chart.xAxis.axisLabel.rotate}
                        step="1"
                        min="-90"
                        max="90"
                        maxLength="3"
                      />
                    </label>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
        </Tabs>
      </Collapsible>
    </Area>
  );
};

xOptions.propTypes = {
  store: PropTypes.object,
};

export default view(xOptions);
