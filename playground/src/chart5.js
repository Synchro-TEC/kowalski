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
    formatter: '{a} <br/>{b}: {c} ({d}%)',
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
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
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
