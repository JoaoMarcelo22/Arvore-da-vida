import '../styles/globals.css'
import { GlobalStyles } from "@/styles";
import  Theme  from '../styles/default.theme';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    <Component {...pageProps} />
  </ThemeProvider>
  </>
}
