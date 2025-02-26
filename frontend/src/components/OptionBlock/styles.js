import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    height: 400px;

    display: flex;
    background: #f5f5f5;
    border-radius: 20px;

    &:hover{
            box-shadow: -0em 0 2em #0066CC;
    }
`
export const Column = styled.div`
    width: 100%;
    align-self: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    color: black;
`  
export const TitleHighlight = styled.h3`
    color: #0099FF
`

export const ItemContainer = styled.div`
`