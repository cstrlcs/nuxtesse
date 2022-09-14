<script lang="ts" setup>
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'

const user = useUserStore()
const router = useRouter()

const onLogout = () => {
  user.logout()
  router.replace('/login')
}
</script>

<template>
  <FAB @click="onLogout">
    <ArrowLeftOnRectangleIcon />
  </FAB>
</template>
