import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #0066cc;
    border-radius: 10px;
    position: relative;
    border: 1px solid #012847;


    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;    

    &:hover{
        background: #005B8C;
        cursor: pointer;
    }

    ${({variant}) => variant !== 'primary' && css`
        min-width: 167px;
        height: 33px;

        background: #0066cc;

        &::after {
            position: absolute;
            border: 1px solid rgb(0, 77, 155);
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 10px;
        }
    `}
`