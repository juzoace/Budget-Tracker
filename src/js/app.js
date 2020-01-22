
const uicontroller = new Uicontroller;
// const budget = new Budget;

const controllerAddItem = function() {
    const input = uicontroller.inputfromForm();
    console.log(input);
}

// budget methods calls






// Uicontroller method calls

document.querySelector(uicontroller.domstrings().inputBtn).addEventListener('click', controllerAddItem);

document.addEventListener('keypress', function() {
    if (event.keyCode === 13 || event.which === 13) {
        controllerAddItem();
    }
})
