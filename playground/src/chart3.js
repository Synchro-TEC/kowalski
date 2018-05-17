export default {
  type: 'area',
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
  toolbox: {
    right: 20,
    top: 20,
    feature: {
      restore: {
        show: true,
        title: 'Reiniciar',
      },
      magicType: {
        type: ['bar', 'line'],
        title: {
          bar: 'Barras',
          line: 'Linhas',
        },
        option: {
          bar: {
            label: {
              show: true,
              position: 'insideTop',
            },
          },
        },
      },
      saveAsImage: {
        title: 'Salvar',
        pixelRatio: 2,
      },
    },
  },
  xAxis: {
    type: 'category',
    data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    boundaryGap: false,
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
      show: false,
      lineStyle: {
        color: 'rgba(100,100,100,1)',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
      rotate: 0,
      color: 'rgba(33,33,33, 1)',
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      data: [820, 232, 10, 434, 1290, 2330, 754],
      type: 'line',
      stack: 'area',
      itemStyle: {
        color: '',
      },
      areaStyle: {
        normal: {},
      },
      name: 'Crédito',
      lineStyle: {
        width: 2,
      },
      smooth: false,
      label: {
        show: true,
        position: 'insideBottom',
        distance: '-15',
      },
    },
    {
      data: [240, 722, 1801, 734, 510, 1130, 321],
      type: 'line',
      stack: 'area',
      itemStyle: {
        color: '',
      },
      areaStyle: {
        normal: {},
      },
      lineStyle: {
        width: 2,
      },
      name: 'Débito',
      label: {
        show: true,
        position: 'insideBottom',
        distance: '-15',
      },
    },
  ],
};
