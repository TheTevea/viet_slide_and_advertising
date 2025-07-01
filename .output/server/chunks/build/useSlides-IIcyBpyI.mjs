import { defineComponent, readonly, ref, watch, mergeProps, unref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { c as createLucideIcon } from './createLucideIcon-p_xZbsDM.mjs';
import { u as useAuth } from './useAuth-C29yH_W7.mjs';

/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronDown = createLucideIcon("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleCheckBig = createLucideIcon("CircleCheckBigIcon", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleX = createLucideIcon("CircleXIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LayoutDashboard = createLucideIcon("LayoutDashboardIcon", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LogOut = createLucideIcon("LogOutIcon", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Menu = createLucideIcon("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Presentation = createLucideIcon("PresentationIcon", [
  ["path", { d: "M2 3h20", key: "91anmk" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
  ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = createLucideIcon("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  props: {
    activeCategory: {},
    onCategoryChange: { type: Function },
    isSidebarOpen: { type: Boolean },
    setIsSidebarOpen: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const openMenus = ref({
      mobile: props.activeCategory.startsWith("mobile"),
      website: props.activeCategory.startsWith("website")
    });
    watch(() => props.activeCategory, (newCategory) => {
      openMenus.value = {
        mobile: newCategory.startsWith("mobile"),
        website: newCategory.startsWith("website")
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: [
          "w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed z-40 transition-transform duration-300 ease-in-out lg:translate-x-0",
          _ctx.isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        ]
      }, _attrs))}><div class="p-6 border-b border-slate-200 flex items-center justify-between h-20"><img src="https://vireakbuntham.com/img/vireak-buntham.3087fdaf.png" alt="Vireak Buntham Logo" class="h-10 w-auto"><button class="lg:hidden text-slate-500 hover:text-orange-500" aria-label="Close menu">`);
      _push(ssrRenderComponent(unref(X), { size: 24 }, null, _parent));
      _push(`</button></div><nav class="flex-1 p-4 overflow-y-auto"><div><a href="#" class="${ssrRenderClass([
        "flex items-center p-3 my-1.5 rounded-lg transition-all duration-200 group",
        _ctx.activeCategory.startsWith("mobile") ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" : "text-slate-600 hover:bg-slate-100"
      ])}"><div class="${ssrRenderClass(_ctx.activeCategory.startsWith("mobile") ? "text-white" : "text-slate-500 group-hover:text-orange-500")}">`);
      _push(ssrRenderComponent(unref(LayoutDashboard), { size: 22 }, null, _parent));
      _push(`</div><span class="ml-4 flex-1 text-sm font-semibold whitespace-nowrap">Mobile</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        size: 18,
        class: [
          "transition-transform duration-200",
          openMenus.value.mobile ? "rotate-180" : ""
        ]
      }, null, _parent));
      _push(`</a>`);
      if (openMenus.value.mobile) {
        _push(`<ul class="pl-12 pr-2 py-1 space-y-1"><li><a href="#" class="${ssrRenderClass([
          "block p-2 text-sm rounded-md transition-colors",
          _ctx.activeCategory === "mobile-slideshow" ? "font-bold text-orange-600" : "text-slate-500 hover:text-orange-500 font-medium"
        ])}"> Slide Show </a></li><li><a href="#" class="${ssrRenderClass([
          "block p-2 text-sm rounded-md transition-colors",
          _ctx.activeCategory === "mobile-advertising" ? "font-bold text-orange-600" : "text-slate-500 hover:text-orange-500 font-medium"
        ])}"> Advertising </a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><a href="#" class="${ssrRenderClass([
        "flex items-center p-3 my-1.5 rounded-lg transition-all duration-200 group",
        _ctx.activeCategory.startsWith("website") ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" : "text-slate-600 hover:bg-slate-100"
      ])}"><div class="${ssrRenderClass(_ctx.activeCategory.startsWith("website") ? "text-white" : "text-slate-500 group-hover:text-orange-500")}">`);
      _push(ssrRenderComponent(unref(Presentation), { size: 22 }, null, _parent));
      _push(`</div><span class="ml-4 flex-1 text-sm font-semibold whitespace-nowrap">Website</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        size: 18,
        class: [
          "transition-transform duration-200",
          openMenus.value.website ? "rotate-180" : ""
        ]
      }, null, _parent));
      _push(`</a>`);
      if (openMenus.value.website) {
        _push(`<ul class="pl-12 pr-2 py-1 space-y-1"><li><a href="#" class="${ssrRenderClass([
          "block p-2 text-sm rounded-md transition-colors",
          _ctx.activeCategory === "website-slideshow" ? "font-bold text-orange-600" : "text-slate-500 hover:text-orange-500 font-medium"
        ])}"> Slide Show </a></li><li><a href="#" class="${ssrRenderClass([
          "block p-2 text-sm rounded-md transition-colors",
          _ctx.activeCategory === "website-advertising" ? "font-bold text-orange-600" : "text-slate-500 hover:text-orange-500 font-medium"
        ])}"> Advertising </a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav></aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    onMenuClick: { type: Function }
  },
  setup(__props) {
    const { user } = useAuth();
    const isDropdownOpen = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-slate-200" }, _attrs))}><div class="px-4 sm:px-8 h-20 flex justify-between items-center"><div class="flex items-center gap-4"><button class="lg:hidden text-slate-600 hover:text-orange-500" aria-label="Open menu">`);
      _push(ssrRenderComponent(unref(Menu), { size: 24 }, null, _parent));
      _push(`</button><h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 whitespace-nowrap">${ssrInterpolate(_ctx.title)}</h2></div><div class="relative"><div class="flex items-center space-x-2 sm:space-x-4 cursor-pointer group p-2 rounded-lg hover:bg-slate-100 transition-colors" role="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", isDropdownOpen.value)}><img class="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-white"${ssrRenderAttr("src", `https://i.pravatar.cc/150?u=${(_a = unref(user)) == null ? void 0 : _a.email}`)} alt="User"><div class="text-right hidden sm:block"><p class="font-semibold text-slate-800 text-sm">${ssrInterpolate(((_b = unref(user)) == null ? void 0 : _b.name) || "User")}</p><p class="text-xs text-slate-500">Admin</p></div>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        size: 20,
        class: [
          "text-slate-400 group-hover:text-slate-600 transition-transform duration-200",
          isDropdownOpen.value ? "rotate-180" : ""
        ]
      }, null, _parent));
      _push(`</div>`);
      if (isDropdownOpen.value) {
        _push(`<div class="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30 animate-in fade-in-0 zoom-in-95"><div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"><div class="px-4 py-3 border-b border-slate-100"><p class="text-sm font-semibold text-slate-900 leading-tight">${ssrInterpolate((_c = unref(user)) == null ? void 0 : _c.name)}</p><p class="text-xs text-slate-500 truncate mt-0.5">${ssrInterpolate((_d = unref(user)) == null ? void 0 : _d.email)}</p></div><div class="py-1"><a href="#" class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors" role="menuitem">`);
        _push(ssrRenderComponent(unref(LogOut), {
          size: 16,
          class: "text-slate-500"
        }, null, _parent));
        _push(`<span>Logout</span></a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const baseClasses = "max-w-md w-full bg-white shadow-2xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden";
const textColor = "text-slate-800";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppNotification",
  __ssrInlineRender: true,
  props: {
    message: {},
    type: {},
    onClose: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const isSuccess = computed(() => props.type === "success");
    const iconColor = computed(() => isSuccess.value ? "text-green-500" : "text-red-500");
    const closeButtonHover = computed(() => isSuccess.value ? "hover:bg-green-100" : "hover:bg-red-100");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: baseClasses }, _attrs))}><div class="p-4"><div class="flex items-start"><div class="flex-shrink-0">`);
      if (isSuccess.value) {
        _push(ssrRenderComponent(unref(CircleCheckBig), {
          class: iconColor.value,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(CircleX), {
          class: iconColor.value,
          "aria-hidden": "true"
        }, null, _parent));
      }
      _push(`</div><div class="${ssrRenderClass(`ml-3 w-0 flex-1 pt-0.5`)}"><p class="${ssrRenderClass(`text-sm font-semibold ${textColor}`)}">${ssrInterpolate(isSuccess.value ? "Successfully!" : "Error!")}</p><p class="${ssrRenderClass(`mt-1 text-sm text-slate-500`)}">${ssrInterpolate(_ctx.message)}</p></div><div class="ml-4 flex-shrink-0 flex"><button class="${ssrRenderClass(`inline-flex rounded-md p-1.5 text-slate-400 ${closeButtonHover.value} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition-colors`)}"><span class="sr-only">Close</span>`);
      _push(ssrRenderComponent(unref(X), { size: 20 }, null, _parent));
      _push(`</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNotification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const slides = ref([]);
const notifications = ref([]);
const useSlides = () => {
  const getSlidesByCategory = (category) => {
    return slides.value.filter((slide) => slide.category === category).sort((a, b) => a.order - b.order);
  };
  const addSlide = (slideData) => {
    const newSlide = {
      ...slideData,
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      lastUpdatedBy: "Moni Roy"
      // As per spec
    };
    slides.value.push(newSlide);
    addNotification("Slide added successfully!", "success");
  };
  const updateSlide = (updatedSlide) => {
    const index = slides.value.findIndex((slide) => slide.id === updatedSlide.id);
    if (index !== -1) {
      slides.value[index] = {
        ...updatedSlide,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        lastUpdatedBy: "Moni Roy"
      };
      addNotification("Slide updated successfully!", "success");
    }
  };
  const deleteSlide = (id) => {
    slides.value = slides.value.filter((slide) => slide.id !== id);
    addNotification("Slide deleted successfully!", "success");
  };
  const addNotification = (message, type = "success") => {
    const newNotification = { id: Date.now(), message, type };
    notifications.value.push(newNotification);
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5e3);
  };
  const removeNotification = (id) => {
    notifications.value = notifications.value.filter((n) => n.id !== id);
  };
  return {
    slides: readonly(slides),
    notifications: readonly(notifications),
    getSlidesByCategory,
    addSlide,
    updateSlide,
    deleteSlide,
    addNotification,
    removeNotification
  };
};

export { X, _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b, useSlides as u };
//# sourceMappingURL=useSlides-IIcyBpyI.mjs.map
