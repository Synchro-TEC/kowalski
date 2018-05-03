import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import Values from '../../../../echarts-props/options/values';
import ElementPadding from '../../../ui/elementPadding';
import Area from '../../../ui/area';
import AreaTitle from '../../../ui/areaTitle';
import Switcher from '../../../ui/switcher';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
// import 'react-tabs/style/react-tabs.css';

const LegendOptions = props => {
  const changeLegendPosition = value => {
    props.store.setValue('chart.legend.left', value);
  };

  const changePadding = values => {
    props.store.setValue('chart.legend.padding', values);
  };

  const changeOrientation = value => {
    props.store.setValue('chart.legend.orient', value);
  };

  const changeType = value => {
    props.store.setValue('chart.legend.type', value);
  };

  return (
    <Area>
      <Collapsible
        trigger={
          <AreaTitle>
            Legenda
            <i className="fa fa-fw fa-angle-double-down sv-pull-right" />
          </AreaTitle>
        }
        triggerWhenOpen={
          <AreaTitle>
            Legenda
            <i className="fa fa-fw fa-angle-double-up sv-pull-right" />
          </AreaTitle>
        }
        transitionTime={200}
        transitionCloseTime={100}
        open={false}
      >
        <Tabs>
          <TabList>
            <Tab>Exibição</Tab>
            <Tab>Posição</Tab>
            <Tab>Margens</Tab>
          </TabList>

          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1">
              <Switcher
                fields={Values.legend.type}
                title="Exibição"
                currentValue={props.store.chart.legend.type}
                changeHandler={changeType}
              />
              <Switcher
                fields={Values.legend.orient}
                title="Orientação"
                currentValue={props.store.chart.legend.orient}
                changeHandler={changeOrientation}
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="sv-pa--15 sv-bg-color--white-1">
              <Switcher
                fields={Values.align}
                title="Posição"
                currentValue={props.store.chart.legend.left}
                changeHandler={changeLegendPosition}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="sv-form sv-pa--15 sv-bg-color--white-1">
              <ElementPadding values={props.store.chart.legend.padding} handlerChange={changePadding} />
            </div>
          </TabPanel>
        </Tabs>
      </Collapsible>
    </Area>
  );
};

LegendOptions.propTypes = {
  store: PropTypes.object,
};

export default view(LegendOptions);
