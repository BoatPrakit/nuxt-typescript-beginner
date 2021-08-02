<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment Number</button>
    <h1>Number: {{ num }}</h1>
    <child :string-from-parent="'noob'" @submit-form="handleSubmit"></child>
    <p v-if="name">{{ name }}</p>
    <p v-if="lastname">{{ lastname }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import UserProperties from '@/interfaces/UserProperties'
@Component
export default class Index extends Vue implements UserProperties {
  message: string = 'First Message'
  num: number = 0
  name: string = ''
  lastname: string = ''

  handleSubmit({ name, lastname }: UserProperties) {
    console.log(name, lastname)
    this.name = name
    this.lastname = lastname
  }

  increment(): void {
    this.num++
  }
}
</script>
