// get all the checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// add event listener to each checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // get the number of checked checkboxes
    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    
    // update the counter display
    const counter = document.querySelector('#counter');
    counter.textContent = checkedCount;
  });
});

// Timer

// get all the checkboxes

// add event listener to each checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // get the number of checked checkboxes
    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    
    // update the counter display
    const counter = document.querySelector('#counter');
    counter.textContent = checkedCount;
  });
});

// Timer

const counter = document.getElementById('counter');
const timer = document.getElementById('timer');
let startTime;
let timerInterval;

function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const elapsedTime = new Date().getTime() - startTime;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
}

let numChecked = 0;
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    if (numChecked === 0) {
      startTimer();
    }
    if (checkbox.checked) {
      numChecked++;
    } else {
      numChecked--;
    }
    counter.textContent = numChecked;
    if (numChecked === checkboxes.length) {
      clearInterval(timerInterval);
      alert(`You cracked all the eggs in ${timer.textContent}!`);
    }
  });
});