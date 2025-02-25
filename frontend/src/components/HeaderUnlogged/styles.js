import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 80%;
    height: 47px;
 
    display: flex;
    justify-content: end;
    margin: 0 auto;
`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: end;
    justify-content: end;
`

export const Wrapper = styled.div`
    background-color: #010B13;
    width: 100%;
    height: 47px;
    display: flex;
    justify-items: end;;
`
export const LoginLink = styled.a`
    text-decoration: none;
    color: #0099FF;
    font-size: 25px;
    &:hover{
        color: #FFF;
        cursor: pointer;
    }
`

export const ItemContainer = styled.a`
    margin-left: 10px;
`