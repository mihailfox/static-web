const showMessageButton = document.getElementById('showMessage');
const messageTextField = document.getElementById('messageText');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');

function onSaveButtonClick(){
    const firstName = firstNameField.value;
    const lastName = lastNameField.value;
    const messageText = messageTextField.value;

    const fullName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();

    showMessage(fullName, messageText.toUpperCase());
}

function showMessage(fullName, messageText){
    alert(messageText + ' ' + fullName);
}

showMessageButton.addEventListener('click', onSaveButtonClick);
