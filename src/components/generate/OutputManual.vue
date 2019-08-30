<template>
  <div class="output-manual" v-if="uiStore.isOutputModeManual">
    <b-loading
      :is-full-page="false" 
      :can-cancel="false"
      :active.sync="uiStore.isLoading" 
    />
    <div 
      :key="i"
      class="row"
      v-for="(wallet, i) in dataStore.wallets"
    >
      <div class="item count">{{ i + 1 }}</div>
      <p class="item address">
        <a :href="`${config.explorerBaseUrl}/address/${wallet.getAddressString()}`" target="_blank">
          {{ wallet.getAddressString() }}
        </a>
      </p>
      <p class="item mnemonic">
        <input
          disabled
          class="input is-expanded"
          :value="wallet.getMnemonic()"
        />
      </p>
      <p class="item controls">
        <clipboard-button @click="copyAddress(i)" :text="wallet.getAddressString()" icon="key" />
        <clipboard-button @click="copyAddress(i)" :text="wallet.getMnemonic()" icon="sign-in-alt" />
        <button class="button is-outlined is-danger" @click="removeWallet(i)">
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Getters from '@/mixins/Getters'
import { Component, Mixins } from 'vue-property-decorator'
import ClipboardButton from '@/components/generate/controls/ClipboardButton.vue'

@Component({
  name: 'OutputManual',
  components: { ClipboardButton }
})
export default class OutputManual extends Mixins(Getters) {
  protected copyAddress() {
    this.$toast.open({
      message: 'Address copied!',
      type: 'is-success'
    })
  }

  protected removeWallet(index: number) {
    this.$dialog.confirm({
        title: 'Reset data',
        message: `Are you sure you want to remove this wallet?`,
        confirmText: 'Remove',
        type: 'is-danger',
        hasIcon: true,
        icon: 'exclamation-triangle',
        iconPack: 'fa',
        onConfirm: () => {
          this.dataStore.commitWalletsRemove(index)
          this.$toast.open({
            message: 'Wallet removed!',
            type: 'is-success'
          })
        }
    })
  }
}
</script>