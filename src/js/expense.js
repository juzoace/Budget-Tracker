class Expense {
    constructor() {
        // this.id = id;
        // this.description = description;
        // this.value = value;
        this.expenses = [];
    }

    updateExpenseDataStructure(input) {
        this.expenses.push(input.value);
        console.log(this.expenses);
    }
}