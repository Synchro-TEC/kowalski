import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

const TitleOptions = props => {
  return (
    <div>
      <p>
        Titulo:{' '}
        <input
          type="text"
          value={props.state.chart.title.text}
          onChange={e => props.state.setValue('chart.title.text', e.target.value)}
        />
      </p>
    </div>
  );
};

TitleOptions.propTypes = {
  state: PropTypes.object,
};

export default view(TitleOptions);
