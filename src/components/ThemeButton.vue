<script lang="ts" setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const color = useColorMode()

const iconComponent = computed(() => color.value === 'dark' ? MoonIcon : SunIcon)

const onToggleTheme = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <FAB @click="onToggleTheme">
    <component :is="iconComponent" />
  </FAB>
</template>
