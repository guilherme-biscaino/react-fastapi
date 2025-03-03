import React from 'react'
import { Header } from '../../components/Header'
import { HistoryBlock } from '../../components/HistoryBlock'

const HistoryPage = ( { transactions }) => {
  return (
    <>
    <Header />
    <HistoryBlock transactions={ transactions }/>
    </>
  )
}

export { HistoryPage }
