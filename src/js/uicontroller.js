class Uicontroller {
    constructor() {
        this.type = '.add__type' ;
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

     // Hopefully the delete item method
    domstrings(){
        return {
       type: this.type,
       description: this.description,
       value: this.value,
       inputBtn: this.inputBtn,
       deleteItembtn: this.deleteItembtn,
       insertUlLi: this.insertUlLi ,
       deleteBtn: this.deleteBtn
        }
    }

    displayItemsOnUi(input, transactionType, type) {
        // create li element
        const li = document.createElement('li');
        //Add Classletclassdeterinethecolorofthetransaction
        if (type === "inc") {           
            li.className = "inc-item";
        } 
        
        else if(type ==="exp") {
            li.className = "exp-item";
        }
        
        console.log(li.className);
        // if() {
        //    //posiblethedeleteitekey       
        //  }
        
        // li.className = `${type}-item`

        // Add ID
        li.id = `item-${input.uniqueId}-${input.value}`;

        
        
        // Add HTML
        li.innerHTML = `<strong> ${transactionType} Transaction:   </strong>  ${input.description}.
        ${input.value}<a href="#" class="item-delete" data-id="${input.uniqueId}-${input.value}">
            <i class="fa fa-remove"></i>
        </a>
        `;

        // Insert Item
        document.querySelector('.container').insertAdjacentElement('beforeend', li);

        //ClearInputField
        document.querySelector(this.value).value = '';
        document.querySelector(this.description).value = '';
    }

    // updateTheDomAfterADeleteOperation() {
    
    //     if (updatedIdandIncomeArray) {

    //         // Convert all values in the array from string to number 
    //         let incomeArray = updatedIdandIncomeArray.updatedIdandIncomeArray.map(Number);

    //         // Get the sum of all income-values in the IncomeArray 
    //         let totalIncomeAfterEveryDeleteAction = incomeArray.reduce((total, amount) => total += amount);

    //         // update the income DOM
    //         document.querySelector('.budget__income--value').innerHtml = `${totalIncomeAfterEveryDeleteAction}`;
    //     } 

    //     if (updatedIdandExpensesArray ) {

    //           // Convert all values in the array from string to number 
    //           let expensesArray = updatedIdandExpensesArray.updatedIdandExpensesArray.map(Number);

    //           // Get the sum of all income-values in the IncomeArray 
    //           let totalExpensesAfterEveryDeleteAction = incomeArray.reduce((total, amount) => total += amount);
  
    //           // update the income DOM
    //           document.querySelector('.budget__expenses--value').innerHtml = `${totalExpensesAfterEveryDeleteAction}`;
   

    //     }
    
        

    // }

   


    updateTheDomAfterADeleteOperationOnIncome( updatedIdandIncomeArray ) {

       // console.log(`worked`);
        
        if ( updatedIdandIncomeArray.updatedIncomeArray.length === 0 ) {
            console.log(`worked`);
        
        // update the income DOM and set the income value to zero
        document.getElementById("budget__income--value").innerHtml = `$0`;
 

        }
        
        if ( updatedIdandIncomeArray.updatedIncomeArray.length > 0) {
            
        // // Get the sum of all income-values in the IncomeArray
        // let totalIncomeAfterEveryDeleteAction = incomeArray.reduce((total, amount) => total += amount);
        //     console.log(totalIncomeAfterEveryDeleteAction);

        let incomeArray = updatedIdandIncomeArray.updatedIncomeArray.reduce((total, amount) => total += amount);//.map(Number);
       

        // // update the income DOM
        console.log(incomeArray);
        document.getElementById("budget__income--value")to  = incomeArray;
 

        }
       

    }


    updateTheDomAfterADeleteOperationOnExpenses( updatedIdandExpensesArray ) {

        let expensesArray = updatedIdandExpensesArray.updatedExpensesArray.map(Number)

        // Get the sum of all expenses-values in the expensesArray 
        let totalExpensesAfterEveryDeleteAction = expensesArray.reduce((total, amount) => total += amount);
  
         // update the income DOM
        document.querySelector('.budget__expenses--value').innerHtml = `${totalExpensesAfterEveryDeleteAction}`;
   

    }



}