class Uicontroller {
    constructor() {
        this.type = '.add__type';
        this.description = '.add__description';
        this.value = '.add__value';
        this.inputBtn = '.add__btn';
        this.deleteItembtn = '.item__delete--btn';
        this.insertUlLi = '.container clearfix';
        this.deleteBtn = ".fa";
    }

    inputfromForm() {
        return {
            type: document.querySelector(this.type).value,
            description: document.querySelector(this.description).value,
            value: document.querySelector(this.value).value,
            uniqueId: Math.round((Math.random() * 100))
        }
    };

    domstrings() {
        return {
            type: this.type,
            description: this.description,
            value: this.value,
            inputBtn: this.inputBtn,
            deleteItembtn: this.deleteItembtn,
            insertUlLi: this.insertUlLi,
            deleteBtn: this.deleteBtn
        }
    }

    displayItemsOnUi(input, transactionType, type) {

        // create li element
        const li = document.createElement('li');

        //Add Classletclassdeterinethecolorofthetransaction
        if (type === "inc") {
            li.className = "inc-item";
        } else if (type === "exp") {
            li.className = "exp-item";
        }

        // Add ID
        li.id = `item-${input.uniqueId}-${input.value}`;

        // Add HTML
        li.innerHTML = `<strong> ${transactionType} Details:   </strong>  ${input.description}.<br>
        <strong> Income Amount:</strong> ${input.value}<a href="#" class="item-delete" data-id="${input.uniqueId}-${input.value}">
            <i class="fa fa-remove"></i>
        </a>
        `;

        // Insert Item
        document.querySelector('.container').insertAdjacentElement('beforeend', li);

        //ClearInputField
        document.querySelector(this.value).value = '';
        document.querySelector(this.description).value = '';
    }

    displayCalculatedValuesOnUi(budgetValues) {

        document.querySelector(".budget__value").innerHTML = budgetValues.currentBalance;
        document.querySelector(".budget__income--value").innerHTML = budgetValues.income;
        document.querySelector(".budget__expenses--value").innerHTML = budgetValues.expense;

    }

}