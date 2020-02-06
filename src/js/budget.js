class Budget {
    constructor() {
        // this.id = id;
        // this.description = this.description;
        // this.value = value;
        this.currentIncome = 0;
        this.currentExpense = 0
    }

    budgetCalculations(A, B) {
        console.log(A);
        

        // Income after an item is added --- Done
        if (A.type === 'inc') {
           this.currentIncome = B;
            
            console.log(this.currentIncome);

            // current balance
            let balance = this.currentIncome - this.currentExpense;
            console.log(balance);
            
            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        } 


        // Expense after an item is added --- Done
        if ( A.type === 'exp' ) {
            this.currentExpense = B;

            console.log(this.currentExpense);

            // current balance
            let balance = this.currentIncome - this.currentExpense;
            console.log(balance);
            
            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }


        // Income, after an item is deleted from many items
        if ( A.updatedIncomeArray.length > 0 ) {

        // Current Income Value After performing a delete operation  on an Income Item
        let incomeValue = A.updatedIncomeArray.reduce((total, amount) => total += amount, 0);

        // change the value of current income 
        this.currentIncome = incomeValue;

        // current balance
        let balance = this.currentIncome - this.currentExpense;
        console.log(balance);
        
        return {
            income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
        }


        // Income, after an item is deleted   
        if (A.updatedIncomeArray.reduce((total, amount) => total += amount, 0) === undefined && A.updatedIncomeArray.length === 0) {

            // Set income to 0
            this.currentIncome = 0;

            // current balance
            let balance = this.currentIncome - this.currentExpense;
            console.log(balance);
            
            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }


        // Expense after an item is deleted
         if (A.type === 'exp') {
            this.currentExpense = B;

            // current balance
            let balance = this.currentIncome - this.currentExpense;
            console.log(balance);
            
            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }


        // Expenses, after an item is deleted from many items
        if (A.updatedExpensesArray.reduce((total, amount) => total += amount, 0) > 0 && A.updatedExpensesArray.length > 0) {

            // Current Expense Value After Performing A Delete operation on an Expense Item
            let expenseValue = A.updatedExpensesArray.reduce((total, amount) => total += amount, 0);

            // Change the value of current expenses
            this.currentExpense = expenseValue;

            // current balance
            let balance = this.currentIncome - this.currentExpense;
            console.log(balance);
            
            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }


        // Expenses after the last item is deleted
        if ( A.updatedExpensesArray.reduce((total, amount) => total += amount, 0) === undefined && A.updatedExpensesArray.length === 0) {

            // Set expenses to zero
            this.currentExpense = 0;

            // current balance
            let balance = this.currentIncome - this.currentExpense;
            console.log(balance);
                        
            return {
                income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        }


        let balance = this.currentIncome - this.currentExpense;
        console.log(balance);
        
        // return {
        //     income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        //     expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        //     currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        // }

       
    }
  
}