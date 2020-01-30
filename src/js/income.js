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
        console.log(this.id);
        // update income value
        this.income.push(input.value);
        console.log(this.income);
        console.log(input.uniqueId);
        //Convert to integer
        let convertedIncome = this.income.map(Number);
        console.log(convertedIncome);
        let reducedIncome = convertedIncome.reduce((total, amount) => total += amount);

       
        return reducedIncome;

    }

    deleteItemFromIncomeDataStructure() {

    }

}