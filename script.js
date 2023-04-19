let count = 0;

let newCount = document.querySelector("#count_number");
newCount.textContent = count;
newCount.style.color = "grey";

let decrease_bt = document.querySelector("#bt_decrease");
let reset_bt = document.querySelector("#bt_reset");
let increase_bt = document.querySelector("#bt_increase");

decrease_bt.addEventListener("click", decrease);
reset_bt.addEventListener("click", reset);
increase_bt.addEventListener("click", increase);

function checkCountColour() {
  if (count === 0) {
    newCount.style.color = "grey";
  } else if (count < 0) {
    newCount.style.color = "red";
  } else newCount.style.color = "green";
}

function decrease() {
  count -= 1;
  checkCountColour();
  newCount.textContent = count;
}

function reset() {
  count = 0;
  checkCountColour();
  newCount.textContent = count;
}

function increase() {
  count += 1;
  checkCountColour();
  newCount.textContent = count;
}
