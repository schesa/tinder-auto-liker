chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello User. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		const clickIfExists = (path)=>{
			const cancel = document.querySelector(path);
			if(cancel !== null){
				cancel.click();
				return true;
			}
			return false;
		}
		if(window.location.hash === '#automate') {
			function delay(time) {
				return new Promise(resolve => setTimeout(resolve, time));
			  }
			var matches=0, likes=0, dislikes=0;
			delay(5000).then(async () => {
				var mainInterval = setInterval(function(){
		
					// NEEDS MANUAL INPUT
					const DISLIKE_BUTTON = document.querySelector("#o1926512098 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Isolate.W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-pink\\) > button")
					const LIKE_BUTTON = document.querySelector("#o1926512098 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Isolate.W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-like-green\\) > button")
					
					// OPTIONAL
					const SUPERLIKE_MESSAGE_EXIT = "#t-1776868400 > div > div > button.button.Lts\\(\\$ls-s\\).Z\\(0\\).CenterAlign.Mx\\(a\\).Cur\\(p\\).Tt\\(u\\).Ell.Bdrs\\(100px\\).Px\\(24px\\).Px\\(20px\\)--s.Py\\(0\\).Mih\\(40px\\).Fw\\(\\$semibold\\).focus-button-style.D\\(b\\).My\\(20px\\).Mx\\(a\\)"
					const MATCH_MESSAGE_EXIT = "#u-1179696122 > div > div > div.CenterAlign.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\) > div > div.Pos\\(a\\).T\\(0\\).P\\(20px\\).P\\(12px\\)--xs.End\\(0\\) > button"

					// clear superlike ad
					clickIfExists(SUPERLIKE_MESSAGE_EXIT);
					// press 'x' when match
					const match = clickIfExists(MATCH_MESSAGE_EXIT);
					if(match){
						console.log('MATCH '+ (++matches))
					}
					if(window.location.hash !== '#automate') {
						clearInterval(mainInterval)
					}

					const random = Math.random();
					if(random < 0.5){
						LIKE_BUTTON.click();
						console.log('Like '+ (++likes))
					} else if(random < 0.93) {
						// random skip
					} else {
						DISLIKE_BUTTON.click();
						console.log('X '+ (++dislikes))
					}
				}, 1046);
			});
		} else if(window.location.hash === '#send-card') {
			console.log("entering send card")
			function delay(time) {
				return new Promise(resolve => setTimeout(resolve, time));
			  }
			delay(5000).then(async () => {
				const htmlCollection = document.getElementsByClassName("matchListItem");
				const cardArray = [].slice.call(htmlCollection).slice(1);
				console.log("card array:"+cardArray.length)
				console.log("card array[0]:"+cardArray[0])
				let index=0;
				var mainInterval = setInterval(function(){
					
						if(window.location.hash !== '#send-card' || index==cardArray.length-1) {
							clearInterval(mainInterval)
						}
						console.log(cardArray[index]);
						window.location.href = cardArray[index++]+"#send-card";
						// cardArray[index++].click();
						// card.click()
						delay(8000).then(async () => {
							let contactButton = document.querySelector("#t897152800 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.D\\(f\\).W\\(100\\%\\).BdT.Bdtc\\(\\$c-divider\\).Bgc\\(\\#fff\\).Pos\\(r\\) > div > div:nth-child(1) > button");
							contactButton.click();
							delay(1000).then(async () => {
								let igButton = document.querySelector("#t897152800 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.Pos\\(a\\).D\\(f\\).Animdur\\(\\$normal\\).Animn\\(\\$anim-slide-in-up\\).Bgc\\(\\#fff\\).W\\(100\\%\\).BdT.Bdc\\(\\$c-divider\\).B\\(52px\\).B\\(72px\\)--ml > div > div > div.D\\(f\\).Fxd\\(r\\).Fxs\\(0\\).Pend\\(20px\\) > div:nth-child(1) > div");
								igButton.click();
								delay(1000).then(async () => {
									let sendButton=document.querySelector("#t897152800 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.D\\(f\\).W\\(100\\%\\).BdT.Bdtc\\(\\$c-divider\\).Bgc\\(\\#fff\\).Pos\\(r\\) > form > button.button.Lts\\(\\$ls-s\\).Z\\(0\\).CenterAlign.Mx\\(a\\).Cur\\(p\\).Tt\\(u\\).Ell.Bdrs\\(100px\\).Px\\(24px\\).Px\\(20px\\)--s.Py\\(0\\).Mih\\(40px\\).Pos\\(r\\).Ov\\(h\\).C\\(\\#fff\\).Bg\\(\\$c-pink\\)\\:h\\:\\:b.Bg\\(\\$c-pink\\)\\:f\\:\\:b.Bg\\(\\$c-pink\\)\\:a\\:\\:b.Trsdu\\(\\$fast\\).Trsp\\(\\$background\\).Bg\\(\\$g-ds-background-brand-gradient\\).button--primary-shadow.StyledButton.Bxsh\\(\\$bxsh-btn\\).Fw\\(\\$semibold\\).focus-button-style.Mb\\(16px\\).As\\(fe\\)")
									sendButton.click();	
								}, 500);	
							}, 500);	
						}, 2000);
				}, 15000);
			});
		}


	}
	}, 10);
});