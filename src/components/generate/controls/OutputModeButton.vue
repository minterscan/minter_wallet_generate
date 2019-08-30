<template>
  <div>
    <button 
      title="Import"
      v-if="uiStore.isOutputModeManual"
      class="button is-outlined is-info" 
      @click="setOutputModeExport()"
      :disabled="isControlsDisabled"
    >
      <span class="icon is-small">
        <i class="fas fa-table"></i>
      </span>
    </button>
    <button
      title="Manual"
      v-if="uiStore.isOutputModeExport"
      class="button is-outlined is-info" 
      @click="setOutputModeManual()"
      :disabled="isControlsDisabled"
    >
      <span class="icon is-small">
        <i class="fas fa-eye"></i>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import Getters from '@/mixins/Getters'
import { EOutputMode } from '@/typings'
import { Component, Mixins } from 'vue-property-decorator'

@Component({
  name: 'OutputModeButton'
})
export default class OutputModeButton extends Mixins(Getters) {
  protected setOutputModeManual() {
    this.uiStore.commitOutputMode(EOutputMode.Manual)
  }

  protected setOutputModeExport() {
    this.uiStore.commitOutputMode(EOutputMode.Export)
  }
}
</script>
