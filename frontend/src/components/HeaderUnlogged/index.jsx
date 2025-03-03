import React from 'react'
import Logo from '../logo'
import {
    Container,
    Wrapper
} from './styles'


const Header = ({rightticon, name, ...rest}) => {
  return (
    <Wrapper>
        <Container>
            <Logo />
        </Container>
    </Wrapper>
    )
}

export { Header }