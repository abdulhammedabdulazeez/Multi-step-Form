const goBack = document.querySelector('#back');
const nextButton = document.querySelector('#next');
const confirmButton = document.querySelector('#confirm');
const btnDiv = document.querySelector('.btn-div')
const buttons = document.querySelectorAll('.nav-btn');

const steps = document.querySelectorAll('.num');
const formFields = document.querySelectorAll('.form-field');

// initiliaze active
let active = 1

nextButton.addEventListener('click', () => {
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
    updateJustifyContent();
})

goBack.addEventListener('click', () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
    updateJustifyContent();
})

const updateProgress = () => {
    console.log('steps.length' + steps.length);
    console.log('active' + active);

    // Toggle .active class on the elements
    steps.forEach((step, i) => {
        if (i === (active - 1)) {
            step.classList.add('active');
            formFields[i].classList.add('active');
            console.log('i =>' + i)
        } else {
            step.classList.remove('active');
            formFields[i].classList.remove('active');
        }
    })

    // Disable or enable nextButton and backButtton

    // if (active === 1) {
    //     goBack.style.display = 'none'
    //     confirmButton.style.display = 'none'
    // } else if (active === steps.length) {
    //     nextButton.style.display = 'none'
    //     confirmButton.style.display = 'block'
    // } else {
    //     goBack.style.display = 'block'
    //     nextButton.style.display = 'block'
    //     confirmButton.style.display = 'none'
    // }

    if (active === 1) {
        goBack.disabled = true;
        confirmButton.disabled = true;
        // btnDiv.style.justifyContent = 'flex-end'
    } else if (active === steps.length) {
        nextButton.disabled = true;
        confirmButton.disabled = false;

        //space the button div
        // btnDiv.style.justifyContent = 'space-between'
    } else {
        goBack.disabled = false;
        nextButton.disabled = false;
        confirmButton.disabled = true;

        //space the button div
        // btnDiv.style.justifyContent = 'space-between'
    }

    // Call the function initially and whenever button visibility changes
    updateJustifyContent();
}

// Function to update the justify-content property based on button visibility
const updateJustifyContent = () => {
    // Check if only nextButton is visible
    const nextButtonVisible = buttons.length === 1 && buttons[0].id === 'next';

    // Set justify-content property based on visibility
    btnDiv.style.justifyContent = nextButtonVisible ? 'flex-end' : 'space-between';
};
