import { EOutputMode } from '@/typings'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'ui'
})
class UiStore extends VuexModule {
  public isPayload: boolean = false
  public isLoading: boolean = false
  public outputMode: EOutputMode = EOutputMode.Manual

  get isOutputModeManual(): boolean {
    return this.outputMode === EOutputMode.Manual
  }

  get isOutputModeExport(): boolean {
    return this.outputMode === EOutputMode.Export
  }

  @Mutation
  public commitIsPayload(value: boolean) {
    this.isPayload = value
  }

  @Mutation
  public commitIsLoading(value: boolean) {
    this.isLoading = value
  }

  @Mutation
  public commitOutputMode(exportMode: EOutputMode) {
    this.outputMode = exportMode
  }
}

export default UiStore
