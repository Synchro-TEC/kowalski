import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Values from '../../../echarts-props/options/values';
import ElementPadding from '../../ui/elementPadding';
import AreaTitle from '../../ui/areaTitle';
import AreaSubTitle from '../../ui/areaSubTitle';
import Switcher from '../../ui/switcher';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
    <div style={{ borderBottom: '1px solid #ccc' }}>
      <AreaTitle>Legenda</AreaTitle>

      <Tabs>
        <TabList>
          <Tab>Exibição</Tab>
          <Tab>Posição</Tab>
          <Tab>Margens</Tab>
        </TabList>

        <TabPanel>
          <div className="sv-pa--5">
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
          <div className="sv-pa--5">
            <Switcher
              fields={Values.align}
              title="Posição"
              currentValue={props.store.chart.legend.left}
              changeHandler={changeLegendPosition}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="sv-form sv-pa--5">
            <ElementPadding values={props.store.chart.legend.padding} handlerChange={changePadding} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

LegendOptions.propTypes = {
  store: PropTypes.object,
};

export default view(LegendOptions);
