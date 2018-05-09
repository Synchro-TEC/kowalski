export default {
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
        { value: 335, name: 'Pago' },
        { value: 310, name: 'Provisionado' },
        { value: 234, name: 'Aberto' },
        { value: 135, name: 'Calculado' },
        { value: 1548, name: 'Apurando' },
      ],
    },
  ],
};
