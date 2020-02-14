const expense = new Expense;
const uicontroller = new Uicontroller;
const income = new Income;
const budget = new Budget;

// Add Items from form
const controllerAddItem = function () {

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

        return;
    }

    // Test for type
    if (input.type === 'inc') {

        // Update expense data structure;
        let receivedIncomeValue = income.updateIncomeDataStructure(input);

        // Update the UI
        const transactionType = 'Income'

        let type = input.type;

        uicontroller.displayItemsOnUi(input, transactionType, type);

        //Update budget controller
        let budgetValues = budget.budgetCalculations(input, receivedIncomeValue);

        uicontroller.displayCalculatedValuesOnUi(budgetValues);

    }

    if (input.type === 'exp') {

        let receivedExpenseValue = expense.updateExpenseDataStructure(input);

        // Update the UI
        const transactionType = 'Expense';

        let type = input.type;

        uicontroller.displayItemsOnUi(input, transactionType, type);

        // update budget controller
        let budgetValues = budget.budgetCalculations(input, receivedExpenseValue);

        // Update the UI
        uicontroller.displayCalculatedValuesOnUi(budgetValues);

    }


}
// Delete Item from transaction history
const controllerDeleteItem = function (e) {

    e.preventDefault();

    let itemId = e.target.parentNode.parentNode.id;

    if (itemId) {

        // REMOVE FROM THE DOM
        document.querySelector(`#${itemId}`).style.display = 'none';

    }


    let arrId = itemId.split("-");

    let convertedArrId = arrId.map(Number);

    let finalarrid = convertedArrId[1];

    let finalAmount = convertedArrId[2];

    let itemclass = e.target.parentNode.parentNode.className;

    if (itemclass === "inc-item") {

        // update income data structure
        let updatedIdandIncomeArray = income.deleteItemFromIncomeDataStructure(finalarrid, finalAmount);

        // update budget data structure
        let budgetValues = budget.budgetCalculationsForIncomeDeletion(updatedIdandIncomeArray);

        // Update the DOM
        uicontroller.displayCalculatedValuesOnUi(budgetValues);
    }

    if (itemclass === "exp-item") {

        // update expense data structure
        let updatedIdandExpensesArray = expense.deleteItemFromExpenseDataStructure(finalarrid, finalAmount);

        // update budget data structure
        let budgetValues = budget.budgetCalculationsForExpenseDeletion(updatedIdandExpensesArray);

        // Update the DOM
        uicontroller.displayCalculatedValuesOnUi(budgetValues);

    }

}

// Add input eventhandler
document.querySelector(uicontroller.domstrings().inputBtn).addEventListener('click', controllerAddItem);
var okayButton = document.querySelector(".modal__content-button");
okayButton.addEventListener('click', (e) => e.target.closest('.modal').classList.toggle('show-modal'));


document.querySelector("#home").addEventListener('click', controllerDeleteItem);