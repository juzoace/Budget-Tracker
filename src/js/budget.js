class Budget {
    constructor() {
        // this.id = id;
        // this.description = this.description;
        // this.value = value;
        this.currentIncome = 0;
        this.currentExpense = 0
    }

    budgetCalculations(input, receivedIncomeOrExpenseValue) {
        
        // If (input.type === 'inc') {

        //    
        console.log(receivedIncomeOrExpenseValue);

        // } else {
        //     
        // }

        if (input.type === 'inc') {
            receivedIncomeOrExpenseValue = this.currentIncome;
        } 
        if (input.type === 'exp') {
            receivedIncomeOrExpenseValue = this.currentExpense;
        }

        let balance = this.currentIncome - this.currentExpense;
        console.log(this.currentIncome);
        console.log(balance);
    }
  
}