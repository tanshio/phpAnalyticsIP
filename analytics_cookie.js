setAnalytics = (function(){

	var setAnalytics = {};

	setAnalytics.getCookie = function(){
		var cookies = document.cookie.split('; '),
		cookieLists = {},
		cookieText,
		cookie,
		expire;

		for(var i=0;i<cookies.length;i++){
			cookie = cookies[i].split('=');
			cookieLists[cookie[0]]=cookie[1];
			if(cookie[0] === 'setAnalytics' ){break;}
			
		}

		if(!cookieLists['setAnalytics']){
			expire =  new Date();
			expire.setTime( expire.getTime() + 31536000000 );
			cookieText = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
			document.cookie = 'setAnalytics=' + cookieText + ';path=/; expires=' + expire.toUTCString();
		}else{
			cookieText = cookieLists['setAnalytics'];
		}

		return cookieText;
	};

	setAnalytics.getAccessTime = function(){
		var date = new Date();
		date = date.toLocaleString();

		return date;
	};

	setAnalytics.getCookie();
	return setAnalytics;
})();