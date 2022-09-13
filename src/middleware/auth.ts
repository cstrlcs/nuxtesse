import { useUserStore } from '~/stores'

export default defineNuxtRouteMiddleware(() => {
  const user = useUserStore()

  if (!user.data)
    return navigateTo('/login')

  return true
})
