<script lang="ts" setup>
definePageMeta({
  layout: 'login',
})
</script>

<template>
  <Card>
    <LoginForm />
    <div class="w-full my-4 border-t border-gray-300 dark:border-stone-800" />
    <ThemeButton />
  </Card>
</template>
