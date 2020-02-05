class Expense {
    constructor() {
        // this.id = id;
        // this.description = description;
        // this.value = value;
        this.expenses = [];
        this.id = [];
    }

    updateExpenseDataStructure(input) {
        
        // update expense id
        this.id.push(input.uniqueId);
        console.log(this.id);
        // update expense id
        this.expenses.push(input.value);
        
        let convertedExpenses = this.expenses.map(Number);
        let reducedExpense = convertedExpenses.reduce((total, amount) => total += amount, 0);

        console.log(reducedExpense);
        return reducedExpense;
    }

    deleteItemFromExpenseDataStructure(finalarrid, finalAmount) {

        // id check and delete

        let correspondingId = this.id.indexOf(finalarrid, 0);
        
        this.id.splice(correspondingId, 1);
        console.log(this.id);

        let updatedIdArray = this.id;

        // amount check and delete

        let correspondingAmount = this.expenses.indexOf(finalAmount, 0);// Optimize later, (what if there are two expenses which have the same value and Id???......So think about a solution to such situation )

        this.expenses.splice(correspondingAmount, 1);
        console.log(this.expenses);

        let convertedExpenses = this.expenses.map(Number);


        return {
            id: updatedIdArray,
            updatedExpensesArray: convertedExpenses
         }
    }

}