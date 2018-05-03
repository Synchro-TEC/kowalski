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
    { label: 'Esquerda', value: 'left' },
    { label: 'Centro', value: 'center' },
    { label: 'Direita', value: 'right' },
  ],
  link: { target: ['blank', 'self'] },
  legend: {
    type: [{ label: 'Simples', value: 'plain', hint: 'Simples' }, { label: 'Paginada', value: 'scroll', hint: 'Paginada' }],
    orient: [{ label: 'Vertical', value: 'vertical', hint: 'Vertical' }, { label: 'Horizontal', value: 'horizontal', hint: 'Horizontal' }],
    // top: 50,
    // left: '',
    // right: 50,
    // bottom: '',
  },
  choice: [{ label: 'Sim', value: true, hint: 'Sim' }, { label: 'Não', value: false, hint: 'Não' }],
  barLabelPositions: [
    { label: 'Topo', value: 'insideTop' },
    { label: 'Meio', value: 'inside' },
    { label: 'Base', value: 'insideBottom' },
    { label: 'Externo', value: 'top' },
  ],
};
