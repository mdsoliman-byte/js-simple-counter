// get fontEnd data 
const setData = document.getElementById("setData");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");


// initial state

let count = 0;

// function to increment the count
function increments() {
    count++;
    setData.innerText = count;

}

// function to decrement the count
function decrements() {
    count--;
    setData.innerText = count;
    if (count === 0) {
        decrement.style.display = "none";
    } else {
        decrement.style.display = "block";
    }
}

// add EventListener 
increment.addEventListener("click", increments)
decrement.addEventListener("click", decrements)