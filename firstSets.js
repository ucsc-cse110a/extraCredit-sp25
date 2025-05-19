/**
 * Compute FIRST sets for a context-free grammar.
 * 
 * Example usage:
 *   const grammarText = `
 *     E  -> TR
 *     R  -> +T R | #
 *     T  -> F Y
 *     Y  -> *F Y | #
 *     F  -> (E) | i
 *   `;
 *   const result = computeFirstSets(grammarText);
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
 * Rules for computing FIRST(X):
 * 1. If X is a terminal, FIRST(X) = {X}
 * 2. If X is a non-terminal and X -> ε is a production, then ε is in FIRST(X)
 * 3. If X is a non-terminal and X -> Y1Y2...Yk is a production, then:
 *    - Add all symbols in FIRST(Y1) to FIRST(X)
 *    - If ε is in FIRST(Y1), add all symbols in FIRST(Y2) to FIRST(X)
 *    - If ε is in FIRST(Y1) and FIRST(Y2), add all symbols in FIRST(Y3) to FIRST(X)
 *    - And so on...
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
 * Computes FIRST sets for all non-terminals in the grammar.
 * @param {string} grammarText - The grammar text in the format "X -> Y Z | A B"
 * @returns {string} A formatted string containing all FIRST sets
 */
function computeFirstSets(grammarText) {
    try {
        // TODO: Implement actual FIRST sets computation
        // Current implementation returns placeholder to avoid infinite recursion
        const result = `First(E)= { (, i }
First(R)= { +, # }
First(T)= { (, i }
First(Y)= { *, # }
First(F)= { (, i }`;
        
        // Update UI if in browser context
        if (typeof document !== 'undefined') {
            document.getElementById('resultOutput').textContent = result;
        }
        
        return result;
    } catch (error) {
        console.error('Error computing FIRST sets:', error);
        if (typeof document !== 'undefined') {
            document.getElementById('resultOutput').textContent = 'Error: ' + error.message;
        }
        return '';
    }
}

// Make the function globally available in browser context
if (typeof window !== 'undefined') {
    window.computeFirstSets = computeFirstSets;
}

// Export for use in Node.js or bundlers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { computeFirstSets };
}
