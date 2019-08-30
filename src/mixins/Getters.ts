import config from '@/config'
import store from '@/store/store'
import UiStore from '@/store/ui'
import DataStore from '@/store/data'
import { getModule } from 'vuex-module-decorators'
import { Vue, Component } from 'vue-property-decorator'

const ADDRESS_REGEX = /^Mx([A-Fa-f0-9]{40})$/gi
const dataStore = getModule(DataStore, store)
const uiStore = getModule(UiStore, store)

@Component
export default class Getters extends Vue {
  get config() {
    return config
  }

  get dataStore() {
    return dataStore
  }

  get uiStore() {
    return uiStore
  }

  get isDataEmpty(): boolean {
    return this.dataStore.wallets.length === 0
  }

  get isControlsDisabled(): boolean {
    return this.uiStore.isLoading
  }

  protected isInvalidAddress(address: string): boolean {
    return !address.match(ADDRESS_REGEX)
  }

  protected isInvalidValue(value: number | string): boolean {
    return isNaN(+value) || value === ''
  }
}
