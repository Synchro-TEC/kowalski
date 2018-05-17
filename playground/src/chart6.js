export default {
  ktype: 'hstack',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
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
        type: ['tiled'],
        title: {
          tiled: 'Agrupadas',
        },
        option: {
          tiled: {
            barCategoryGap: '20%',
          },
        },
      },
      saveAsImage: {
        title: 'Salvar',
        pixelRatio: 2,
      },
    },
  },
  legend: {
    data: ['Acesso Direto', 'Email Marketing', 'Publicidade/Aliança', 'Anuncio em Vídeo', 'Buscador'],
    padding: [20, 0, 0, 20],
  },
  xAxis: {
    type: 'value',
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
    axisLabel: {
      show: true,
      rotate: 0,
      color: 'rgba(33,33,33, 1)',
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',
    data: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
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
  series: [
    {
      name: 'Acesso Direto',
      type: 'bar',
      stack: 'Quantidade total',
      label: {
        normal: {
          show: true,
          position: 'insideRight',
        },
      },
      barCategoryGap: '20%',
      itemStyle: {
        color: '',
      },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: 'Email Marketing',
      type: 'bar',
      stack: 'Quantidade total',
      label: {
        normal: {
          show: true,
          position: 'insideRight',
        },
      },
      barCategoryGap: '20%',
      itemStyle: {
        color: '',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Publicidade/Aliança',
      type: 'bar',
      stack: 'Quantidade total',
      label: {
        normal: {
          show: true,
          position: 'insideRight',
        },
      },
      barCategoryGap: '20%',
      itemStyle: {
        color: '',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Anuncio em Vídeo',
      type: 'bar',
      stack: 'Quantidade total',
      label: {
        normal: {
          show: true,
          position: 'insideRight',
        },
      },
      barCategoryGap: '20%',
      itemStyle: {
        color: '',
      },
      data: [150, 212, 201, 154, 190, 330, 410],
    },
    {
      name: 'Buscador',
      type: 'bar',
      stack: 'Quantidade total',
      label: {
        normal: {
          show: true,
          position: 'insideRight',
        },
      },
      barCategoryGap: '20%',
      itemStyle: {
        color: '',
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320],
    },
  ],
};
