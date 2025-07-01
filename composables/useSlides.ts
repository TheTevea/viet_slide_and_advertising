import type { Slide, SlideCategory, Notification } from '~/types'
import { initialSlides } from '~/constants/mockData'

export const useSlides = () => {
  const slides = useState<Slide[]>('slides.data', () => {
    if (process.client) {
      try {
        const localData = localStorage.getItem('slides')
        return localData ? JSON.parse(localData) : initialSlides
      } catch (error) {
        console.error("Could not parse slides from localStorage", error)
        return initialSlides
      }
    }
    return initialSlides
  })

  const notifications = useState<Notification[]>('slides.notifications', () => [])

  // Watch slides changes and sync to localStorage
  watch(slides, (newSlides) => {
    if (process.client) {
      localStorage.setItem('slides', JSON.stringify(newSlides))
    }
  }, { deep: true })

  const getSlidesByCategory = (category: SlideCategory) => {
    return slides.value.filter(slide => slide.category === category).sort((a, b) => a.order - b.order)
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
        lastUpdatedBy: 'Moni Roy', // As per spec
      }
      addNotification('Slide updated successfully!', 'success')
    }
  }

  const deleteSlide = (id: string) => {
    const index = slides.value.findIndex(slide => slide.id === id)
    if (index !== -1) {
      slides.value.splice(index, 1)
      addNotification('Slide deleted successfully!', 'success')
    }
  }

  const addNotification = (message: string, type: 'success' | 'error') => {
    const notification: Notification = {
      id: Date.now(),
      message,
      type,
    }
    notifications.value.push(notification)
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      removeNotification(notification.id)
    }, 5000)
  }

  const removeNotification = (id: number) => {
    const index = notifications.value.findIndex(notif => notif.id === id)
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
}