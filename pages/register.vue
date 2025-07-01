<template>
  <AuthLayout title="Create Account">
    <RegisterForm @navigate-to-login="$router.push('/login')" />
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