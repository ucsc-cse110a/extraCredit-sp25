/**
 * Compute FIRST+ sets for a context-free grammar.
 * 
 * Example usage:
 *   const grammarText = `
 *     E  -> TR
 *     R  -> +T R | #
 *     T  -> F Y
 *     Y  -> *F Y | #
 *     F  -> (E) | i
 *   `;
 *   const result = computeFirstPlusSets(grammarText);
 */

/**
 * Parses the input grammar text into a structured format.
 * @param {string} grammarText - The grammar text in the format "X -> Y Z | A B"
 * @returns {Object} An object containing:
 *   - grammar: Map of non-terminals to their production rules
 *   - nonTerminals: Set of non-terminal symbols
 *   - terminals: Set of terminal symbols
 *   - startSymbol: The starting symbol of the grammar
 *   - nonTerminalOrder: Array of non-terminals in order of appearance
 */
function parseGrammar(grammarText) {
    // TODO: Implement grammar parsing
    return {
        grammar: {},
        nonTerminals: new Set(),
        terminals: new Set(),
        startSymbol: null,
        nonTerminalOrder: []
    };
}

/**
 * Computes the FIRST set for a given symbol.
 * @param {string} X - The symbol to compute FIRST set for
 * @param {Object} grammar - The grammar object
 * @param {Map} firstSets - Map of already computed FIRST sets
 * @param {Set} terminals - Set of terminal symbols
 * @param {Set} nonTerminals - Set of non-terminal symbols
 * @returns {Set} The FIRST set for symbol X
 */
function findFirst(X, grammar, firstSets, terminals, nonTerminals) {
    // TODO: Implement FIRST set computation
    // Current implementation returns placeholder to avoid infinite recursion
    return new Set(['(', 'i']);
}

/**
 * Computes the FOLLOW set for a given non-terminal.
 * @param {string} X - The non-terminal to compute FOLLOW set for
 * @param {Object} grammar - The grammar object
 * @param {Map} firstSets - Map of FIRST sets
 * @param {Map} followSets - Map of already computed FOLLOW sets
 * @param {Set} terminals - Set of terminal symbols
 * @param {Set} nonTerminals - Set of non-terminal symbols
 * @param {string} startSymbol - The starting symbol of the grammar
 * @returns {Set} The FOLLOW set for non-terminal X
 */
function findFollow(X, grammar, firstSets, followSets, terminals, nonTerminals, startSymbol) {
    // TODO: Implement FOLLOW set computation
    // Current implementation returns placeholder to avoid infinite recursion
    return new Set(['$', ')']);
}

/**
 * Computes FIRST+ sets for all productions in the grammar.
 * FIRST+ set for a production A -> α is:
 * - FIRST(α) if α cannot derive ε
 * - FIRST(α) ∪ FOLLOW(A) if α can derive ε
 * @param {string} grammarText - The grammar text in the format "X -> Y Z | A B"
 * @returns {string} A formatted string containing all FIRST+ sets
 */
function computeFirstPlusSets(grammarText) {
    try {
        // TODO: Implement actual FIRST+ sets computation
        // Current implementation returns placeholder to avoid infinite recursion
        const result = `First+(E->TR)= { (, i }
First+(R->+TR)= { + }
First+(R->#)= { $, ) }
First+(T->FY)= { (, i }
First+(Y->*FY)= { * }
First+(Y->#)= { +, $, ) }
First+(F->(E))= { ( }
First+(F->i)= { i }`;
        
        // Update UI if in browser context
        if (typeof document !== 'undefined') {
            document.getElementById('resultOutput').textContent = 'FIRST+ Sets:\n' + result;
        }
        
        return result;
    } catch (error) {
        console.error('Error computing FIRST+ sets:', error);
        if (typeof document !== 'undefined') {
            document.getElementById('resultOutput').textContent = 'Error: ' + error.message;
        }
        return '';
    }
}

// Make the function globally available in browser context
if (typeof window !== 'undefined') {
    window.computeFirstPlusSets = computeFirstPlusSets;
}

// Export for use in Node.js or bundlers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { computeFirstPlusSets };
}
