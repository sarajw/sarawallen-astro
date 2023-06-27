---
title: "Building sliding cards with position: sticky;"
description: "How I got the tabs to scroll on sarajoy.dev - a work in progress"
pubDate: "2023-06-27"
heroImage: "/images/blog/scrollytabs.png"
caption: "A screenshot of the top of sarajoy.dev, scrolled until the BLOG tab is nearly at the top."
---

_NB! This post is a work in progress - like #BuildInPublic I've decided to #WriteInPublic! I post to my [Mastodon account](https://front-end.social/@sarajw) when I update it._

## CSS subversion?

Late-2021: I ditched my newly-built portfolio, already in need of much modernising (I was on a bit of a [journey](https://sarajoy.dev/blog/saras-side-step/)), as it was made with what I knew about HTML and CSS from 15-20 years ago, plus scraps picked up since.

I wracked my brain for ideas. Played with CSS concepts that were new to me like `position: sticky;` and `display: grid;` / `flex;` and started messing with them.

Could I subvert them somehow, make something different? Is there anything new in the world, that hasn't already been done?

If you haven't seen it already, here's my website: https://sarajoy.dev. It may not be groundbreaking, but I'm satisfied that it's a bit novel. So how did I do it?

## Overlapping cards

I saw people on Stack Overflow battling against sticky elements pushing each other out of the way, or overlapping, and trying to get the opposite behaviour - and I got the idea that maybe, the overlapping of elements is good, actually.

What if the overlapping elements were big enough to have real content in them? What if they took up the whole page? And what if they could look like they were stacking on top of each other as you scrolled?

### Code to set up cards

This is a tidied-up version of my first pass with this idea:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="oNaRdYV" data-user="sarajw" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sarajw/pen/oNaRdYV">
  Sticky Cards: First Pass</a> by Sara (<a href="https://codepen.io/sarajw">@sarajw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Have a click around and you might find some of the limitations. This truly was just the first pass, it doesn't work quite right just yet...

I tried to keep the HTML structure quite simple for this proof of concept. A very simple nav bar across the top within a `<header>` element, and three currently empty `<section>` elements with `<h2>` headings within:

```xml
<header>
  <h1 id="name"><a href="#">Name / Logo</a></h1>
  <nav>
    <a href="#intro">Intro</a>
    &centerdot;
    <a href="#stuff">Stuff</a>
    &centerdot;
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section id="intro">
    <h2>Introduction</h2>
  </section>
  <section id="stuff">
    <h2>Stuff</h2>
  </section>
  <section id="contact">
    <h2>Contact</h2>
  </section>
</main>
```

Scroll down within the CSS on [Codepen](https://codepen.io/sarajw/pen/oNaRdYV) and you'll find the comments `/* header/nav layout */` and `/* sliding card styles */`, under which you'll find the following code - I've added some extra comments here to describe what I'm up to:

```css
/* header/nav layout */
header {
  /* line up the nav bar */
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  /* leave some space around the top and sides */
  top: 5px;
  height: calc(100vh - 5px);
  width: calc(100% - 16px);

  /* give it the base colour and put
  it at the bottom of the stack */
  background-color: hsl(200, 15%, 20%);
  z-index: 0;
}

/* sliding card styles */
section,
header {
  /* each card will:
  - not scroll past the top of the viewport 
  - be centred horizontally
  - have rounded top corners
  - have a shadow so it looks like it's stacked on top
  */
  position: sticky;
  margin-inline: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 0px 8px -3px black;
}
```

These two declaration blocks (a.k.a. rulesets or style rules) set up the general shape of all the cards - but without content or a height set for the sections under the header, they're stuck at the bottom with only the height of their headings, as there is nothing and nowhere to scroll to.

So, now we need to give the sections more properties, so we can scroll through them. They all have subtle differences - I have added comments on the first ruleset:

```css
#intro {
  /* Intro element will not scroll over the header/nav */
  top: calc(5px + 3rem);

  /* when clicking Intro, the anchor will not try to scroll
  higher than top:, or it will pull up the next card too */
  scroll-margin-top: calc(5px + 3rem);

  /* if the card height + top: is taller than the viewport,
  it will keep scrolling beyond where we want it to stop */
  height: calc(100vh - 5px - 3rem);

  /* width is ever so slightly wider than element below,
  to give the effect of being on top/closer to the viewer */
  width: calc(100% - 12px);

  /* colour is a bit lighter than the element underneath */
  background-color: hsl(200, 15%, 25%);

  /* element is one level higher than element underneath */
  z-index: 1;
}
#stuff {
  top: calc(5px + 6rem);
  scroll-margin-top: calc(5px + 6rem);
  height: calc(100vh - 5px - 6rem);
  width: calc(100% - 8px);
  background-color: hsl(200, 15%, 30%);
  z-index: 2;
}
#contact {
  top: calc(5px + 9rem);
  scroll-margin-top: calc(5px + 9rem);
  height: calc(100vh - 5px - 9rem);
  width: calc(100% - 4px);
  background-color: hsl(200, 15%, 35%);
  z-index: 3;
}
```

If you look through the rulesets, you see each successive card is:

- shorter (in vertical a.k.a. block height)
- scrolling up to a lower top position
- wider than the previous card
- lighter (in colour)
- one layer closer to the viewer

I've made the spacing between the card tops `3rem`, and added `2px` extra width on each side of each card as they stack up.

It looks nice and scrolls pretty well with your scroll wheel or flicking on a touch screen, and the links work - or, do they?

## All of the anchors!

Each card has an `id="tabname"` set within each tab `<section>` - and the links across the top of the header point to them. And they work. But only on the way down (I mean, the content looks like it is moving up rather than down, but you get what I mean)!

Once a card has been pulled up and is in the viewport, it stays there because it's sticky. It doesn't disappear away above the viewport - so if you hit a link to one of the #tabnames but the tab is already up even if hidden beneath a subsequent tab, nothing changes. "It's in the viewport already, dummy," says the anchor, "can't you see it?" 😬

To get past this issue, we need to have some invisible elements with anchors that stay in place where the tops of the cards would have been, had they not become stuck at the top of the viewport. This is where the mental gymnastics begin! They will invisibly slide up past the viewport, and when we click a link which references one of them, they will get pulled back into the viewport, bringing the rest of the page with them.

(At this point, the rebuilding of my sliding tabs into CodePen is starting to diverge from what is live on my site! Not to worry - I'm seeing flaws as I go and this way should be the best or simplest way 🤞. We'll see if I refactor my site to match...)

### Adding the invisible elements

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWZXGdm" data-user="sarajw" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sarajw/pen/QWZXGdm">
  Sticky Cards: Second Pass</a> by Sara (<a href="https://codepen.io/sarajw">@sarajw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

The `id="tabname"` now moves into a div added above the corresponding section. The sections now have classes, instead. The navigation can be left as it is.

```xml
<main>
  <!-- new element below, with id that
  previously belonged to the section -->
  <div id="intro"></div>
  <!-- for CSS selection, the section
  now has a class instead of an id -->
  <section class="intro">
    <h2><a href="#intro">Introduction</a></h2>
  </section>
  <div id="stuff"></div>
  <section class="stuff">
    <h2><a href="#stuff">Stuff</a></h2>
  </section>
  <div id="contact"></div>
  <section class="contact">
    <h2><a href="#contact">Contact</a></h2>
  </section>
</main>
```

The styles need just a little editing. The `#tabname` selectors now need to be `.tabname` instead. The new `#tabname` elements now need the `scroll-margin-top` property that the sections had.

```css
/* new element with the id now takes
over the scroll-margin-top property */
#intro {
  scroll-margin-top: calc(5px + 3rem);
}
/* section selector now needs . not # */
.intro {
  top: calc(5px + 3rem);
  height: calc(100vh - 5px - 3rem);
  width: calc(100% - 12px);
  background-color: hsl(200, 15%, 25%);
  z-index: 1;
}
#stuff {
  scroll-margin-top: calc(5px + 6rem);
}
.stuff {
  top: calc(5px + 6rem);
  height: calc(100vh - 5px - 6rem);
  width: calc(100% - 8px);
  background-color: hsl(200, 15%, 30%);
  z-index: 2;
}
#contact {
  scroll-margin-top: calc(5px + 9rem);
}
.contact {
  top: calc(5px + 9rem);
  height: calc(100vh - 5px - 9rem);
  width: calc(100% - 4px);
  background-color: hsl(200, 15%, 35%);
  z-index: 3;
}
```

The eagle-eyed may have spotted that I also made the `<h2>` headings into links to their own sections. Why not? Now if you have a tab in the viewport but not fully visible, you can click it to surface the rest.

## Adding tabs

The next thing I wanted to do was to stop the header just growing ever bigger with every subsequent card - but couldn't just let them land on top of each other, or you lost all ability to use the navigation.

I took inspiration from the tabs that stick out from the side of ring binder dividers and moved the `<h2>` above the top of the scrolling sections.

Here's the changed CSS for the section headings, with some styling:

```css
/* I've added a couple of custom properties a.k.a.
variables into the :root ruleset for convenience */
:root {
  --tabheight: 3rem;
  --tabwidth: 14ch;
}

/* [some other CSS here...] */

h2 {
  font-size: clamp(1rem, 3vw, 1.25rem);
  padding: 0.5em;

  /* heading has new position */
  position: absolute;
  top: calc(-0.8 * var(--tabheight));
  height: var(--tabheight);
  width: var(--tabwidth);
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px -3px 5px -3px black;
}
```

This alone already makes it look cool, but they're all still taking up lots of space and overlapping badly.

![The sections now have cute little tabs with headings sticking out the top of the cards. But, they're all on top of each other, vertically.](/images/blog/tabs-0.png)

So there's some more work to do! Let's shuffle the tabs along. First, we can take all the separate `top:` and `height:` declarations out of the specific sections and put them into just one ruleset.

```css
section {
  top: calc(5px + var(--tabheight));
  height: calc(100vh - 5px - var(--tabheight));
}
```

That piles all the tabs up like so:

![Now the tabs really are on top of each other. Only the Contact tab is visible, and the name/logo of the website is hidden underneath.](/images/blog/tabs-1.png)

So we need to go back into the individual tab styles and shift them along. This is something to play with - the widths, where they first come up, which side they align to, whether they overlap or not - absolutely ripe for experimentation:

```css
/* in the :root I've made the --tabwidth more responsive,
so they never get big enough to overflow the viewport */
:root {
  --tabheight: 3rem;
  --tabwidth: min(10ch, calc(100% / 3));
}

/* [some other CSS here...] */

/* 1st of 3 tabs is just under two --tabwidths from right */
.intro h2 {
  background-color: hsl(200, 15%, 25%);
  right: calc(1.8 * var(--tabwidth));
}

/* penultimate tab is just under one --tabwidth from right */
.stuff h2 {
  background-color: hsl(200, 15%, 30%);
  right: calc(0.9 * var(--tabwidth));
}

/* last tab sticks to the right of its containing element */
.contact h2 {
  background-color: hsl(200, 15%, 35%);
  right: 0;
}
```

The last thing to do here is to change the `scroll-margin-top` for each card, as they're now all the same distance from the top of the viewport - so we can do them all with just one declaration:

```css
#intro,
#stuff,
#contact {
  /* separate scroll margins no longer needed */
  scroll-margin-top: calc(5px + (1 * var(--tabheight)));
}
```

I think it was a happy accident, that doing all this leads to the tab for the next card kist peeking up, when you click a link for the tab under it! This happens because it is positioned above the top of its section, and therefore also above its anchor element.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="dyQpZoO" data-user="sarajw" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sarajw/pen/dyQpZoO">
  Sticky Cards: Third Pass WIP</a> by Sara (<a href="https://codepen.io/sarajw">@sarajw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br />
<br />

...coming soon...

## Limited to viewport height

### Scrolling larger content, v1

within the viewport-height card

### Separating the 'shoulders' a.k.a. scrolling larger content, v2

Z-index madness

## Fixing the bottom of each scrolling section

for the next card to slide over it
