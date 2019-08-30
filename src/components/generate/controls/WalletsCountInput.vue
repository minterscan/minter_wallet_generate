<template>
  <b-field>
    <b-numberinput 
      min="1"
      type="is-light"
      controls-position="compact"
      v-model="count" 
    />
  </b-field>
</template>

<script lang="ts">
import Getters from '@/mixins/Getters'
import { Component, Mixins } from 'vue-property-decorator'

@Component({
  name: 'WalletsCountInput'
})
export default class WalletsCountInput extends Mixins(Getters) {
  get count(): number {
    return this.dataStore.count
  }

  set count(count: number) {
    this.dataStore.commitCount(count)
  }
}
</script>