import * as S from "./styles"
import { List, ListItem, ListItemText } from "@mui/material";
import React from "react"
import Link from "next/link";

interface NavModalComponentProps {
    isOpen2:boolean;
}
const ButtonModal: React.FC<NavModalComponentProps> = ({
    isOpen2,
}) => {
    const navigationLinks = [
        { name: "Vírus", href: "#" },
        { name: "Bactérias", href: "#" },
        { name: "Fungos", href: "#" },
        { name: "Parasitas", href: "#" }
    ]
if(!isOpen2) return <>
</>
return (
        <S.Container>
            <List>
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
export default ButtonModal;