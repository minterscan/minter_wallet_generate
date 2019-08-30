<template>
  <section class="section send">
    <div class="container">
      <controls />
      <template>
        <output-manual />
        <output-export />
      </template>
      <generate-button v-if="isDataEmpty" />
      <data-reset-button v-else />
    </div>
  </section>
</template>

<script lang="ts">
import { IWallet } from '@/typings'
import { AxiosResponse } from 'axios'
import Getters from '@/mixins/Getters'
import Controls from '@/components/generate/Controls.vue'
import OutputManual from '@/components/generate/OutputManual.vue'
import OutputExport from '@/components/generate/OutputExport.vue'
import { Component, Mixins, Watch } from 'vue-property-decorator'
import GenerateButton from '@/components/generate/controls/GenerateButton.vue'
import DataResetButton from '@/components/generate/controls/DataResetButton.vue'

@Component({
  name: 'Generate',
  components: {
    GenerateButton,
    Controls,
    OutputManual,
    OutputExport,
    DataResetButton
  }
})
export default class Generate extends Mixins(Getters) {}
</script>
