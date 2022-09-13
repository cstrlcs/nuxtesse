<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <Card>
    <p class="text-gray-900 dark:text-white">
      Hi, how you're doing?
    </p>
    <div class="w-full my-4 border-t border-gray-300 dark:border-stone-800" />
    <ThemeButton />
  </Card>
</template>
