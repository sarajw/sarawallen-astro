---
layout: "../../layouts/BlogPost.astro"
title: "#100DaysOfCode"
description: "Copying and pasting my tweets on the matter as I slowly make my way non-consecutively through the 100 days."
pubDate: "Sep 21 2022"
heroImage: "/images/blog/twitter.png"
caption: "Profile picture of my twitter account"
---

<!-- ---
title: "#100DaysOfCode"
date: "2022/09/21"
exerpt: Copying and pasting my tweets on the matter as I slowly make my way non-consecutively through the 100 days.
image: twitter.png
caption: Profile picture of my twitter account
--- -->

Want to see more? I post other stuff too: [@sarajwallen](https://twitter.com/sarajwallen) :)

<div class="tweet">

## Day 79/#100DaysOfCode

I want to get some work done to harmonise my homepage(s)!

I also think it may be about time I learned how to integrate a headless CMS into my site.

What's the simplest headless CMS to use with 
@astrodotbuild? @storyblok? Other?

### Day 79 continued:

Work on the frankenhomepage begins:
https://sarawallen-astro.netlify.app

Yeah, it's messy. Trying to make elements of both http://sarawallen.com and http://blog.sarawallen.com come together into a single, more cohesive whole. Wish me luck!

</div><div class="tweet">

## Day 78/#100DaysOfCode

OK, I can refactor my home page to switch light/dark mode without JS, to a degree, but I can't switch the color-scheme of the root element this way.

I really want color-scheme to do the heavy lifting here, as that's what it's for.

Ideal :has() use case!
![see above](/images/blog/ideal-has.png)

Code in image:
<pre>:root:has(#toggle:checked) &lcub;
    color-scheme: dark;
&rcub;</pre>

</div><div class="tweet">

## Day 77/#100DaysOfCode

I'm refactoring http://sarawallen.com a little because it really should be using 'color-scheme: light dark' by now and, hm.

Until now it just followed the light or dark mode of the user's OS, thinking it would be nice to add a mode toggle. However...

1/2

Adding a toggle needs JS. So far http://sarawallen.com is pure HTML & CSS. Worth it?

I could probably do a hidden checkbox thing, to keep it all JS-less, but I'm not so sure how accessible that is, and I suspect I'd end up having to provide some extra logic in JS anyway..

2/2

### Day 77 continued:

Welp, I went ahead and did it.

Not sure it's a full overhaul, but some updating has happened. Feel free to report any weirdness:

https://sarawallen.com

</div><div class="tweet">

## Day 76/#100DaysOfCode 

Been on hiatus, went on a family holiday, now I'm messing with PowerShell to try and get something working for my current company in the coming 2 weeks.

LOTS of googling for syntax!

Often coding is just algebra, with each language having its own syntax..

</div><div class="tweet">

## Day 75/#100DaysOfCode (very-non-consecutive)

I have clearly coded in the last 2 weeks but it's so normal now that I forget to log it :)

I have:<br>✨ (mostly) finished Ben's website<br>✨ been messing around with light/dark mode toggles<br>✨ largely finished a private (for now) project

</div><div class="tweet">

## Day 74/#100DaysOfCode

How many times am I going to have my @reactjs components go weird and unresponsive, before I learn to put the @emotioncss styled components outside of the export default function 🤦

Took me ages to figure it out this time. Hopefully I've learned my lesson!

</div><div class="tweet">

## Day 73/#100DaysOfCode 

No image ALT because writing it here:
Screenshot of failed Vercel deployments because of TS errors. The top commit message is "TS is hard hahaha"

Ooof. I'm doing a timed task. This is taking tiiiime!
![description in text above](/images/blog/vercel-errors.png)

</div><div class="tweet">

## Day 72/#100DaysOfCode

I often feel like I'm not doing it right when I'm staring blankly at docs or code feeling like I'll never get it.

Then slowly, I do. Somehow.

Seems not all progress comes from activity - are my braincells rearranging themselves as I stare?

</div><div class="tweet">

## Day 71/#100DaysOfCode 

Stream (or scream!) of consciousness:

TypeScript errors, HTMLElement, document not defined, object is possibly 'null', 'style' does not exist on type 'Element', useEffect to the rescue, but not like that, or that, OK so that works - but not this...

🤯 🥰

</div><div class="tweet">

## Day 70/#100DaysOfCode 

Separating out components on a friend's site in @astrodotbuild & getting lost in props & where to put various bits of JS and CSS - it's fun but some of those errors really aren't useful!

Learning things in one place and applying them in another is cool :)

</div><div class="tweet">

## Day 69(nice)/#100DaysOfCode 

Trying @emotioncss styled components in @nextjs.

Seems once you have a bunch of concepts (not syntax, who can remember that) in your head, learning new stuff accelerates.

I still know I KnOw NotHiNG, but I do know how to get started with new stuff!

</div><div class="tweet">

## Day 68/#100DaysOfCode

I'm attempting the use of TypeScript ☠️ Wish me luck!

</div><div class="tweet">

## Day 67/#100DaysOfCode 

Urghhh, I just wasted an hour deep in if-elses, trying to be too clever.

I don't have to do all those silly little edge cases I was trying to include for completeness. Move on, woman.

Have commented the offending code instead of deleting, just in case...

</div><div class="tweet">

## Day 66/#100DaysOfCode 

Going to have to back off the #bootcampdev for a while to concentrate on another little project or two.

I'm sad not to be keeping up with the latest week, but I need to prioritise. The materials will still be there when I get back to it :)

</div><div class="tweet">

## Day 65/#100DaysOfCode

I've been working on my friend @Beniswriting's new website. So far I've made a relatively simple one-page landing site, but I plan to throw it into @astrodotbuild so that it's easier to expand later on :)

Currently to be seen at ~~https://benjamin-dickson.netlify.app~~<br> _link no longer functional_

</div><div class="tweet">

## Day 64/#100DaysOfCode 

Yes coding! Yes, I'm still doing it!

My twitter clone's DB fell down, but now it's up again :)

It definitely needs tweaks but I'm falling behind, so pushing on with the job board that is/was this week's project.

#bootcampdev @flaviocopes

\[insert 'just keep swimming' Finding Nemo GIF here!\]

</div><div class="tweet">

## Day 63/#100DaysOfCode 

My twitter clone is almost fully working, I'm not sure of a lot of things in it, it's all very clever and I certainly can't imagine ever building such a thing by myself right now. It'll come in time I'm sure...

..I still want to style it better, too!

### Day 63 continued:

Either way, it's up online - you can try to sign in if you like, but unless I contact you with your magic link, you won't be able to log in.

There's still some minor browsing possible without signing up :)

[twitter-clone-sarajw.vercel.app](https://twitter-clone-sarajw.vercel.app)

#bootcampdev

</div><div class="tweet">

## Day 62/#100DaysOfCode

Twitter clone (mine's called 'Cheeper'!) progress, still very simple looking - only got this weekend before we start a new project next week, so we'll see how far I can take it...

#bootcampdev - @flaviocopes

Light & Dark modes, logged in and logged out:
![Light mode screenshot of my 'Cheeper' Twitter clone](/images/blog/cheeper-light.jfif)
![Dark mode screenshot of my 'Cheeper' Twitter clone](/images/blog/cheeper-dark.jfif)

</div><div class="tweet">

## Day 61/#100DaysOfCode

For the twitter clone, a check on whether a username was already taken was left up to us to figure out.

It seemed simple, but then I needed to change a load of behaviours based on the outcome of the check, that was harder!

Did it, though! 💫

#bootcampdev

### Day 61 continued:

For those interested (@njong_emy!), right now it's looking like this - so far most of the work has gone into the database and auth and API:
![Screenshot of my 'Cheeper' Twitter clone](/images/blog/cheeper.jfif)

Yes, it's like Twitter, but Cheeper...

</div><div class="tweet">

## Day 60/#100DaysOfCode

My goodness there's a lot to take in. I'm glad we'll be doing project after project, in the hope more and more becomes familiar - right now I'm swimming in unfamiliar code!

I like it though. As usual I just want to get to the styling part 😎

#bootcampdev

</div><div class="tweet">

## Day 59/#100DaysOfCode*

#bootcampdev is spinning up a twitter clone this week!

I hope I manage to finish it and I hope even more that I manage to find some time to put my own stamp on it...

\* haha yes, I'm letting days and days slip away between posting these...

</div><div class="tweet">

## Day 58/#100DaysOfCode 

The friend for whom I made a landing page as a learning exercise is now wanting to edit it without bothering me, which is fine - it was asked if it could be moved to WordPress, eep!

After much deliberation, I think the best solution is actually just

### Day 58 continued:

hosting it on Github and letting it update to Netlify (which also has handy native Forms support for the contact form), adding big obvious comments in the index.html that make it clear where is safe to edit.

It's not complex enough to build into a CMS!

</div><div class="tweet">

## Day 57/#100DaysOfCode 

Oh my. Authentication is a Whole Thing, isn't it. #bootcampdev

I'm also writing my 2nd blog post on accessibility.

I feel like a fraud because there's so much to learn, but also it might be good for others to read a simple overview of some aspects of it.

### Day 57 continued:

Notes to self for a11y article 2:

- Change Site structure heading to Page structure
- Separate Readers section into Screen readers and Reader mode
- Include reference to a screen reader moving through a page as well as just tabbing through focusable things like links

</div><div class="tweet">

## Day 56/#100DaysOfCode

#bootcampdev is back to forms, this time in React. I find it funny that we have to stop default behaviour to grab data.

I also read a thread by @jaffathecake about SPAs and the mess of URLs and content and History API 🤯

Modern web development is wild...

</div><div class="tweet">

## Day 55/#100DaysOfCode 

API done. Honestly, I'm scratching my head at the syntax we're using to talk to Prisma and wondering why not skip the middleman and just write SQL, but I'm sure it'll make more sense the more JS gets comfy in my mental muscle memory.

### Day 55 continued:

Oh and I sorted out the ALT text thing.

I probably should refactor my portfolio's modals to `<dialog>` some time too but... I made them from scratch myself and I'm low-key proud of having done so!

So many things need fixing up and making shiny. Maybe after finishing #bootcampdev!

</div><div class="tweet">

## Day 54/#100DaysOfCode

Me: Stop fannying about with the blog and get on with #bootcampdev!

Also me: Writing blog posts on accessibility, breaking and fixing blog site...

Note to self:
Add blog title-picture captions to markdown frontmatter and use them as index image ALT tags

</div><div class="tweet">

## Day 53/#100DaysOfCode

Had what appeared to be a catastrophic failure in my SvelteKit blog.

I'm still sort of unclear as to what happened, but what I've come away with is this:

Don't ignore warnings in the terminal, they might actually fix things for you 😅

</div><div class="tweet">

## Day 52/#100DaysOfCode

#bootcampdev - using @prisma and @PostgreSQL to build an API

</div><div class="tweet">

## Day 51/#100DaysOfCode

Learning more about APIs, specifically REST for the moment but I need to get @GraphQL on my radar too.

#bootcampdev will start beefing up the project work in the coming weeks - looking forward to build build building, 🧱 by 🧱 :)

</div><div class="tweet">

## Day 50/#100DaysOfCode

I just had a great video chat/screenshare with @grahamashton and @angstlotse to discuss elements of our bootcamp :)

Honestly I'm honoured to be able to chat with and receive (and hopefully one day I'll also give!) support from these two 🥰

</div><div class="tweet">

## Day 49/#100DaysOfCode

I'm revising SQL - I did once build a huge project with a whole load of updates and adds and inner joins and outer joins and all sorts of things in between with PHP - but that was many years ago now!

#bootcampdev

</div><div class="tweet">

## Day 48/#100DaysOfCode

I'm using [centering.netlify.app](https://centering.netlify.app) just to experiment really - the content is definitely incomplete!

Particularly playing with CSS colour-scheme at the moment, trying make light and dark mode (only switchable based on OS setting) as automated as possible.

</div><div class="tweet">

## Day 47/#100DaysOfCode

Besides bootcamping I can never resist some messing with CSS - saw the cute animated underlines on the ProtonMail site menu and made my own (code in replies):

Click to see the video on twitter:
[![Animated underlines video thumbnail](/images/blog/animated_underlines.png)](https://twitter.com/i/status/1522676448800256000)

### Day 47 continued:

<pre>.hovertest::after &lcub;
    content: "";
    display: block;
    width: 16ch;
    border-top: 2px solid silver;
    transform: rotateY(90deg);
    transition: ease 0.5s;
&rcub;
.hovertest:hover::after &lcub;
    transform: rotateY(0deg);
    transition: ease 0.5s;
&rcub;</pre>

### Day 47 continued-continued:

What I haven't figured out is whether there's an easy way to make the ::after pseudoelement width automatically the same as the element it's attached to...

It might be that ::after isn't the best solution but some kind of nesting of DIVs, but still :)

**Reader, she did figure it out later :)**

</div><div class="tweet">

## Day 46/#100DaysOfCode

Same as before, I'm busy with the #bootcampdev course - now we're getting into React, via @nextjs.

I did start with Next at the beginning of my 100 days, then got distracted by @sveltejs - so I've finally come full circle!

Bring it on 💪

</div><div class="tweet">

## Day 45/#100DaysOfCode

It's really a few days mashed into one but I've only been able to work a little here and there:

Turning the handle on the #bootcampdev course - learning more new stuff now :)

Working on my centering page, I keep getting stuck playing with CSS as usual!

</div><div class="tweet">

## Day 44/#100DaysOfCode

My little site about centering is coming along, but whyever did I choose to look at Flex first! I'll go back for the simpler bits like text-align and margin: 0 auto...

The structure is still working itself out, and I'm not convinced it'll remain 1-page...

[![Regretful git commit message](/images/blog/commit.png)](/images/blog/commit.png)

</div><div class="tweet">

## Day 43/#100DaysOfCode

Yes I've skipped a few days!

I've just now started working on a "Centering in CSS" guide. I want it to be super easy to understand and use! So far I've only set up the barest skeleton.

You can watch along as it grows, if you like:
[centering.netlify.app](https://centering.netlify.app)

### Day 43 continued:

I have turned off my PC because bedtime, but I now have so many ideas of how to make this all display properly on mobile and desktop browser, oooh...

Getting stuff centered properly in CSS can be bewildering. I hope to help by displaying how to do it in many layout situations 🙂

</div><div class="tweet">

## Day 42/#100DaysOfCode

Finished the section of #bootcampdev that introduced @tailwindcss and used @astrodotbuild as the build tool.

Will definitely explore the latter in more depth, there's a lot of power we didn't use this time!

Silly but did the trick:
[dashing-marshmallow-fc25c7.netlify.app](https://dashing-marshmallow-fc25c7.netlify.app)

</div><div class="tweet">

## Day 41/#100DaysOfCode

So I was about to get all upset at @tailwindcss and how I was getting caught up in a bunch of breakpoints, until my CSS brain came back and said CALC! CLAMP!

Turns out you can use them inside tailwind too, for example:
<code>text-[calc(1.5rem + 3vw)]</code>

</div><div class="tweet">

## Day 40/#100DaysOfCode

Ahahaha. I suck at sticking to naming conventions:
[github.com/sarajw?tab=repositories](https://github.com/sarajw?tab=repositories)

Also, I really need a product idea - my design feels just have nothing to riff on... #bootcampdev

[![My first page built using Astro](/images/blog/astro.jfif)](/images/blog/astro.jfif)

</div><div class="tweet">

## Day 39/#100DaysOfCode

Week 2 of @flaviocopes' #bootcampdev and now we're going to start building out a site for an imaginary product using @astrodotbuild - I'm excited!

But... I need an idea for said product 🤔

</div><div class="tweet">

## Day 38/#100DaysOfCode

My first play with TailwindCSS, via @flaviocopes' 2022 bootcamp:
[resonant-cajeta-3049be.netlify.app](https://resonant-cajeta-3049be.netlify.app)

Not gonna lie, I'm suspicious because I like vanilla CSS so much, but I can see that it has its place. Just a bunch more syntax to learn 😮‍💨

</div><div class="tweet">

## Day 37/#100DaysOfCode

Well, I've been working on a minisite that I can't make public - but still, I made a minisite! And whipped it up pretty fast too! No frameworks this time, as I do like a bit of doing-it-by-hand.

If it eventually bears fruit I will certainly post it up...

</div><div class="tweet">

## Day 36/#100DaysOfCode

It's not big and clever, but it's mine! Eventually this will do more than just output strings, but I figure sorting out the maths is the first part...

P.S. The AEC Routemaster is the classic London Bus :)

[![Vanilla JavaScript doing some maths](/images/blog/converter_js.png)](/images/blog/converter_js.png)

</div><div class="tweet">

## Day 35/#100DaysOfCode

So my little web app idea is nothing new, just a measurements converter - but - I want to make it generate pretty images of silly units like the ubiquitous London bus, blue whales, cups of coffee, whatever else of a standard size that I can draw :)

### Day 35 continued:

I just want to make something cute that can show off some (even if quite simple) coding, while also allowing for humour and creativity/art (I like drawing and don't do enough of it).

Drawing up fractions of those units could be fun esp if I make them some level of 3D! 🐳

</div><div class="tweet">

## Day 34/#100DaysOfCode

- signed up to @flaviocopes' 2022 bootcamp
- made some minor fixes on [blog.sarawallen.com](http://blog.sarawallen.com)
- set up [sarawallen.com](http://sarawallen.com) to auto-deploy from git
- wrote down some notes for little web-app idea

Nothing big and clever but still chugging along... :)

</div><div class="tweet">

## Day 33/#100DaysOfCode

Well I just went to simply add my dev.to post to my own blog, both written in markdown so it should be easy, right?

Wrong!

A fair bit of work to escape the `<tags>` outside of code blocks properly, & style code blocks to be responsive...

### Day 33 continued:

So new blog post here - I've just had a bit of fun colouring the code: [blog.sarawallen.com/posts/details](https://blog.sarawallen.com/posts/details)

</div><div class="tweet">

## Day 32/#100DaysOfCode

Apparently if you transform:translate() an element, Firefox still gives it the space it would have taken up before it was moved. A bit like position: relative I suppose?

So now I know... but only after a good period spent scratching my head over it 😅

</div><div class="tweet">

## Day 31/#100DaysOfCode

I was fiddling with the HTML `<details>` tag to try and trick it into becoming an elegant non-js navigation clicky menu.

Well, it worked, but I also wanted it to close when clicking outside, so I had to add JS anyway 😅

Have a look: [details-nav.netlify.app](http://details-nav.netlify.app)

</div><div class="tweet">

## Day 30/#100DaysOfCode

I am stuck in ever-decreasing circles of fiddling with stuff on my landing page and blog, I really need to get on with more learning!

Considering joining
@flaviocopes' bootcamp this year, and in the meantime I'm looking back into @wesbos' JavaScript notes.

</div><div class="tweet">

## Day 29/#100DaysOfCode

- lose ugly drop shadows ✅
- social icons white in dark mode ✅
- line up h3 headings ✅
- CSS art interactivity ✅
- social icons to line up based on portrait/landscape ✅

Plus a bunch of other twiddly things, I got lost in the mire of minor CSS tweaks!

### Day 29 continued:

I'm pleased with the interaction (on hover, or tap on mobile) on the CSS art at [sarawallen.com](http://sarawallen.com)

First I was like boo, you can see how the shapes are constructed, and then I was like oh, cool, you can see how the shapes are constructed!

</div><div class="tweet">

## Day 28/#100DaysOfCode

Things to fix on landing page:

- ugly drop shadows
- social icons should be white for dark mode
- get all h3 headings to line up

Improvements:

- CSS art interactivity
- add privacy policy / 'Impressum'
- social icons to line up based on portrait/landscape

</div><div class="tweet">

## Day 27/#100DaysOfCode

The last couple of days, I

- watched @traversymedia's 2022 guide which was really insightful
- played with new svh/lvh/dvh etc CSS units on my newly updated old iPhone 7, hope it comes to more (particularly mobile) browsers soon!
- messed with webflow a bit

</div><div class="tweet">

## Day 26/#100DaysOfCode

Using PowerShell at work again, creating image lists for ffmpeg to turn into automated time-lapse videos.

Question for video types - is there a known good codec and compression level that is playable on almost all systems and isn't too lossy? libx264?

</div><div class="tweet">

## Day 25/#100DaysOfCode (1/4 done!)

- Fix index page for dark mode ✅
- Investigate linear-gradient Safari issue [it was broken CSS] ✅
- Work out what element is making the whole page have focus style (the dashed green line) & turn off ✅
- Finish contact form thank you page ✅

</div><div class="tweet">

## Day 24/#100DaysOfCode

Fixed some things on [blog.sarawallen.com](http://blog.sarawallen.com) ... broken some other things, always the way 😅

### Day 24 continued

Notes to self:

- Fix index page for dark mode
- Investige linear-gradient Safari discrepancy
- Work out what element is making the whole page have focus style (the dashed green line) and turn it off
- Finish contact form thank you page
- Create custom 404 page

</div><div class="tweet">

## Day 23/#100DaysOfCode

- Sort out contact form\* ✅
- Make my sites function in mobile-landscape-mode 😵 - eeh, mostly ✅

\*The contact form was a proper pain, it took me a while to work out what Netlify needed me to do to make it work.

Next up: Custom submission and error pages!

</div><div class="tweet">

## Day 22/#100DaysOfCode

Unsure whether I want to merge [blog.sarawallen.com](http://blog.sarawallen.com) and [sarawallen.com](http://sarawallen.com) just yet.

The former is made with pure HTML & CSS, it would almost be sad to stuff it into the other one!

I'm very pleased with the blog's navigation now, though.

</div><div class="tweet">

## Day 21/#100DaysOfCode

I have been wrangling the tabs and colours in the navigation of my blog, definitely got some work to do to get tabs to come forward when active, but am slowly finding my way.

Also thank you Svelte for afterUpdate()! Took me a while to find it though...

</div><div class="tweet">

## Day 20/#100DaysOfCode

Well, it's a start! This was the header from an old Channel 4 Teletext page I used to read avidly as a teen, Mega-zine:

~~inspiring-chandrasekhar-d972e0.netlify.app~~<br> _link no longer functional_

Not a patch on your site @andrewjnile but fun to do!

### Day 20 continued

Can now be found at [mega-zine.netlify.app](https://mega-zine.netlify.app)

</div><div class="tweet">

## ~~Day 18/#100DaysOfCode~~<br>Day 19/#100DaysOfCode

I dunno now, I did some things earlier but I've already forgotten what they were? Ukraine-related news and anxiety (rightly) overwhelms everything else.

Слава Україні!

### Day 19 continued

...this should have been Day 19/#100DaysOfCode

Like I say, distracted.

I am planning stuff though, trying to find a niche of things to make - I am considering mocking up old TV idents and teletext pages in HTML & CSS for fun :)

</div><div class="tweet">

## Day 18/#100DaysOfCode

Added a secondary pop colour. Not sure about them... And the light/dark modes also need a manual toggle.

My popups/modals have been made way better with JavaScript event.stopPropagation() and CSS overscroll-behavior: contain 🚀

</div><div class="tweet">

## Day 17/#100DaysOfCode

So the focus highlighting is back. I've made the function of the popups a little better. The ascii-art is now somewhat more viewable on mobiles.

I've connected it to [blog.sarawallen.com](http://blog.sarawallen.com)! 🎉

And [sarawallen.com](http://sarawallen.com) now has styling to match :)

</div><div class="tweet">

## Day 16/#100DaysOfCode

Added a pop colour to my 'blogolio' amongst other little fixes. The front, stuff and contact pages need content.

I also need to work on my main landing page - I want to keep it, but the styling needs an overhaul, and I must locally host the font...

### Day 16 continued

Notes to self:

- Focus highlighting - outline (+offset?) or border? ✅ done
- Prioritise accessibility.
- Consider elements expanding in place instead of introducing modals, ooh.
- Host [sarawallen.com](http://sarawallen.com) font(s) locally.
- Make the ascii-art text responsive.

</div><div class="tweet">

## Day 15/#100DaysOfCode

Battled windows command line, installing make, but failing to compile a TTF-WOFF2 converter. Never mind, I managed to get hold of the woff2 font file I wanted in the end!

Svelte blog also progressing, using CSS grid a bit more. Separating out components :)

</div><div class="tweet">

## Day 14/#100DaysOfCode

Got confused in svelte when a bit of simple JS wouldn't work, but then have found the native IF setup to be a much better solution thanks to the help from the discord!

Working on making my own pop-up/modal component for use in my portfolio/stuff section :)

### Day 14 continued

Notes to self before bed:

- Fix padding discrepancy between /blog and /stuff on mobile
- Reconsider popup position (fixed? absolute?) and how to darken rest of site behind it (huge box shadow? Is that legit CSS?)

Add content:

- Contact
- Front page (hero?)

</div><div class="tweet">

## Day 13/#100DaysOfCode

2nd attempt at the svelte static blog looks good, and now I'm trying to build out the portfolio/stuff section.

There are so many cool complex things you can do in webdev frameworks, but I'm taking baby steps - I want to (mostly) understand what I'm doing!

### Day 13 continued

Just to add that I'm getting some great support from the @SvelteSociety and @KevinJPowell's discord servers, not to mention conversations I've had here on twitter.

I'm so thankful for the communities around development 🙏♥️

</div><div class="tweet">

## Day 12/#100DaysOfCode

Ooof:

I made a mess out of moving project folders around on my computer, so lost most of the last version of the blog I was making in @sveltejs!

Then I missed out a forward slash which meant the built version of my new one couldn't see fonts and images 🤦

### Day 12 continued

The upshot of this is I've just learned how I /should/ be using assets in SvelteKit,<br>~and~<br>
the new version is now being pushed to GitHub from the start - and therefore also now being auto-built and deployed on Netlify. Winner.

Temporary URL: ~~hardcore-bose-029a18.netlify.app~~<br> _link no longer functional_

</div><div class="tweet">

## Day 11/#100DaysOfCode

Arguing with some aspects of @sveltejs because it seems every which way of making a website involves some fudging, somewhere! Otherwise, I like it very much as a ‘modern’ way of building websites :)

Also still tussling with PowerShell at work…

</div><div class="tweet">

## Day 10/#100DaysOfCode

Already 10% done?

I have a blog! A static one! Built with @sveltejs! Temporary site is here: ~~pensive-murdock-678461.netlify.app~~<br> _link no longer functional_

The design is… hm. Trying to harmonise it with [sarawallen.com](http://sarawallen.com). Very Under Construction 🏗️👷

With thanks to @jjcollinsworth :)

</div><div class="tweet">

## Day 9/#100DaysOfCode

More PowerShell, more SvelteKit static blog building.

With the latter I really should finish the tutorial before messing with parts of it, because inevitably it gets around to what I want to try anyway, and does whatever it is way more efficiently! ^\_^

</div><div class="tweet">

## Day 8/#100DaysOfCode

“Let’s learn SvelteKit by building a static Markdown blog from scratch”
\- @jjcollinsworth

Wish me luck!

</div><div class="tweet">

## Day 7/#100DaysOfCode

On the day job at @MKtimelapse - playing with PowerShell and using it to create a file list for ffmpeg to turn into an auto-generated time-lapse movie.

I did it a while ago so first I’m trying to understand my old code (🤦) before I adapt it to new uses…

</div><div class="tweet">

## Day 6/#100DaysOfCode

Oops. Opening a Svelte project in VSCode just closed the Next one. I guess now I know that happens, glad it prompted me to save before it went.

Also having a first peek at webflow, even if that’s in opposition to what I’m trying to learn. I’m intrigued.

</div><div class="tweet">

## Day 5/#100DaysOfCode

Managing to eke out an hour before I go to bed. I’m pausing the next.js tutorial because the svelte one is right in front of me and isn’t requiring me to look at a video right now - I much prefer text/interaction based stuff!

</div><div class="tweet">

## Day 4/#100DaysOfCode

Still on @thenetninjauk’s Next.js tutorial - now we’re actually getting into more JavaScript!

I’m still stuck between “Ooo this is clever” and “All this abstraction feels so unnecessary…” - but then I haven’t built huge dynamic sites or apps (…yet!)

</div><div class="tweet">

## Not-a-Day/#100DaysOfCode

Not managing to do one of the #100DaysOfCode today, but thinking about planning…

Currently doing a Next.js tutorial
Depending on how I feel at the end of that, I may or may not look at React or Svelte.
Next project goal: Make myself a blog site.

</div><div class="tweet">

## Day 3/#100DaysOfCode

Continuing @thenetninjauk’s Next.js tutorial :ninja:

</div><div class="tweet">

## Day 2/#100DaysOfCode

Edited some text in the landing page I made for my friend [yasmin-brinkmann.com](http://yasmin-brinkmann.com) :)

Kicking myself about the things I don’t know by heart on [css-speedrun.netlify.app](https://css-speedrun.netlify.app) !

Learning that using Google Fonts without hosting them locally is not GDPR-compliant!

</div><div class="tweet">

## So. #100DaysOfCode - let’s do this.

They won’t be consecutive. But I will account for them.

Day 1/100 - setting myself up to have a play with @nextjs

Smart to skip over React entirely to play here first? Who knows! Don’t know until I try…

</div><div class="tweet">
