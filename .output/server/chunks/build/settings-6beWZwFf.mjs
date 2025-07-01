import { u as useSlides, _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './useSlides-IIcyBpyI.mjs';
import { defineComponent, withAsyncContext, ref, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-C29yH_W7.mjs';
import { n as navigateTo } from './server.mjs';
import { u as useHead } from './v3-C7rALUYV.mjs';
import './createLucideIcon-p_xZbsDM.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { user } = useAuth();
    if (!user.value) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/login")), await __temp, __restore();
    }
    const { notifications, removeNotification } = useSlides();
    const isSidebarOpen = ref(false);
    const setIsSidebarOpen = (isOpen) => {
      isSidebarOpen.value = isOpen;
    };
    useHead({
      title: "Settings - Vireak Buntham",
      meta: [
        { name: "description", content: "Manage your account settings and preferences" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSidebar = _sfc_main$2;
      const _component_AppHeader = _sfc_main$1;
      const _component_AppProfileSettings = resolveComponent("AppProfileSettings");
      const _component_AppPasswordSettings = resolveComponent("AppPasswordSettings");
      const _component_AppAppearanceSettings = resolveComponent("AppAppearanceSettings");
      const _component_AppDataSettings = resolveComponent("AppDataSettings");
      const _component_AppNotification = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppSidebar, {
        activeCategory: "mobile-slideshow",
        onCategoryChange: () => {
        },
        isSidebarOpen: isSidebarOpen.value,
        setIsSidebarOpen
      }, null, _parent));
      if (isSidebarOpen.value) {
        _push(`<div class="fixed inset-0 bg-black/30 z-30 lg:hidden" aria-hidden="true"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1 flex flex-col lg:ml-72 transition-all duration-300">`);
      _push(ssrRenderComponent(_component_AppHeader, {
        title: "Settings",
        onMenuClick: () => setIsSidebarOpen(true)
      }, null, _parent));
      _push(`<main class="flex-1 p-4 sm:p-6 lg:p-8"><div class="max-w-4xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><h2 class="text-xl font-bold text-slate-800">Profile</h2><p class="text-sm text-slate-500 mt-1">Manage your personal information.</p></div><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_AppProfileSettings, null, null, _parent));
      _push(`</div></div><hr class="my-8 border-slate-200"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><h2 class="text-xl font-bold text-slate-800">Security</h2><p class="text-sm text-slate-500 mt-1">Change your password.</p></div><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_AppPasswordSettings, null, null, _parent));
      _push(`</div></div><hr class="my-8 border-slate-200"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><h2 class="text-xl font-bold text-slate-800">Appearance</h2><p class="text-sm text-slate-500 mt-1">Customize the look and feel.</p></div><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_AppAppearanceSettings, null, null, _parent));
      _push(`</div></div><hr class="my-8 border-slate-200"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><h2 class="text-xl font-bold text-slate-800">Data Management</h2><p class="text-sm text-slate-500 mt-1">Manage application data.</p></div><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_AppDataSettings, null, null, _parent));
      _push(`</div></div></div></main></div><div class="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md"><!--[-->`);
      ssrRenderList(unref(notifications), (notif) => {
        _push(ssrRenderComponent(_component_AppNotification, {
          key: notif.id,
          message: notif.message,
          type: notif.type,
          onClose: () => unref(removeNotification)(notif.id)
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-6beWZwFf.mjs.map
