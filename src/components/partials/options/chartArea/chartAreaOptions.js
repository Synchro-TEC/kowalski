import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import 'react-select/dist/react-select.css';
import ElementPadding from '../../../ui/elementPadding';
import Area from '../../../ui/area';
import AreaTitle from '../../../ui/areaTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';

const ChartAreaOptions = props => {
  const changeGridPosition = (values, gridValues) => {
    props.store.updateGridOptions(gridValues);
  };

  return (
    <Area>
      <Collapsible
        trigger={
          <AreaTitle>
            Opções do Gráfico
            <i className="fa fa-fw fa-angle-double-down sv-pull-right" />
          </AreaTitle>
        }
        triggerWhenOpen={
          <AreaTitle>
            Opções do Gráfico
            <i className="fa fa-fw fa-angle-double-up sv-pull-right" />
          </AreaTitle>
        }
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
