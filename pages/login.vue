<template>
  <AuthLayout title="Sign In">
    <LoginForm @navigate-to-register="$router.push('/register')" />
  </AuthLayout>
</template>

<script setup lang="ts">
// Redirect to home if already authenticated
const { user } = useAuth()

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>