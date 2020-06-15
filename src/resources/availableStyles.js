import StyleBuilder from './StyleBuilder';

const rcccRed = '#ed1c24';
const otherRed = '#a80000';

const availableStyles = [
  new StyleBuilder()
    .header(otherRed, '#f4f1ed')
    .indicator('#414d5e')
    .body('#f4f1ed', '#414d5e')
    .preClick('#00aaad')
    .postClick('#f9bb0e')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#e0e0e0')
    .indicator('#6d6e71')
    .body('#e0e0e0', '#6d6e71')
    .preClick('#7b95a6')
    .postClick('#add4d9')
    .build(),
  new StyleBuilder()
    .header(otherRed, '#fffbbe')
    .indicator('#444446')
    .body('#444446', '#fffbbe')
    .preClick('#f3cc41')
    .postClick('#87898c')
    .build(),
  new StyleBuilder()
    .header('c71585', '#f4f1ed')
    .indicator('#414d5e')
    .body('f4f1ed', '#414d5e')
    .preClick('db7093')
    .postClick('800080')
    .build(),
];

export default availableStyles;