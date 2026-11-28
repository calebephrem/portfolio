---
title: 88x31 Buttons
deck: A tiny piece of 90s web culture
banner: /img/88x31-buttons.png
authors:
  - Caleb
date: November 14, 2026
tags:
  - web
  - culture
  - internet
featured: true
---

Hello there, on today's post, we're going to be going through a small culture of the web, 88x31 buttons, which I learned about them from my friend, [Louis](https://codeberg.org/louiszn).

# So, What Are 88x31 Buttons?

88x31 buttons (often called web badges or stickers) are small, rectangular (88px by 31px) buttons that are used to link to other pages, promote your favorite software, or express your interests. Most of the time, they are placed in the footers or sidebars of personal websites, often static images or animated GIFs.

# How to Add One to Your Site

First, search for 88x31 button to add. Then on your website footer, add something like this (mine as example):

```html
<a href="https://caleb.is-a.dev/" target="_blank" rel="noopener">
  <img
    src="https://caleb.is-a.dev/88x31.jpg"
    alt="Pumkin pie"
    title="Pumkin pie"
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
    title="Pumkin pie"
    width="88"
    height="31"
    data-strict="true"
  />
</a>

To lay out a bunch of them, a flex row should be simple enough:

```css
.buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* responsive */
  gap: 4px; /* or whatever value you'd like */
}
```

# What to Put On Your Row

No rules, but most people go with some kinds of combo of:

- Friends' websites
- Fans website
- Their favorite technologies, tools, or platforms
- Maybe their favorite games, or whatever they're into

# Make Your Own

If you want your friends to link to you on their personal sites, you need a button as well. Here are two options:

## 1. Search for an image online

[Search for a button collections on google](https://www.google.com/search?q=88x31+button+collection) to find one (you might need to resize/crop it to be 88x31). You can find some cool badges on websites like:

- [yesterweb.org](https://yesterweb.org/graphics/buttons) - button collection
- [jamesg.blog](https://jamesg.blog/buttons) - button collection
- [neocities.org](https://neocities.org/browse?tag=88x31) - collection of websites with buttons
- [cooltext.com](https://cooltext.com/) - custom text buttons

<a href="https://cooltext.com/" target="_blank" rel="noopener" class="undecorated w-fit">
<img
    src="/img/yeehaw.png"
    alt="Yee haw!"
    title="Yee haw!"
    width="88"
    height="31"
    data-strict="true"
  />
</a>

## 2. Draw one from scratch

Make or draw one in any image editor.

## Then?

Name your button to a name that's easy to remember, like `badge.png` or `88x31.png`, and put it somewhere stable because other friends will be pointing at it.

# Self Hosting vs Hotlinking

Two ways to show a friend's button (behaving differently):

**Hotlinking**: means your `<img>` points to their badge image URL. If they remake their button and keep the same file name and type (say `88x31.png` is replaced by a new `88x31.png`), the change will happen on your website as well. But if their site goes down, or they rename their file name (or extension), your button breaks. If they swap the image for something weird, it shows up on your page as well, so that means you're trusting your friend on this one.

**Self Hosting**: means you download the image and serve it yourself. It's stable and safe, but you have to update it by hand whenever they change theirs.

I usually like to hotlink friends and self host others. Pick whatever you're comfy with.

# Go Make One

Go make or find a button, add a few to your personal site footer, and if you want, send me yours so I can add it to mine ;]

See you in the next post!

# Sources

- “88x31 Buttons/Badges.” _Vale_, [vale.rocks/portfolio/88x31-buttons-badges](https://vale.rocks/portfolio/88x31-buttons-badges).
- "88x31." _IndieWeb_, [indieweb.org/88x31](https://indieweb.org/88x31)
- "Browser Wars." _Wikipedia_, [en.wikipedia.org/wiki/Browser_wars](https://en.wikipedia.org/wiki/Browser_wars)
- "Web Badge." _Wikipedia_, [en.wikipedia.org/wiki/Web_badge](https://en.wikipedia.org/wiki/Web_badge)
