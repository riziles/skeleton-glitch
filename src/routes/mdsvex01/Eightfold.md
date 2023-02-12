---
title: How I Stopped Worrying and Learned to Love Javascript
subject: Myst JS
subtitle: Evolve your MDX and MDsveX into PDF!
short_title: How to MyST jS
authors:
  - name: riziles
license: CC-BY-4.0
keywords: myst, markdown, open-science
exports:
  - format: pdf
    template: plain_latex
    output: ./my-document.pdf
---

<script>
import Chart from './Chart.svelte'
import capture_path from '$lib/assets/Capture.JPG';
import pdflink from '$lib/assets/my-document.pdf';
</script>

## How I Stopped Worrying and Learned to Love Javascript

So I love [Jupyter Book](https://jupyterbook.org/en/stable/start/your-first-book.html). 
It's a great way to build a beautiful website with Python. 
You can add beautiful interactive charts with one of the many plotting libraries supported by Python
such as [Bokeh](https://bokeh.org/) or [Plotly](https://plotly.com/python/).

But if you want to make things REALLY interactive, you need to add some Javascript.
[Holoviz Panel](https://panel.holoviz.org/user_guide/Links.html#defining-javascript-callbacks) 
allows you to embed Javascript callbacks to charts and widgets which
can then be added to Jupyter Book. It's great! I've been experimenting with Panel for a while,
but I ended up learning so much Javascript that I started wondering why I don't just do everything in Javascript.

But then I remembered the beautiful LaTeX PDF documents I created with Jupyter Book,
and decided to stick with Python.

But then I learned about [Myst JS](https://myst-tools.org/docs/mystjs)! And I thought,
what if I build a website in Javascript and used Myst JS to convert it to PDF!?

[A PDF Version of this page](https://flourishing-hotteok-608239.netlify.app/my-document.pdf)

This website was built with SvelteKit, Skeleton, Tailwind,
Plotly and MDsveX. Will add links shortly.
Typing on my phone right now!

<Chart >

![](./Capture.PNG)

</Chart>

## Some More Markdown

A lot

