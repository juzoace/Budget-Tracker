class Income {
    constructor() {
        this.income = []
        this.id = [];
    }

    updateIncomeDataStructure(input) {
        
        // update income id
        this.id.push(input.uniqueId);

        this.income.push(input.value);

        let convertedIncome = this.income.map(Number);

        let reducedIncome = convertedIncome.reduce((total, amount) => total += amount);

        return reducedIncome;

    }

    deleteItemFromIncomeDataStructure(finalarrid, finalAmount) {
        
         // id check and delete
         let correspondingId = this.id.indexOf(finalarrid, 0);
        
         this.id.splice(correspondingId, 1);

         let updatedIdArray = this.id;

         // amount check and delete
         let correspondingAmount = this.income.indexOf(finalAmount, 0);// Optimize later, (what if there are two expenses which have the same value and Id???......So think about a solution to such situation )
 
         this.income.splice(correspondingAmount, 1);

         let convertedIncome = this.income.map(Number);
        
         return {
            id: updatedIdArray,
            updatedIncomeArray: convertedIncome
         }
    }

}