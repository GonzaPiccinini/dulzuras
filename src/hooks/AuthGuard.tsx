import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config'

export const useAuthGuard = () => {
  let isAuthenticated

  onAuthStateChanged(auth, (user) => {
    if (user) {
      isAuthenticated = true
    } else {
      isAuthenticated = false
    }
  })
  
  return {
    isAuthenticated,
  }
}
