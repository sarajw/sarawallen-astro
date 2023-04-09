---
title: "Using html <details> tag as navigation"
description: "Natively right out of the box, HTML provides us with a way to open and close an element on a click. Beautiful."
pubDate: "Mar 27 2022"
heroImage: "/images/blog/details.png"
caption: "Screenshot of menu made using <details> tag"
---

## `<details>` ?

I thought this was the cutest thing; natively right out of the box, HTML provides us with a way to open and close an element on a click. Beautiful. People don't seem to have used it much! Odd, I thought.

```html
<details>
  <summary>The bit you click goes in here</summary>
  Once clicked, you get to see the rest of the stuff here
</details>
```

And it's pretty flexible, you can put whatever you want in there!

```html
<details id="nav">
  <summary id="hamburger" role="button" aria-haspopup="menu">
    <div></div>
    <div></div>
    <div></div>
  </summary>
  <!-- test comment -->
  <ul id="menu">
    <li><a href="#intro">Intro</a></li>
    <li><a href="#stuff">Stuff</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>
```

So I had a play with it. It didn't take too long (I lie, I fiddle with CSS incessantly, even when doing something simple, just because it's fun) to style it into a nice enough looking hamburger-style menu with a drop down of links:

![details-nav screenshot](/images/blog/details2.png)

<p class="caption">Screenshot of hastily made 'website'</p>

And it worked beautifully, click the hamburger menu icon and out pops a menu. Click it again and it goes away.

## `</details>`

But, there was just one thing missing - and my muscle memory gave it away. It doesn't disappear when you click outside of the menu, and doesn't disappear automatically after you've clicked the thing you want to go to.

## JS needed

So, in we came with JavaScript. It took me a while to get to the right code to deselect the whole 'button' area (including the three dashes), while not also selecting the whole drop-down menu from the 'click-outside' area. Thank you .closest()!

For a long time I was managing to get the click-anywhere-to-close thing to work, but when you clicked on the button itself it immediately reopened the menu. Sigh. Got there in the end, thanks to StackOverflow, of course:

```js
let menu = document.getElementById("nav");

//listen for clicks everywhere
window.addEventListener("click", function (event) {
  // if clicks are not on the menu button itself
  if (!event.target.closest("#hamburger")) {
    // Hide the menu if open.
    if (menu.open) {
      menu.removeAttribute("open");
    }
  }
});
```

Feel free to click away on this demo, and turn off JavaScript if you want to see it working with just HTML & CSS: https://details-nav.netlify.app/

## Accessibility

I don't know for sure whether using `<details>` this way is semantically problematic or not. And even if it isn't, it probably still needs role="button" and it could probably also do with aria-pressed and aria-expanded attributes being correctly set, which of course requires more JavaScript...

## Conclusion

It seems like a cute short-cut. And it is to some degree, until you actually want to use it in a serious capacity, and have screen readers understand it, and for it to not frustrate people who have their muscle memory (like mine) trained by the modern web as we know it.

As such you end up writing a bunch of JS anyway, and if you're going to do that - well, you may as well use `<button>` and go the (only very slightly) longer way round.

Despite all this I think `<details>` is a useful tag to have in our HTML armoury, just not in this particular case.
