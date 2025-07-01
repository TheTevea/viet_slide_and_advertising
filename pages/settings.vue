<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div class="max-w-2xl w-full">
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
          <p class="text-slate-600">Manage your account preferences and settings.</p>
        </div>

        <div class="space-y-6">
          <div class="border-b border-slate-200 pb-6">
            <h2 class="text-xl font-semibold text-slate-800 mb-4">Profile Information</h2>
            <div v-if="user" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <p class="text-slate-900">{{ user.name }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <p class="text-slate-900">{{ user.email }}</p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <h2 class="text-xl font-semibold text-slate-800 mb-4">Actions</h2>
            <div class="flex gap-4">
              <button
                @click="handleBackToManager"
                class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Back to Slide Manager
              </button>
              <button
                @click="handleLogout"
                class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, logout } = useAuth()

// Auth guard
if (!user.value) {
  navigateTo('/login')
}

const handleBackToManager = () => {
  navigateTo('/slide-manager')
}

const handleLogout = () => {
  logout()
  navigateTo('/login')
}

// SEO
useHead({
  title: 'Settings - Vireak Buntham Slide Manager',
  meta: [
    { name: 'description', content: 'Account settings and preferences' }
  ]
})
</script>