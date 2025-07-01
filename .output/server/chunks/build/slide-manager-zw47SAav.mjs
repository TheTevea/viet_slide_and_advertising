import { u as useSlides, _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$6, X } from './useSlides-IIcyBpyI.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { c as createLucideIcon } from './createLucideIcon-p_xZbsDM.mjs';
import { u as useAuth } from './useAuth-C29yH_W7.mjs';
import { n as navigateTo } from './server.mjs';
import { u as useHead } from './v3-C7rALUYV.mjs';
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
const ChevronLeft = createLucideIcon("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CloudUpload = createLucideIcon("CloudUploadIcon", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m16 16-4-4-4 4", key: "119tzi" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Image = createLucideIcon("ImageIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Plus = createLucideIcon("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SquarePen = createLucideIcon("SquarePenIcon", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("Trash2Icon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-vue-next v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TriangleAlert = createLucideIcon("TriangleAlertIcon", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SlideTable",
  __ssrInlineRender: true,
  props: {
    slides: {},
    onEdit: { type: Function },
    onDelete: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))}><table class="w-full text-sm text-left text-slate-500"><thead class="text-xs text-slate-500 uppercase bg-slate-50"><tr><th scope="col" class="px-6 py-4 font-semibold tracking-wider">Thumbnail</th><th scope="col" class="px-6 py-4 font-semibold tracking-wider">Title</th><th scope="col" class="px-6 py-4 font-semibold tracking-wider">Order</th><th scope="col" class="px-6 py-4 font-semibold tracking-wider">Status</th><th scope="col" class="px-6 py-4 font-semibold tracking-wider">Last Updated By</th><th scope="col" class="px-6 py-4 font-semibold tracking-wider text-right">Action</th></tr></thead><tbody class="divide-y divide-slate-200"><!--[-->`);
      ssrRenderList(_ctx.slides, (slide) => {
        _push(`<tr class="bg-white hover:bg-slate-50/50 transition-colors"><td class="px-6 py-4"><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="w-28 h-20 object-cover rounded-lg bg-slate-100"></td><td class="px-6 py-4 font-semibold text-slate-900">${ssrInterpolate(slide.title)}</td><td class="px-6 py-4">${ssrInterpolate(slide.order)}</td><td class="px-6 py-4"><span class="${ssrRenderClass([
          "py-1 px-3 text-xs font-semibold rounded-full",
          slide.status === "active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
        ])}">${ssrInterpolate(slide.status === "active" ? "Active" : "Inactive")}</span></td><td class="px-6 py-4">${ssrInterpolate(slide.lastUpdatedBy)}</td><td class="px-6 py-4"><div class="flex items-center justify-end space-x-2"><button class="p-2 rounded-full text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-colors">`);
        _push(ssrRenderComponent(unref(SquarePen), { size: 18 }, null, _parent));
        _push(`</button><button class="p-2 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors">`);
        _push(ssrRenderComponent(unref(Trash2), { size: 18 }, null, _parent));
        _push(`</button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SlideTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppPagination",
  __ssrInlineRender: true,
  props: {
    currentPage: {},
    totalPages: {},
    totalItems: {},
    itemsPerPage: {},
    onPageChange: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const startItem = computed(
      () => props.totalItems > 0 ? (props.currentPage - 1) * props.itemsPerPage + 1 : 0
    );
    const endItem = computed(
      () => Math.min(props.currentPage * props.itemsPerPage, props.totalItems)
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.totalPages > 1) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "flex items-center justify-between bg-white px-4 py-3 sm:px-6 mt-6",
          "aria-label": "Pagination"
        }, _attrs))}><div class="hidden sm:block"><p class="text-sm text-slate-600"> Showing <span class="font-semibold text-slate-800">${ssrInterpolate(startItem.value)}</span> to <span class="font-semibold text-slate-800">${ssrInterpolate(endItem.value)}</span> of <span class="font-semibold text-slate-800">${ssrInterpolate(_ctx.totalItems)}</span> results </p></div><div class="flex flex-1 justify-between sm:justify-end gap-2"><button${ssrIncludeBooleanAttr(_ctx.currentPage === 1) ? " disabled" : ""} class="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">`);
        _push(ssrRenderComponent(unref(ChevronLeft), {
          size: 18,
          class: "mr-2"
        }, null, _parent));
        _push(` Previous </button><button${ssrIncludeBooleanAttr(_ctx.currentPage === _ctx.totalPages) ? " disabled" : ""} class="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> Next `);
        _push(ssrRenderComponent(unref(ChevronRight), {
          size: 18,
          class: "ml-2"
        }, null, _parent));
        _push(`</button></div></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppPagination.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppImageUploader",
  __ssrInlineRender: true,
  props: {
    image: {},
    onImageChange: { type: Function }
  },
  setup(__props) {
    const isDragging = ref(false);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label class="block text-sm font-medium text-slate-700 mb-1">Photo</label><div class="mt-1"><label for="file-upload" class="${ssrRenderClass([
        "relative flex justify-center items-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-colors",
        isDragging.value ? "border-orange-500 bg-orange-50" : "border-slate-300 hover:border-orange-400"
      ])}">`);
      if (_ctx.image) {
        _push(`<!--[--><img${ssrRenderAttr("src", _ctx.image)} alt="Preview" class="w-full h-full object-cover rounded-xl"><div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-xl"><span class="text-white font-semibold">Change Photo</span></div><button type="button" class="absolute top-2 right-2 p-1.5 bg-white/80 text-slate-700 rounded-full hover:bg-white hover:scale-110 transition-all">`);
        _push(ssrRenderComponent(unref(X), { size: 18 }, null, _parent));
        _push(`</button><!--]-->`);
      } else {
        _push(`<div class="space-y-2 text-center">`);
        _push(ssrRenderComponent(unref(CloudUpload), {
          size: 48,
          class: "mx-auto text-slate-400"
        }, null, _parent));
        _push(`<div class="flex text-sm text-slate-600"><span class="font-semibold text-orange-600">Click to upload</span><p class="pl-1">or drag and drop</p></div><p class="text-xs text-slate-500">PNG or JPG (MAX. 5MB)</p></div>`);
      }
      _push(`</label><input id="file-upload" name="file-upload" type="file" class="sr-only" accept="image/png, image/jpeg"></div>`);
      if (error.value) {
        _push(`<p class="text-red-500 text-sm mt-2">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppImageUploader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SlideFormModal",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    onClose: { type: Function },
    slide: {},
    category: {}
  },
  setup(__props) {
    const props = __props;
    useSlides();
    const title = ref("");
    const order = ref(1);
    const status = ref("active");
    const image = ref(null);
    const error = ref("");
    const setImage = (newImage) => {
      image.value = newImage;
    };
    watch(() => [props.slide, props.isOpen], () => {
      if (props.slide) {
        title.value = props.slide.title;
        order.value = props.slide.order;
        status.value = props.slide.status;
        image.value = props.slide.image;
      } else {
        title.value = "";
        order.value = 1;
        status.value = "active";
        image.value = null;
      }
      error.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppImageUploader = _sfc_main$3;
      if (_ctx.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-slate-900/70 z-50 flex justify-center items-center p-4 backdrop-blur-sm" }, _attrs))}><div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"><div class="flex justify-between items-center p-5 border-b border-slate-200"><h3 class="text-xl font-semibold text-slate-800">${ssrInterpolate(_ctx.slide ? "Update Slide" : "Add New Slide")}</h3><button class="text-slate-400 hover:text-slate-700 p-1 rounded-full transition-colors">`);
        _push(ssrRenderComponent(unref(X), { size: 24 }, null, _parent));
        _push(`</button></div><form class="p-6 space-y-6 overflow-y-auto">`);
        _push(ssrRenderComponent(_component_AppImageUploader, {
          image: image.value,
          onImageChange: setImage
        }, null, _parent));
        _push(`<div><label for="title" class="block text-sm font-medium text-slate-700 mb-1">Title</label><input id="title"${ssrRenderAttr("value", title.value)} type="text" placeholder="e.g. Summer Collection" class="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow" required></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="order" class="block text-sm font-medium text-slate-700 mb-1">Order</label><input id="order"${ssrRenderAttr("value", order.value)} type="number" min="1" class="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow" required></div><div><label for="status" class="block text-sm font-medium text-slate-700 mb-1">Status</label><select id="status" class="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow bg-white"><option value="active"${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "active") : ssrLooseEqual(status.value, "active")) ? " selected" : ""}>Active</option><option value="inactive"${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "inactive") : ssrLooseEqual(status.value, "inactive")) ? " selected" : ""}>Inactive</option></select></div></div>`);
        if (error.value) {
          _push(`<p class="text-red-500 text-sm -mt-2">${ssrInterpolate(error.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form><div class="flex justify-end items-center p-5 border-t border-slate-200 mt-auto bg-slate-50 rounded-b-xl"><button type="button" class="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 font-semibold rounded-lg hover:bg-slate-100 mr-3 transition-colors"> Cancel </button><button type="submit" class="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm">${ssrInterpolate(_ctx.slide ? "Update Slide" : "Save Slide")}</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SlideFormModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDeleteModal",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    onClose: { type: Function },
    onConfirm: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-slate-900/70 z-50 flex justify-center items-center p-4 backdrop-blur-sm" }, _attrs))}><div class="bg-white rounded-xl shadow-2xl w-full max-w-md"><div class="p-6"><div class="sm:flex sm:items-start"><div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">`);
        _push(ssrRenderComponent(unref(TriangleAlert), {
          class: "h-6 w-6 text-orange-500",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</div><div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"><h3 class="text-lg font-semibold leading-6 text-slate-900" id="modal-title"> Are you sure? </h3><div class="mt-2"><p class="text-sm text-slate-500"> This action will permanently delete your slide. You won&#39;t be able to revert this. </p></div></div></div></div><div class="bg-slate-50 px-6 py-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 rounded-b-xl"><button type="button" class="w-full sm:w-auto justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100 transition-colors"> Cancel </button><button type="button" class="w-full sm:w-auto justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors"> Yes, Delete it </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppDeleteModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const itemsPerPage = 7;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "slide-manager",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { user } = useAuth();
    if (!user.value) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/login")), await __temp, __restore();
    }
    const { getSlidesByCategory, deleteSlide, notifications, removeNotification } = useSlides();
    const categoryTitles = {
      "mobile-slideshow": "Mobile Slide Show",
      "mobile-advertising": "Mobile Advertising",
      "website-slideshow": "Website Slide Show",
      "website-advertising": "Website Advertising"
    };
    const activeCategory = ref("mobile-slideshow");
    const slides = computed(() => getSlidesByCategory(activeCategory.value));
    const isSidebarOpen = ref(false);
    const isFormModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);
    const selectedSlide = ref(null);
    const slideToDelete = ref(null);
    const currentPage = ref(1);
    const totalItems = computed(() => slides.value.length);
    const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));
    const paginatedSlides = computed(
      () => slides.value.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
    );
    const handleCategoryChange = (category) => {
      activeCategory.value = category;
      currentPage.value = 1;
      if ((void 0).innerWidth < 1024) {
        isSidebarOpen.value = false;
      }
    };
    const setIsSidebarOpen = (isOpen) => {
      isSidebarOpen.value = isOpen;
    };
    const handleEditClick = (slide) => {
      selectedSlide.value = slide;
      isFormModalOpen.value = true;
    };
    const handleDeleteClick = (slide) => {
      slideToDelete.value = slide;
      isDeleteModalOpen.value = true;
    };
    const confirmDelete = () => {
      if (slideToDelete.value) {
        deleteSlide(slideToDelete.value.id);
        isDeleteModalOpen.value = false;
        slideToDelete.value = null;
      }
    };
    const setCurrentPage = (page) => {
      currentPage.value = page;
    };
    const setIsFormModalOpen = (isOpen) => {
      isFormModalOpen.value = isOpen;
    };
    const setIsDeleteModalOpen = (isOpen) => {
      isDeleteModalOpen.value = isOpen;
    };
    useHead({
      title: "Slide Manager - Vireak Buntham",
      meta: [
        { name: "description", content: "Manage your slides and advertising content with ease" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSidebar = _sfc_main$2$1;
      const _component_AppHeader = _sfc_main$1$1;
      const _component_SlideTable = _sfc_main$5;
      const _component_AppPagination = _sfc_main$4;
      const _component_AppNotification = _sfc_main$6;
      const _component_SlideFormModal = _sfc_main$2;
      const _component_AppDeleteModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppSidebar, {
        activeCategory: activeCategory.value,
        onCategoryChange: handleCategoryChange,
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
        title: categoryTitles[activeCategory.value],
        onMenuClick: () => setIsSidebarOpen(true)
      }, null, _parent));
      _push(`<main class="flex-1 p-4 sm:p-6 lg:p-8"><div class="bg-white p-4 sm:p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5"><div class="flex justify-between items-center pb-4 border-b border-slate-200 mb-6"><h3 class="text-lg sm:text-xl font-semibold text-slate-700">All Slides</h3><button class="flex items-center bg-orange-500 text-white px-3 sm:px-4 py-2.5 rounded-lg hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md">`);
      _push(ssrRenderComponent(unref(Plus), {
        size: 20,
        class: "sm:mr-2"
      }, null, _parent));
      _push(`<span class="font-semibold hidden sm:inline">Add New</span></button></div>`);
      if (slides.value.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SlideTable, {
          slides: paginatedSlides.value,
          onEdit: handleEditClick,
          onDelete: handleDeleteClick
        }, null, _parent));
        _push(ssrRenderComponent(_component_AppPagination, {
          currentPage: currentPage.value,
          totalPages: totalPages.value,
          totalItems: totalItems.value,
          itemsPerPage,
          onPageChange: setCurrentPage
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="text-center py-20 border-2 border-dashed border-slate-200 rounded-lg">`);
        _push(ssrRenderComponent(unref(Image), {
          size: 64,
          class: "mx-auto text-slate-300"
        }, null, _parent));
        _push(`<h4 class="mt-4 text-lg font-semibold text-slate-600">No Slides Yet</h4><p class="text-slate-400 text-sm mt-1">Click &quot;Add New&quot; to create your first slide.</p></div>`);
      }
      _push(`</div></main></div><div class="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md"><!--[-->`);
      ssrRenderList(unref(notifications), (notif) => {
        _push(ssrRenderComponent(_component_AppNotification, {
          key: notif.id,
          message: notif.message,
          type: notif.type,
          onClose: () => unref(removeNotification)(notif.id)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (isFormModalOpen.value) {
        _push(ssrRenderComponent(_component_SlideFormModal, {
          isOpen: isFormModalOpen.value,
          onClose: () => setIsFormModalOpen(false),
          slide: selectedSlide.value,
          category: activeCategory.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isDeleteModalOpen.value && slideToDelete.value) {
        _push(ssrRenderComponent(_component_AppDeleteModal, {
          isOpen: isDeleteModalOpen.value,
          onClose: () => setIsDeleteModalOpen(false),
          onConfirm: confirmDelete
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/slide-manager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=slide-manager-zw47SAav.mjs.map
