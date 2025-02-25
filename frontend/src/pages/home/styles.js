import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    height: 100%;

    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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
