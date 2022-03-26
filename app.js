const showMessageButton = document.getElementById('showMessage');
const messageTextField = document.getElementById('messageText');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const passwordField = document.getElementById('password');
const dateField = document.getElementById('date');
const inputs = [...document.querySelectorAll('input')];


const showMessage = () => {
    const message = messageTextField.value;
    const firstName = firstNameField.value;
    const lastName = lastNameField.value;
    const password = passwordField.value;
    const date = dateField.value;
    alert(`Message: ${message}\nName: ${firstName} ${lastName}\nPassword: ${password}\nDate: ${date}`);
};

const formIsFilled = () => {
    return inputs.every(input => input.value !== '')
};

const clean = () => {
    return inputs.map(x => x.value = '');
};

const onShowMessageButtonClick = () => {
    if (formIsFilled()) {
        showMessage();
        clean();
        return;
    }

    alert('Fill all the fields!');
};

showMessageButton.addEventListener('click', onShowMessageButtonClick);
