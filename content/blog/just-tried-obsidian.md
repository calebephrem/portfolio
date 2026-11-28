---
title: I Just Tried Obsidian.md, And Here's What I Think
deck: I've recently tried a note-taking app called Obsidian, and here's my thoughts on it
banner: https://images.unsplash.com/photo-1631173716529-fd1696a807b0
authors:
  - Caleb
date: November 28, 2026
tags:
  - tools
  - note
  - opinion
---

Hello folks, I've recently downloaded a note-taking app called [Obsidian](https://obsidian.md/), and this blog post is just about my thoughts on it.

# Overview

Obsidian is a very nice note-taking app that hosts all notes on-device, using open file formats (usually Markdown for notes) to quickly access your notes. It's customizable, and even has a lot of plugins and themes (see below) for extended customization.

:::card{title="Obsidian" description="The free and flexible app for your private thoughts." footer="obsidian.md" img="https://obsidian.md/images/banner.png" link="https://obsidian.md/"}
:::

I've used other note-taking tools before, like [KeepNote](https://keepnote.org/) and [Microsoft OneNote](https://onenote.cloud.microsoft/en-us/). KeepNote is the one I used long ago, and it's hard to say but it [low key] looks old compared to the software we use nowadays. And Microsoft OneNote has similar vibes with its other products like Word and PowerPoint, which is good, but it uses encrypted closed file formats, and it's made exclusively for Windows.

I was going to try other tools like [Notion](https://www.notion.com/), but I found out that it's cloud-based and uses closed file formats for offline notes. It also has [way too many features](https://www.notion.com/product/all-features?view=group#aiFeatures) that I don't (and won't) use, so uhh why not just skip it… And, a friend of mine recommended me Obsidian, so, why not give it a shot?

# The App

I'm on [Void Linux](https://voidlinux.org/), and Obsidian isn't supported in the official void packages ([reason](https://github.com/void-linux/void-packages/issues/38348#issuecomment-1198864788)), so I just went ahead and installed it with `flatpak`. And at first glance, it looked… good, with the default theme activated, a welcome screen and graph view open side by side. It's made with [Electron](https://www.electronjs.org/), so yeah, the resource hog is there (600–800 Megabytes on mine), and I can already hear my laptop fan spinning up like a jet engine just because I typed a single word (just kidding).

Obsidian saves stuff in vaults, folders, and Markdown files. A vault is basically a workspace that contains folders and files. Think of it as a notebook. You can have as many notebooks, folders, and files as you want, and it costs nothing, because everything you create on Obsidian is stored on your own machine.

So, I explored around a bit, tweaked some settings, and started writing some notes (real notes), while discovering some cool features and plugins along the way. Speaking of features, linking to other notes using double brackets (`[[like this!]]`), having an interactive to-do list right beneath my notes, note properties, tagging, and graph view were my favorite ones. It's all just Markdown (which I'm familiar with), so Obsidian is probably going to be my best friend for writing whatever I'm up to (I wrote this post in Obsidian as well by the way).

Obsidian also has a huge [community](https://community.obsidian.md/) of developers and casual users. And as of now, they have [1,058 themes](https://community.obsidian.md/search?type=theme) and [10,938 plugins](https://community.obsidian.md/search?type=plugin) available, which is quite a lot. Here's some of what I liked:

## Themes

Just like every popular text editor app, Obsidian has its own registry of themes (and plugins). I just installed and tried some of the popular ones, and kept whichever felt good. Two of the themes I like are:

- [Catppuccin](https://github.com/catppuccin/obsidian) (by [Catppuccin](https://catppuccin.com/)): a soothing pastel theme that I use for my IDE ([blurred version](https://github.com/jenslys/zed-catppuccin-blur/blob/master/themes/catppuccin-blur.json#L3717)) as well.
- [Border](https://github.com/akifyss/obsidian-border) (by [Akifyss](https://github.com/Akifyss)): minimal, at least to my eyes, and makes Obsidian look more modern and attractive, and I prefer this one over Catppuccin.

I also tried some others like [Minimal](https://github.com/kepano/obsidian-minimal), [Dracula](https://github.com/dracula/obsidian), [Kakano](https://github.com/isaacfreeman/kakano-obsidian-theme) and some others, but they were not the ones I was looking for, so I use Catppuccin, Border and the default one interchangeably.

![Using the Border theme in Obsidian](/img/obsidian-client.png)

## Plugins

I browsed some plugins and watched a YouTube video about some quality of life plugins, and here's some of what I liked:

- [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) (by [@zsviczian](https://github.com/zsviczian/)): [Excalidraw](https://plus.excalidraw.com/) is everyone's free and open-source whiteboard app, which I often use for visualizing things. And having Excalidraw right inside Obsidian is pretty amazing. I didn't use the plugin in my notes yet (because I didn't come across a note that needs it), but I'm pretty sure that I'm going to be needing it soon enough.
- [Harper](https://github.com/automattic/harper-obsidian-plugin) (by [Elijah Potter](https://elijahpotter.dev/)): This one is my favorite so far. It catches spelling and grammatical errors, as well as suggests some word choices (like "sidebar" instead of "side bar") as I type, which is very useful for me. It also made with rust, and works offline as well (that's why I prefer it over others like LanguageTool, which requires internet connectivity, and sends notes to centralized servers for grammar and spell checking).
- [Iconize](https://github.com/florianwoelki/obsidian-iconize) (by [florianwoelki](https://florianwoelki.com/)): Obsidian uses a dropdown icon for folders by default, which is quite boring. This plugin allows you to change it to other icons.
- [Emoji Shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes) (by [@phibr0](https://github.com/phibr0/)): I use Discord a lot, and if you do so as well, you most probably type emojis with their short code, like `:panda_face:` turns into 🐼, without ever looking to your emoji panel or so. This plugin adds that feature into Obsidian.
- [Recent Files](https://github.com/tgrosinger/recent-files-obsidian) (by [Tony Grosinger](https://grosinger.net/Home)): Nice-to-have plugin that shows recently opened notes in the sidebar.

Hit me up if I missed something you think is a great to have :emoji{name="heh"}

# Community

Obsidian has a [huge community of themes and plugins](https://community.obsidian.md/), as well as a very active [forum page](https://forum.obsidian.md/) for users to ask questions, request features, report bugs, and more. I signed up for it, but didn't do anything yet because I couldn't find something interesting to post about.

# Conclusion

Compared to other ones I tried, Obsidian is a very simple, flexible, and fast note-taking app that provides unlimited amount of note creation that is fully local, with tens of thousands of community themes and plugins, all for free. You can write your notes under vaults (basically notebook), categorized under folders, and save them as Markdown files, so you're never locked out if Obsidian vanishes tomorrow.

Well, those were my thoughts on 3 days of using obsidian, see you in the next post!
