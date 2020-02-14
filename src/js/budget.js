class Budget {
    constructor() {
        this.currentIncome = 0;
        this.currentExpenses = 0
    }


    budgetCalculationsForIncomeDeletion(updatedIdandIncomeArray) {

        // Delete the last income item 
        if (updatedIdandIncomeArray.updatedIncomeArray.length === 0) {

            // Set income value to zero
            this.currentIncome = 0;

            // calculate the current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }

        // Delete an income item when there are only 2 items in the array container 
        if (updatedIdandIncomeArray.updatedIncomeArray.length === 1) {

            // set the income value to the first index value of the array
            this.currentIncome = updatedIdandIncomeArray.updatedIncomeArray[0];

            // calculate the current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }

        }

        // Delete an income item from many items in the array
        if (updatedIdandIncomeArray.updatedIncomeArray.length > 1) {

            // use array reduce method to get the total value of the numbers in the array
            let incomeValue = updatedIdandIncomeArray.updatedIncomeArray.reduce((total, amount) => total += amount, 0);

            // change the value of the current income
            this.currentIncome = incomeValue;

            // calculate the current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }


    }

    budgetCalculationsForExpenseDeletion(updatedIdandExpensesArray) {

        // Delete the last expense item 
        if (updatedIdandExpensesArray.updatedExpensesArray.length === 0) {

            // Set income value to zero
            this.currentExpenses = 0;

            // calculate the current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }

        }

        // Delete an expense item when there are only 2 items in the array container 
        if (updatedIdandExpensesArray.updatedExpensesArray.length === 1) {

            // set the income value to the first index value of the array
            this.currentExpenses = updatedIdandExpensesArray.updatedExpensesArray[0];

            // calculate the current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }

        }
        // Delete an expense item from many items in the array
        if (updatedIdandExpensesArray.updatedExpensesArray.length > 1) {

            // use array reduce method to get the total value of the numbers in the array
            let ExpensesValue = updatedIdandExpensesArray.updatedExpensesArray.reduce((total, amount) => total += amount, 0);

            // change the value of the current income
            this.currentExpenses = ExpensesValue;

            // calculate the current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }

        }
    }

    budgetCalculations(A, B) {

        // Income after an item is added --- Done
        if (A.type === 'inc') {
            this.currentIncome = B;

            // current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }


        // Expense after an item is added --- Done
        if (A.type === 'exp') {
            this.currentExpenses = B;



            // current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }

        // Expense after an item is deleted
        if (A.type === 'exp') {
            this.currentExpenses = B;

            // current balance
            let balance = this.currentIncome - this.currentExpenses;

            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpenses.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }
    }

}