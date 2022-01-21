chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
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
					// clear superlike ad
					clickIfExists("#u1056518897 > div > div > button.button.Lts\\(\\$ls-s\\).Z\\(0\\).CenterAlign.Mx\\(a\\).Cur\\(p\\).Tt\\(u\\).Ell.Bdrs\\(100px\\).Px\\(24px\\).Px\\(20px\\)--s.Py\\(0\\).Mih\\(40px\\).Fw\\(\\$semibold\\).focus-button-style.D\\(b\\).My\\(20px\\).Mx\\(a\\)");
					// press 'x' when match
					const match = clickIfExists("#u-1179696122 > div > div > div.CenterAlign.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\) > div > div.Pos\\(a\\).T\\(0\\).P\\(20px\\).P\\(12px\\)--xs.End\\(0\\) > button");
					if(match){
						console.log('MATCH '+ (++matches))
					}
					if(window.location.hash !== '#automate') {
						clearInterval(mainInterval)
					}

					const random = Math.random();
					if(random < 0.3){
						document.querySelector("#u-1510067323 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml.Mah\\(fc\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Isolate.W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-like-green\\) > button").click();
						console.log('Like '+ (++likes))
					} else if(random < 0.95) {
						// random skip
					} else {
						document.querySelector("#u-1510067323 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml.Mah\\(fc\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Isolate.W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-pink\\) > button").click();
						console.log('X '+ (++dislikes))
					}
				}, 846);
			});
		}


	}
	}, 10);
});