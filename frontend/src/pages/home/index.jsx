import React from 'react'
import { Header } from '../../components/Header'
import { ActionBlock } from '../../components/ActionBlock'
import { Column, Container, Row } from './styles'
import { MdAdd, MdRemove, MdSwapHoriz, MdGroupAdd, MdGroupRemove, MdMenuBook } from 'react-icons/md'

const Home = () => {
  return (
    <>
    <Header></Header>
    <Container>
      <Column>
      <Row>
          <ActionBlock lefticon={<MdAdd color="0099FF" size="30"/>} title={"Deposito"} description={"Adicione saldo a sua conta"}/>
      </Row>
      <Row>
          <ActionBlock lefticon={<MdGroupAdd color="0099FF" size="30"/>} title={"Criar conta"} description={"Criar uma nova conta"}/>
      </Row>
      </Column>
      <Column>
      <Row>
          <ActionBlock lefticon={<MdRemove color="0099FF" size="30"/>} title={"Saque"} description={"Retirar saldo da sua conta"}/>
      </Row>
      <Row>
          <ActionBlock lefticon={<MdGroupRemove color="0099FF" size="30"/>} title={"Excluir conta"} description={"Excluir um de suas contas"}/>
      </Row>
      </Column>
      <Column>
      <Row>
          <ActionBlock lefticon={<MdSwapHoriz color="0099FF" size="30"/>} title={"Transferencia"} description={"Fazer transferencia entre contas"}/>
      </Row>
       <Row>
          <ActionBlock lefticon={<MdMenuBook color="0099FF" size="30"/>} title={"Historico"} description={"Exibir extrato"}/>
      </Row>
      </Column>
    </Container>
  </>
  )
}

export { Home }