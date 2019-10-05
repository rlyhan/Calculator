document.addEventListener('DOMContentLoaded', addButtons)

// Initialise entries as empty array
entries = [];
// Initialise total as 0
total = 0;
// Initialise current temporary value as empty string
temp = "";
// Add event listeners to all buttons
// Assign variable to input screen
var buttons;
var screen;
function addButtons() {
    buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            buttonPress(buttons[i].innerText);
        });
    }
    screen = document.querySelector('.form-control');
}
// On button click 
function buttonPress(symbol) {
    // If button value is a number or '.'
        // Add button value to current temporary value
        // Display answer as the current temporary value's substring of (0, 10)
    // Else if button value is AC
        // Clear entries, current temporary value, total and displayed answer
    // Else if button value is CE
        // Clear current temporary value and displayed answer
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
        // Push button value to entries
        // Clear current temporary value
    if (!isNaN(Number(symbol)) || symbol === '.') {
        temp += symbol;
        screen.value = temp.substring(0, 10);
    } else if (symbol === 'AC') {
        entries = [];
        temp = "";
        total = 0;
        screen.value = "";
    } else if (symbol === 'CE') {
        temp = "";
        screen.value = "";
    } else if (symbol === 'x') {
        entries.push(temp, '*');
        temp = "";
    } else if (symbol === '÷') {
        entries.push(temp, '/');
        temp = "";
    } else if (symbol === '=') {
        entries.push(temp);
        total = Number(entries[0]);
        for (let i = 1; i < entries.length; i++) {
            if (entries[i] === '+') {
                total += Number(entries[i+1]);
            } else if (entries[i] === '-') {
                total -= Number(entries[i+1]);
            } else if (entries[i] === '*') {
                total *= Number(entries[i+1]);
            } else if (entries[i] === '/') {
                total /= Number(entries[i+1]);
            }
            i++;
        }
        if (total < 0) {
            total = '-' + Math.abs(total);
        }
        screen.value = total;
        entries = [];
        temp = "";
    } else {
        entries.push(temp, symbol);
        temp = "";
    }
}