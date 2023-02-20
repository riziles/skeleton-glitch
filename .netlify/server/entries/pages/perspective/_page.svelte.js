import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import "@finos/perspective";
import { s as storeLightSwitch } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const themes = "";
const Perspetive_svelte_svelte_type_style_lang = "";
const css = {
  code: "perspective-viewer.svelte-16iezrz{position:absolute;top:100px;left:100px;right:100px;bottom:100px}@media screen and (max-width: 990px){perspective-viewer.svelte-16iezrz{top:50px;left:0px;right:0px;bottom:0px}}",
  map: null
};
const Perspetive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let condtheme;
  let $storeLightSwitch, $$unsubscribe_storeLightSwitch;
  $$unsubscribe_storeLightSwitch = subscribe(storeLightSwitch, (value) => $storeLightSwitch = value);
  let perspectiveSvelte;
  $$result.css.add(css);
  condtheme = $storeLightSwitch ? "Vaporwave" : "Material Light";
  $$unsubscribe_storeLightSwitch();
  return `<div><perspective-viewer${add_attribute("theme", condtheme, 0)} class="${"svelte-16iezrz"}"${add_attribute("this", perspectiveSvelte, 0)}></perspective-viewer>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Perspetive, "Perspetive").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
