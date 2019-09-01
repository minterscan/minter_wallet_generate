<template>
  <div class="output-export" v-if="uiStore.isOutputModeExport">
    <b-loading
      :is-full-page="false"
      :can-cancel="false"
      :active.sync="uiStore.isLoading"
    />
    <div>
      <div class="notification">
        <div class="howto">
          <p>1. Copy text to clipboard, paste it to a new file and save with <b>.csv</b> extension.</p>
          <p>2. Open it with Excel or Google Spreadsheets.</p>
        </div>
        <clipboard-button @click="copyCSV(i)" :text="csv" icon="copy" />
      </div>
      <p>
        <textarea 
          rows="5"
          class="textarea" 
          disabled
          :value="csv" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { IWallet } from '@/typings'
import Getters from '@/mixins/Getters'
import { Component, Mixins, Watch } from 'vue-property-decorator'
import ClipboardButton from '@/components/generate/controls/ClipboardButton.vue'

@Component({
  name: 'OutputImport',
  components: { ClipboardButton }
})
export default class OutputImport extends Mixins(Getters) {
  get csv(): string {
    return this.getCSV()
  }

  protected getCSV(): string {
    let csv = `Address,Seed\n`

    const rows = this.dataStore.wallets.forEach((wallet: IWallet) => {
      csv += this.getCsvRow(wallet)
    })

    return csv
  }

  protected getCsvRow(wallet: IWallet): string {
    const address = wallet.getAddressString()
    const mnemonic = wallet.getMnemonic()

    return `${address},${mnemonic}\n`
  }

  protected copyCSV() {
    this.$toast.open({
      message: 'CSV copied!',
      type: 'is-success'
    })
  }
}
</script>