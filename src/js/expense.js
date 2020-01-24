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
        let reducedExpense = convertedExpenses.reduce((total, amount) => total + amount);

        console.log(reducedExpense);
    }
}