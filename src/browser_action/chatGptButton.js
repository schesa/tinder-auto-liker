mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));

const apiKeyInput = document.getElementById('api-key-input');
const sendButton = document.getElementById('try-chatgpt');

if (apiKeyInput.value.trim() !== '') {
    // sendButton.disabled = false;
    sendButton.style.borderColor = '#FF0000';
} else {
    // sendButton.disabled = true;
    sendButton.style.borderColor = '#424242';
}

apiKeyInput.addEventListener('input', function () {
    if (apiKeyInput.value.trim() !== '') {
        // sendButton.disabled = false;
        sendButton.style.borderColor = '#FF0000';
    } else {
        // sendButton.disabled = true;
        sendButton.style.borderColor = '#424242';
    }
});

function handleButtonClick() {
    if (apiKeyInput.value.trim() !== '') {
        console.log('starting')
        message = 'Starting....';
    } else {
        console.log('cant start')
        message = 'You need to enter a OpenAPI Key';
    }
    const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
    const snackbarLabel = document.querySelector('.mdc-snackbar__label');
    snackbarLabel.textContent = message;
    snackbar.open();
}