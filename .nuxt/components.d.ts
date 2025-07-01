
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppHeader': typeof import("../components/AppHeader.vue")['default']
    'AppLoginForm': typeof import("../components/AppLoginForm.vue")['default']
    'AppNotification': typeof import("../components/AppNotification.vue")['default']
    'AppPagination': typeof import("../components/AppPagination.vue")['default']
    'AppRegisterForm': typeof import("../components/AppRegisterForm.vue")['default']
    'AppSidebar': typeof import("../components/AppSidebar.vue")['default']
    'AuthLayout': typeof import("../components/AuthLayout.vue")['default']
    'DeleteModal': typeof import("../components/DeleteModal")['default']
    'ErrorMessage': typeof import("../components/ErrorMessage")['default']
    'Header': typeof import("../components/Header")['default']
    'ImageUploader': typeof import("../components/ImageUploader")['default']
    'Loader': typeof import("../components/Loader")['default']
    'NavItem': typeof import("../components/NavItem.vue")['default']
    'Notification': typeof import("../components/Notification")['default']
    'Pagination': typeof import("../components/Pagination")['default']
    'SlideFormModal': typeof import("../components/SlideFormModal")['default']
    'SlideManagerPage': typeof import("../components/SlideManagerPage.vue")['default']
    'SlideTable': typeof import("../components/SlideTable")['default']
    'StoryDisplay': typeof import("../components/StoryDisplay")['default']
    'StoryInput': typeof import("../components/StoryInput")['default']
    'SubNavItem': typeof import("../components/SubNavItem.vue")['default']
    'AuthLoginForm': typeof import("../components/auth/LoginForm")['default']
    'AuthRegisterForm': typeof import("../components/auth/RegisterForm")['default']
    'FeaturesStoryGeneratorErrorMessage': typeof import("../components/features/story-generator/ErrorMessage")['default']
    'FeaturesStoryGeneratorHeader': typeof import("../components/features/story-generator/Header")['default']
    'FeaturesStoryGeneratorLoader': typeof import("../components/features/story-generator/Loader")['default']
    'FeaturesStoryGeneratorStoryDisplay': typeof import("../components/features/story-generator/StoryDisplay")['default']
    'FeaturesStoryGeneratorStoryInput': typeof import("../components/features/story-generator/StoryInput")['default']
    'LayoutHeader': typeof import("../components/layout/Header")['default']
    'LayoutSidebar': typeof import("../components/layout/Sidebar")['default']
    'PagePartialsLayoutHeader': typeof import("../components/page-partials/layout/Header")['default']
    'PagePartialsLayoutSidebar': typeof import("../components/page-partials/layout/Sidebar")['default']
    'PagePartialsSlideManagerSlideTable': typeof import("../components/page-partials/slide-manager/SlideTable")['default']
    'SettingsAppearanceSettings': typeof import("../components/settings/AppearanceSettings")['default']
    'SettingsDataSettings': typeof import("../components/settings/DataSettings")['default']
    'SettingsPasswordSettings': typeof import("../components/settings/PasswordSettings")['default']
    'SettingsProfileSettings': typeof import("../components/settings/ProfileSettings")['default']
    'SharedImageUploader': typeof import("../components/shared/ImageUploader")['default']
    'SlideManagerSlideTable': typeof import("../components/slide-manager/SlideTable")['default']
    'UiImageUploader': typeof import("../components/ui/ImageUploader")['default']
    'UiDialogDeleteModal': typeof import("../components/ui/dialog/DeleteModal")['default']
    'UiDialogSlideFormModal': typeof import("../components/ui/dialog/SlideFormModal")['default']
    'UiNotification': typeof import("../components/ui/notification/Notification")['default']
    'UiPagination': typeof import("../components/ui/pagination/Pagination")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppHeader': LazyComponent<typeof import("../components/AppHeader.vue")['default']>
    'LazyAppLoginForm': LazyComponent<typeof import("../components/AppLoginForm.vue")['default']>
    'LazyAppNotification': LazyComponent<typeof import("../components/AppNotification.vue")['default']>
    'LazyAppPagination': LazyComponent<typeof import("../components/AppPagination.vue")['default']>
    'LazyAppRegisterForm': LazyComponent<typeof import("../components/AppRegisterForm.vue")['default']>
    'LazyAppSidebar': LazyComponent<typeof import("../components/AppSidebar.vue")['default']>
    'LazyAuthLayout': LazyComponent<typeof import("../components/AuthLayout.vue")['default']>
    'LazyDeleteModal': LazyComponent<typeof import("../components/DeleteModal")['default']>
    'LazyErrorMessage': LazyComponent<typeof import("../components/ErrorMessage")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header")['default']>
    'LazyImageUploader': LazyComponent<typeof import("../components/ImageUploader")['default']>
    'LazyLoader': LazyComponent<typeof import("../components/Loader")['default']>
    'LazyNavItem': LazyComponent<typeof import("../components/NavItem.vue")['default']>
    'LazyNotification': LazyComponent<typeof import("../components/Notification")['default']>
    'LazyPagination': LazyComponent<typeof import("../components/Pagination")['default']>
    'LazySlideFormModal': LazyComponent<typeof import("../components/SlideFormModal")['default']>
    'LazySlideManagerPage': LazyComponent<typeof import("../components/SlideManagerPage.vue")['default']>
    'LazySlideTable': LazyComponent<typeof import("../components/SlideTable")['default']>
    'LazyStoryDisplay': LazyComponent<typeof import("../components/StoryDisplay")['default']>
    'LazyStoryInput': LazyComponent<typeof import("../components/StoryInput")['default']>
    'LazySubNavItem': LazyComponent<typeof import("../components/SubNavItem.vue")['default']>
    'LazyAuthLoginForm': LazyComponent<typeof import("../components/auth/LoginForm")['default']>
    'LazyAuthRegisterForm': LazyComponent<typeof import("../components/auth/RegisterForm")['default']>
    'LazyFeaturesStoryGeneratorErrorMessage': LazyComponent<typeof import("../components/features/story-generator/ErrorMessage")['default']>
    'LazyFeaturesStoryGeneratorHeader': LazyComponent<typeof import("../components/features/story-generator/Header")['default']>
    'LazyFeaturesStoryGeneratorLoader': LazyComponent<typeof import("../components/features/story-generator/Loader")['default']>
    'LazyFeaturesStoryGeneratorStoryDisplay': LazyComponent<typeof import("../components/features/story-generator/StoryDisplay")['default']>
    'LazyFeaturesStoryGeneratorStoryInput': LazyComponent<typeof import("../components/features/story-generator/StoryInput")['default']>
    'LazyLayoutHeader': LazyComponent<typeof import("../components/layout/Header")['default']>
    'LazyLayoutSidebar': LazyComponent<typeof import("../components/layout/Sidebar")['default']>
    'LazyPagePartialsLayoutHeader': LazyComponent<typeof import("../components/page-partials/layout/Header")['default']>
    'LazyPagePartialsLayoutSidebar': LazyComponent<typeof import("../components/page-partials/layout/Sidebar")['default']>
    'LazyPagePartialsSlideManagerSlideTable': LazyComponent<typeof import("../components/page-partials/slide-manager/SlideTable")['default']>
    'LazySettingsAppearanceSettings': LazyComponent<typeof import("../components/settings/AppearanceSettings")['default']>
    'LazySettingsDataSettings': LazyComponent<typeof import("../components/settings/DataSettings")['default']>
    'LazySettingsPasswordSettings': LazyComponent<typeof import("../components/settings/PasswordSettings")['default']>
    'LazySettingsProfileSettings': LazyComponent<typeof import("../components/settings/ProfileSettings")['default']>
    'LazySharedImageUploader': LazyComponent<typeof import("../components/shared/ImageUploader")['default']>
    'LazySlideManagerSlideTable': LazyComponent<typeof import("../components/slide-manager/SlideTable")['default']>
    'LazyUiImageUploader': LazyComponent<typeof import("../components/ui/ImageUploader")['default']>
    'LazyUiDialogDeleteModal': LazyComponent<typeof import("../components/ui/dialog/DeleteModal")['default']>
    'LazyUiDialogSlideFormModal': LazyComponent<typeof import("../components/ui/dialog/SlideFormModal")['default']>
    'LazyUiNotification': LazyComponent<typeof import("../components/ui/notification/Notification")['default']>
    'LazyUiPagination': LazyComponent<typeof import("../components/ui/pagination/Pagination")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const AppLoginForm: typeof import("../components/AppLoginForm.vue")['default']
export const AppNotification: typeof import("../components/AppNotification.vue")['default']
export const AppPagination: typeof import("../components/AppPagination.vue")['default']
export const AppRegisterForm: typeof import("../components/AppRegisterForm.vue")['default']
export const AppSidebar: typeof import("../components/AppSidebar.vue")['default']
export const AuthLayout: typeof import("../components/AuthLayout.vue")['default']
export const DeleteModal: typeof import("../components/DeleteModal")['default']
export const ErrorMessage: typeof import("../components/ErrorMessage")['default']
export const Header: typeof import("../components/Header")['default']
export const ImageUploader: typeof import("../components/ImageUploader")['default']
export const Loader: typeof import("../components/Loader")['default']
export const NavItem: typeof import("../components/NavItem.vue")['default']
export const Notification: typeof import("../components/Notification")['default']
export const Pagination: typeof import("../components/Pagination")['default']
export const SlideFormModal: typeof import("../components/SlideFormModal")['default']
export const SlideManagerPage: typeof import("../components/SlideManagerPage.vue")['default']
export const SlideTable: typeof import("../components/SlideTable")['default']
export const StoryDisplay: typeof import("../components/StoryDisplay")['default']
export const StoryInput: typeof import("../components/StoryInput")['default']
export const SubNavItem: typeof import("../components/SubNavItem.vue")['default']
export const AuthLoginForm: typeof import("../components/auth/LoginForm")['default']
export const AuthRegisterForm: typeof import("../components/auth/RegisterForm")['default']
export const FeaturesStoryGeneratorErrorMessage: typeof import("../components/features/story-generator/ErrorMessage")['default']
export const FeaturesStoryGeneratorHeader: typeof import("../components/features/story-generator/Header")['default']
export const FeaturesStoryGeneratorLoader: typeof import("../components/features/story-generator/Loader")['default']
export const FeaturesStoryGeneratorStoryDisplay: typeof import("../components/features/story-generator/StoryDisplay")['default']
export const FeaturesStoryGeneratorStoryInput: typeof import("../components/features/story-generator/StoryInput")['default']
export const LayoutHeader: typeof import("../components/layout/Header")['default']
export const LayoutSidebar: typeof import("../components/layout/Sidebar")['default']
export const PagePartialsLayoutHeader: typeof import("../components/page-partials/layout/Header")['default']
export const PagePartialsLayoutSidebar: typeof import("../components/page-partials/layout/Sidebar")['default']
export const PagePartialsSlideManagerSlideTable: typeof import("../components/page-partials/slide-manager/SlideTable")['default']
export const SettingsAppearanceSettings: typeof import("../components/settings/AppearanceSettings")['default']
export const SettingsDataSettings: typeof import("../components/settings/DataSettings")['default']
export const SettingsPasswordSettings: typeof import("../components/settings/PasswordSettings")['default']
export const SettingsProfileSettings: typeof import("../components/settings/ProfileSettings")['default']
export const SharedImageUploader: typeof import("../components/shared/ImageUploader")['default']
export const SlideManagerSlideTable: typeof import("../components/slide-manager/SlideTable")['default']
export const UiImageUploader: typeof import("../components/ui/ImageUploader")['default']
export const UiDialogDeleteModal: typeof import("../components/ui/dialog/DeleteModal")['default']
export const UiDialogSlideFormModal: typeof import("../components/ui/dialog/SlideFormModal")['default']
export const UiNotification: typeof import("../components/ui/notification/Notification")['default']
export const UiPagination: typeof import("../components/ui/pagination/Pagination")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyAppLoginForm: LazyComponent<typeof import("../components/AppLoginForm.vue")['default']>
export const LazyAppNotification: LazyComponent<typeof import("../components/AppNotification.vue")['default']>
export const LazyAppPagination: LazyComponent<typeof import("../components/AppPagination.vue")['default']>
export const LazyAppRegisterForm: LazyComponent<typeof import("../components/AppRegisterForm.vue")['default']>
export const LazyAppSidebar: LazyComponent<typeof import("../components/AppSidebar.vue")['default']>
export const LazyAuthLayout: LazyComponent<typeof import("../components/AuthLayout.vue")['default']>
export const LazyDeleteModal: LazyComponent<typeof import("../components/DeleteModal")['default']>
export const LazyErrorMessage: LazyComponent<typeof import("../components/ErrorMessage")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header")['default']>
export const LazyImageUploader: LazyComponent<typeof import("../components/ImageUploader")['default']>
export const LazyLoader: LazyComponent<typeof import("../components/Loader")['default']>
export const LazyNavItem: LazyComponent<typeof import("../components/NavItem.vue")['default']>
export const LazyNotification: LazyComponent<typeof import("../components/Notification")['default']>
export const LazyPagination: LazyComponent<typeof import("../components/Pagination")['default']>
export const LazySlideFormModal: LazyComponent<typeof import("../components/SlideFormModal")['default']>
export const LazySlideManagerPage: LazyComponent<typeof import("../components/SlideManagerPage.vue")['default']>
export const LazySlideTable: LazyComponent<typeof import("../components/SlideTable")['default']>
export const LazyStoryDisplay: LazyComponent<typeof import("../components/StoryDisplay")['default']>
export const LazyStoryInput: LazyComponent<typeof import("../components/StoryInput")['default']>
export const LazySubNavItem: LazyComponent<typeof import("../components/SubNavItem.vue")['default']>
export const LazyAuthLoginForm: LazyComponent<typeof import("../components/auth/LoginForm")['default']>
export const LazyAuthRegisterForm: LazyComponent<typeof import("../components/auth/RegisterForm")['default']>
export const LazyFeaturesStoryGeneratorErrorMessage: LazyComponent<typeof import("../components/features/story-generator/ErrorMessage")['default']>
export const LazyFeaturesStoryGeneratorHeader: LazyComponent<typeof import("../components/features/story-generator/Header")['default']>
export const LazyFeaturesStoryGeneratorLoader: LazyComponent<typeof import("../components/features/story-generator/Loader")['default']>
export const LazyFeaturesStoryGeneratorStoryDisplay: LazyComponent<typeof import("../components/features/story-generator/StoryDisplay")['default']>
export const LazyFeaturesStoryGeneratorStoryInput: LazyComponent<typeof import("../components/features/story-generator/StoryInput")['default']>
export const LazyLayoutHeader: LazyComponent<typeof import("../components/layout/Header")['default']>
export const LazyLayoutSidebar: LazyComponent<typeof import("../components/layout/Sidebar")['default']>
export const LazyPagePartialsLayoutHeader: LazyComponent<typeof import("../components/page-partials/layout/Header")['default']>
export const LazyPagePartialsLayoutSidebar: LazyComponent<typeof import("../components/page-partials/layout/Sidebar")['default']>
export const LazyPagePartialsSlideManagerSlideTable: LazyComponent<typeof import("../components/page-partials/slide-manager/SlideTable")['default']>
export const LazySettingsAppearanceSettings: LazyComponent<typeof import("../components/settings/AppearanceSettings")['default']>
export const LazySettingsDataSettings: LazyComponent<typeof import("../components/settings/DataSettings")['default']>
export const LazySettingsPasswordSettings: LazyComponent<typeof import("../components/settings/PasswordSettings")['default']>
export const LazySettingsProfileSettings: LazyComponent<typeof import("../components/settings/ProfileSettings")['default']>
export const LazySharedImageUploader: LazyComponent<typeof import("../components/shared/ImageUploader")['default']>
export const LazySlideManagerSlideTable: LazyComponent<typeof import("../components/slide-manager/SlideTable")['default']>
export const LazyUiImageUploader: LazyComponent<typeof import("../components/ui/ImageUploader")['default']>
export const LazyUiDialogDeleteModal: LazyComponent<typeof import("../components/ui/dialog/DeleteModal")['default']>
export const LazyUiDialogSlideFormModal: LazyComponent<typeof import("../components/ui/dialog/SlideFormModal")['default']>
export const LazyUiNotification: LazyComponent<typeof import("../components/ui/notification/Notification")['default']>
export const LazyUiPagination: LazyComponent<typeof import("../components/ui/pagination/Pagination")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
