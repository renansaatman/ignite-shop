import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import shirt from '../assets/shirt.jpg'
import { Button, CardInfo, CartItem, CartClose, CartContent, ItemsQuantity, Container, Header, CartItems, TotalItems, TotalPrice, FinishButton, PriceInfo } from "../styles/pages/app"
import Image from "next/image"

import { Handbag, X } from '@phosphor-icons/react'

import * as Dialog from '@radix-ui/react-dialog'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button cart={false ? 'load' : 'empty'}>
              <Handbag size={24} weight="bold" />
              {/* <ItemsQuantity>1</ItemsQuantity> */}
            </Button>
          </Dialog.Trigger>
          <CartContent>
            <CartClose>
              <X size={24} weight="bold"/>
            </CartClose>

            <h2>Sacola de compras</h2>
            <CartItems>
              <CartItem>
                <Image src={shirt} width={101.94} height={93} alt="" />
                <CardInfo>
                  <h3>Camiseta Beyond the Limits</h3>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </CardInfo>
              </CartItem>
              <CartItem>
                <Image src={shirt} width={101.94} height={93} alt="" />
                <CardInfo>
                  <h3>Camiseta Beyond the Limits</h3>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </CardInfo>
              </CartItem>
              <CartItem>
                <Image src={shirt} width={101.94} height={93} alt="" />
                <CardInfo>
                  <h3>Camiseta Beyond the Limits</h3>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </CardInfo>
              </CartItem>
            </CartItems>

            <PriceInfo>
              <TotalItems>
                <span>Quantidade</span>
                <span className="items">3 itens</span>
              </TotalItems>
              <TotalPrice>
                <span>Valor total</span>
                <span className="price">R$ 270,00</span>
              </TotalPrice>
              <FinishButton>Finalizar compra</FinishButton>
            </PriceInfo>
          </CartContent>
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}


