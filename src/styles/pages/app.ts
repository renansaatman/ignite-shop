import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
})

export const Header = styled('header', {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const Button = styled('button', {
  position: 'relative',
  padding: 12,
  background: '$gray800',
  border: 0,
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  
  width: 48,
  height: 48,

  variants: {
    cart: {
      empty: {
        color: '$gray500',
      },
      load: {
        color: '$gray100'
      }
    }
  }
})

export const CartItems = styled('span', {
  width: 27,
  height: 27,
  borderRadius: 999,
  border: '3px solid $gray900',
  backgroundColor: '$green500',
  color: '$white',
  fontSize: '$sm',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: -8,
  right: -8.345,
})