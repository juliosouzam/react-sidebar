import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;
  max-width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  position: absolute;
  top: 56px;
  transition: transform 0.3s ease-in-out;
`;
