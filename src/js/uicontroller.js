class Uicontroller {
    constructor() {
        this.type = '.add__type' ;
        this.description = '.add__description';
        this.value = '.add__value';
        this.inputBtn = '.add__btn';
        this.deleteItembtn = '.item__delete--btn';
        this.insertUlLi = '.container clearfix';
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
       deleteItembtn: this.deleteItembtn,
       insertUlLi: this.insertUlLi 
        }
    }

    displayOnUi(input, transactionType, type) {
        // create li element
        const li = document.createElement('li');
        //Add Classletclassdeterinethecolorofthetransaction
        // if (type === "inc") {           
        //     li.className = "inc-item";
        // } 
        
        // else if(input.type==="esp") {
        //     li.className = "esp-item";
        // }
        
        // if() {
        //    //posiblethedeleteitekey       
        //  }
        
        li.className = `${type}-item`

        // Add ID
        li.id = `input-${input.uniqueId}`;

        
        
        // Add HTML
        li.innerHTML = `<strong> ${transactionType} Transaction</strong> <em> ${input.description}.</em>
        <a href="#" class="item-delete" data-id="${input.uniqueId}">
            <i class="fa fa-remove"></i>
        </a>
        `;

        // Insert Item
        document.querySelector('.container').insertAdjacentElement('beforeend', li);

        //ClearInputField
        document.querySelector(this.value).value = '';
        document.querySelector(this.description).value = '';
    }
}