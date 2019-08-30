import { IWallet } from '@/typings'
import { generateWallet } from 'minterjs-wallet'
import {
  Module,
  VuexModule,
  Mutation,
  Action
} from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'data'
})
class DataStore extends VuexModule {
  public count: number = 1
  public wallets: IWallet[] = []
  public error: Error | null = null

  // COUNT

  @Mutation
  public commitCount(count: number) {
    this.count = count
  }

  // WALLETS

  @Mutation
  public commitWallets(wallets: IWallet[]) {
    this.wallets = wallets
  }

  @Mutation
  public commitWalletsPush(wallet: IWallet) {
    this.wallets.push(wallet)
  }

  @Mutation
  public commitWalletsRemove(index: number) {
    this.wallets.splice(index, 1)
  }

  @Mutation
  public commitWalletsReset() {
    this.wallets = []
  }

  // Error

  @Mutation
  public commitError(e: Error | null) {
    this.error = e
  }

  // Generate wallet

  @Action
  public async dispatchGenerate() {
    const wallet = generateWallet()

    return this.commitWalletsPush(wallet)
  }
}

export default DataStore
