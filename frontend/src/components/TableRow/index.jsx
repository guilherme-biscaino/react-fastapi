import React from 'react'

const TableRow = ({ transaction }) => {
  return (
    <tr>
        <td>{transaction.from_account}</td>
        <td>{transaction.transaction_type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.to_account !== transaction.from_account ? transaction.to_account : null}</td>
        <td>{transaction.id}</td>
    </tr>
  )
}

export { TableRow }
