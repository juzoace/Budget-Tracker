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
           this.currentIncome = receivedIncomeOrExpenseValue;
            
            console.log(this.currentIncome);
        } 
        if (input.type === 'exp') {
            this.currentExpense = receivedIncomeOrExpenseValue;
        }

        let balance = this.currentIncome - this.currentExpense;
        // console.log(this.currentIncome);
        console.log(balance);
        
        return {
            income: this.currentIncome.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            expense: this.currentExpense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            currentBalance: balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }

       
    }
  
}