import { ref, computed, watch } from 'vue'
import type { Slide, SlideCategory, Notification } from '~/types'
import { initialSlides } from '~/constants/mockData'

// Global state
const slides = ref<Slide[]>([])
const notifications = ref<Notification[]>([])

export const useSlides = () => {
  // Initialize slides from localStorage on first use
  if (process.client && slides.value.length === 0) {
    try {
      const localData = localStorage.getItem('slides')
      slides.value = localData ? JSON.parse(localData) : initialSlides
    } catch (error) {
      console.error("Could not parse slides from localStorage", error)
      slides.value = initialSlides
    }
  }

  // Watch for slides changes and persist to localStorage
  if (process.client) {
    watch(slides, (newSlides) => {
      localStorage.setItem('slides', JSON.stringify(newSlides))
    }, { deep: true })
  }

  const getSlidesByCategory = (category: SlideCategory) => {
    return computed(() => 
      slides.value
        .filter(slide => slide.category === category)
        .sort((a, b) => a.order - b.order)
    )
  }

  const addSlide = (slideData: Omit<Slide, 'id' | 'updatedAt' | 'lastUpdatedBy'>) => {
    const newSlide: Slide = {
      ...slideData,
      id: new Date().getTime().toString(),
      updatedAt: new Date().toISOString(),
      lastUpdatedBy: 'Moni Roy', // As per spec
    }
    slides.value.push(newSlide)
    addNotification('Slide added successfully!', 'success')
  }

  const updateSlide = (updatedSlide: Slide) => {
    const index = slides.value.findIndex(slide => slide.id === updatedSlide.id)
    if (index !== -1) {
      slides.value[index] = {
        ...updatedSlide,
        updatedAt: new Date().toISOString(),
        lastUpdatedBy: 'Moni Roy'
      }
    }
    addNotification('Slide updated successfully!', 'success')
  }

  const deleteSlide = (id: string) => {
    const index = slides.value.findIndex(slide => slide.id === id)
    if (index !== -1) {
      slides.value.splice(index, 1)
    }
    addNotification('Slide deleted successfully!', 'success')
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
    slides: computed(() => slides.value),
    notifications: computed(() => notifications.value),
    getSlidesByCategory,
    addSlide,
    updateSlide,
    deleteSlide,
    addNotification,
    removeNotification
  }
}