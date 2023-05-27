import React from "react"
import * as S from "./styles"

export default function Footer() {
    return (
        <S.Container>
            <S.ContainerSecundary>
                <S.Text>Página para apaixonados e amantes da cultura Zumbi. Temos conteúdos que abrangem diversos temas, como vírus, bactérias, fungos e diferentes tipos de fim do mundo. Salve-se! <br /><br />
                © Copyright Todos os direitos reservados a Jubileu 2023.</S.Text>
            </S.ContainerSecundary>
            <S.ContainerSecundary>
                <S.ContainerText>
                    <S.Text>Acesse as nossas redes sociais:</S.Text>
                    <S.List>
                        <S.Li>
                                <S.RedeSocial href="https://twitter.com/Quarenten4" target="_blank">
                            <S.ContainerSocial>
                                    <S.Text>Twitter</S.Text>
                                    <S.Twitter/>
                            </S.ContainerSocial>
                                </S.RedeSocial>
                                <S.RedeSocial href="https://www.instagram.com/" target="_blank">
                            <S.ContainerSocial>
                                    <S.Text>Instagram</S.Text>
                                    <S.Instagram/>
                            </S.ContainerSocial>
                                </S.RedeSocial>
                                <S.RedeSocial href="https://www.facebook.com/profile.php?id=100089966322427" target="_blank">
                            <S.ContainerSocial>
                                    <S.Text>facebook</S.Text>
                                    <S.Facebook/>
                            </S.ContainerSocial>
                                </S.RedeSocial>
                        </S.Li>
                    </S.List>
                </S.ContainerText>
            </S.ContainerSecundary>
        </S.Container>
    )
}