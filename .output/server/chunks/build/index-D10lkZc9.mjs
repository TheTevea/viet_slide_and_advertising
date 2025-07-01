import { defineComponent, mergeProps, unref, watch, readonly, toRef, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { a as useNuxtApp } from './server.mjs';
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

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const MOCK_USERS = {
  "1": { id: "1", name: "Moni Roy", email: "admin@vireakbuntham.com" }
};
const MOCK_PASSWORDS = {
  "admin@vireakbuntham.com": "password123"
};
const useAuth = () => {
  const user = useState("auth.user", () => {
    return null;
  });
  watch(user, (newUser) => {
  }, { deep: true });
  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = Object.values(MOCK_USERS).find((u) => u.email === email);
        if (foundUser && MOCK_PASSWORDS[email] === password) {
          user.value = foundUser;
          resolve();
        } else {
          reject(new Error("Invalid email or password."));
        }
      }, 500);
    });
  };
  const register = async (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.values(MOCK_USERS).some((u) => u.email === email)) {
          reject(new Error("An account with this email already exists."));
          return;
        }
        const id = Date.now().toString();
        const newUser = { id, name, email };
        MOCK_USERS[id] = newUser;
        MOCK_PASSWORDS[email] = password;
        user.value = newUser;
        resolve();
      }, 500);
    });
  };
  const logout = () => {
    user.value = null;
  };
  const updateProfile = async (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.value) {
          const updatedUser = { ...user.value, name };
          MOCK_USERS[user.value.id] = updatedUser;
          user.value = updatedUser;
          resolve();
        } else {
          reject(new Error("User not found."));
        }
      }, 500);
    });
  };
  const changePassword = async (currentPassword, newPassword) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.value && MOCK_PASSWORDS[user.value.email] === currentPassword) {
          MOCK_PASSWORDS[user.value.email] = newPassword;
          resolve();
        } else {
          reject(new Error("Incorrect current password."));
        }
      }, 500);
    });
  };
  return {
    user: readonly(user),
    login,
    register,
    logout,
    updateProfile,
    changePassword
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 flex items-center justify-center" }, _attrs))}><div class="text-center"><h1 class="text-4xl font-bold text-slate-800 mb-4"> Vireak Buntham - Slide Manager </h1><p class="text-slate-600 mb-8"> Welcome to the new Nuxt 3 version! </p><div class="space-y-4">`);
      if (!unref(user)) {
        _push(`<div class="space-x-4"><button class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"> Login </button><button class="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"> Register </button></div>`);
      } else {
        _push(`<div class="space-y-2"><p class="text-slate-700">Welcome back, ${ssrInterpolate(unref(user).name)}!</p><button class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"> Logout </button></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D10lkZc9.mjs.map
