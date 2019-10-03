// Initialise entries as empty array
// Initialise total as 0
// Initialise current temporary value as empty string
// On button click 
    // Get value from the text of the button
    // If button value is a number or '.'
        // Add button value to current temporary value
        // Display answer as the current temporary value's substring of (0, 10)
    // Else if button value is AC
        // Clear entries, current temporary value and total
    // Else if button value is CE
        // Clear 
    // Else if button value is 'x'
        // Push current temporary value, * symbol to entries 
        // Clear current temporary value
    // Else if button value is '÷'
        // Push current temporary value, / symbol to entries 
        // Clear current temporary value
    // Else if button value is '='
        // Push current temporary value to entries 
        // Set total as the number from first entry
        // For each entry in entries after first entry
            // If entry is '+'
                // ADD the next entry to total
            // If entry is '-'
                // SUBTRACT next entry from total
            // If entry is '*'
                // MULTIPLY next entry by total
            // If entry is '/'
                // DIVIDE total by next entry
            // Increase current index of entries by 1
        // If total < 0 
            // Turn total to absolute value of total + '-'
        // Display answer as total
        // Clear entries
        // Clear current temporary value
    // Else (button value is %, -, +)
        // Push current temporary value to entries
        // Push value to entries
        // Clear current temporary value