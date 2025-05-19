// Configuration for grammar symbols
const GRAMMAR_CONFIG = {
  epsilon: '#',    // Symbol for epsilon/empty string
  arrow: '->',     // Symbol for production arrow
  or: '|',         // Symbol for alternative productions
  endMarker: '$',  // End marker symbol
  format: {        // Output format configuration
    prefix: 'First(',
    suffix: ')= { ',
    separator: ', ',
    end: ' }',
    newline: '\n'
  }
};

// Make configuration globally available
window.GRAMMAR_CONFIG = GRAMMAR_CONFIG;

// Export for use in Node.js or bundlers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GRAMMAR_CONFIG };
} 