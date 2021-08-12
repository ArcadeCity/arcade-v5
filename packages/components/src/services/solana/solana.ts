import { Connection, PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { getOwnedTokenAccounts, parseTokenAccountData } from 'lib/solana/token'
import { display } from 'lib'

export class Solana {
  connection: Connection
  publicKey: PublicKey

  async setup() {
    this.connection = new Connection(
      'https://solana-api.projectserum.com',
      'recent' // confirmed
    )

    display({
      name: 'Solana',
      preview: 'Connected to Solana',
      value: {
        connection: this.connection,
      },
    })
  }

  setPublicKey(address: string) {
    this.publicKey = new PublicKey(address)
  }

  async getTokenAccounts() {
    display({
      name: 'getTokenAccounts',
      preview: `Getting token accounts for ${this.publicKey.toString()}`,
    })
    const accounts = await getOwnedTokenAccounts(
      this.connection,
      this.publicKey
    )
    const accts = accounts
      .map(({ publicKey, accountInfo }: any) => {
        // setInitialAccountInfo(connection, publicKey, accountInfo)
        return { publicKey, parsed: parseTokenAccountData(accountInfo.data) }
      })
      .sort((account1: any, account2: any) =>
        account1.parsed.mint
          .toBase58()
          .localeCompare(account2.parsed.mint.toBase58())
      )
    display({
      name: 'Solana',
      preview: `Parsed ${accts.length} token accounts`,
      value: { accts, rawAccounts: accounts },
    })
    return accts
  }

  async getTransactionHistory() {
    display({
      name: 'Solana',
      preview: `Trying to getTransactionHistory`,
    })

    const transactions =
      await this.connection.getConfirmedSignaturesForAddress2(
        new PublicKey('C23dJMwco2h3Q3MLscuH2ST8hHajHty5ZQQ5ZXW86w3p'),
        {
          limit: 25,
        }
      )

    display({
      name: 'Solana',
      preview: `transactions ${transactions && transactions.length}`,
      value: {
        transactions,
        publicKey: this.publicKey,
      },
    })
    return []
  }

  async transferTokens(sourcePublicKey, mint) {
    display({
      name: 'Solana',
      preview: `sourcePublicKey ${sourcePublicKey.toString()}`,
      value: { sourcePublicKey, mint },
    })
  }

  async findAssociatedTokenAddress(walletAddress, tokenMintAddress) {
    console.log([
      walletAddress.toString(),
      TOKEN_PROGRAM_ID.toString(),
      tokenMintAddress.toString(),
    ])
    return (
      await PublicKey.findProgramAddress(
        [
          walletAddress.toBuffer(),
          TOKEN_PROGRAM_ID.toBuffer(),
          tokenMintAddress.toBuffer(),
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
      )
    )[0]
  }
}

// export const TOKEN_PROGRAM_ID = new PublicKey(
//   'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
// )

export const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
)

// const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')
