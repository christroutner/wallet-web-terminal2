/*
  This file routes commands to the appropriate handler.
*/

// Local libraries
import WalletInfo from './commands/wallet-info.js'

class CommandRouter {
  constructor () {
    this.walletInfo = new WalletInfo()
  }

  routeCommand (inObj) {
    try {
      const { cmdStr, args = {}, wallet } = inObj

      if (cmdStr === 'wallet_info') {
        return this.walletInfo.getWalletInfo({wallet})
      }

      if(cmdStr === 'wallet_import_mnemonic') {
        return `args: ${JSON.stringify(args, null, 2)}`
      }

      // Default value
      return 'Command not found'
    } catch (err) {
      console.error('Error in routeCommand()')
      throw err
    }
  }
}

export default CommandRouter
