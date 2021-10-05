// optimized code starts from here


//function for counting number of tickets
function countingNumOfTickets (isAdding, id){
    const currentTicketNum = getInputNumber(id);
    let newTicketNum = currentTicketNum;
    if (isAdding == true){
        newTicketNum = currentTicketNum + 1;
    }
    if(isAdding == false && currentTicketNum > 0){
        newTicketNum = currentTicketNum - 1;
    }
    document.getElementById(id).value = newTicketNum;

    priceCalculator()
};


//for showing initial price details
priceCalculator();

//getting ticket number from input box
function getInputNumber(id){
    const input = document.getElementById(id);
    if(input.value == ''){
        return 0;
    }
    const inputNumber = parseInt(input.value);
    return inputNumber;
};


//function calculating subtotal, tax, total
function priceCalculator() {
    const firstClassTicketQuantity = getInputNumber('first-class-input');
    const firstClassTicketCost = firstClassTicketQuantity *150;
    const economyTicketQuantity = getInputNumber('economy-input');
    const economyTicketCost = economyTicketQuantity *100;
    const subtotal = firstClassTicketCost + economyTicketCost;
    document.getElementById('subtotal').innerText = '$' + subtotal;
    const vat = Math.round((subtotal *10)/100);
    document.getElementById('vat').innerText = '$' + vat;
    const total = subtotal + vat;
    document.getElementById('total').innerText = '$' + total;
};


//function for showing booking page and price details
function showingBookingPage(){
    document.getElementById('main-section').style.display ="none";
    document.getElementById('header').style.display ="none";
    document.getElementById('header').style.display ="none";
    document.getElementById('booking-area').style.display ="block"; 
    showingCost('subtotal', 'order-subtotal');
    showingCost('vat', 'order-vat');
    showingCost('total', 'order-total');
}


//function for shifting price details to the booking page
function showingCost(mainId, orderId){
    const amount = document.getElementById(mainId).innerText;
    document.getElementById(orderId).innerText = amount;
};

// optimized code ends here







// detail code stars from here


//first class plus button event handler 
// document.getElementById('first-plus-btn').addEventListener('click', function(){
//     // const firstClassTicketNum = getInputNumber('first-class-input');
//     // const newFirstClassTicketNum = firstClassTicketNum + 1;
//     // document.getElementById('first-class-input').value = newFirstClassTicketNum;
//     // console.log(firstClassTicketNum);
//     // countingFirstClassTickets(true);
//     countingNumOfTickets(true, 'first-class-input');
// });


// //first class minus button event handler 
// document.getElementById('first-minus-btn').addEventListener('click', function(){
//     // const firstClassTicketNum = getInputNumber('first-class-input');
//     // const newFirstClassTicketNum = firstClassTicketNum - 1;
//     // document.getElementById('first-class-input').value = newFirstClassTicketNum;
//     // countingFirstClassTickets(false);
//     countingNumOfTickets(false, 'first-class-input');

// });

// document.getElementById('economy-plus-btn').addEventListener('click', function(){
//     // const economyTicketNum = getInputNumber('economy-input');
//     // const newEconomyTicketNum = economyTicketNum + 1;
//     // document.getElementById('economy-input').value = newEconomyTicketNum;
//     // countingEconomyTickets(true);
//     countingNumOfTickets(true, 'economy-input');

// });

// document.getElementById('economy-minus-btn').addEventListener('click', function(){
//     // const economyTicketNum = getInputNumber('economy-input');
//     // const newEconomyTicketNum = economyTicketNum - 1;
//     // document.getElementById('economy-input').value = newEconomyTicketNum;
//     // countingEconomyTickets(false);
//     countingNumOfTickets(false, 'economy-input');

// });


// //function for counting number of economy tickets
// function countingEconomyTickets(isAdding){
//     const economyTicketNum = getInputNumber('economy-input');
//     let newEconomyTicketNum = economyTicketNum;
//     if(isAdding == true){
//         newEconomyTicketNum = economyTicketNum + 1;
//     }
//     if(isAdding == false && economyTicketNum > 0){
//         newEconomyTicketNum = economyTicketNum - 1;
//     }
//     document.getElementById('economy-input').value = newEconomyTicketNum;
// }

// //function for counting number of first class tickets
// function countingFirstClassTickets (isAdding){
//     const firstClassTicketNum = getInputNumber('first-class-input');
//     let newFirstClassTicketNum = firstClassTicketNum;
//     if (isAdding == true){
//         newFirstClassTicketNum = firstClassTicketNum + 1;
//     }
//     if(isAdding == false && firstClassTicketNum > 0){
//         newFirstClassTicketNum = firstClassTicketNum - 1;
//     }

//     document.getElementById('first-class-input').value = newFirstClassTicketNum;
// };

// //booking button event handler
// document.getElementById('booking-btn').addEventListener('click', function(){
//   showingBookingPage();
// });


// detail code ends here
