<?php

$SET    = hash( 'md5' ,time() . ip2long(ip_check()));
$DATE   = date("Y/m/d H:i:s");
$SECURE = isset($_REQUEST["s"])?1:0;

if(!isset($_COOKIE['setAnalytics'])){
	setcookie( 'setAnalytics', cookie_check() , time()+60*60*24*365, '/' , $_SERVER['SERVER_NAME'] , $SECURE );
}

function cookie_check(){

	global $SET;

	if(!isset($_COOKIE[ 'setAnalytics' ])){
		$cookie_set = $SET;
	}else{
		$cookie_set = htmlentities($_COOKIE[ 'setAnalytics' ],ENT_QUOTES,"UTF-8");
	}

	return $cookie_set;
}

function ip_check(){
	return $_SERVER["REMOTE_ADDR"];
}

?>

var setAnalytics = {};

setAnalytics.getCookie = function(){
	return '<?php echo cookie_check(); ?>';
}

setAnalytics.getIP = function(){
	return '<?php echo ip_check(); ?>';
}

setAnalytics.getAccessTime = function(){
	return '<?php echo $DATE; ?>';
}