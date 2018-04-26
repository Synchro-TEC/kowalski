export default {
  right: 20,
  top: 20,
  feature: {
    restore: {
      show: true,
      title: 'Reiniciar',
    },
    magicType: {
      type: ['bar', 'line', 'stack'],
      title: {
        bar: 'Barras',
        line: 'Linhas',
        stack: 'Empilhada',
      },
      option: {
        bar: {
          label: {
            show: true,
            position: 'insideTop',
          },
        },
        line: {
          label: {
            show: true,
            position: [0, 15],
          },
        },
      },
    },
    saveAsImage: {
      title: 'Salvar',
      pixelRatio: 2,
    },
  },
};
