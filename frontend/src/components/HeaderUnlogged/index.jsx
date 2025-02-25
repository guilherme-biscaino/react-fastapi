import React from 'react'
import { MdLogin } from 'react-icons/md'
import Logo from '../logo'
import {
    Container,
    LoginLink,
    RowContainer,
    Wrapper,
    ItemContainer

} from './styles'


const Header = ({rightticon, name, ...rest}) => {
  return (
    <Wrapper>
        <Container>
            <Logo />
            <RowContainer>
                <LoginLink>
                    Logar
                    <ItemContainer><MdLogin /></ItemContainer>
                    
                </LoginLink>
            </RowContainer> 
        </Container>
    </Wrapper>
    )
}

export { Header }