import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 47px%;
    
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin: 0 auto;

`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #010B13;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-content: center;
`

export const BuscarInputContainer = styled.div`
height: 30px;
background: #012847;
width: 175px;
    padding: 2px 5px;
    margin: 0px 12px;
    display: flex;
    align-item: center;
    border-radius: 10px;
    justify-content: center;
`

export const Menu = styled.a`
    font-style: normal;
    font-size: 15px;
    line-height: 25px;
    color: #FFF;
    margin-right: 8px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-style: normal;
    font-size: 15px;
    line-height: 25px;
    color: #FFF;
    margin-top: 5px;
    margin-right: 12px;
    text-decoration: none;


    &:hover{
        color: blue;
    }
`

export const UserPicture = styled.image`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFF;

`

export const Input = styled.input`
    background: transparent;
    flex:1;
    padding-left: 15px;
    border-color: transparent;
    color: #FFFFFF;
    border-radius: 10px;
`