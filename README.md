phpAnalyticsIP
==============

Set IP and Cookie to Google Analytics.

original:<a href="http://lfll.blog73.fc2.com/blog-entry-258.html" target="_blank">Analytics IP</a>

Original is great but it does not support cross-domain.

## Create custom dimension
![set up custom dimension](https://raw.github.com/wiki/tanshio/phpAnalyticsIP/img/custom_dimension.png)

![custom dimention list](https://raw.github.com/wiki/tanshio/phpAnalyticsIP/img/Google_Analytics.png)

## Set up 
![code](https://raw.github.com/wiki/tanshio/phpAnalyticsIP/img/analytics.png)

If  the index of IP Address is 6
```
ga('set', 'dimension6', setAnalytics.getIP());
```

## Method

### setAnalytics.getIP()

→ex. XXX.XXX.XXX.XXX

### setAnalytics.getCookie()

→MD5 hash

### setAnalytics.getAccessTime()

→ex. 2014/05/28 12:04:42

## Option

Secure
```
<script type="text/javascript" src="./analytics.php?s=X"></script>
```

## Support

analytics.min.php support is more than PHP5.4