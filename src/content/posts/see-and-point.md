---
title: "Doug Engelbart or: How We Learned to Stop Commanding and Love the Mouse"
description: "How Apple's Macintosh design philosphy affects the web."
pubDate: "Sept 30 2024"
heroImage: "/images/blog/doug-engelbart.jpg"
caption: "A grainy black-and-white photo of electical engineer Douglas Engelbart practising for his big demo."
featured: featured
mastoURL: "https://front-end.social/@sarajw/113227616215677127"
---

## Accessibility whack-a-mole

There are inaccessible UI elements all over the place, and yet more turn up in new <abbr>MVP</abbr>s (Minimum Viable Product) and even finished products as the others are fixed. Accessibility consultants can end up burned out after feeling repeatedly unheard, sometimes even when they've been brought in by a company specifically to audit their web app.

While in a frustrated and burned out state, it can be easy to start imagining that the developers simply don't care. I won't believe that's true, I think that people do care. I think sometimes they're kept too busy by the priorities set by their superiors. I also think that they're not always aware there's an issue.

I have got to know developers who are warm, left-leaning, intelligent, open, and inclusive people. These same people also rolled their own buttons out of \<div\> elements.

How?

I'm going to explore our timeline to try and figure it out to help us all move forward together.

## Currently: Macs everywhere

When I started my first front end development job in 2022, I chose a MacBook. It was that or a ThinkPad with Linux -- and while I adore ThinkPads, I already had one of my own, and this was my opportunity to learn how to get on with MacOS. Also as most of the company used MacBooks, it meant I'd have plenty of help and documentation to get the coding environment up and running.

Another point is that Safari is a major browser that should form part of testing on the web. It's very not easy to check your site on Safari without a Mac.

Finally, the [userland](https://en.wikipedia.org/wiki/User_space_and_kernel_space) (a new term to me) of Linux and MacOS is similar -- the terminals, or command line, or shells (those all have subtly different meanings) will do the same things with the same commands. Windows however is confusing terminal and shell-wise. Many people install Windows Subsystem for Linux (WSL) to get around this.

I think it's for this reason that my company didn't offer Windows as an option for a work computer, they didn't want to support it. I fell afoul of these differences on my personal Windows computer, leading Zach to [make some changes in 11ty and its documentation](https://www.zachleat.com/web/smorgasbord-windows-terminal/).

I suspect it's become a similar deal in many companies doing development for the web, i.e. MacOS as standard. I decided to find out, and posted a little poll on Mastodon:

<mastodon-post>
  Full thread at <a href="https://front-end.social/@sarajw/113209355272282312">front-end.social/@sarajw/113209355272282312</a>
</mastodon-post>

Indeed 63% of the 793(!) Mastodon web developers who answered run MacOS, 34% run Linux, with also-ran Windows in 3rd place with 17%. Yes, the percentages add up to more than 100% -- the poll allowed multiple answers, meaning some people ran two or all three OS types, with just 1% choosing Other.

This isn't the whole story, my little straw poll has an audience particular to Mastodon. A much larger [developer survey run by Stack Overflow](https://survey.stackoverflow.co/2024/technology/#1-operating-system) puts Windows right at the top for work and personal use.

Either way, I would still speculate that more than a few front end developers with some seniority have been using only Mac computers since or even before they started working in the industry. Understandably -- they're nice machines and often provided by the employer.

## Going back

Through the Internet Archive I've managed to browse a 1986 copy of [Apple's Human Interface Guidelines (HIG): the Apple Desktop Interface (Final Draft 1 December 86)](https://archive.org/details/human-interface-guidelines/).

### The Roots of the Apple Desktop Interface

This is the title of Appendix A of the 1986 HIG. It includes the following paragraphs (emphasis mine):

> In the early 1960s, the Augmentation Research Project at SRI International made important contributions. Its focus was the “augmentation of human intellect.” **This notion puts the human being, rather than technology, at the center of human-computer interactions** and resulted in some unique concepts of what a human interface should be. \[...\]

> This augmentation approach led to hardware innovations, **the principal example of which is the mouse**, which lets people drive computer interactions by pointing at the screen rather than typing commands at the keyboard. **This approach is a central tenet of the Apple Desktop Interface.**

I consider this a noble vision, intended to open up computing to non-programmers. It was an important step in the history of computing, and it wasn't just Apple jumping on this bandwagon -- Microsoft and Apple both copied [Xerox](https://spectrum.ieee.org/xerox-alto).

The aforementioned Augmentation Research Project at SRI International was also known as the Augmentation Research Center (ARC), founded by the electrical engineer-- 

### Douglas Carl Engelbart

Even if you haven't heard of him, you've possibly seen him in action. If you haven't, you should:

<iframe style="width: 100%; aspect-ratio: 4/3" src="https://www.youtube-nocookie.com/embed/UhpTiWyVa6k?si=qOOeWHz_eYe9-2PC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This presentation is known as the "Mother of All Demos". It imagined the graphical user interfaces of the future, and included the first public demonstration of a computer mouse. Remember this is from 1968 -- it was pioneering!

The mouse is shown and described at [the end of the first reel, from 33 minutes 50 seconds in](https://youtu.be/UhpTiWyVa6k?si=zo5\_0\_4GZgNF8uyF\&t=1850).

### "See-and-point (instead of remember-and-type)"

This is a section heading from the 1986 Human Interface Guidelines. Apple is at this point going hard on differentiating itself from other computers, which were until then largely keyboard and command-line-driven.

The notion that people should be able to click around and explore is of course a really good one, which has allowed us to learn as we go in various UIs across many different operating systems and software packages. We can find our way towards the action we intend to perform by the recognition of icons and the names of items in menus, rather than having to remember esoteric commands and type them in.

Apple also suggests having animations or other visual effects to reassure and show us when a task is in progress or completed, as opposed to just showing the command line cursor again after a period of being busy. I'm so used to this, that the command line freaks me out when a simple script (even when I've written it!) offers no feedback about a task in progress, or whether it completed successfully or not.

### Mouse \> Keyboard

From then on the guidance is almost exclusively about visuals and pointing at them. It talks about making the icons look like their purpose (i.e. the trash can), and about dragging things over to where they need to go (like, into the trash), and how we don't really need to remember what the trash can does, because it tells us by the way it looks (it holds trash. I have always liked how it changes between being empty and containing something).

Under the section for **Human-computer interaction** comes these two paragraphs (emphasis theirs):

> **Pointing** is central to this interface, as it allows users to directly indicate what elements on the screen are relevant to their plans. Once an item is pointed to, it can be **selected** for action; until something is selected, pointing serves simply to browse available items.

> The **Keyboard** is not then the central element in the Apple Desktop Interface, as it is in most computer systems. Of course, the keyboard is essential for text entry, and can provide alternative ways to accomplish some tasks, but it's not part of the direct manipulation interface.

Later, in  a section titled "Appropriate uses for the arrow keys”, it's made very clear that “*Arrow keys are never used to duplicate the function of the scroll bars or to move the mouse pointer.* The arrow keys *do not replace the pointing device*.”

...Well. Apple is, or was, really not into keyboard navigation.

### Disabled people

There is a section with this title. I'm glad to see it! And it's early, on page 16 of over 100. I don't know whether what is written there is very progressive or unusually inclusive for the time, but it seems like some solid, if limited, accessibility advice.

> Computers hold tremendous promise for people with many kinds of disabilities. In terms of increasing productivity and mobility, computers can have a far greater impact in disabled people than on other users. But too often, computers perversely become obstacles rather than enablers, because many disabilities make it hard to use standard computers and software. In most cases, thoughtful hardware design is the solution, but there are things that software designers can do, too.

For subsection **Vision disabilities** though, it's not really considering anyone we'd describe as blind. It mentions not using color to denote state, and that a "zoom" option is very useful for those with 'vision problems'. It does however suggest that manuals should not only be printed, but also made available in electronic form so that they can be printed in Braille or read aloud with a speech synthesizer.

This is the only time in the whole document that any such reference to blind people or their accommodations is made. There was indeed a speech synthesizer included with the Macintosh called MacinTalk, but this appears only to have been able to read out from documents, not the user interface. There is some history here (with a PC synthesizer called S.A.M.) which I'll not get into now, but may be an interestig rabbit hole to go down...

An audio user guide was made available on cassette tape! But it could be argued, what use is a manual about how some software works, if you cannot control the software or the computer it runs on, anyway?

## Going forward: Improved pointing devices

Modern computer navigation around a screen is pretty slick now. We have all manner of choice of pointing devices -- trackpoints, trackballs, trackpads, mice, touchscreens, graphic tablets, pens, remotes, and more.

In my opinion, the biggest innovations in pointing devices since the first mouse itself were:

- the scroll wheel on mice,  
- gestures on trackpads,  
- swiping on touch devices.

Until these became normal, moving the viewport down a document or website with a pointing device required either mousing over to a scrollbar and dragging it, clicking on narrow strips or tiny wee arrows -- which was kind of annoying to someone who otherwise likes to touch type and keep their fingers by the home keys.

Many of us would therefore instead use page up/down, arrow keys or the spacebar to move around in documents, or hit the tab key to jump around between focusable elements like links, inputs and buttons.

For a while I even personally preferred an A6 graphics tablet whose area I would map 1:1 with the screen -- wherever I pointed the pen on the tablet would be where the cursor would appear on screen. No mousing, much efficiency, very speed.

Since scrolling, gesturing and swiping have become more ubiquitous and smooth, I and maybe others have found ourselves more often hovering over trackpads, touchscreens and scroll wheels instead of keeping our hands on the keyboard. Certainly blogs and social media feeds took note of the ease of scrolling and started ditching pagination in favor of the infinitely scrolling page.

It appears I've been trained out of my old preference for keyboard navigation. Maybe others have, too.

## Navigating today's default MacOS

1986 was of course ages ago. The more [recent HIGs from Apple](https://developer.apple.com/design/human-interface-guidelines/) have huge sections devoted to accessibility and include notes and recommendations on probably every different kind of interaction and input method available today.

But the mouse-first ("See-and-point") paradigm lives on. Not in what's possible -- it's all available for those that need it -- but in the default setup of a fresh MacOS installation.

MacOS does have lots of useful keyboard shortcuts. You can jump between programs, see every application window at once, switch virtual screens, do all the usual cut/paste/copy/cut/undo etc. and many many more operations.

But can you keyboard-navigate around the OS UI toolbars, menus, preferences, combo boxes or toggles? Not by default. You can't just Alt (or Option) into the menu bar and Tab your way around.

### Do defaults set behavior?

When using MacOS as standard, something will make you need to shift away from the keyboard to see-and-point instead. You might not have to shift far -- on a laptop of course the trackpad may even be reachable with your thumbs. But the workflow likely jumps you off the keys now and again.

For those who are sighted and easily able to use a pointing device, fine. A person new to MacOS might grumble a bit to begin with, but get used to it. They might not even consider that there is something in the preferences that can change this behavior. This is not necessarily wrong -- as we've seen, the Macs are fully intended to be used this way.

A person's usual behavior while using other machines might even change slightly away from the keyboard. Maybe it even changes to be more see-and-point while navigating the web, too.

### Keyboard Navigation and Full Keyboard Access

The [documentation](https://support.apple.com/en-us/102650) is pretty good for those who know they need or want to use the keyboard more. There are indeed plenty of options available.

There are two main settings that can be changed to access these options:

- **Full Keyboard Access** is a toggle to turn on [extensive keyboard controls and shortcuts](https://support.apple.com/en-gb/guide/mac-help/mchlc06d1059/mac). This definitely aids accessibility for keyboard-only users. It may be too much for someone who can use a pointing device, but prefers to keep their hands on the keyboard.  
- **Keyboard Navigation** is a much less full-featured but very useful option. Turning it on activates the Tab navigation between controls, arrow navigation within the OS UI, for example within the Settings dialog, and enables keyboard manipulation of controls much in the way a Windows or Linux user would find familiar, using arrow keys, enter, space, etc.

I was curious how well known this Keyboard Navigation toggle was among Mac users, and whether knowing about it correlated with people who preferred keyboard use over pointing device:

<mastodon-post>
  Full thread at <a href="https://front-end.social/@sarajw/113210111333663805">front-end.social/@sarajw/113210111333663805</a>
</mastodon-post>

From this poll of 85 people, we see that 63% of Mac users primarily navigate using a pointing device, with 37% using the keyboard more. 65% of all respondents are aware of this toggle, and 35% are not. Whether they are primarily users of pointing devices or keyboards doesn't seem to change whether or not they've heard of the toggle. Some primarily keyboard users were very happy to hear about the existence of these options!

Interestingly, despite the 1986 HIG express assertion that arrow keys are never to be used to emulate a mouse -- well, you can now [enable a mode to use the keyboard like a mouse](https://support.apple.com/en-gb/guide/mac-help/mh27469/mac).  
...technically, I guess neither of these methods specifically use the arrow keys. So it's not quite a U-turn, I suppose..

### Browser defaults

In recent years, the Chromium-based and Firefox browsers have stopped honoring the MacOS keyboard navigation defaults.

Before this, a MacOS user would need to know about and flip the relevant toggles in order to be able to navigate around a website with a keyboard in a similar way to a Windows or Linux user.

Even now in Safari, if you want its tabbing behavior to match the other browsers, you need to [check an option in the Safari settings](https://support.apple.com/guide/safari/keyboard-and-other-shortcuts-cpsh003/mac) that lets the Tab key be used to jump between all of the focusable objects. Otherwise, you have to remember to use Option+Tab. There is some confusion here -- even within their own documentation -- as to whether the Keyboard Navigation option in MacOS also needs to be on to get everything working as expected.

It's possible that many long term Mac users haven't experienced this way of navigating the web, and only navigate with a keyboard when the web accessibility of a component or page needs some attention.

## HTML Specifications

As hardly an expert (I don't even hold CPACC) but still the resident accessibility champion at work, I wanted to give a little tech talk about the first steps into testing for accessibility (tabbing around a page, etc.), and specifically to highlight \<select\> elements and all the interactions you get "for free" with the native HTML element. To mimic them all in an own-rolled version built from scratch takes a lot of JavaScript!

Anyway, I went looking for the keyboard controls expected for select elements in the W3C HTML spec and -- I came up empty handed. I went to Mastodon again to ask around:   

<mastodon-post>
  Full thread at <a href="https://front-end.social/@sarajw/113196815311695597">front-end.social/@sarajw/113196815311695597</a>
</mastodon-post>
   
In the replies, these bits stuck out most to me:

**Christian "Schepp" Schaefer:**  
> I think there can't be such a document from W3C as they can't foresee on what kind of input devices you will use these UI elements in the future. Imagine them having tied interaction to a keyboard in their spec and then the iPhone comes along.

**Eric Eggert:**  
> The HTML approach is “these elements work the way they do in native applications and conform to the platform conventions”. For example without enabling keyboard stuff on macOS, the UI elements behave differently, like native elements.  

> W3C does not prescribe how native elements work because it’s only for “Web”. The best way to find how these work is to look into the operating system documentations, AFAIK.

So. There is no real native interaction spec. Web UI controls should just behave like the equivalent native UI controls. For MacOS users, as far as some of us know, native UI elements are only available by see-and-point-and-click.

### Rolling our own controls

One reason accessibility work has become rather arduous in recent years (it was probably always arduous for other reasons..) is because it has become easy, maybe even desirable, to roll your own control components instead of using HTML native ones.

It's marginally easier to style a generic \<div\> than it is to restyle a button. Select element options remain (for now) unstylable, and designers quite rightfully want to put all sorts of text and images in there for a user to peruse.

Where we *can* look for expected keyboard interaction is within the WAI-ARIA Authoring Practices Guide (APG) patterns. Here we can call up the relevant page for a component that is equivalent to an HTML native select -- [a select-only combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).

Just the [JavaScript needed](https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/combobox/examples/js/select-only.js) for such a component is already rather complicated.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="VwovVBr" data-pen-title="Example from WAI-ARIA APG Select-Only Combobox" data-editable="true" data-user="sarajw" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sarajw/pen/VwovVBr">
  Example from WAI-ARIA APG Select-Only Combobox</a> by Sara (<a href="https://codepen.io/sarajw">@sarajw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

...it's a lot. And I feel like this is what freaks some of us out -- we think we've done it all right, only to find all these controls have so many more modes of interaction that we may have never personally experienced using.

Of course, most of us have never experienced using a sip-puff switch or an eye tracker either! But we can agree that these peripherals should also be able to activate the controls.

The native elements have been implemented in so many operating systems, in so many different ways, and through those they are interacted with by so many different kinds of human-interface hardware, be that assistive tech or the many permutations of mice and keyboards, joysticks and who knows what else. Trying to code all of that up from scratch on top of a set of nested \<div\>s is a Sisyphean task.

What if a whole app has already been built with multiple different kinds of controls that only respond to clicks? Each component needs rebuilding.

No wonder people are put off. No surprises that devs start asking whether they can somehow sniff out a user not able to use a pointing device, in order to just plop a native control in there instead. Unfortunately this is a breach of user privacy -- no one should have to disclose a disability.

Ideally, we use the native controls from the start. Find ways to display the needed information and shiny stuff\* differently, so that the controls can remain native, and work for everyone no matter the operating system or hardware involved. This will probably require more to and fro with designers.

(\* I'm not here to diss the shiny stuff. I love styling and I love me some shiny!)

And if we simply must have a restyled select, consider using tested component libraries known to be accessible, for example [Adobe React Aria](https://react-spectrum.adobe.com/react-aria/components.html).

## Moving forward

At work, after this realization hit me (these MacOS keyboard options are new to me too), I asked around. Whether others knew there was a keyboard navigation option within MacOS. If they'd ever seen the native Mac behave rather like what expected by accessibility rules. Whether they've ever tried tootling around the operating system without a mouse.

What I do not want to do here is blame anyone. I wanted to find a reason for this experience gap. I wanted to understand why such gratuitous nerds (I say this with affection, they are some of the coolest and nicest people I know) are somewhat separated from this keyboard-navigating world.

I feel I have found it in GUI history, in the inclusively-intended non-programmer vision of the Macintosh computers. I think the ability to explore a computer, and learn as you go, is a wonderful thing. The same applies to the web. Explore. Learn. Build. Share.

The key here is that this exploration must not only be limited to those able to use a mouse.

### What can we do?

Given all this history and momentum behind Apple's design philosophy, it makes a lot of sense that things are shaking out the way they are.

But we do need to address this gap in keyboard navigation experience, to aid the accessible building of the web, and address it without surprising and shaming those who aren't yet aware anything is missing.

So let's:

- Be aware and understanding, instead of scolding. Some of us have literally never used a keyboard for controls in this way.  
- Draw attention to the options of Keyboard Navigation under Keyboard and Full Keyboard Access under Accessibility in the MacOS Settings.  
- Encourage keyboard play. Maybe set up some mouse-free challenges -- in MacOS and on the web. Maybe some online games already exist?

### User Testing

The 1986 Human Interface Guidelines had lots of great advice and ideas, including this:

*Test early, and test often.*

..agreed.

---

## Acknowledgements

Thank you to the following fine people for helping me to:
- Steer the tone of this post towards the warm inclusiveness that I had first intended: [Matt Stein](https://mattstein.com/)
- Get the facts right with regards what is now and was then available in MacOS: [Curtis Wilcox](https://c.im/@cwilcox808)
- Get just enough information to form this whole pet theory and blurt out this post: Every person who graciously answered me on Mastodon!

<script is:inline src="/scripts/mastodon-post.js"></script>