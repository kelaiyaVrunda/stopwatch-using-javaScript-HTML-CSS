let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterAddElem = document.querySelector('.counter-add');

let count = 0;
updateDisplay();

counterAddElem.addEventListener("click", () => {
    count++;
    updateDisplay();

});

counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay();

});
function updateDisplay() {
    counterDisplayElem.innerHTML = count;
};