export default {
  textStyles: {
    fontStyle: ['normal', 'italic', 'oblique'],
    fontWeight: ['normal', 'bold', 'bolder', 'lighter'],
    fontFamily: ['sans-serif', 'serif', 'monospace'],
    horizontalAlign: ['left', 'center', 'right'],
    verticalAlign: ['top', 'middle', 'bottom'],
  },
  title: {
    left: ['left', 'center', 'right'],
  },
  align: [
    { label: 'Esquerda', value: 'left', hint: 'Alinhar a Esquerda' },
    { label: 'Centro', value: 'center', hint: 'Alinhar ao Centro' },
    { label: 'Direita', value: 'right', hint: 'Alinhar a Direita' },
  ],
  link: { target: ['blank', 'self'] },
  legend: {
    type: [
      { label: 'Simples', value: 'plain', hint: 'Simples' },
      { label: 'Paginada', value: 'scroll', hint: 'Paginada' },
    ],
    orient: [
      { label: 'Vertical', value: 'vertical', hint: 'Vertical' },
      { label: 'Horizontal', value: 'horizontal', hint: 'Horizontal' },
    ],
  },
  choice: [{ label: 'Sim', value: true, hint: 'Sim' }, { label: 'Não', value: false, hint: 'Não' }],
  axisXLabelPosition: [
    { label: 'Base', value: 'bottom', hint: 'Exibir na base' },
    { label: 'Topo', value: 'top', hint: 'Exibir no topo' },
  ],
  axisYLabelPosition: [
    { label: 'Esquerda', value: 'left', hint: 'Exibir na esquerda' },
    { label: 'Direita', value: 'right', hint: 'Exibir na direita' },
  ],
  barLabelPositions: [
    { label: 'Topo', value: 'insideTop' },
    { label: 'Meio', value: 'inside' },
    { label: 'Base', value: 'insideBottom' },
    { label: 'Externo', value: 'top' },
  ],
};
