import React from 'react'
import Logo from '../logo'

import {
    BuscarInputContainer,
    Container,
    Input,
    MenuRight,
    RowContainer,
    Wrapper

} from './styles'

import { Button } from '../Button';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <RowContainer>
                <div>
                <Logo />
                </div>
                <img src={ Logo } alt='' />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
            </RowContainer> 
            <RowContainer>
                <MenuRight href='#' >Home</MenuRight>
                <Button title="Entrar">Entrar</Button>
                <Button title="Cadastrar">Cadastrar</Button>
            </RowContainer> 
        </Container>
    </Wrapper>
    )
}

export { Header }