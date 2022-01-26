// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Ricardo Dabney" // HINT: Replace this with your own name!
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 //calculates the total of all three cookies 

//Change the chart variables
setInterval(function(){
document.getElementById("qty-gb").innerHTML     = gb;
document.getElementById("qty-cc").innerHTML     = cc;
document.getElementById("qty-sugar").innerHTML  = sugar;
document.getElementById("qty-total").innerHTML     = total;
total = gb + cc + sugar;
}, 1);


// GINGERBREAD
// PLUS - selecting the element with an id of Add-gb
const gbPlusBtn = document.querySelector('#add-gb')
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    gb++;
    console.log("Gingerbread: "+gb)
    console.log("Total Cookies: "+total)
})

// MINUS - selecting the element with an id of Minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')
// Event listener for clicks on the "+" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {
    if (gb <= 0) {
        console.log('Gingerbread - button was clicked... But nothing happened.')
        console.log("Gingerbread: "+gb)
    };

    if (gb > 0) {
        gb--;
        console.log('Gingerbread - button was clicked!');
        console.log("Gingerbread: "+gb)
        console.log("Total Cookies: "+total)
    }
})







//CHOCOLATE CHIP
// PLUS - selecting the element with an id of Add-cc
const ccPlusBtn = document.querySelector('#add-cc')
// Event listener for clicks on the "+" button for Chocolate Chip
ccPlusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')
    cc++;
    console.log("Chocolate Chip: "+cc)
    console.log("Total Cookies: "+total)
})

// MINUS - selecting the element with an id of Minus-cc
const ccMinusBtn = document.querySelector('#minus-cc')
// Event listener for clicks on the "+" button for Chocolate Chip
ccMinusBtn.addEventListener('click', function() {
    if (cc <= 0) {
        console.log('Chocolate Chip - button was clicked... But nothing happened.')
        console.log("Chocolate Chip: "+cc)
    };

    if (cc > 0) {
        cc--;
        console.log('Chocolate Chip - button was clicked!');
        console.log("Chocolate Chip: "+cc)
        console.log("Chocolate Chip: "+total)
    }
})




//SUGAR SPRINKLE
// PLUS - selecting the element with an id of Add-cc
const sugarPlusBtn = document.querySelector('#add-sugar')
// Event listener for clicks on the "+" button for Sugar Sprinkle
sugarPlusBtn.addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!')
    sugar++;
    console.log("Sugar Sprinkle: "+sugar)
    console.log("Total Cookies: "+total)
})

// MINUS - selecting the element with an id of Minus-cc
const sugarMinusBtn = document.querySelector('#minus-sugar')
// Event listener for clicks on the "+" button for Sugar Sprinkle
sugarMinusBtn.addEventListener('click', function() {
    if (sugar <= 0) {
        console.log('Sugar Sprinkle - button was clicked... But nothing happened.')
        console.log("Sugar Sprinkle: "+sugar)
    };

    if (sugar > 0) {
        sugar--;
        console.log('Sugar Sprinkle - button was clicked!');
        console.log("Sugar Sprinkle: "+sugar)
        console.log("Sugar Sprinkle: "+total)
    }
})



// TODO: Hook up event listeners for the rest of the buttons
