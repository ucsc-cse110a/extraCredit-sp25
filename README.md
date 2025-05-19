# Grammar Sets Calculator

A web application to compute FIRST, FOLLOW, and FIRST+ sets for context-free grammars.

## Instructions

1. Open `index.html` in a web browser
2. Enter your grammar in the text area using the format:
   ```
   S -> ACB | Cbb | Ba
   A -> da | BC
   B -> g | #
   C -> h | #
   ```
   Note: Use `#` for epsilon (ε)
3. Click one of the buttons to compute:
   - FIRST Sets
   - FOLLOW Sets
   - FIRST+ Sets

## File Structure

```
extraCredit-sp25/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── grammarConfig.js    # Grammar configuration
├── firstSets.js        # FIRST sets computation
├── followSets.js       # FOLLOW sets computation
├── firstPlusSets.js    # FIRST+ sets computation
├── grammar.txt         # Sample grammar
└── README.md           # This file
```

## Grading Instructions

1. Launch a local server using Python:
   ```bash
   python -m http.server 8000
   ```

2. Open the application in a web browser:
   ```
   http://localhost:8000
   ```

3. Test Cases:
   - Base Case 1:
     ```
     S -> ACB | Cbb | Ba
     A -> da | BC
     B -> g | #
     C -> h | #
     ```
   - Base Case 2:
     ```
     E -> TR
     R -> +T R | #
     T -> F Y
     Y -> *F Y | #
     F -> (E) | i
     ``` 