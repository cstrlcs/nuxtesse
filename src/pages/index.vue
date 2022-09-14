<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})

const user = useUserStore()
</script>

<template>
  <Card v-if="user.data">
    <p class="text-gray-900 dark:text-white">
      Hi, {{ user.data.name }} how you're doing?
    </p>

    <p class="text-gray-900 dark:text-white">
      Last time you logged in was {{ new Date(user.data.loginDate).toLocaleDateString() }}.
    </p>
    <div class="w-full my-4 border-t border-gray-300 dark:border-stone-800" />

    <div class="flex gap-2">
      <LogoutButton />
      <ThemeButton />
    </div>
  </Card>
</template>
