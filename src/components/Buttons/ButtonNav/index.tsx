import { ButtonProps } from "@mui/material"
import React from "react"
import * as S from "./styles"

interface ButtonComponentProps extends ButtonProps{
    label: string;
}
const Button: React.FC<ButtonComponentProps>=({
    label,
}) => {
    return(
        <S.Container key='2'>
            <S.Titulo>{label}</S.Titulo>
        </S.Container>
    );
};
export default Button;