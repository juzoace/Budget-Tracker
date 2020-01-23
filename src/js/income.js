class Income {
    constructor() {
        // this.id = id;
        // this.description = description;
        // this.value = value;
        this.income = []
    }

    updateIncomeDataStructure(input) {
        this.income.push(input.value);
        console.log(this.income);
    }
}