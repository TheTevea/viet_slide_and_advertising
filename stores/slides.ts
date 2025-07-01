import { defineStore } from 'pinia'
import type { Slide, SlideCategory, Notification } from '~/types'
import { initialSlides } from '~/data/mockData'

export const useSlidesStore = defineStore('slides', () => {
  const slides = ref<Slide[]>([])
  const notifications = ref<Notification[]>([])

  // Initialize slides from localStorage on client side
  onMounted(() => {
    if (process.client) {
      try {
        const localData = localStorage.getItem('slides')
        slides.value = localData ? JSON.parse(localData) : initialSlides
      } catch (error) {
        console.error('Could not parse slides from localStorage', error)
        slides.value = initialSlides
      }
    }
  })

  // Watch slides changes and update localStorage
  watch(slides, (newSlides) => {
    if (process.client) {
      localStorage.setItem('slides', JSON.stringify(newSlides))
    }
  }, { deep: true })

  const getSlidesByCategory = (category: SlideCategory): Slide[] => {
    return slides.value.filter(slide => slide.category === category).sort((a, b) => a.order - b.order)
  }

  const addSlide = (slide: Omit<Slide, 'id' | 'updatedAt' | 'lastUpdatedBy'>) => {
    const authStore = useAuthStore()
    const newSlide: Slide = {
      ...slide,
      id: Date.now().toString(),
      updatedAt: new Date().toISOString(),
      lastUpdatedBy: authStore.user?.name || 'Unknown'
    }
    slides.value.push(newSlide)
    addNotification('Slide added successfully!')
  }

  const updateSlide = (updatedSlide: Slide) => {
    const authStore = useAuthStore()
    const index = slides.value.findIndex(slide => slide.id === updatedSlide.id)
    if (index !== -1) {
      slides.value[index] = {
        ...updatedSlide,
        updatedAt: new Date().toISOString(),
        lastUpdatedBy: authStore.user?.name || 'Unknown'
      }
      addNotification('Slide updated successfully!')
    }
  }

  const deleteSlide = (id: string) => {
    const index = slides.value.findIndex(slide => slide.id === id)
    if (index !== -1) {
      slides.value.splice(index, 1)
      addNotification('Slide deleted successfully!')
    }
  }

  const addNotification = (message: string, type: 'success' | 'error' = 'success') => {
    const newNotification = { id: Date.now(), message, type }
    notifications.value.push(newNotification)
    setTimeout(() => {
      removeNotification(newNotification.id)
    }, 5000)
  }

  const removeNotification = (id: number) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }

  return {
    slides: readonly(slides),
    notifications: readonly(notifications),
    getSlidesByCategory,
    addSlide,
    updateSlide,
    deleteSlide,
    addNotification,
    removeNotification
  }
})