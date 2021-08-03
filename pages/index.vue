<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment Number</button>
    <h1>Number: {{ num }}</h1>
    <child :string-from-parent="'noob'" @submit-form="handleSubmit"></child>
    <p v-if="name">{{ name }}</p>
    <p v-if="lastname">{{ lastname }}</p>
    <p>Fullname: {{ fullname }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Watch, mixins, namespace } from 'nuxt-property-decorator'
import UserProperties from '@/interfaces/UserProperties'
import Api from '~/mixins/api'

const UserVuex = namespace('users')

@Component
export default class Index extends mixins(Api) implements UserProperties {
  message: string = 'First Message'
  num: number = 0
  name: string = ''
  lastname: string = ''
  @UserVuex.State
  user!: UserProperties

  @UserVuex.Getter
  fullname!: string

  @UserVuex.Action
  public changeUser!: (data: UserProperties) => void

  async mounted() {
    this.changeUser({ name: 'hello', lastname: 'last' })
    const res = await this.fetchApi()
    if (res) console.log(res.data)
  }

  handleSubmit({ name, lastname }: UserProperties) {
    this.name = name
    this.lastname = lastname
  }

  @Watch('name')
  logName() {
    console.log(this.name)
  }

  increment(): void {
    this.num++
  }
}
</script>
