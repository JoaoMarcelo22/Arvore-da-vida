import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    height: auto;
    margin: auto;
    border: 2px solid ${(props)=> props.theme.colors.quartenary.main};
    box-shadow: 2px 2px 2px 1px ${(props)=> props.theme.colors.quartenary.dark};
    border-radius: 26px;
    padding: 16px;
    margin-bottom: 20px;
`
export const Text = styled.p`
    color: ${(props)=> props.theme.colors.primary.light};
`