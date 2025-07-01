import { _ as __nuxt_component_0 } from './nuxt-link-4xpN3VHh.mjs';
import { defineComponent, ref, watchEffect, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-C29yH_W7.mjs';
import { n as navigateTo } from './server.mjs';
import { u as useHead } from './v3-C7rALUYV.mjs';
import { c as createLucideIcon } from './createLucideIcon-p_xZbsDM.mjs';
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

/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const User = createLucideIcon("UserIcon", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const isLoading = ref(false);
    watchEffect(async () => {
      if (user.value) {
        await navigateTo("/slide-manager");
      }
    });
    useHead({
      title: "Sign Up - Vireak Buntham Slide Manager",
      meta: [
        { name: "description", content: "Create an account to access slide management features" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4" }, _attrs))}><div class="max-w-md w-full"><div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"><div class="text-center mb-8"><h1 class="text-3xl font-bold text-slate-800 mb-2">Sign Up</h1><p class="text-slate-600">Create your account to get started.</p></div><form class="space-y-6">`);
      if (error.value) {
        _push(`<div class="bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg p-3 text-center">${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><label for="name" class="sr-only">Full Name</label>`);
      _push(ssrRenderComponent(unref(User), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }, null, _parent));
      _push(`<input id="name"${ssrRenderAttr("value", name.value)} type="text" required class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Enter your full name"></div><div class="relative"><label for="email" class="sr-only">Email</label>`);
      _push(ssrRenderComponent(unref(Mail), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }, null, _parent));
      _push(`<input id="email"${ssrRenderAttr("value", email.value)} type="email" required class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Enter your email"></div><div class="relative"><label for="password" class="sr-only">Password</label>`);
      _push(ssrRenderComponent(unref(Lock), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }, null, _parent));
      _push(`<input id="password"${ssrRenderAttr("value", password.value)} type="password" required class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Create a password"></div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">`);
      if (isLoading.value) {
        _push(`<span>Creating Account...</span>`);
      } else {
        _push(`<span>Sign Up</span>`);
      }
      _push(`</button></form><div class="mt-6 text-center"><p class="text-slate-600"> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-orange-500 hover:text-orange-600 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in `);
          } else {
            return [
              createTextVNode(" Sign in ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BIPSVugz.mjs.map
