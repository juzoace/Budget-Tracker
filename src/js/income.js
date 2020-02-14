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

        let a = [];
        a.push(finalAmount);

        let amountInString = a.map(String);

        // amount check and delete
        let correspondingAmount = this.income.indexOf(amountInString[0], 0);

        this.income.splice(correspondingAmount, 1);

        let convertedIncome = this.income.map(Number);

        return {
            id: updatedIdArray,
            updatedIncomeArray: convertedIncome
        }
    }

}