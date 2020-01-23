
const uicontroller = new Uicontroller;
const budget = new Budget;
const expense = new Expense;
const income = new Income;

// Add Items from form
const controllerAddItem = function() {
    const input = uicontroller.inputfromForm();// input from form
    console.log(input);
    

    

    // Test for type
   if ( input.type === 'inc' && input.description !== '' && input.value !== '') {

    // Update expense data structure;
        expense.updateExpenseDataStructure(input);

        // Update the UI
        uicontroller.displayOnUi(input);

    } else if ( input.type === 'inc' && input.description !== '' && input.value !== '' ){
         
        // Update expense data structure;
        income.updateIncomeDataStructure(input);

         // Update the UI
   
    } else {
       
        // Show Alert
   }
}


// Delete Item from transaction history
const controllerDeleteItem = function() {
    
    // Use special ID
    //const  
}




//******Uicontroller method calls******/ 


// Add input eventhandler
document.querySelector(uicontroller.domstrings().inputBtn).addEventListener('click', controllerAddItem);

document.addEventListener('keypress', function() {
    if (event.keyCode === 13 || event.which === 13) {
        controllerAddItem();
    }
})


// Delete Item Event Handler
//document.querySelector(uicontroller.domstrings().deleteItembtn).addEventListener('click', controllerDeleteItem);




