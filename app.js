const messageTextField = document.getElementById('messageText');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const passwordField = document.getElementById('password');
// const dateField = document.getElementById('date');
const result = document.getElementById('result');
const details = document.getElementById('details');
const showMessageButton = document.getElementById('showMessage');
const clearFormButton = document.getElementById('clearForm');

const showMessage = (input) => {
    result.value = input;
};

const formIsFilled = () => {
    let inputs = [...document.querySelectorAll('input')];
    return inputs.every(input => input.value !== '');
};

const onClearFormButtonClick = () => {
    let inputs = [...document.querySelectorAll('input')];
    inputs.push(result);
    inputs.map(x => x.value = '');
};

const onShowMessageButtonClick = () => {
    if (formIsFilled()) {
        showMessage(`${firstNameField.value} ${lastNameField.value}\n${passwordField.value}\n${dateField.value}\n${messageTextField.value}`);
    } else {
        alert('Fill all fields!');
    }
};

const getElementDetails = () => {
    const elements = [...document.getElementsByTagName("*")]
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            details.textContent = `${element.parentNode} > ${element.tagName} ${element.id} ${element.className} @${element.getBoundingClientRect().top},${element.getBoundingClientRect().left}`;
        });

        element.addEventListener('focus', () => {
            details.textContent = `${element.parentElement} > ${element.tagName} ${element.id} ${element.className} @${element.getBoundingClientRect().top},${element.getBoundingClientRect().left}`;
        });
    });
};

window.addEventListener('load', () => {
    getElementDetails();
    showMessageButton.addEventListener('click', onShowMessageButtonClick);
    clearFormButton.addEventListener('click', onClearFormButtonClick);
});

