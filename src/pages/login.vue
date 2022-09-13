<script lang="ts" setup>
import { useUserStore } from '~/stores'

definePageMeta({
  layout: 'login',
})

const router = useRouter()
const user = useUserStore()

const onSubmit = (e: string) => {
  user.login(e)
  router.push('/')
}
</script>

<template>
  <Card>
    <LoginForm @submit="onSubmit" />
    <div class="w-full my-4 border-t border-gray-300 dark:border-stone-800" />
    <ThemeButton />
  </Card>
</template>
