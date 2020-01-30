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
}