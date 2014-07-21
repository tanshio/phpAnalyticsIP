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
			expire.setTime( expire.getTime() + 60*60*24*365 );
			cookieText = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
			document.cookie = 'setAnalytics=' + cookieText + ';path=/; expires=' + expire.toUTCString();
		}else{
			cookieText = cookieLists['setAnalytics'];
		}

		return cookieText;
	};

	function addZero(num){
		return ('0' + num).slice(-2);
	}

	setAnalytics.getAccessTime = function(){
		var dates  = new Date();
		var year   = dates.getFullYear();
		var month  = dates.getMonth()+1;
		var date   = dates.getDate();
		var hour   = dates.getHours();
		var minute = dates.getMinutes();
		var second = dates.getSeconds();

		date = year+'/'+addZero(month)+'/'+addZero(date)+' '+addZero(hour)+':'+addZero(minute)+':'+addZero(second);

		return date;
	};

	setAnalytics.getCookie();
	return setAnalytics;
})();