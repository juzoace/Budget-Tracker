class Income {
    constructor() {
        // this.id = id;
        // this.description = description;
        // this.value = value;
        this.income = []
        this.id = [];
    }

    updateIncomeDataStructure(input) {
        
        // update income id
        this.id.push(input.uniqueId);
        // console.log(this.id);
        // update income value
        this.income.push(input.value);
         console.log(this.income);
        // console.log(input.uniqueId);
        //Convert to integer
        let convertedIncome = this.income.map(Number);
        console.log(convertedIncome);
        let reducedIncome = convertedIncome.reduce((total, amount) => total += amount);

       
        return reducedIncome;

    }

    deleteItemFromIncomeDataStructure(finalarrid, finalAmount) {
        
         // id check and delete

         let correspondingId = this.id.indexOf(finalarrid, 0);
        
         this.id.splice(correspondingId, 1);
         console.log(this.id);

         let updatedIdArray = this.id;

         // amount check and delete
 
         let correspondingAmount = this.income.indexOf(finalAmount, 0);// Optimize later, (what if there are two expenses which have the same value and Id???......So think about a solution to such situation )
 
         this.income.splice(correspondingAmount, 1);
         console.log(this.income);

         let convertedIncome = this.income.map(Number);
        console.log(convertedIncome);
        
         return {
            id: updatedIdArray,
            updatedIncomeArray: convertedIncome
         }
    }

}