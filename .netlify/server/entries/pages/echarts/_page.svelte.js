import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import "echarts";
import { s as storeLightSwitch } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const EChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_storeLightSwitch;
  $$unsubscribe_storeLightSwitch = subscribe(storeLightSwitch, (value) => value);
  let myChartDiv;
  let { option } = $$props;
  if ($$props.option === void 0 && $$bindings.option && option !== void 0)
    $$bindings.option(option);
  $$unsubscribe_storeLightSwitch();
  return `

<div class="${"h-full w-full m-5"}"${add_attribute("this", myChartDiv, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chartoption = {
    title: { text: "ECharts Getting Started Example" },
    tooltip: {},
    xAxis: {
      data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"]
    },
    yAxis: {},
    series: [
      {
        name: "sales",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
  return `<div class="${"max-h-screen h-full flex justify-center overflow-hidden pr-5"}"><div class="${"h-5/6 w-full max-w-5xl items-center overflow-hidden"}">${validate_component(EChart, "EChart").$$render($$result, { option: chartoption }, {}, {})}</div></div>`;
});
export {
  Page as default
};
