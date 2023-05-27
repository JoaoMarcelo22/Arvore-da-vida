import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 52px;
    left: 4px;

    width: 2rem;
    background-color: black;
.MuiList-root{
    width: 100px;
    padding: 0px;

    border: 2px solid ${(props) => props.theme.colors.quartenary.light};
    border-radius: 5px;
    color: ${(props) => props.theme.colors.quartenary.light};
    ${(props) => props.theme.backGround.default};
}
.MuiListItem-root{
    padding: 6px;
    border-bottom: 1px solid;
    border-radius: 2px;
    text-align: center;
}
`