import { defineStore } from 'pinia'
import { StorageSerializers, useStorage } from '@vueuse/core'

import type { User } from '~/types'

export default defineStore('user', () => {
  const data = useStorage<User | null>('data', null, undefined, { serializer: StorageSerializers.object })

  const login = (name: string) => {
    data.value = {
      name,
      loginDate: new Date(),
    }
  }

  return { data, login }
})

