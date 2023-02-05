import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { L as LightSwitch } from "../../chunks/LightSwitch.js";
const tabulator_simple_min = "";
const Tabulator_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let tableComponent;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div${add_attribute("this", tableComponent, 0)}></div>


`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tdata = [
    {
      id: 1,
      name: "Billy Bob",
      age: 12,
      gender: "male",
      height: 95,
      col: "red",
      dob: "14/05/2010"
    },
    {
      id: 2,
      name: "Jenny Jane",
      age: 42,
      gender: "female",
      height: 142,
      col: "blue",
      dob: "30/07/1954"
    },
    {
      id: 3,
      name: "Steve McAlistaire",
      age: 35,
      gender: "male",
      height: 176,
      col: "green",
      dob: "04/11/1982"
    },
    ,
    {
      id: 3,
      name: "Steve McAlistaire",
      age: 35,
      gender: "male",
      height: 176,
      col: "green",
      dob: "04/11/1982"
    }
  ];
  return `${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}

<div class="${"container h-auto mx-auto flex justify-center items-center"}">${validate_component(Tabulator_1, "Tabulator").$$render($$result, { data: tdata }, {}, {})}</div>`;
});
export {
  Page as default
};
