// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

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