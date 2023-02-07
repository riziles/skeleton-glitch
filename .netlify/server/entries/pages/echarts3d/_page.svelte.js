import { c as create_ssr_component, f as subscribe, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import "echarts";
import "echarts-gl";
import { s as storeLightSwitch } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const EChart3d = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    tooltip: {},
    backgroundColor: "transparent",
    visualMap: {
      show: false,
      dimension: 2,
      min: -1,
      max: 1,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026"
        ]
      }
    },
    xAxis3D: { type: "value" },
    yAxis3D: { type: "value" },
    zAxis3D: { type: "value" },
    grid3D: {
      viewControl: {}
      // projection: 'orthographic'
    },
    series: [
      {
        type: "surface",
        wireframe: {},
        // show: false
        equation: {
          x: { step: 0.05 },
          y: { step: 0.05 },
          z(x, y) {
            if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              return "-";
            }
            return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
          }
        }
      }
    ]
  };
  return `<div class="${"max-h-screen h-full flex justify-center overflow-hidden pr-5"}"><div class="${"h-5/6 w-full max-w-5xl items-center overflow-hidden"}">${validate_component(EChart3d, "EChart3d").$$render($$result, { option: chartoption }, {}, {})}</div></div>`;
});
export {
  Page as default
};
