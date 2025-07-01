
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
      'AppDeleteModal': typeof import("../components/AppDeleteModal.vue")['default']
    'AppErrorMessage': typeof import("../components/AppErrorMessage.vue")['default']
    'AppHeader': typeof import("../components/AppHeader.vue")['default']
    'AppImageUploader': typeof import("../components/AppImageUploader.vue")['default']
    'AppLoader': typeof import("../components/AppLoader.vue")['default']
    'AppNotification': typeof import("../components/AppNotification.vue")['default']
    'AppPagination': typeof import("../components/AppPagination.vue")['default']
    'AppSidebar': typeof import("../components/AppSidebar.vue")['default']
    'AppStoryDisplay': typeof import("../components/AppStoryDisplay.vue")['default']
    'AppStoryInput': typeof import("../components/AppStoryInput.vue")['default']
    'SlideFormModal': typeof import("../components/SlideFormModal.vue")['default']
    'SlideTable': typeof import("../components/SlideTable.vue")['default']
    'StoryHeader': typeof import("../components/StoryHeader.vue")['default']
    'AuthAppLoginForm': typeof import("../components/auth/AppLoginForm.vue")['default']
    'AuthAppRegisterForm': typeof import("../components/auth/AppRegisterForm.vue")['default']
    'SettingsAppAppearanceSettings': typeof import("../components/settings/AppAppearanceSettings.vue")['default']
    'SettingsAppDataSettings': typeof import("../components/settings/AppDataSettings.vue")['default']
    'SettingsAppPasswordSettings': typeof import("../components/settings/AppPasswordSettings.vue")['default']
    'SettingsAppProfileSettings': typeof import("../components/settings/AppProfileSettings.vue")['default']
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
      'LazyAppDeleteModal': LazyComponent<typeof import("../components/AppDeleteModal.vue")['default']>
    'LazyAppErrorMessage': LazyComponent<typeof import("../components/AppErrorMessage.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../components/AppHeader.vue")['default']>
    'LazyAppImageUploader': LazyComponent<typeof import("../components/AppImageUploader.vue")['default']>
    'LazyAppLoader': LazyComponent<typeof import("../components/AppLoader.vue")['default']>
    'LazyAppNotification': LazyComponent<typeof import("../components/AppNotification.vue")['default']>
    'LazyAppPagination': LazyComponent<typeof import("../components/AppPagination.vue")['default']>
    'LazyAppSidebar': LazyComponent<typeof import("../components/AppSidebar.vue")['default']>
    'LazyAppStoryDisplay': LazyComponent<typeof import("../components/AppStoryDisplay.vue")['default']>
    'LazyAppStoryInput': LazyComponent<typeof import("../components/AppStoryInput.vue")['default']>
    'LazySlideFormModal': LazyComponent<typeof import("../components/SlideFormModal.vue")['default']>
    'LazySlideTable': LazyComponent<typeof import("../components/SlideTable.vue")['default']>
    'LazyStoryHeader': LazyComponent<typeof import("../components/StoryHeader.vue")['default']>
    'LazyAuthAppLoginForm': LazyComponent<typeof import("../components/auth/AppLoginForm.vue")['default']>
    'LazyAuthAppRegisterForm': LazyComponent<typeof import("../components/auth/AppRegisterForm.vue")['default']>
    'LazySettingsAppAppearanceSettings': LazyComponent<typeof import("../components/settings/AppAppearanceSettings.vue")['default']>
    'LazySettingsAppDataSettings': LazyComponent<typeof import("../components/settings/AppDataSettings.vue")['default']>
    'LazySettingsAppPasswordSettings': LazyComponent<typeof import("../components/settings/AppPasswordSettings.vue")['default']>
    'LazySettingsAppProfileSettings': LazyComponent<typeof import("../components/settings/AppProfileSettings.vue")['default']>
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

export const AppDeleteModal: typeof import("../components/AppDeleteModal.vue")['default']
export const AppErrorMessage: typeof import("../components/AppErrorMessage.vue")['default']
export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const AppImageUploader: typeof import("../components/AppImageUploader.vue")['default']
export const AppLoader: typeof import("../components/AppLoader.vue")['default']
export const AppNotification: typeof import("../components/AppNotification.vue")['default']
export const AppPagination: typeof import("../components/AppPagination.vue")['default']
export const AppSidebar: typeof import("../components/AppSidebar.vue")['default']
export const AppStoryDisplay: typeof import("../components/AppStoryDisplay.vue")['default']
export const AppStoryInput: typeof import("../components/AppStoryInput.vue")['default']
export const SlideFormModal: typeof import("../components/SlideFormModal.vue")['default']
export const SlideTable: typeof import("../components/SlideTable.vue")['default']
export const StoryHeader: typeof import("../components/StoryHeader.vue")['default']
export const AuthAppLoginForm: typeof import("../components/auth/AppLoginForm.vue")['default']
export const AuthAppRegisterForm: typeof import("../components/auth/AppRegisterForm.vue")['default']
export const SettingsAppAppearanceSettings: typeof import("../components/settings/AppAppearanceSettings.vue")['default']
export const SettingsAppDataSettings: typeof import("../components/settings/AppDataSettings.vue")['default']
export const SettingsAppPasswordSettings: typeof import("../components/settings/AppPasswordSettings.vue")['default']
export const SettingsAppProfileSettings: typeof import("../components/settings/AppProfileSettings.vue")['default']
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
export const LazyAppDeleteModal: LazyComponent<typeof import("../components/AppDeleteModal.vue")['default']>
export const LazyAppErrorMessage: LazyComponent<typeof import("../components/AppErrorMessage.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyAppImageUploader: LazyComponent<typeof import("../components/AppImageUploader.vue")['default']>
export const LazyAppLoader: LazyComponent<typeof import("../components/AppLoader.vue")['default']>
export const LazyAppNotification: LazyComponent<typeof import("../components/AppNotification.vue")['default']>
export const LazyAppPagination: LazyComponent<typeof import("../components/AppPagination.vue")['default']>
export const LazyAppSidebar: LazyComponent<typeof import("../components/AppSidebar.vue")['default']>
export const LazyAppStoryDisplay: LazyComponent<typeof import("../components/AppStoryDisplay.vue")['default']>
export const LazyAppStoryInput: LazyComponent<typeof import("../components/AppStoryInput.vue")['default']>
export const LazySlideFormModal: LazyComponent<typeof import("../components/SlideFormModal.vue")['default']>
export const LazySlideTable: LazyComponent<typeof import("../components/SlideTable.vue")['default']>
export const LazyStoryHeader: LazyComponent<typeof import("../components/StoryHeader.vue")['default']>
export const LazyAuthAppLoginForm: LazyComponent<typeof import("../components/auth/AppLoginForm.vue")['default']>
export const LazyAuthAppRegisterForm: LazyComponent<typeof import("../components/auth/AppRegisterForm.vue")['default']>
export const LazySettingsAppAppearanceSettings: LazyComponent<typeof import("../components/settings/AppAppearanceSettings.vue")['default']>
export const LazySettingsAppDataSettings: LazyComponent<typeof import("../components/settings/AppDataSettings.vue")['default']>
export const LazySettingsAppPasswordSettings: LazyComponent<typeof import("../components/settings/AppPasswordSettings.vue")['default']>
export const LazySettingsAppProfileSettings: LazyComponent<typeof import("../components/settings/AppProfileSettings.vue")['default']>
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
