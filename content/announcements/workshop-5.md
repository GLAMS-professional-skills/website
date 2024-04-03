---
external: false
draft: false
title: Workshop 5 - Apr 18 - Website Creation
description: Fifth workshop of the series on the theme of Website creation
date: 2024-04-03
---

|  |  |
|-:|-|
| Theme: | **Website Creation** |
| Time: | **15:30-17:00 - Apr 18** |
| Location: | **JCMB 5205** (check email for online link) |

# What to expect:
I imagine quite a few people have a particular project in mind related to this theme. Have a think about the following aspects of your project and let me know about what directions you want to pursue.
Here are some slightly more detailed but rough notes on these topics [here](https://git.ecdf.ed.ac.uk/s1511002/professional-skills-brainstorm/-/blob/main/personal-site.md).
If you want to model a site off an existing one out there let me know.

There's a few directions when it comes to creating a website:

- raw HTML/CSS
- drag and drop website creators
- Static site generators (use a theme and you populate content with markdown, like editing a wiki page)
- raw html with styling frameworks (Twitter bootstrap or Tailwind CSS)
- frontend framework, for more ambitious sites involving in-browser


If interested in the static site generators, have a look to see if there's a template you'd like to adapt in one of these links:

- [https://jekyllrb.com/docs/themes/](https://jekyllrb.com/docs/themes/)
- [https://themes.gohugo.io/](https://themes.gohugo.io/)
- [https://astro.build/themes/](https://astro.build/themes/)


When it comes to hosting a site, there are also a few options, including:

- School of Maths site
- GitHub or GitLab pages
- google sites
- private hosting
- ...


# Online viewing:
I'm going to experiment with browsers/applications/services to find something more reliable than previously, when we've had both a successful zoom attendance, as well as a disastrous one. I'll update in the future (may try teams or discord for instance).

# Examples

## The GLaMS website

**Link:** [website](https://www.glams.org/)


This uses Google sites, which gives you a graphical editor. I haven't used this
before, ask Patrick about it. I've heard one convenient aspect of using this
for seminar websites is that it's easy to manage as a group or pass on
ownership.

Notice that it also has a custom domain name (glams.org). It's likely possible
to obtain a custom domain after-the-fact for any method used to create and host
your website. The domain name is separate to creation and hosting (although
some services may bundle these together). A domain on it's own, you can expect
to pay roughly 10GBP/year.

## Patrick Kinnear's website

**Link:** [website](https://www.maths.ed.ac.uk/~s1524448/)

This is hand-written HTML that uses the (Twitter) bootstrap for the styling.
Try changing the window dimensions and see how the layout is adjusted.

There is no "build" step to website creation this way: the HTML files, CSS
files, along with images which Patrick typed and created are just copied to the
School of Maths server as-is.



## The Lean Workshop Website

**Link:** [website](https://glams-lean-2024.github.io/)

This uses a static site generator called "Jekyll". A theme was chosen and it
was then populated with markdown files (as opposed to HTML). If you have
changing content, especially new pages created that need linking to (like blog
posts) this is where this method comes into it's own, as you can upload a file
for the new blog post and the "plumbing" will get sorted by a program.

This site is hosted on GitHub pages, and is built (from the files you provide)
by a GitHub action (which is free on public repos). The GitHub action doesn't
run on your own computer. In particular you don't actually need to install
Jekyll on your own computer to update the website, although it's useful so you
can preview the site (with fast feedback) before publishing.

If this site was chosen to be hosted on the Edinburgh school of maths site
(hypothetically, since it's not an Edinburgh initiative), then the site would
need to have been built on a computer using Jekyll and then the output could be
copied over.

The website for this "tech skills" course is very similar in principal, but it uses a framework called "astro.js". "Astro.js" is mostly a static site generator, but allows flexibility with embedding interactive elements using various other frameworks (this is not done here).

## Hannah Dell's Website

**Link:** [website](https://www.hannahdell.com/)


This site was built with Next.js (a metaframework for react.js).
This likely involves some form as static site generation as in the previous
example. But also involves some client side (javascript), in particular what's
called "client-side navigation", where navigating to other pages is overriden
to not reload the whole page again, but request a section that has changed.
The fact that the page is not reloaded reduces the amount of content requested
over the network, but can also allow for other quirks like animations (see my
personal website).


## My personal website

**Link:** [website](https://lukideangeometry.xyz)


This site uses a frontend javascript framework called
[SvelteKit](https://kit.svelte.dev), bootstrap for styling, and is hosted on
GitHub pages. Although being a javascript framework, it's mostly used as a
static site generator (e.g. creating tables from data files). One of the
cosmetic advantages to such a framework is that it will override clicks on
links to other parts of the same website, avoid a full page reload and just
populate the main content. This allows for the animations on the width of the
main content as well as the blue underline in the navigation bar.

The WebApp in the /pseudowalls page is in fact an `<iframe>` to a different
page (using a different web framework called leptos.rs). This is like embedding
a youtube video on a different website.

## Youtube

**Link:** [website](https://www.youtube.com)

For the sake of example and clarification,
a website like youtube is different to all the above examples because it needs
to run code on the server to generate the content to a page. This is to
dynamically accept content provided by the user such as videos and comments.
And when I navigate to a certain video, I will not see the same as you since
youtube will suggest videos in the sidebar related to my own viewing habits.
These are all things which require actual code to run on the server on each
request by a user.
A blog can be in the same boat, but if there's a relatively small number of
posts and no comments, then it could instead just be rebuilt every time a new
blog post is created (with say Jekyll), so nothing needs to be generated when
the user navigates the website.

This distinction is important because all of the hosting suggestions above
assume there is no server-side code to run because there's little purpose for
it in academic sites, and it is cheaper (in many instances free).
However if you do have an idea that requires server-side code, let me know.

This does not necessarily rule out interactive parts to your website, or even
heavy (moderate) computation. Javascript written in your page can run in the
user's browser. The modern age has also brought WebAssembly unlocking more
possibilities, such as WebApp I created
[here](https://pseudowalls.gitlab.io/webapp/tilt.leptos/) hosted on GitHub
pages (free) with no server-side code, whilst also sharing the same code to
create a SageMath/Python library.

