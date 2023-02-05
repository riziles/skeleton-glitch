import { g as get_store_value, c as create_ssr_component, e as escape, b as add_attribute, d as compute_slots, f as subscribe, h as createEventDispatcher, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const themeSkeleton = "";
const all = "";
const app = "";
const stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function localStorageStore(key, initialValue, options) {
  const serializer = options?.serializer ?? JSON;
  const storageType = options?.storage ?? "local";
  const browser = typeof window !== "undefined" && typeof document !== "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = browser ? getStorage(storageType).getItem(key) : null;
      if (json) {
        set2(serializer.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
const storePrefersDarkScheme = localStorageStore("storePrefersDarkScheme", false);
const storeLightSwitch = localStorageStore("storeLightSwitch", void 0);
const AccordionItem_svelte_svelte_type_style_lang = "";
const cBase = "flex items-center";
const cLead = "flex-none flex justify-between items-center";
const cCenter = "flex-auto";
const cTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesLead;
  let classesCenter;
  let classesTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "shadow-lg" } = $$props;
  let { space = "space-x-4" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${padding} ${shadow} ${space} ${$$props.class ?? ""}`;
  classesLead = `${cLead} ${slotLead}`;
  classesCenter = `${cCenter} ${slotDefault}`;
  classesTrail = `${cTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="${"app-bar"}" role="${"toolbar"}"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}>
	${$$slots.lead ? `<div class="${"app-bar-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}

	
	<div class="${"app-bar-center " + escape(classesCenter, true)}">${slots.default ? slots.default({}) : ``}</div>

	
	${$$slots.trail ? `<div class="${"app-bar-trail " + escape(classesTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden overflow-y-auto flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesheader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesheader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="${"appShell"}"${add_attribute("class", classesBase, 0)} data-testid="${"app-shell"}">
	${$$slots.header ? `<header id="${"shell-header"}" class="${"flex-none " + escape(classesheader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}

	
	<div class="${"flex-auto " + escape(cContentArea, true)}">
		${$$slots.sidebarLeft ? `<aside id="${"sidebar-left"}"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}

		
		<div id="${"page"}"${add_attribute("class", cPage, 0)}>
			${$$slots.pageHeader ? `<header id="${"page-header"}" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}

			
			<main id="${"page-content"}" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>

			
			${$$slots.pageFooter ? `<footer id="${"page-footer"}" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>

		
		${$$slots.sidebarRight ? `<aside id="${"sidebar-right"}"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>

	
	${$$slots.footer ? `<footer id="${"shell-footer"}" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const FileDropzone_svelte_svelte_type_style_lang = "";
const ProgressBar_svelte_svelte_type_style_lang = "";
const cTrack = "inline-block bg-surface-200-700-token ring-[1px] ring-surface-300-600-token ring-inset w-12 h-6 rounded-full cursor-pointer transition-all duration-[100ms]";
const cThumb = "bg-white dark:bg-black fill-white dark:fill-black w-6 h-6 flex justify-center items-center rounded-full shadow-lg transition-all duration-[100ms] scale-90";
const cIcon = "block w-4 h-4";
function setColorScheme() {
  if (localStorage.getItem("storeLightSwitch") === "true" || !("storeLightSwitch" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesBase;
  let classesThumb;
  let $storeLightSwitch, $$unsubscribe_storeLightSwitch;
  let $$unsubscribe_storePrefersDarkScheme;
  $$unsubscribe_storeLightSwitch = subscribe(storeLightSwitch, (value) => $storeLightSwitch = value);
  $$unsubscribe_storePrefersDarkScheme = subscribe(storePrefersDarkScheme, (value) => value);
  createEventDispatcher();
  classesPosition = $storeLightSwitch ? "translate-x-full" : "translate-x-0";
  classesBase = `${cTrack} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${classesPosition}`;
  $$unsubscribe_storeLightSwitch();
  $$unsubscribe_storePrefersDarkScheme();
  return `


${$$result.head += `<!-- HEAD_svelte-1b2q2h6_START --><!-- HTML_TAG_START -->${`<script>${setColorScheme.toString()} setColorScheme();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-1b2q2h6_END -->`, ""}


<div class="${"lightswitch " + escape(classesBase, true)}" role="${"switch"}" aria-label="${"Light Switch"}"${add_attribute("aria-checked", $storeLightSwitch, 0)} title="${"Toggle " + escape($storeLightSwitch ? "Light" : "Dark", true) + " Mode"}" tabindex="${"0"}">
	<div class="${"lightswitch-thumb " + escape(classesThumb, true)}">${$storeLightSwitch === false ? `
			<svg class="${"lightswitch-icon fill-black " + escape(cIcon, true)}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path d="${"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"}"></path></svg>` : `
			<svg class="${"lightswitch-icon fill-white " + escape(cIcon, true)}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 384 512"}"><path d="${"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}"></path></svg>`}</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(AppShell, "AppShell").$$render(
    $$result,
    {
      slotSidebarLeft: "bg-surface-500/5 w-56 p-4"
    },
    {},
    {
      header: () => {
        return `
		${validate_component(AppBar, "AppBar").$$render($$result, {}, {}, {
          trail: () => {
            return `${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}
				<a class="${"btn btn-sm variant-ghost-surface"}" href="${"https://discord.gg/EXqV7W8MtY"}" target="${"_blank"}" rel="${"noreferrer"}">Discord</a>
				<a class="${"btn btn-sm variant-ghost-surface"}" href="${"https://github.com/skeletonlabs/skeleton"}" target="${"_blank"}" rel="${"noreferrer"}">GitHub</a>
			`;
          },
          lead: () => {
            return `<strong class="${"text-xl uppercase"}">Skeleton</strong>`;
          }
        })}
	`;
      },
      default: () => {
        return `
	${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Layout as default
};
