const showMessageButton = document.getElementById('showMessage');
const messageTextField = document.getElementById('messageText');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const passwordField = document.getElementById('password');
const dateField = document.getElementById('date');
const result = document.getElementById('result');
const inputs = [...document.querySelectorAll('input')];


const showMessage = (input) => {
    result.value = input;
};

const formIsFilled = () => {
    return inputs.every(input => input.value !== '')
};

const clean = () => {
    return inputs.map(x => x.value = '');
};

const onShowMessageButtonClick = () => {
    if (formIsFilled()) {
        showMessage(`${firstNameField.value} ${lastNameField.value} ${passwordField.value} ${dateField.value} ${messageTextField.value}`);
    } else {
        alert('Fill all fields!');
    }
};

showMessageButton.addEventListener('click', onShowMessageButtonClick);
