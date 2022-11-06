const UNIQUE_ID = "#q-1380955487"
const LIKE_SPEED = 1500;
//const locations = ["Bucharest", "Budapest", "Milano", "London", "Barcelona", "Berlin", "Cluj"];

var matches = 0, likes = 0, dislikes = 0;

const PATH_BTN_POPULAR_LOCATIONS = UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Cf.Py\\(8px\\).D\\(f\\).Ai\\(c\\).Pos\\(a\\).Bdrs\\(8px\\).B\\(0\\).Start\\(0\\).Mstart\\(28px\\).Mb\\(28px\\).Bgi\\(\\$darkblue-gradient\\).Bxsh\\(\\$bxsh-btn\\) > button";
const PATH_DIV_LOCATIONS_PARENT = UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Trsdu\\(\\$normal\\).Pos\\(a\\).W\\(100\\%\\).B\\(0\\) > div > div.Expand.D\\(f\\).Fxg\\(1\\).P\\(10px\\).Ovx\\(s\\) > div";
const PATH_BTN_GO_TO_LOCATION = UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.passport__locationMarker.Pos\\(a\\).Fxd\\(r\\).Bdrs\\(4px\\).W\\(90\\%\\).W\\(340px\\)--ml.Bgc\\(\\$c-ds-foreground-blue\\).Bgc\\(\\$c-ds-background-primary\\)--ml.Bxsh\\(\\$bxsh-btn\\).Cnt\\(\\$blank\\)\\:\\:a.Pos\\(a\\)\\:\\:a.Start\\(50\\%\\)\\:\\:a.TranslateX\\(-50\\%\\)\\:\\:a.D\\(b\\)\\:\\:a.W\\(0\\)\\:\\:a.Bds\\(s\\)\\:\\:a.D\\(f\\) > button";

function delay(time) { return new Promise(resolve => setTimeout(resolve, time)); }

function changeLocation() {
	// click myprofile
	// const BTN_MYPROFILE = document.querySelector(UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > aside > nav.D\\(f\\).Ai\\(c\\).Fxd\\(r\\).Jc\\(sb\\).H\\(--side-nav-bar-height\\).Trsdu\\(\\$fast\\).Pos\\(r\\).Bgi\\(\\$g-ds-background-gold\\) > a")
	// const BTN_LOCATION_SETTINGS = document.querySelector("#settings > div > div > div > div:nth-child(4) > div.settings__container.BdY.Bdc\\(\\$c-ds-divider-primary\\) > a:nth-child(1)")
	// const INPUT_LOCATION = document.querySelector(UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.D\\(f\\).Fxd\\(c\\).Fxg\\(1\\).Bgc\\(\\$c-ds-background-primary\\).Z\\(2\\).Pos\\(a\\).Maw\\(500px\\).Bdrs\\(8px\\).T\\(0\\).Start\\(0\\).Mstart\\(28px\\).Mt\\(28px\\).NetWidth\\(100\\%\\,60px\\) > div.W\\(100\\%\\).Trsdu\\(\\$fast\\).Op\\(1\\) > div.D\\(f\\).Fxd\\(r\\).Jc\\(sb\\).Fxg\\(1\\).W\\(100\\%\\).H\\(50px\\).Ai\\(c\\).P\\(10px\\).Px\\(16px\\)--ml > input")

	// console.log("Clicking Profile Button");
	// BTN_MYPROFILE.click();
	//	LOCATION_SETTINGS.click();
	//	LOCATION_INPUT.value = "BUCHAREST";
	//	const randomLocation = locations[Math.floor(Math.random() * locations.length)];
	delay(5000).then(async () => {
		console.log("Clicking Popular Locations");

		const BTN_POPULAR_LOCATIONS = document.querySelector(PATH_BTN_POPULAR_LOCATIONS);
		BTN_POPULAR_LOCATIONS.click()
		delay(5000).then(async () => {

			const DIV_LOCATIONS_PARENT = document.querySelector(PATH_DIV_LOCATIONS_PARENT);
			const locations = DIV_LOCATIONS_PARENT.children;
			const randomLocation = locations[Math.floor(Math.random() * locations.length)];
			console.log("Choosing Random location:" + randomLocation);
			randomLocation.click()
			delay(2000).then(async () => {
				const BTN_GO_TO_LOCATION = document.querySelector(PATH_BTN_GO_TO_LOCATION);
				BTN_GO_TO_LOCATION.click()
				delay(2000).then(async () => {
					console.log("Redirecting to #automate page");
					window.location.href = "https://tinder.com/app/recs#automate"
					window.location.reload()
				}, 0)
			}, 0);
		}, 0);
	});
}

const clickIfExists = (path) => {
	const cancel = document.querySelector(path);
	if (cancel !== null) {
		cancel.click();
		return true;
	}
	return false;
}

function doCardAction(mainInterval) {
	// NEEDS MANUAL INPUT
	const DISLIKE_BUTTON = document.querySelector(UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-nope-default\\) > button")
	const LIKE_BUTTON = document.querySelector(UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button")

	// OPTIONAL
	const SUPERLIKE_MESSAGE_EXIT = UNIQUE_ID + " > div > div > button.button.Lts\\(\\$ls-s\\).Z\\(0\\).CenterAlign.Mx\\(a\\).Cur\\(p\\).Tt\\(u\\).Ell.Bdrs\\(100px\\).Px\\(24px\\).Px\\(20px\\)--s.Py\\(0\\).Mih\\(40px\\).Fw\\(\\$semibold\\).focus-button-style.D\\(b\\).My\\(20px\\).Mx\\(a\\)"
	const MATCH_MESSAGE_EXIT = UNIQUE_ID + " > div > div > div.CenterAlign.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\) > div > div.Pos\\(a\\).T\\(0\\).P\\(20px\\).P\\(12px\\)--xs.End\\(0\\) > button"

	// clear superlike ad
	clickIfExists(SUPERLIKE_MESSAGE_EXIT);
	// press 'x' when match
	const match = clickIfExists(MATCH_MESSAGE_EXIT);
	if (match) {
		console.log('MATCH ' + (++matches))
	}
	// if (window.location.hash !== '#automate') {
	// 	clearInterval(mainInterval)
	// }

	const random = Math.random();
	if (random < 0.8) {
		try {
			LIKE_BUTTON.click();
			console.log('Like ' + (++likes))
		} catch (e) { return false; }
	} else if (random < 0.90) {
		// random skip
		return false;
	} else {
		try {
			DISLIKE_BUTTON.click();
		} catch (e) { return false; }
		console.log('X ' + (++dislikes))
	}
	return true;
}


chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello User. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------

			if (window.location.hash === '#automate') {
				delay(5000).then(async () => {
					let noActionCount = 0;
					const noActionThreshold = 5;
					var mainInterval = setInterval(function () {
						cardAction = doCardAction(mainInterval);
						console.log("cardAction: " + cardAction);
						noActionCount = cardAction ? 0 : ++noActionCount;
						console.log("noActionCount:" + noActionCount);
						if (noActionCount > noActionThreshold) {
							console.log("No action times reached threshold")
							console.log("Redirecting to #change-location page");
							window.location.href = "https://tinder.com/app/settings/plus/passport#change-location"
						}
					}, LIKE_SPEED);
				});
			} else if (window.location.hash === '#change-location') {
				delay(5000).then(async () => {
					changeLocation();
				});
			} else if (window.location.hash === '#send-card') {
				console.log("entering send card")
				delay(8000).then(async () => {
					const htmlCollection = document.getElementsByClassName("matchListItem");
					const cardArray = [].slice.call(htmlCollection).slice(3);
					console.log("card array:" + cardArray.length)
					console.log("card array[0]:" + cardArray[0])
					let index = 0;
					// var mainInterval = setInterval(function(){

					if (window.location.hash !== '#send-card' || index == cardArray.length - 1) {
						clearInterval(mainInterval)
					} else if (window.location.href == "https://tinder.com/app/recs#send-card") {
						console.log("Moving to DMs");
						console.log(cardArray[index]);
						window.location.href = cardArray[index++] + "#send-card";
					}
					// cardArray[index++].click();
					// card.click()
					// delay(0).then(async () => {

					let contactButton = document.querySelector(UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.D\\(f\\).W\\(100\\%\\).BdT.Bdtc\\(\\$c-ds-divider-primary\\).Bgc\\(\\$c-ds-background-primary\\).Pos\\(r\\) > div > div:nth-child(1) > button")
					console.log("Clicking Contact Button" + contactButton)
					console.log(contactButton);
					contactButton.click();
					delay(3000).then(async () => {
						let igButton = document.querySelector(UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.Pos\\(a\\).D\\(f\\).Animdur\\(\\$normal\\).Animn\\(\\$anim-slide-in-up\\).Bgc\\(\\$c-ds-background-primary\\).W\\(100\\%\\).BdT.Bdc\\(\\$c-ds-divider-primary\\).B\\(52px\\).B\\(72px\\)--ml > div > div > div.D\\(f\\).Fxd\\(r\\).Fxs\\(0\\).Pend\\(20px\\) > div:nth-child(1) > div")
						console.log("Clicking IG Button")
						console.log(igButton);
						igButton.click();
						delay(3000).then(async () => {
							let sendButton = document.querySelector(UNIQUE_ID + " > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.D\\(f\\).W\\(100\\%\\).BdT.Bdtc\\(\\$c-ds-divider-primary\\).Bgc\\(\\$c-ds-background-primary\\).Pos\\(r\\) > form > button")
							console.log("Clicking send Button")
							console.log(sendButton);
							sendButton.click();
							delay(2000).then(async () => {
								console.log(cardArray[index]);
								window.location.href = cardArray[index++] + "#send-card";
							}, 0);
						}, 0);
					}, 0);
					// }, 5000);
					// }, 13000);
				});
			}
		}
	}, 10);
});