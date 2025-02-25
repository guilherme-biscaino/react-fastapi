import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`


export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    lign-height: 44px;
    text-align: start;
    color: #fff;
`

export const TitleHighlight = styled.span`
    color: #0099FF
`

export const TextContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    lign-height: 22px;
    text-align: center;

    color: #000;

    &:hover{
        cursor: pointer;
        color: #0099FF;
    }
`

export const Wrapper = styled.div`
    align-content: end;
    max-width: 400px;
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: -0em 0 1em #CCC;
    padding: 0 20px;

`

export const Column = styled.div`
    flex: 1;
    justify-content: space-between;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

`   

export const LoginText = styled.p`
    font-size: 20px;
    font-weight: 200px;
`