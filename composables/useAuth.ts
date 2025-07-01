import { ref, watch } from 'vue'
import type { User } from '~/types'

// Mock user database - In a real app, this would be a backend API.
const MOCK_USERS: { [id: string]: User } = {
  '1': { id: '1', name: 'Moni Roy', email: 'admin@vireakbuntham.com' }
}

const MOCK_PASSWORDS: { [email: string]: string } = {
  'admin@vireakbuntham.com': 'password123'
}

// Global state for authentication
const user = ref<User | null>(null)

// Initialize user from localStorage on client side
export const useAuth = () => {
  // Initialize from localStorage if available
  if (process.client && !user.value) {
    try {
      const storedUser = localStorage.getItem('authUser')
      if (storedUser) {
        user.value = JSON.parse(storedUser)
      }
    } catch (error) {
      console.error('Could not parse user from localStorage', error)
    }
  }

  // Watch for changes and persist to localStorage
  if (process.client) {
    watch(
      user,
      (newUser) => {
        if (newUser) {
          localStorage.setItem('authUser', JSON.stringify(newUser))
        } else {
          localStorage.removeItem('authUser')
        }
      },
      { deep: true }
    )
  }

  const login = async (email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = Object.values(MOCK_USERS).find(u => u.email === email)
        if (foundUser && MOCK_PASSWORDS[email] === password) {
          user.value = foundUser
          resolve()
        } else {
          reject(new Error('Invalid email or password.'))
        }
      }, 500)
    })
  }

  const register = async (name: string, email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.values(MOCK_USERS).some(u => u.email === email)) {
          reject(new Error('An account with this email already exists.'))
          return
        }
        const id = Date.now().toString()
        const newUser: User = { id, name, email }
        MOCK_USERS[id] = newUser
        MOCK_PASSWORDS[email] = password
        user.value = newUser
        resolve()
      }, 500)
    })
  }

  const logout = () => {
    user.value = null
  }

  const updateProfile = async (name: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.value) {
          const updatedUser = { ...user.value, name }
          MOCK_USERS[user.value.id] = updatedUser
          user.value = updatedUser
          resolve()
        } else {
          reject(new Error('User not found.'))
        }
      }, 500)
    })
  }

  const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.value && MOCK_PASSWORDS[user.value.email] === currentPassword) {
          MOCK_PASSWORDS[user.value.email] = newPassword
          resolve()
        } else {
          reject(new Error('Incorrect current password.'))
        }
      }, 500)
    })
  }

  return {
    user: readonly(user),
    login,
    register,
    logout,
    updateProfile,
    changePassword
  }
}