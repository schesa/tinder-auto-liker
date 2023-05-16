document.getElementById('tinder-button').onclick = event=>{
    event.preventDefault();
    console.log("shit clicked");
    chrome.tabs.create({ url:`https://tinder.com/app/recs#automate` });
}

document.getElementById('send-card').onclick = event=>{
    event.preventDefault();
    console.log("send card clicked");
    chrome.tabs.create({ url:`https://tinder.com/app/recs#send-card` });
}

document.getElementById('instagram-button').onclick = event=>{
    event.preventDefault();
    console.log("shit clicked");
    chrome.tabs.create({ url:`https://www.instagram.com/chesa.sebastian/` });
}

document.getElementById('try-chatgpt').onclick = event=>{
    const apiKeyInput = document.getElementById('api-key-input');
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
