import React from 'react'
import { Input } from '../Input'
import { MdBadge, MdPassword, MdPayments } from 'react-icons/md'
import { Button } from '../Button'

import {Container, Wrapper, Row, Textstyle} from './styles'


const ActionBlock = ( { title, isTransaction=false } ) => {
  return (
    <Container>
    <Wrapper>
        <Row>
          <Textstyle>
             {isTransaction ? "Realize a sua" : "Realize o seu" } {title}
          </Textstyle>
        </Row>

        <Row>
          <Input placeholder="Id da conta" lefticon={<MdBadge color='black' />}/>
        </Row>

        <Row>
          <Input placeholder="Amount" type="number" lefticon={<MdPayments color='black' />}/>
        </Row>

        {
          isTransaction ? <Row><Input placeholder="Id da outra conta" lefticon={<MdBadge color='black' />}/></Row> : null
        }

        <Row>
          <Input placeholder="Senha" type="password" lefticon={<MdPassword color='black' />}/>
        </Row>
        
        <Row>
          <Button title="Efetuar"/>
        </Row>
      </Wrapper>

    </Container>
  )
}

export { ActionBlock }