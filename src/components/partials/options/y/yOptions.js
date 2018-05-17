import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import Values from '../../../../echarts-props/options/values';
import Area from '../../../ui/area';
import Switcher from '../../../ui/switcher';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
import ColorPicker from '../../../ui/colorPicker';
import compnentsUtils from '../../../../utils/componentsUtils';
import Title from '../../../../constants/titles';

const yOptions = props => {
  const changeSplitLine = value => props.store.setValue('chart.yAxis.splitLine.show', value === 'true');
  const changeAxisLine = value => props.store.setValue('chart.yAxis.axisLine.show', value === 'true');
  const changeRotate = e => props.store.setValue('chart.yAxis.axisLabel.rotate', e.target.value);
  const changeLabelColor = color => props.store.setValue('chart.yAxis.axisLabel.color', color);
  const changeLabelPosition = position => props.store.setValue('chart.yAxis.position', position);

  return (
    <Area>
      <Collapsible
        trigger={compnentsUtils.generateColapsableTitle(Title.collapsible.yOption, 'closed')}
        triggerWhenOpen={compnentsUtils.generateColapsableTitle(Title.collapsible.yOption, 'openned')}
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
              {Object.keys(props.store.chart).includes('yAxis') ? (
                <React.Fragment>
                  <Switcher
                    fields={Values.choice}
                    title="Exibir linhas guia"
                    currentValue={props.store.chart.yAxis.splitLine.show}
                    changeHandler={changeSplitLine}
                  />
                  <Switcher
                    fields={Values.choice}
                    title="Exibir linha no eixo"
                    currentValue={props.store.chart.yAxis.axisLine.show}
                    changeHandler={changeAxisLine}
                  />
                  <Switcher
                    fields={Values.axisYLabelPosition}
                    title="Posição do label"
                    currentValue={props.store.chart.yAxis.position}
                    changeHandler={changeLabelPosition}
                  />
                </React.Fragment>
              ) : (
                ''
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1 sv-form">
              {Object.keys(props.store.chart).includes('yAxis') ? (
                <React.Fragment>
                  <div className="sv-row--with-gutter sv-mb--0">
                    <div className="sv-column">
                      <label>
                        Cor:
                        <ColorPicker
                          color={props.store.chart.yAxis.axisLabel.color}
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
                          value={props.store.chart.yAxis.axisLabel.rotate}
                          step="1"
                          min="-90"
                          max="90"
                          maxLength="3"
                        />
                      </label>
                    </div>
                  </div>
                </React.Fragment>
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

yOptions.propTypes = {
  store: PropTypes.object,
};

export default view(yOptions);
