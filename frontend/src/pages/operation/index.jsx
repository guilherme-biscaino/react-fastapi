import React from 'react'
import { Header } from '../../components/Header'
import { ActionBlock } from '../../components/ActionBlock'

const OperationPage = ( { operation}) => {
  return (
    <>
    <Header />
    <ActionBlock title={operation} isTransaction={ true ? operation === 'transação' : null}/>
    </>
  )
}

export { OperationPage }
