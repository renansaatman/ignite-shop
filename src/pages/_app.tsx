import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Button, CartItems, Container, Header } from "../styles/pages/app"
import Image from "next/image"

import { Handbag } from '@phosphor-icons/react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Button cart={true ? 'load' : 'empty'}>
          <Handbag size={24} weight="bold" />
          <CartItems>1</CartItems>
        </Button>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}


