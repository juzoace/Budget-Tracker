class Expense {
    constructor() {
        // this.id = id;
        // this.description = description;
        // this.value = value;
        this.expenses = [];
    }

    updateExpenseDataStructure(input) {
        this.expenses.push(input.value);
        
        let convertedExpenses = this.expenses.map(Number);
        let reducedExpense = convertedExpenses.reduce((total, amount) => total += amount, 0);

        console.log(reducedExpense);
        return reducedExpense;
    }
}