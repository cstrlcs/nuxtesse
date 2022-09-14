<script lang="ts" setup>
const router = useRouter()
const user = useUserStore()

const name = $ref('')

const onSubmit = () => {
  user.login(name)
  router.push('/')
}
</script>

<template>
  <form @submit.prevent>
    <div>
      <label for="name" class="text-sm font-medium text-gray-700 dark:text-white">
        Your name
      </label>
      <input
        v-model="name"
        name="name"
        type="text"
        required
        class="w-full rounded-md px-3 py-2 border border-gray-300 dark:border-none dark:bg-gray-800 dark:text-white"
      >
      <small class="text-gray-400 dark:text-gray-300">Don't worry, this is not a real request.</small>
    </div>

    <Button
      :disabled="!name"
      @click="onSubmit"
    >
      Go
    </Button>
  </form>
</template>
