import styled from "styled-components";

export const LoginImg = styled.img`
    height: 30px;
@media only screen and (max-width: 1000px) {
    margin: 10px;
}`

export const Container =styled.div`
    position: absolute;
    top: -12px;
    right: 45px;
    width: 5rem;
    z-index: 7;

    background-color: black;
    .MuiList-root{
        width: 120px;
        padding: 0px;

        border: 2px solid ${(props) => props.theme.colors.quartenary.main};
        ${(props) => props.theme.backGround.default};
        color: ${(props) => props.theme.colors.quartenary.main};
        border-radius: 5px;
    }
    .MuiListItem-root{
        padding: 6px;
        border-bottom: 1px solid;
        border-radius: 2px;
        text-align: center;
    }
`