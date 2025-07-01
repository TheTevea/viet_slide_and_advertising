import { _ as __nuxt_component_0 } from './nuxt-link-4xpN3VHh.mjs';
import { defineComponent, ref, watchEffect, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-C29yH_W7.mjs';
import { n as navigateTo } from './server.mjs';
import { u as useHead } from './v3-C7rALUYV.mjs';
import { M as Mail, L as Lock } from './mail-I2Olaaoo.mjs';
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
import './createLucideIcon-p_xZbsDM.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    const email = ref("admin@vireakbuntham.com");
    const password = ref("password123");
    const error = ref("");
    const isLoading = ref(false);
    watchEffect(async () => {
      if (user.value) {
        await navigateTo("/slide-manager");
      }
    });
    useHead({
      title: "Sign In - Vireak Buntham Slide Manager",
      meta: [
        { name: "description", content: "Sign in to access your slide management dashboard" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4" }, _attrs))}><div class="max-w-md w-full"><div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"><div class="text-center mb-8"><h1 class="text-3xl font-bold text-slate-800 mb-2">Sign In</h1><p class="text-slate-600">Welcome back! Please sign in to your account.</p></div><form class="space-y-6">`);
      if (error.value) {
        _push(`<div class="bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg p-3 text-center">${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><label for="email" class="sr-only">Email</label>`);
      _push(ssrRenderComponent(unref(Mail), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }, null, _parent));
      _push(`<input id="email"${ssrRenderAttr("value", email.value)} type="email" required class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Enter your email"></div><div class="relative"><label for="password" class="sr-only">Password</label>`);
      _push(ssrRenderComponent(unref(Lock), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }, null, _parent));
      _push(`<input id="password"${ssrRenderAttr("value", password.value)} type="password" required class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Enter your password"></div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">`);
      if (isLoading.value) {
        _push(`<span>Signing in...</span>`);
      } else {
        _push(`<span>Sign In</span>`);
      }
      _push(`</button></form><div class="mt-6 text-center"><p class="text-slate-600"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-orange-500 hover:text-orange-600 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign up `);
          } else {
            return [
              createTextVNode(" Sign up ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-D5UICb7i.mjs.map
