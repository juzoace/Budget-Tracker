
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
        const transactionType = 'Income'
        uicontroller.displayOnUi(input, transactionType);

        //Update the input field

    } else if ( input.type === 'exp' && input.description !== '' && input.value !== '' ){
         
        // Update expense data structure;
        income.updateIncomeDataStructure(input);

         // Update the UI
         const transactionType = 'Expense';
         uicontroller.displayOnUi(input, transactionType);
 
    } else if ( input.type !== '' && input.description === '' && input.value !=='') {
       
        // Show Pop-up modal
    var modal = document.querySelector(".modal");
    // var trigger = document.querySelector(uicontroller.domstrings().inputBtn);
    var closeButton = document.querySelector(".modal__content-button");

    function toggleModal() {
    modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

toggleModal();
// trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

        
} else if (input.type !== '' && input.description !== '' && input.value === '') {
    
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
});



    
