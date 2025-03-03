import React from 'react'
import { useLocation } from 'react-router-dom'

import {Container, Wrapper, Row, Textstyle, Table, TableHeader, TableBody} from './styles'
import { TableRow } from '../TableRow'


const HistoryBlock = () => {
  const location = useLocation();
  const { transactions } = location.state || {}

  return (
    <Container>
    <Wrapper>
        <Textstyle>
          Histórico de transações
        </Textstyle>
      <Row>
        <Table>
          <thead>
          <TableHeader>
            <th>número da conta</th>
            <th>tipo de transação</th>
            <th>valor</th>
            <th>conta final</th>
            <th>id da transação</th>
          </TableHeader>
          </thead>
          <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} transaction={transaction} />
          ))}
          </TableBody>
        </Table>
      </Row>
      </Wrapper>

    </Container>
  )
}

export { HistoryBlock }