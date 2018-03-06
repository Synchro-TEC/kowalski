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
    type: [{ label: 'Simples', value: 'plain' }, { label: 'Paginada', value: 'scroll' }],
    orient: [{ label: 'Vertical', value: 'vertical' }, { label: 'Horizontal', value: 'horizontal' }],
    // top: 50,
    // left: '',
    // right: 50,
    // bottom: '',
  },
};
