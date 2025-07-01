import { ref, computed, watch } from 'vue'
import type { Slide, SlideCategory, Notification } from '~/types'
import { initialSlides } from '~/utils/mockData'

// Global state for slides and notifications
const slides = ref<Slide[]>([])
const notifications = ref<Notification[]>([])

// Initialize slides from localStorage on client side
export const useSlides = () => {
  // Initialize from localStorage if available
  if (process.client && slides.value.length === 0) {
    try {
      const localData = localStorage.getItem('slides')
      slides.value = localData ? JSON.parse(localData) : initialSlides
    } catch (error) {
      console.error('Could not parse slides from localStorage', error)
      slides.value = initialSlides
    }
  }

  // Watch for changes and persist to localStorage
  if (process.client) {
    watch(
      slides,
      (newSlides) => {
        localStorage.setItem('slides', JSON.stringify(newSlides))
      },
      { deep: true }
    )
  }

  const getSlidesByCategory = (category: SlideCategory): Slide[] => {
    return slides.value
      .filter(slide => slide.category === category)
      .sort((a, b) => a.order - b.order)
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
      addNotification('Slide updated successfully!', 'success')
    }
  }

  const deleteSlide = (id: string) => {
    slides.value = slides.value.filter(slide => slide.id !== id)
    addNotification('Slide deleted successfully!', 'success')
  }

  const addNotification = (message: string, type: 'success' | 'error' = 'success') => {
    const newNotification: Notification = { id: Date.now(), message, type }
    notifications.value.push(newNotification)
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      removeNotification(newNotification.id)
    }, 5000)
  }

  const removeNotification = (id: number) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
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
}