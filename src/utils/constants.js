export const OPERATORS = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: '×',
  DIVIDE: '÷',
  EQUALS: '=',
  CLEAR: 'C',
  DECIMAL: '.',
  PERCENT: '%',
  PLUS_MINUS: '±'
};

export const BUTTON_TYPES = {
  NUMBER: 'number',
  OPERATOR: 'operator',
  FUNCTION: 'function'
};

export const BUTTON_LAYOUT = [
  [
    { value: OPERATORS.CLEAR, type: BUTTON_TYPES.FUNCTION, className: 'clear' },
    { value: OPERATORS.PLUS_MINUS, type: BUTTON_TYPES.FUNCTION, className: 'function' },
    { value: OPERATORS.PERCENT, type: BUTTON_TYPES.FUNCTION, className: 'function' },
    { value: OPERATORS.DIVIDE, type: BUTTON_TYPES.OPERATOR, className: 'operator' }
  ],
  [
    { value: '7', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: '8', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: '9', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: OPERATORS.MULTIPLY, type: BUTTON_TYPES.OPERATOR, className: 'operator' }
  ],
  [
    { value: '4', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: '5', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: '6', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: OPERATORS.SUBTRACT, type: BUTTON_TYPES.OPERATOR, className: 'operator' }
  ],
  [
    { value: '1', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: '2', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: '3', type: BUTTON_TYPES.NUMBER, className: 'number' },
    { value: OPERATORS.ADD, type: BUTTON_TYPES.OPERATOR, className: 'operator' }
  ],
  [
    { value: '0', type: BUTTON_TYPES.NUMBER, className: 'number zero' },
    { value: OPERATORS.DECIMAL, type: BUTTON_TYPES.FUNCTION, className: 'number' },
    { value: OPERATORS.EQUALS, type: BUTTON_TYPES.OPERATOR, className: 'operator' }
  ]
];