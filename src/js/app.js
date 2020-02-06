
const uicontroller = new Uicontroller;
const expense = new Expense;
const income = new Income;
const budget = new Budget;
// Add Items from form
    const controllerAddItem = function() {
        // input from form
        const input = uicontroller.inputfromForm();
        console.log(input);
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
    
            let receivedIncomeValue = income.updateIncomeDataStructure(input);
            console.log(receivedIncomeValue);

            // Update the UI
            const transactionType = 'Income'
            
            let type = input.type;
            
            uicontroller.displayItemsOnUi(input, transactionType, type);
    
            //Update budget controller
            let budgetValues = budget.budgetCalculations(input, receivedIncomeValue);

            uicontroller.displayCalculatedValuesOnUi(budgetValues);

            // // Update the UI Income, Expense and Budget
            // document.querySelector(".budget__value").innerHTML = `$${budgetValues.currentBalance}`;
            // document.querySelector(".budget__income--value").innerHTML = `$${budgetValues.income}`;
            // document.querySelector(".budget__expenses--value").innerHTML = `$${budgetValues.expense}`;

            // uicontroller.displayCalculatedValuesOnUi() {

            // }
            
        } 
        
        if ( input.type === 'exp' ) {
             
            // Update expense data structure;
           // income.updateIncomeDataStructure(input);
    
            let receivedExpenseValue = expense.updateExpenseDataStructure(input);
            console.log(receivedExpenseValue);
            
            // Update the UI
             const transactionType = 'Expense';
             
             let type = input.type;
             
             uicontroller.displayItemsOnUi(input, transactionType, type);

             // update budget controller
             let budgetValues = budget.budgetCalculations(input, receivedExpenseValue);

             console.log(budget.currentBalance);


             // Update the UI
             uicontroller.displayCalculatedValuesOnUi( budgetValues );
           
            }

        // Update budget controller
    }
// Delete Item from transaction history
const controllerDeleteItem = function(e) {
    e.preventDefault();
    console.log(e.target);

    
    let itemId = e.target.parentNode.parentNode.id;
    console.log(itemId);

    if ( itemId ) {
       
    // REMOVE FROM THE DOM
    document.querySelector(`#${itemId}`).style.display = 'none';

    }
     
    // String(itemId);
    // console.log(itemId);

    let arrId = itemId.split("-");
    console.log(arrId);
    let convertedArrId = arrId.map(Number);
    // console.log(convertedArrId);

    let finalarrid = convertedArrId[1];
    console.log(finalarrid);

    let finalAmount = convertedArrId[2];
    console.log(finalAmount);

    let itemclass = e.target.parentNode.parentNode.className;
    console.log(itemclass);


    
    if (itemclass === "inc-item") {


        // update income data structure
        let updatedIdandIncomeArray = income.deleteItemFromIncomeDataStructure(finalarrid, finalAmount);
        console.log(updatedIdandIncomeArray);
        

        // update budget data structure
        let budgetValues = budget.budgetCalculations( updatedIdandIncomeArray, 0 );


        // Update the DOM
        //uicontroller.updateTheDomAfterADeleteOperationOnIncome(updatedIdandIncomeArray);
        uicontroller.displayCalculatedValuesOnUi(budgetValues);
    } 
    
    if (itemclass === "exp-item") {

        // update expense data structure
        let updatedIdandExpensesArray = expense.deleteItemFromExpenseDataStructure(finalarrid, finalAmount);
console.log(updatedIdandExpensesArray);

        // update budget data structure
        let budgetValues = budget.budgetCalculations(updatedIdandExpensesArray, 0); // change the zero later

        // Update the DOM
        uicontroller.displayCalculatedValuesOnUi( budgetValues );


    } 
    

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

// document.querySelector().addEventListener('click', );

    
document.querySelector("#home").addEventListener('click', controllerDeleteItem);



