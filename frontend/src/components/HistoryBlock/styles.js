import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 30%;
    height: 700px; 
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    text-align: start;
    align-items: center;
    justify-items: center;
    background-color: #FFF;
`
export const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    color: black;
`  

export const Row = styled.div`
    width: 100%;    
    display: flex;
    
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    color: black;
`  

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
`

export const TableHeader = styled.tr`
  color: #333;
  font-weight: bold;
`

export const TableBody = styled.tbody`
  & tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  & tr:hover {
    background-color: #f1f1f1;
  }
`

export const Textstyle = styled.p`
    margin-top: 5%;
    font-size: 20px;
    font-weight: 200px;
    color: #0099FF;
`