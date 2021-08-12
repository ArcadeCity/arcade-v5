import React from 'react'
import { Balances as BalancesType } from 'stores/wallet-store'
import { BalanceDetail } from '../balance-detail'

interface Props {
  balances: BalancesType
}

export const Balances = ({ balances }: Props) => {
  return (
    <>
      <BalanceDetail balanceObj={balances.ARCD} />
      <BalanceDetail balanceObj={balances.BTC} />
      <BalanceDetail balanceObj={balances.USDC} />
    </>
  )
}
