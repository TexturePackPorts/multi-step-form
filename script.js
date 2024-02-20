var currentStep = 1;

function showStep() {
    var steps = document.querySelectorAll('form > div');
    for (var i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }
    document.getElementById('step-' + currentStep).style.display = 'block';
}

var nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    currentStep++;
    if (currentStep > 3) {
        currentStep = 3;
    }
    showStep();
});
document.querySelector('form').appendChild(nextButton);

var prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    showStep();
});
document.querySelector('form').appendChild(prevButton);

showStep();