import { Container,Title, TitleHighlight, TextContent, Wrapper, Column, Row, LoginText} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/HeaderUnlogged';
import { Input } from '../../components/Input';
import { MdLock, MdBadge, MdPerson, MdCalendarMonth} from 'react-icons/md'

import React from 'react'

const LoginPage = () => {
  return (
  <>    
  <Header />
        <Container>
            <Column>
                <Title>
                    <TitleHighlight>
                        titulo
                        <br />
                    </TitleHighlight>
                    chamativo
                </Title>
            </Column>
            <Column />
            <Column />
            <Column>
                <Wrapper>
                    <Row>
                        <TitleHighlight>
                            <LoginText>
                                Faça seu cadastro
                            </LoginText>
                        </TitleHighlight>
                    </Row>
                    <Row>
                        <Input placeholder="Nome" lefticon={<MdPerson color='black' />}></Input>
                    </Row>
                    <Row>
                     <Input placeholder="Cpf" lefticon={<MdBadge color='black' />}/>
                     </Row>
                     <Row>
                     <Input placeholder="Idade" lefticon={<MdCalendarMonth color='black' />}/>
                     </Row>
                     <Row>
                     <Input placeholder="Senha" lefticon={<MdLock color='black' />}/>
                     </Row>
                     <Row>
                        <Button title="Entrar" variant="secondary"></Button>
                     </Row>
                     <Row>
                        <TextContent>
                            esqueci minha senha
                        </TextContent>
                        <TextContent>
                            criar usuario
                        </TextContent>
                     </Row>
                </Wrapper>
            </Column>
        </Container>
</>
)
}

export { LoginPage } 