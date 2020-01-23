class Uicontroller {
    constructor() {
        this.type = '.add__type' ;
        this.description = '.add__description';
        this.value = '.add__value';
        this.inputBtn = '.add__btn'
        this.deleteItembtn = 'item__delete--btn'
    }

    inputfromForm() {
        return {
            type: document.querySelector(this.type).value,
            description: document.querySelector(this.description).value,
            value: document.querySelector(this.value).value,
            uniqueId: Math.round((Math.random() * 100))
        }

   
    };

     // Hopefully the delete item method
    domstrings(){
        return {
       type: this.type,
       description: this.description,
       value: this.value,
       inputBtn: this.inputBtn,
       deleteItembtn: this.deleteItembtn 
        }
    }

    displayOnUi(input) {

    }
}