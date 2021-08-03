import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Api extends Vue {
  async fetchApi() {
    try {
      const res = await this.$axios(
        'https://jsonplaceholder.typicode.com/users'
      )
      return res
    } catch (error) {
      console.log(error)
    }
  }
}
