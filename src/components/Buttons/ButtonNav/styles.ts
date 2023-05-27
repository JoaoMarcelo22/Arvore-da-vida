import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto 2px;
    padding: 1px;
`
export const Titulo = styled.a`
    min-width: 99px;
    height: 50px;

    display: flex;
    justify-content: center;
    text-align: center;
    margin: auto;
    padding: 15px;

    font-size: 18px;
    font-weight: 900;
    letter-spacing: 1px;

    color: ${(props) => props.theme.colors.quartenary.main};
    background-color:rgb(14,198,201,0.1);
    
    cursor: pointer;
    text-decoration: none;
    border-radius: 8px;
    border: solid 2px ${(props) => props.theme.colors.quartenary.main};
    :hover{
        color:rgb(265,265,265,0.8);
        background-color:rgb(14,198,201,0.7);
        
        border:none;
    }
`