<template>
  <button 
    @click="resetData()"
    class="button is-outlined is-danger" 
    :disabled="isControlsDisabled"
  >
    <span class="icon is-small">
      <i class="fas fa-ban"></i>
    </span>
    <span>Reset</span>
  </button>
</template>

<script lang="ts">
import Getters from '@/mixins/Getters'
import { EOutputMode } from '@/typings'
import { Component, Mixins } from 'vue-property-decorator'

@Component({
  name: 'DataResetButton'
})
export default class DataResetButton extends Mixins(Getters) {
  protected resetData() {
    this.$dialog.confirm({
        title: 'Reset data',
        message: `Are you sure you want to remove all data?`,
        confirmText: 'Reset',
        type: 'is-danger',
        hasIcon: true,
        icon: 'exclamation-triangle',
        iconPack: 'fa',
        onConfirm: () => {
          this.dataStore.commitWalletsReset()
          this.uiStore.commitOutputMode(EOutputMode.Manual)
          this.$toast.open('All data removed!')
        }
    })
  }
}
</script>
