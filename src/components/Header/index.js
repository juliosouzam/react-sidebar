import React from 'react';

import { Container, Burger } from './styles';

export default function Header({ open, setOpen, ...rest }) {
  return (
    <Container>
      <Burger open={open} onClick={() => setOpen(!open)} {...rest}>
        <span />
        <span />
        <span />
      </Burger>
    </Container>
  );
}
