import React from 'react'
import { Header } from '../../components/Header'
import { ActionBlock as OptionBlock } from '../../components/OptionBlock'
import { Column, Container, Row } from './styles'
import { MdAdd, MdRemove, MdSwapHoriz, MdGroupAdd, MdGroupRemove, MdMenuBook } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
    <Header></Header>
    <Container>
      <Column>
      <Row>
        <Link to="/ops/deposit" style={{ textDecoration: "none" }}>
          <OptionBlock lefticon={<MdAdd color="0099FF" size="30"/>} title={"Deposito"} description={"Adicione saldo a sua conta"}/>
        </Link>
      </Row>
      <Row>
        <Link to="/ops/create" style={{ textDecoration: "none" }}>
          <OptionBlock lefticon={<MdGroupAdd color="0099FF" size="30"/>} title={"Criar conta"} description={"Criar uma nova conta"}/>
        </Link>
      </Row>
      </Column>
      <Column>
      <Row>
        <Link to="/ops/saque" style={{ textDecoration: "none" }}>
          <OptionBlock lefticon={<MdRemove color="0099FF" size="30"/>} title={"Saque"} description={"Retirar saldo da sua conta"}/>
        </Link>
      </Row>
      <Row>
        <Link to="/ops/delete" style={{ textDecoration: "none" }}>
          <OptionBlock lefticon={<MdGroupRemove color="0099FF" size="30"/>} title={"Excluir conta"} description={"Excluir um de suas contas"}/>
        </Link>
      </Row>
      </Column>
      <Column>
      <Row>
        <Link to="/ops/transaction" style={ { textDecoration: "none" } }>
          <OptionBlock lefticon={<MdSwapHoriz color="0099FF" size="30"/>} title={"Transferencia"} description={"Fazer transferencia entre contas"}/>
          </Link>
      </Row>
       <Row>
        <Link to="/ops/historic" style={{ textDecoration: "none" }}>
          <OptionBlock lefticon={<MdMenuBook color="0099FF" size="30"/>} title={"Historico"} description={"Exibir extrato"}/>
        </Link>

      </Row>
      </Column>
    </Container>
  </>
  )
}

export { Home }