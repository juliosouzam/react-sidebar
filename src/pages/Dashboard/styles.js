import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  padding-left: ${props => (props.open ? '270px' : '20px')};

  transition: all 0.4s;
`;
