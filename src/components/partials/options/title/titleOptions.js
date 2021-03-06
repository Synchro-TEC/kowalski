import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Values from '../../../../echarts-props/options/values';
import ColorPicker from '../../../ui/colorPicker';
import Area from '../../../ui/area';
import Switcher from '../../../ui/switcher';
import ElementPadding from '../../../ui/elementPadding';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
import compnentsUtils from '../../../../utils/componentsUtils';
import Title from '../../../../constants/titles';

const TitleOptions = props => {
  const setTextColor = color => {
    props.store.setValue('chart.title.textStyle.color', color);
  };

  const setSubtextColor = color => {
    props.store.setValue('chart.title.subtextStyle.color', color);
  };

  const setTitlePosition = value => {
    props.store.setValue('chart.title.left', value);
  };

  const changePadding = values => {
    props.store.setValue('chart.title.padding', values);
  };

  return (
    <Area>
      <Collapsible
        trigger={compnentsUtils.generateColapsableTitle(Title.collapsible.titleOptions, 'closed')}
        triggerWhenOpen={compnentsUtils.generateColapsableTitle(Title.collapsible.titleOptions, 'openned')}
        transitionTime={200}
        transitionCloseTime={100}
        open={true}
      >
        <Tabs>
          <TabList>
            <Tab>Texto</Tab>
            <Tab>Formatação</Tab>
            <Tab>Margens</Tab>
          </TabList>
          <TabPanel>
            <div className="sv-form sv-pa--15 sv-bg-color--white-1">
              <label>
                Titulo:
                <input
                  type="text"
                  value={props.store.chart.title.text}
                  onChange={e => props.store.setValue('chart.title.text', e.target.value)}
                />
              </label>

              <label>
                Subtitulo:
                <textarea
                  value={props.store.chart.title.subtext}
                  onChange={e => props.store.setValue('chart.title.subtext', e.target.value)}
                />
              </label>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="sv-form sv-pa--15 sv-bg-color--white-1">
              <label>
                Cor do título:
                <ColorPicker color={props.store.chart.title.textStyle.color} handleChange={setTextColor} />
              </label>
              <label>
                Cor do Subtítulo:
                <ColorPicker color={props.store.chart.title.subtextStyle.color} handleChange={setSubtextColor} />
              </label>
              <Switcher
                fields={Values.align}
                title="Alinhamento"
                currentValue={props.store.chart.title.left}
                changeHandler={setTitlePosition}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="sv-form sv-pa--15 sv-bg-color--white-1">
              <ElementPadding values={props.store.chart.title.padding} handlerChange={changePadding} />
            </div>
          </TabPanel>
        </Tabs>
      </Collapsible>
    </Area>
  );
};

TitleOptions.propTypes = {
  store: PropTypes.object,
};

export default view(TitleOptions);
