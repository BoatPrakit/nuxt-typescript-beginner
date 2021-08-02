<template>
  <div>
    <h1>Data From Parent: {{ stringFromParent }}</h1>
    <form @submit.prevent="submitForm">
      <label>Name: </label>
      <input v-model="name" type="text" /><br />
      <label>LastName: </label>
      <input v-model="lastname" type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import UserProperties from '~/interfaces/UserProperties'

@Component
export default class Child extends Vue implements UserProperties {
  @Prop({ default: 'Hello' }) readonly stringFromParent!: string
  name: string = ''
  lastname: string = ''
  @Emit('submit-form')
  submitForm() {
    return {
      name: this.name,
      lastname: this.lastname,
    }
  }
}
</script>

<style scoped></style>
