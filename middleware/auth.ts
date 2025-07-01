export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth()
  
  // If user is not authenticated and trying to access protected routes
  if (!user.value) {
    // Redirect to home page (which will show login)
    return navigateTo('/')
  }
})