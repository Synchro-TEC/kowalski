import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import HotTable from 'react-handsontable';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class DataView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <Area style={{ height: '275px' }}>
        <AreaTitle>Dados</AreaTitle>
        <Tabs>
          <TabList>
            <Tab>Dados</Tab>
          </TabList>

          <TabPanel>
            <div className="sv-pa--10 sv-bg-color--white-1">
              <HotTable
                root="hot"
                ref={rawHot => {
                  this.rawHot = rawHot;
                }}
                data={props.store.chart.dataset.source}
                disableVisualSelection={['current', 'area', 'header']}
                columnSorting={true}
                sortIndicator={true}
                // colHeaders={props.store.columns}
                // columns={props.store.columns.map(c => {
                //   return { data: c, readOnly: true };
                // })}
                rowHeaders={false}
                height="188"
                stretchH="all"
                stretchW="all"
              />
            </div>
          </TabPanel>
        </Tabs>
      </Area>
    );
  }
}

DataView.propTypes = {
  store: PropTypes.object,
};

export default view(DataView);

/*

 {props.store.data.length ? (
                <HotTable
                  root="hot"
                  ref={rawHot => {
                    this.rawHot = rawHot;
                  }}
                  data={props.store.data}
                  disableVisualSelection={['current', 'area', 'header']}
                  columnSorting={true}
                  sortIndicator={true}
                  colHeaders={props.store.columns.map(c => c.columnLabel)}
                  columns={props.store.columns.map(c => {
                    return { data: c.columnName, readOnly: true };
                  })}
                  rowHeaders={false}
                  height="188"
                  stretchH="all"
                  stretchW="all"
                />
              ) : (
                ''
              )}
* */
