import styled from "styled-components";

export const LanguageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 2px 0;
`

export const LanguageButtonWrapper = styled.div<{isActive:boolean}>`
    color: ${({isActive}) => isActive ? "white" : "black"};
    background-color: ${({isActive}) => isActive ? "#17589f" : "white"};
    padding: 4px 2px;
    margin-right: 10px;
`