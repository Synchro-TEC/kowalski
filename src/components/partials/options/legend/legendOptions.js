import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import Values from '../../../../echarts-props/options/values';
import ElementPadding from '../../../ui/elementPadding';
import Area from '../../../ui/area';
import Switcher from '../../../ui/switcher';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
import compnentsUtils from '../../../../utils/componentsUtils';
import Title from '../../../../constants/titles';

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

  const changeVisible = value => {
    props.store.setValue('chart.legend.show', value === 'true');
  };

  return (
    <Area>
      <Collapsible
        trigger={compnentsUtils.generateColapsableTitle(Title.collapsible.legendOptions, 'closed')}
        triggerWhenOpen={compnentsUtils.generateColapsableTitle(Title.collapsible.legendOptions, 'openned')}
        transitionTime={200}
        transitionCloseTime={100}
        open={true}
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
                fields={Values.choice}
                title="Visível"
                currentValue={props.store.chart.legend.show}
                changeHandler={changeVisible}
              />
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
