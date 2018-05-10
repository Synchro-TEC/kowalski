export default {
  type: 'pie',
  toolbox: {
    right: 20,
    top: 20,
    feature: {
      restore: {
        show: true,
        title: 'Reiniciar',
      },
      saveAsImage: {
        title: 'Salvar',
        pixelRatio: 2,
      },
    },
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255,255,255,1)',
    padding: [3, 3],
    textStyle: {
      color: 'rgba(76,106,148,1)',
    },
    extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['Pago', 'Provisionado', 'Aberto', 'Calculado', 'Apurando'],
  },
  series: [
    {
      name: 'Status',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['50%', '50%'],
      label: {
        normal: {
          show: false,
          // position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            // fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
        emphasis: {
          show: true,
        },
      },
      data: [
        { value: 335, name: 'Pago', itemStyle: { color: null } },
        { value: 310, name: 'Provisionado', itemStyle: { color: null } },
        { value: 234, name: 'Aberto', itemStyle: { color: null } },
        { value: 135, name: 'Calculado', itemStyle: { color: null } },
        { value: 548, name: 'Apurando', itemStyle: { color: null } },
      ],
    },
  ],
};
