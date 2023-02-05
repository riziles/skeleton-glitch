import { w as writable } from "./index.js";
import { h as get_store_value } from "./index2.js";
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
    const { subscribe, set } = store;
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
      subscribe
    };
  }
  return stores[key];
}
const storePrefersDarkScheme = localStorageStore("storePrefersDarkScheme", false);
const storeLightSwitch = localStorageStore("storeLightSwitch", void 0);
const AccordionItem_svelte_svelte_type_style_lang = "";
const FileDropzone_svelte_svelte_type_style_lang = "";
const ProgressBar_svelte_svelte_type_style_lang = "";
export {
  storePrefersDarkScheme as a,
  storeLightSwitch as s
};
