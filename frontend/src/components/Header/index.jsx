import React from 'react'
import Logo from '../logo'
import { MdAccountCircle} from 'react-icons/md'
import {
    BuscarInputContainer,
    Container,
    Input,
    MenuRight,
    RowContainer,
    Wrapper

} from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <RowContainer>
                <div>
                    <Link to="/home">
                        <Logo />
                    </Link>
                </div>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
            </RowContainer> 
            <RowContainer>
                <MenuRight href='#' ><MdAccountCircle size="40" /></MenuRight>
            </RowContainer> 
        </Container>
    </Wrapper>
    )
}

export { Header }