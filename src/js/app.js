
const uicontroller = new Uicontroller;
const expense = new Expense;
const income = new Income;
const budget = new Budget;
// Add Items from form
    const controllerAddItem = function() {
        // input from form
        const input = uicontroller.inputfromForm();
        const errors = [];

        if (!input.value) {
            errors.push('The value field is required')
        }
        if (!input.description) {
            errors.push('The description field is required')
        }

        if (errors.length) {
            document.querySelector('.modal .modal__content-heading').innerHTML = errors.join('<br>');
            document.querySelector('.modal').classList.toggle('show-modal');

            console.log(document.querySelector('.modal3'));
            return;
        }
        
        // Test for type
       if ( input.type === 'inc') {
    
        // Update expense data structure;
            // expense.updateExpenseDataStructure(input);
    
            let receivedIncomeOrExpenseValue = income.updateIncomeDataStructure(input);
            console.log(receivedIncomeOrExpenseValue);

            // Update the UI
            const transactionType = 'Income'
            
            let type = input.type;
            
            uicontroller.displayOnUi(input, transactionType, type);
    
            //Update budget controller
            budget.budgetCalculations(input, receivedIncomeOrExpenseValue, type);

        } else if( input.type === 'esp' ){
             
            // Update expense data structure;
           // income.updateIncomeDataStructure(input);
    
            let receivedIncomeOrExpenseValue = expense.updateExpenseDataStructure(input);
            console.log(receivedIncomeOrExpenseValue);
            
            // Update the UI
             const transactionType = 'Expense';
             
             let type = input.type;
             
             uicontroller.displayOnUi(input, transactionType, type);

             // update budget controller
            budget.budgetCalculations(input, receivedIncomeOrExpenseValue, type);
        }

        // Update budget controller
    }
// Delete Item from transaction history
const controllerDeleteItem = function() {
    
}




//******Uicontroller method calls******/ 


// Add input eventhandler
document.querySelector(uicontroller.domstrings().inputBtn).addEventListener('click', controllerAddItem);
var okayButton = document.querySelector(".modal__content-button");
okayButton.addEventListener('click', (e) => e.target.closest('.modal').classList.toggle('show-modal'));




document.addEventListener('keypress', function() {
    if (event.keyCode === 13 || event.which === 13) {
        controllerAddItem();
    }
});



    



