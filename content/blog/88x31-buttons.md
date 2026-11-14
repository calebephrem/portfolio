---
title: 88x31 Buttons
deck: A tiny piece of 90s web culture
banner: /img/88x31-buttons.png
authors: [Caleb]
date: November 14, 2026
tags: [web, culture, internet]
---

Hello there, on today's post, we're going to be going through a small culture of the web, 88x31 buttons, one of the best things the old web has left behind. I learned about them from my friend, [Louis](https://codeberg.org/louiszn).

# So, What Are 88x31 Buttons?

88x31 buttons (often called web badges or stickers) are small, rectangular (88px by 31px) buttons that are used to link to other pages, promote your favorite software, or express your interests. Most of the time, they are placed in the footers or sidebars of personal websites, often static images or animated GIFs.

# How They Even Became a Thing

In 1995, [Netscape](https://en.wikipedia.org/wiki/Netscape) put out a small rectangular badge for its "Netscape Now!" campaign, and anyone who wanted to show support (or just get the badge) slapped it on their page, and every site that did just became a free ad billboard for Netscape.

Right after, [Microsoft](https://en.wikipedia.org/wiki/Microsoft) answered with a badge reading "Best viewed in Internet Explorer" one year later (1996). And funnily, Netscape had its own "Best viewed in Netscape" version as well.

This all was [the browser wars](https://en.wikipedia.org/wiki/Browser_wars) if you didn't know, and personal homepages were the battlefield. Other companies, hosts and tools also joined in, and 88x31 became the default size for every web badge. And later on, [88x31 buttons were officially classified as a Micro Bar ad unit by IAB](https://www.iab.com/wp-content/uploads/2015/10/IAB_Display_Mobile_Creative_Guidelines_HTML5_2015.pdf).

# Why They Faded Out (and Came Back, Somewhat)

By the mid 2000s, these web badges started fading out, because personal sites were losing ground for social media, [RSS Feeds](/blog/rss-feeds), publishing and newsletter sites.

And starting in the late 2010s, people tired of algorithm based social media grew more, and platforms like [Neocities](https://neocities.org/browse?tag=88x31) provided people a place to build the handmade personal websites like the ones from the old web. Buttons came back with them, but now with a different purpose.

:::card{title="Neocities" description="Create and surf awesome websites for free." footer="neocities.org" img="https://neocities.org/img/og/index.jpg" link="https://neocities.org/"}
:::

# How to Add One to Your Site

First, search for 88x31 button to add. Then on your website footer, add something like this (mine as example):

```html
<a href="https://caleb.is-a.dev/" target="_blank" rel="noopener">
  <img
    src="https://caleb.is-a.dev/88x31.jpg"
    alt="Caleb"
    width="88"
    height="31"
  />
</a>
```

Which basically adds a small 88x31 button on your footer:

<a href="https://caleb.is-a.dev/" target="_blank" rel="noopener" class="undecorated w-fit">
<img
    src="https://caleb.is-a.dev/88x31.jpg"
    alt="Pumkin pie"
    width="88"
    height="31"
    data-strict="true"
  />
</a>

To lay out a bunch of them, a flex row should be simple enough:

```css
.buttons {
  display: flex;
  flex-wrap: wrap; /* responsiveness */
  gap: 4px; /* or whatever value you'd like */
}
```

# What to Put On Your Row

No rules, but most people go with some kinds of mix between:

- Friends' websites
- Fans website
- Their favorite technologies, tools, or platforms
- Maybe their favorite games, or whatever they're into

You can always [search on google](https://www.google.com/search?q=88x31+button+collection) for some cool badges to add to your website.

# Make Your Own

If you want your friends to link to you on their personal sites, you need a button as well. Here are two options:

- Search for an image online (you might need to resize/crop it to be 88x31), or
- Draw one from scratch in any image editor

Name it to a name that's easy to remember, like `badge.png` or `88x31.png`, and put it somewhere stable because other friends will be pointing at it.

# Self Hosting vs Hotlinking

Two ways to show a friend's button (behaving differently):

**Hotlinking**: means your `<img>` points to their badge image URL. If they remake their button and keep the same file name and type (say `88x31.png` is replaced by a new `88x31.png`), the change will happen on your website as well. But if their site goes down, or they rename their file name (or extension), your button breaks. If they swap the image for something weird, it shows up on your page as well, so that means you're trusting your friend on this one.

**Self Hosting**: means you download the image and serve it yourself. It's stable and safe, but you have to update it by hand whenever they change theirs.

I usually like to hotlink friends and self host other stuff. Pick whatever you're comfy with.

# Go Make One

And yeah, that's it. Small image with a link showing your interests, that's what web badges are for. Old idea but still fun, with now even a better idea: your website is you, and other people's websites are neighbors or friends.

Go make or find a button, add a few to your personal site footer, and if you want, send me yours so I can add it to mine ;]

See you in the next post!

# Sources

- “88x31 Buttons/Badges.” _Vale_, [vale.rocks/portfolio/88x31-buttons-badges](https://vale.rocks/portfolio/88x31-buttons-badges).
- "88x31." _IndieWeb_, [indieweb.org/88x31](https://indieweb.org/88x31)
- "Browser Wars." _Wikipedia_, [en.wikipedia.org/wiki/Browser_wars](https://en.wikipedia.org/wiki/Browser_wars)
- "Web Badge." _Wikipedia_, [en.wikipedia.org/wiki/Web_badge](https://en.wikipedia.org/wiki/Web_badge)
