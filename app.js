const showMessageButton = document.getElementById('showMessage');
const messageTextField = document.getElementById('messageText');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const passwordField = document.getElementById('password');
const dateField = document.getElementById('date');

function onSaveButtonClick(){
    const firstName = firstNameField.value;
    const lastName = lastNameField.value;
    const messageText = messageTextField.value;
    let password = passwordField.value;
    let date = dateField.value;

    const fullName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();
    showMessage(fullName, password, messageText, date);

    const inputs = document
        .querySelectorAll('messageTextField, firstNameField, lastNameField, passwordField, dateField');

    inputs.forEach(input => input.value = '');
}

function showMessage(fullName, password, messageText, date){
    alert('The person with the name ' + fullName + ' ' 
    + 'and the password ' + password 
    + ' said:' + '\n' + messageText + '\n'
    + 'on the date ' + date);
}

showMessageButton.addEventListener('click', onSaveButtonClick);
