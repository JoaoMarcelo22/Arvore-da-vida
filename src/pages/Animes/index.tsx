import Head from "next/head";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Content from "@/components/Content";

export default function Anime() {
    return (<>
        <Head>
            <title>Pandêmico - Animes</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="assets/img/pandemic.png" />
        </Head>
        <Nav/>   
        <Content/>  
        <Content/>
        <Footer />
    </>
    )
}