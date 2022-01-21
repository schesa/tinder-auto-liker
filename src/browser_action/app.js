document.getElementById('tinder-button').onclick = event=>{
    event.preventDefault();
    console.log("shit clicked");
    chrome.tabs.create({ url:`https://tinder.com/app/recs#automate` });
}

document.getElementById('instagram-button').onclick = event=>{
    event.preventDefault();
    console.log("shit clicked");
    chrome.tabs.create({ url:`https://www.instagram.com/chesa.sebastian/` });
}