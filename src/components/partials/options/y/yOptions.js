import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import Values from '../../../../echarts-props/options/values';
// import ElementPadding from '../../../ui/elementPadding';
import Area from '../../../ui/area';
import AreaTitle from '../../../ui/areaTitle';
import Switcher from '../../../ui/switcher';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
// import 'react-tabs/style/react-tabs.css';

const yOptions = props => {
  const changeType = value => {
    const val = value === 'true';
    props.store.setValue('chart.yAxis.splitLine.show', val);
  };

  const changeAxisLine = value => {
    const val = value === 'true';
    props.store.setValue('chart.yAxis.axisLine.show', val);
  };

  const changeRotate = e => props.store.setValue('chart.yAxis.axisLabel.rotate', e.target.value);

  return (
    <Area>
      <Collapsible
        trigger={
          <AreaTitle>
            Eixo Y
            <i className="fa fa-fw fa-angle-double-down sv-pull-right" />
          </AreaTitle>
        }
        triggerWhenOpen={
          <AreaTitle>
            Eixo Y
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
            <Tab>Labels</Tab>
          </TabList>

          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1">
              {Object.keys(props.store.chart).includes('yAxis') ? (
                <React.Fragment>
                  <Switcher
                    fields={Values.choice}
                    title="Exibir linhas guia"
                    currentValue={props.store.chart.yAxis.splitLine.show}
                    changeHandler={changeType}
                  />
                  <Switcher
                    fields={Values.choice}
                    title="Exibir linha no eixo"
                    currentValue={props.store.chart.yAxis.axisLine.show}
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
              {Object.keys(props.store.chart).includes('yAxis') ? (
                <div className="sv-row--with-gutter">
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
                  <div className="sv-column">
                    <label className="sv-mb--0">
                      Tamanho:
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
