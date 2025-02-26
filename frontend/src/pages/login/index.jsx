import { Container,Title, TitleHighlight, TextContent, Wrapper, Column, Row, LoginText} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/HeaderUnlogged';
import { Input } from '../../components/Input';
import { MdLock, MdBadge } from 'react-icons/md'
import { Link } from 'react-router-dom';

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
                                Acesse sua conta
                            </LoginText>
                        </TitleHighlight>
                    </Row>
                    <Row>
                     <Input placeholder="Cpf" lefticon={<MdBadge color='black' />}/>
                     </Row>
                     <Row>
                     <Input placeholder="Senha" lefticon={<MdLock color='black' />}/>
                     </Row>
                     <Row>
                        <Link to="/home">
                        <Button title="Entrar" variant="secondary"></Button>
                        </Link>
                     </Row>
                     <Row>
                        <TextContent>
                            esqueci minha senha
                        </TextContent>
                        <TextContent>
                            Ainda não sou cliente
                        </TextContent>
                     </Row>
                </Wrapper>
            </Column>
        </Container>
</>
)
}

export { LoginPage }