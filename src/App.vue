<template>
  <div id="app">
    <logo />
    <generate />
  </div>
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue'
import Generate from '@/components/Generate.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Logo,
    Generate
  }
})
export default class App extends Vue {}
</script>
