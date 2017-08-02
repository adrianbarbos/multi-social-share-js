# Multi social share js
Simple dependency free multi social share script

# Supported share types
- Facebook
- Twitter
- Google
- Pinterest
- LinkedIn
- BufferApp
- Tumblr
- Reddit
- StumbleUpon
- Evernote
- Email
- Wordpress
- Pocket

# Required meta tags
```html
<meta name="title" content=""/>
<meta name="image" content=""/>
<meta name="description" content="">
<meta name="app-name" content=""/>
<meta name="app-hash-tags" content=""/>

```

# Usage
```javascript
Share.facebook();
```
### Button

```html
<button onclick="Share.facebook()">Share</button>
```

### Anchor tag
```html
<a href="" onclick="Share.facebook(); return false;">Share</a>
```

# Override params
```javascript
Share.facebook({
	url: '', // default current location
	title: '', // default title meta tag
	description: '', // default description meta tag
	image: '', // default image meta tag
	via: '', // default app-name meta tag
	hashtags: '', // default app-hash-tags meta tag
});
```
