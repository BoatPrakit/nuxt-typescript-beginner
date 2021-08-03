import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import UserProperties from '~/interfaces/UserProperties'

@Module({
  stateFactory: true,
  namespaced: true,
})
export default class Users extends VuexModule {
  user: UserProperties = {
    name: 'anonymous',
    lastname: 'user',
  }

  get fullname(): string {
    return this.user.name + ' ' + this.user.lastname
  }

  @Mutation
  public updateUser(data: UserProperties) {
    this.user = { ...this.user, ...data }
  }

  @Action({ commit: 'updateUser', rawError: true })
  public changeUser(data: UserProperties) {
    return data
  }
}
