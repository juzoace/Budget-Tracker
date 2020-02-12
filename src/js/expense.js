class Expense {
    constructor() {
        this.expenses = [];
        this.id = [];
    }

    updateExpenseDataStructure(input) {
        
        // update expense id
        this.id.push(input.uniqueId);
        
        // update expense id
        this.expenses.push(input.value);
        
        let convertedExpenses = this.expenses.map(Number);
        
        let reducedExpense = convertedExpenses.reduce((total, amount) => total += amount, 0);

        return reducedExpense;
    }

    deleteItemFromExpenseDataStructure(finalarrid, finalAmount) {

        // id check and delete
        let correspondingId = this.id.indexOf(finalarrid, 0);
        
        //
        this.id.splice(correspondingId, 1);

        let updatedIdArray = this.id;

        let correspondingAmount = this.expenses.indexOf(finalAmount, 0);

        this.expenses.splice(correspondingAmount, 1);

        let convertedExpenses = this.expenses.map(Number);


        return {
            id: updatedIdArray,
            updatedExpensesArray: convertedExpenses
         }
    }

}