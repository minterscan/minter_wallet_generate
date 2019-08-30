<template>
  <div class="controls is-size-6">
    <wallets-count-input v-if="dataStore.wallets.length === 0" />
    <template v-else>
      <span class="has-text-weight-bold is-size-5">{{ dataStore.wallets.length }}</span>
      <span>wallets generated</span>
      <output-mode-button />
      <data-add-button />
    </template>
  </div>
</template>

<script lang="ts">
import Getters from '@/mixins/Getters'
import { Component, Mixins, Watch } from 'vue-property-decorator'
import DataAddButton from '@/components/generate/controls/DataAddButton.vue'
import OutputModeButton from '@/components/generate/controls/OutputModeButton.vue'
import WalletsCountInput from '@/components/generate/controls/WalletsCountInput.vue'

@Component({
  name: 'Controls',
  components: {
    DataAddButton,
    OutputModeButton,
    WalletsCountInput
  }
})
export default class SendContols extends Mixins(Getters) {}
</script>