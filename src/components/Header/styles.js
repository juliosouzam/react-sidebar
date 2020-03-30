import styled from 'styled-components';

export const Container = styled.nav`
  height: 56px;
  background: ${({ theme }) => theme.primaryLight};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 30px;
`;

export const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  cursor: pointer;

  span {
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
