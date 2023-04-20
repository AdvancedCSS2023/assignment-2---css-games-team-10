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