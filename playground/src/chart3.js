export default {
  type: 'bar',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      lineStyle: {
        color: '#ccc',
      },
    },
    backgroundColor: 'rgba(255,255,255,1)',
    padding: [5, 10],
    textStyle: {
      color: 'rgba(76,106,148,1)',
    },
    extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',
  },
  xAxis: {
    type: 'category',
    data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    boundaryGap: true,
    position: 'bottom',
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(100,100,100,1)',
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      rotate: 0,
      color: 'rgba(33,33,33, 1)',
      margin: '8',
      padding: [10, 5],
    },
  },
  yAxis: {
    type: 'value',
    position: 'left',
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(100,100,100,1)',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
      rotate: 0,
      color: 'rgba(33,33,33, 1)',
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      data: [420, 932, 901, 434, 290, 330, 754],
      type: 'line',
      itemStyle: {
        color: 'rgba(68, 202, 104, 1)',
      },
      name: 'Crédito',
      lineStyle: {
        width: 3,
      },
      smooth: false,
      // markPoint: {
      //   data: [{ type: 'max', name: 'Máximo' }, { type: 'min', name: 'Mínimo' }],
      // },
      label: {
        show: true,
        position: [0, 15],
        shadowColor: 'rgba(30,30,30,.8)',
        shadowBlur: 2,
        shadowOffsetX: 1,
        shadowOffsety: 1,
      },
    },
    {
      data: [240, 722, 4801, 73, 510, 1130, 321],
      type: 'bar',
      barWidth: '80%',
      itemStyle: {
        color: 'rgba(255,0,17, 1)',
      },
      name: 'Débito',
      label: {
        normal: {
          show: true,
          position: 'insideTop',
        },
      },
    },
  ],
};
