import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import ElementPadding from '../../../ui/elementPadding';
import Area from '../../../ui/area';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
import compnentsUtils from '../../../../utils/componentsUtils';
import Title from '../../../../constants/titles';
const ChartAreaOptions = props => {
  const changeGridPosition = (values, gridValues) => {
    props.store.updateGridOptions(gridValues);
  };
  return (
    <Area>
      <Collapsible
        trigger={compnentsUtils.generateColapsableTitle(Title.collapsible.chartArea, 'closed')}
        triggerWhenOpen={compnentsUtils.generateColapsableTitle(Title.collapsible.chartArea, 'openned')}
        transitionTime={200}
        open={false}
      >
        <Tabs>
          <TabList>
            <Tab>Margens</Tab>
          </TabList>
          <TabPanel>
            <div className="sv-form sv-pa--15 sv-bg-color--white-1">
              <ElementPadding
                values={[
                  props.store.chart.grid[0].top,
                  props.store.chart.grid[0].right,
                  props.store.chart.grid[0].bottom,
                  props.store.chart.grid[0].left,
                ]}
                handlerChange={changeGridPosition}
              />
            </div>
          </TabPanel>
        </Tabs>
      </Collapsible>
    </Area>
  );
};

ChartAreaOptions.propTypes = {
  store: PropTypes.object,
};

export default view(ChartAreaOptions);
