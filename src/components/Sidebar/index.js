import React from 'react';

import { Container } from './styles';

export default function Sidebar({ open, ...rest }) {
  return (
    <Container open={open} {...rest}>
      asd
    </Container>
  );
}
