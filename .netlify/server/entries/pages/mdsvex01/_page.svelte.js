import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { a as assets } from "../../../chunks/shared.js";
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
const Seriously_md_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-5gpr0n{border:23px solid orange;padding:0 15px;width:400px;text-align:center;transform:translateX(-200px);animation:6s svelte-5gpr0n-slide infinite alternate ease-in-out}@keyframes svelte-5gpr0n-slide{from{transform:translateX(-200px)\n		}to{transform:translateX(200px)\n		}}",
  map: null
};
const Seriously = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-5gpr0n"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Eightfold = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let assStr = String(assets);
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
what if I build a website in Javascript and used Myst JS to convert it to PDF!?</p>
<h2>It Worked!</h2>
<p><a href="${escape(assStr, true) + "/my-document.pdf"}">A PDF Version of this page</a></p>
<h2>Some More Markdown</h2>
${validate_component(Chart, "Chart").$$render($$result, {}, {}, {
    default: () => {
      return `<p><img src="${"./Capture.PNG"}"></p>`;
    }
  })}
<p>I can do equations with <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>LaTeX</mtext></mrow><annotation encoding="application/x-tex">\\LaTeX</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8988em;vertical-align:-0.2155em;"></span><span class="mord text"><span class="mord textrm">L</span><span class="mspace" style="margin-right:-0.36em;"></span><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6833em;"><span style="top:-2.905em;"><span class="pstrut" style="height:2.7em;"></span><span class="mord"><span class="mord textrm mtight sizing reset-size6 size3">A</span></span></span></span></span></span><span class="mspace" style="margin-right:-0.15em;"></span><span class="mord text"><span class="mord textrm">T</span><span class="mspace" style="margin-right:-0.1667em;"></span><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4678em;"><span style="top:-2.7845em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord textrm">E</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2155em;"><span></span></span></span></span><span class="mspace" style="margin-right:-0.125em;"></span><span class="mord textrm">X</span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>:</p>
<div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><mi>x</mi><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><msub><mi>r</mi><mn>23</mn></msub></mrow><annotation encoding="application/x-tex">\\frac{x}{x-1} &lt; r_{23} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.8769em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1076em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">23</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div>
<p>Also inline: <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">x_{i-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span> So far so good!</p>
<p>What about this Javascript components?</p>
${validate_component(Seriously, "Seriously").$$render($$result, {}, {}, {
    default: () => {
      return `For some reason, inline math doesn&#39;t work when
passed to a Svelte component using the slot method ($x+1$),
but double dollar signs do work:
<p><span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>1</mn><mo>&lt;</mo><mn>5</mn></mrow><annotation encoding="application/x-tex">x_{i-1}+1 &lt; 5</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6835em;vertical-align:-0.0391em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">5</span></span></span></span>'}<!-- HTML_TAG_END --></span></p>
<p>Going to try using Mathlifier.
Incidentally, Markdown links don’t work inside slots either.</p>`;
    }
  })}
<p>Codeblocks seem to work fine</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
	
	<span class="token keyword">let</span> headerText<span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">let</span> plotHeader <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'giraffes'</span><span class="token punctuation">,</span> <span class="token string">'orangutans'</span><span class="token punctuation">,</span> <span class="token string">'monkeys'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		headerText <span class="token operator">=</span> <span class="token string">'A Chart !'</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> plotDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'plotDiv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>				
		<span class="token keyword">let</span> Plot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plotly<span class="token punctuation">.</span>newPlot</span><span class="token punctuation">(</span>plotDiv<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">showSendToCloud</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       </code>`}<!-- HTML_TAG_END --></pre>
<h2>Credits</h2>
<p>This website was built with
<a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">SvelteKit</a>,
<a href="${"https://www.skeleton.dev/"}" rel="${"nofollow"}">Skeleton</a>,
<a href="${"https://tailwindcss.com/"}" rel="${"nofollow"}">Tailwind</a>,
<a href="${"https://plotly.com/javascript/"}" rel="${"nofollow"}">Plotly</a>,
<a href="${"https://mdsvex.pngwn.io/"}" rel="${"nofollow"}">MDsveX</a>,
<a href="${"https://github.com/kwshi/rehype-katex-svelte"}" rel="${"nofollow"}">rehype-katex-svelte</a>,
<a href="${"https://github.com/remarkjs/remark-math"}" rel="${"nofollow"}">remark-math</a> and
<a href="${"https://github.com/executablebooks/mystjs"}" rel="${"nofollow"}">MyST</a>!</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-zut65o_START --><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"}" integrity="${"sha512-kSwGoyIkfz4+hMo5jkJngSByil9jxJPKbweYec/UgS+S1EgE45qm4Gea7Ks2oxQ7qiYyyZRn66A9df2lMtjIsw=="}" crossorigin="${"anonymous"}" referrerpolicy="${"no-referrer"}"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"}" integrity="${"sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"}" crossorigin="${"anonymous"}"><!-- HEAD_svelte-zut65o_END -->`, ""}


<article class="${"prose lg:p-8 m-8 lg:prose-xl dark:prose-invert prose-li:text-blue "}">${validate_component(Eightfold, "EightFold").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
