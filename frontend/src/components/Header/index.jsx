import React, { useState } from 'react'
import Logo from '../logo'
import { MdAccountCircle} from 'react-icons/md'
import {
    BuscarInputContainer,
    Container,
    Input,
    MenuRight,
    RowContainer,
    SelectStyled,
    Wrapper

} from './styles'
import { Link } from 'react-router-dom'

const accounts = JSON.parse(localStorage.getItem('userAccounts')) || []

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

            </RowContainer> 
            <RowContainer>
                <SelectStyled>
                     <option value="">Selecione a conta</option>
                                  {accounts.map((account, index) => (
                                    <>
                                    <option value={account.id}>{account.id}  -- R${account.balance}</option>
                                    </>
                                  ))}
                </SelectStyled>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <MenuRight href='#' ><MdAccountCircle size="40" /></MenuRight>
            </RowContainer> 
        </Container>
    </Wrapper>
    )
}

export { Header }