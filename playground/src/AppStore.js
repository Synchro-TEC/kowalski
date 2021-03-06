import { store } from 'react-easy-state';

// store the central data and logic of the application in a global app store
// use 'appStore' instead of 'this' in the store methods to make them passable as callbacks
import chart1 from './chart1';
import chart2 from './chart2';
import chart3 from './chart3';
import chart4 from './chart4';
import chart5 from './chart5';
import chart6 from './chart6';

let charts = {
  chart1,
  chart2,
  chart3,
  chart4,
  chart5,
  chart6,
};

const appStore = store({
  currentChart: null,
  currentChartId: null,
  showModal: false,
  setCurrentChart(chart) {
    appStore.currentChartId = chart;
    appStore.currentChart = charts[chart];
    appStore.showModal = true;
  },
  clearCurrentChart() {
    appStore.currentChartId = null;
    appStore.currentChart = null;
    appStore.showModal = false;
  },
  getCurrentChart() {
    return Object.assign(Object.create(null), appStore.currentChart);
  },
  getChart(chartId) {
    return charts[chartId];
  },
  updateChart(chart) {
    charts[appStore.currentChartId] = Object.assign({}, Object.create(null), chart);
    appStore.clearCurrentChart();
  },
});

export default appStore;
