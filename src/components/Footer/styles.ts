import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.329);
@media only screen and (max-width: 1000px) {
    display:flex;
    flex-direction:column;
    padding-top:5px;
    border-top:2px solid rgb(14,198,201,0.2);
}
`
export const ContainerSecundary = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    text-align :center;
    padding: 0px 30px;

@media only screen and (min-width: 1000px) {
    margin: auto 20px;
}
`
export const ContainerSocial = styled.div`
    display: flex;
`
export const ContainerText = styled.div`
    display:flex;
    margin:auto;
`
export const Text = styled.p`
    font-family: 'Poppins_MediumI';
    display: inline-block;
    margin:auto;
    margin-left:12px;
    font-size:12px;
    line-height:1.6;
    color:#10898b;
`
export const List = styled.ul`
    margin:auto 12px;
    padding:0px 0px 20px 0px;
@media only screen and (max-width: 1000px) {
    display:flex;
}
`
export const Li = styled.li`
    margin: auto;
    margin-left:15px;
    list-style-type: none;
`
export const Instagram = styled(InstagramIcon)`
    color: ${(props)=>props.theme.colors.primary.light};
`
export const Facebook = styled(FacebookIcon)`
    color: ${(props)=>props.theme.colors.primary.light};
`
export const Twitter = styled(TwitterIcon)`
    color: ${(props)=>props.theme.colors.primary.light};
`
export const Icone = styled.img`
    width:30px;
    height:30px;
    margin-left:10px;
    padding-top:6px; 
`

export const RedeSocial = styled.a`
`