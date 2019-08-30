<template>
  <div class="submit">
    <div class="field">
      <button 
        @click="generate()"
        class="button is-link is-outlined" 
        :disabled="dataStore.wallets.length > 0 || !dataStore.count || uiStore.isLoading"
      >
        <span class="icon is-small">
          <i class="fas fa-dice"></i>
        </span>
        <span>Generate</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import config from '@/config'
import Getters from '@/mixins/Getters'
import { AxiosError, AxiosResponse } from 'axios'
import { Component, Mixins } from 'vue-property-decorator'

@Component({
  name: 'GenerateButton'
})
export default class GenerateButton extends Mixins(Getters) {
  protected generate() {
    try {
      this.uiStore.commitIsLoading(true)

      setTimeout(async () => {
        const arr = Array.from(Array(this.dataStore.count).keys())
        const promises = arr.map(this.dataStore.dispatchGenerate)

        await Promise.all(promises)

        this.uiStore.commitIsLoading(false)
      }, 100)
    } catch (e) {
      this.dataStore.commitError(e)
      this.uiStore.commitIsLoading(false)
    }
  }
}
</script>