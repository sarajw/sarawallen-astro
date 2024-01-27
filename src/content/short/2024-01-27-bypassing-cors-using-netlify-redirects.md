---
short: true
pubDate: '2024-01-27 13:50 +0100'
published: false
title: Bypassing CORS using Netlify _redirects
---
You need a file called `_redirects` in your publish directory.

In your `_redirects` file, you can do something as simple as:
```
/rewrite/*	https://:splat	200
```
Anything after the `/rewrite/` is now fetched by Netlify's servers, acting like a little proxy.

Now anything in your HTML that was trying to, say, fetch from another server which was bringing up a CORS error, can instead look like it's fetching something local:
```
const response = await fetch("https://example.com"); // not this
const response = await fetch("/rewrite/example.com"); // this!
```