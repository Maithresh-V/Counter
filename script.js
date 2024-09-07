//counter
//typeof(variable) returns the datatype of the variable
// when a variable is not assigned any value then typeof variable and dataype of variable is undefined
let CounterElement = document.getElementById("CounterValue");

function onDecrement() {
    let previousCounterValue = CounterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    // console.log(updatedCounterValue);
    if (updatedCounterValue > 0) {
        CounterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        CounterElement.style.color = "red";
    } else {
        CounterElement.style.color = "black";
    }
    CounterElement.textContent = updatedCounterValue;
}

function onIncrement() {
    let previousCounterValue = CounterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    // console.log(updatedCounterValue);
    if (updatedCounterValue > 0) {
        CounterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        CounterElement.style.color = "red";
    } else {
        CounterElement.style.color = "black";
    }
    CounterElement.textContent = updatedCounterValue;
}

function onReset() {
    let updatedCounterValue = 0;
    CounterElement.textContent = updatedCounterValue;
}