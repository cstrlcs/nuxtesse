<script lang="ts" setup>
definePageMeta({
  layout: 'login',
})

const onSubmit = (e: string) => {}
</script>

<template>
  <Card>
    <LoginForm @submit="onSubmit" />
    <div class="w-full my-4 border-t border-gray-300 dark:border-stone-800" />
    <ThemeButton />
  </Card>
</template>
