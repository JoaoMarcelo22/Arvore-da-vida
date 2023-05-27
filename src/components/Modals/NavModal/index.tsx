import * as S from "./styles"
import { List, ListItem, ListItemText } from "@mui/material";
import React from "react"
import Link from "next/link";

interface NavModalComponentProps {
    isOpen:boolean;
}
const NavModal: React.FC<NavModalComponentProps> = ({
    isOpen,
}) => {
    const navigationLinks = [
        { name: "Início", href: "/" },
        { name: "Séries", href: "../Series" },
        { name: "Filmes", href: "../Movies" },
        { name: "Animes", href: "../Animes" },
        { name: "Login", href: "../Login" },
        { name: "Buscar", href: "#" }
    ]
if(!isOpen) return <>
</>
return (
        <S.Container key='1'>
            <List component="button" aria-label="mailbox folders">
                {navigationLinks.map((item) => (
                    <Link href={item.href}>
                        <ListItem >
                        <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </S.Container>
    );
};
export default NavModal;