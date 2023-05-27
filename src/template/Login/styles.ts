import styled from "styled-components";
import { Button} from "@mui/material";

export const Title = styled.h1`
    margin: 30px  auto 30px auto;
    min-width: 20px;
    margin-bottom: 10px;
    font-weight: 400;

    ${(props)=>props.theme.font.Lobster}
    text-align:center;
    color: ${(props)=> props.theme.colors.quartenary.main};
    font-size: 55px;

    @media only screen and (max-width: 1000px) {
        margin-top: 6px;
        margin-bottom: 6px;
    }
`;

export const Container = styled.div`
    width: 450px;
    height: 640px;
    margin: auto;

    background-image:url('/assets/img/vida.jpg') ;
    background-position: center;
    border: 1.5px solid ${(props)=>props.theme.colors.quartenary.main};
    border-radius: 26px;
    margin-bottom: 12px;
    padding: 6px;
    @media(max-width:465px) {
        width: 100%;

}
`;

export const SubTitle = styled.h2`
    margin-bottom: 28px;
    font-family:'Poppins_BoldI';
    font-size: 14px;
    text-align: center;
    text-shadow: 0.5px 0.5px 0.5px black, 0.5px 0.5px 0.5px  black;
    color: ${(props)=>props.theme.colors.terciary.light};
`;

export const Label =styled.label`
    margin-top: 2px;
    margin-bottom: -4px;
    font-size: 12px;
    font-family:'Poppins_LightI';
    letter-spacing: 1px;
    color: ${(props)=>props.theme.colors.primary.light};
    text-shadow: 0.5px 0.5px 0.5px black, 0.5px 0.5px 0.5px  ${(props)=>props.theme.colors.primary.light};
`;

export const ContainerInput = styled.div`
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 0px 20px;
    border-radius: 22px;
    border: 1.5px solid ${(props)=>props.theme.colors.secundary.main};
    ${(props)=>props.theme.backGround.default};
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 28px 0px;
`;
export const ContainerButton =styled.div`
    height: 28px;
    width: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: auto;
    border-radius: 26px;
    background-color: ${(props)=>props.theme.colors.quartenary.dark};
    border: 2px solid ${(props)=>props.theme.colors.quartenary.main};
`;
export const ButtonForm = styled(Button)`
    color: black;
`;


export const  Text = styled.p`
    ${(props)=>props.theme.font.H1}
    letter-spacing: 1px;
    font-size: 10px;

    @media(max-width:355px) {

    font-size: 20px;

    }
    color: ${(props)=>props.theme.colors.terciary.light};
    text-shadow: 1.5px 1.5px 1.5px ${(props)=>props.theme.colors.quartenary.dark}, 10.5px 10.5px 10.5px  ${(props)=>props.theme.colors.quartenary.dark};
`;