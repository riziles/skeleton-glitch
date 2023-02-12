import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index2.js";
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headerText;
  let { plotHeader = "" } = $$props;
  let { data = [
    {
      x: ["giraffes", "orangutans", "monkeys"],
      y: [20, 14, 23],
      type: "bar"
    }
  ] } = $$props;
  if ($$props.plotHeader === void 0 && $$bindings.plotHeader && plotHeader !== void 0)
    $$bindings.plotHeader(plotHeader);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1q3p2ia_START --><script src="${"https://cdn.plot.ly/plotly-2.18.0.min.js"}"><\/script><!-- HEAD_svelte-1q3p2ia_END -->`, ""}



<h3>${escape(headerText)}</h3>
<div id="${"plotly"}"><div><h1>${escape(plotHeader)}</h1></div>
  <div id="${"plotDiv"}"></div></div>`;
});
const Eightfold = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>How I Stopped Worrying and Learned to Love Javascript</h2>
<p>So I love <a href="${"https://jupyterbook.org/en/stable/start/your-first-book.html"}" rel="${"nofollow"}">Jupyter Book</a>.
It’s a great way to build a beautiful website with Python.
You can add beautiful interactive charts with one of the many plotting libraries supported by Python
such as <a href="${"https://bokeh.org/"}" rel="${"nofollow"}">Bokeh</a> or <a href="${"https://plotly.com/python/"}" rel="${"nofollow"}">Plotly</a>.</p>
<p>But if you want to make things REALLY interactive, you need to add some Javascript.
<a href="${"https://panel.holoviz.org/user_guide/Links.html#defining-javascript-callbacks"}" rel="${"nofollow"}">Holoviz Panel</a>
allows you to embed Javascript callbacks to charts and widgets which
can then be added to Jupyter Book. It’s great! I’ve been experimenting with Panel for a while,
but I ended up learning so much Javascript that I started wondering why I don’t just do everything in Javascript.</p>
<p>But then I remembered the beautiful LaTeX PDF documents I created with Jupyter Book,
and decided to stick with Python.</p>
<p>But then I learned about <a href="${"https://myst-tools.org/docs/mystjs"}" rel="${"nofollow"}">Myst JS</a>! And I thought,
what if I build a website in Javascript and used Myst JS to convert it to PDF!</p>
${validate_component(Chart, "Chart").$$render($$result, {}, {}, {
    default: () => {
      return `<p><img src="${"./Capture.PNG"}"></p>`;
    }
  })}
<h2>Some More Markdown</h2>
<p>A lot</p>
<p><a href="${"/my-document.pdf"}">link</a></p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article class="${"prose lg:p-8 m-8 lg:prose-xl dark:prose-invert prose-li:text-blue "}">${validate_component(Eightfold, "EightFold").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
