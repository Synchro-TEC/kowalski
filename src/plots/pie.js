export default {
  base: {
    title: {
      text: 'Teste',
      subtext: 'asd asd asd ',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 50,
      top: 50,
      bottom: 20,
      data: [],
    },
    series: [
      {
        name: 'Obrigação',
        radius: ['40%', '65%'],
        // radius: null,
        center: ['50%', '50%'],
        itemStyle: {
          opacity: 0.9,
          // borderWidth: 2,
          // borderColor: '#fff',
        },
        data: [],
        type: 'pie',
      },
    ],
  },
  props: ['title', 'tooltip', 'legend', 'series'],
};
//
// title : {
//   text: 'Teste',
//     subtext: 'asd asd asd ',
//     x:'center'
// },
// tooltip : {
//   trigger: 'item',
//     formatter: "{a} <br/>{b} : {c} ({d}%)"
// },
// legend: {
//   type: 'scroll',
//     orient: 'vertical',
//     right: 50,
//     top: 50,
//     bottom: 20,
//     data: legendData
// }
