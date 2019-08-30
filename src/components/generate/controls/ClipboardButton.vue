<template>
  <span 
    @click="copy(text)" 
    v-if="isClipboardSupported" 
    class="button is-outlined is-info"
  >
    <span class="icon is-small">
      <i :class="`fas fa-${icon}`"></i>
    </span>
  </span>
</template>

<script lang="ts">
import * as clipboard from 'clipbrd'
import Getters from '@/mixins/Getters'
import { Component, Prop, Mixins } from 'vue-property-decorator'

@Component({
  name: 'ClipboardButton'
})
export default class ClipboardButton extends Mixins(Getters) {
  @Prop({ required: true }) protected text!: string
  @Prop({ required: true, default: 'copy' }) protected icon!: string

  get isClipboardSupported(): boolean {
    return clipboard.isSupported()
  }

  protected copy(str: string) {
    const isCopied = clipboard.copy(str)
    if (isCopied) {
      this.$toast.open({
        message: 'Copied!',
        type: 'is-success'
      })
    }
  }
}
</script>


