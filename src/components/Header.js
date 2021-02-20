import React from 'react'
import styled from 'styled-components/native';

import colors from '../config/colors';

const Header = () => {
  return (
    <Container>
      <Title>Rick & Morty</Title>
    </Container>
  )
}

export default Header;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  border-top-width: 5px;
  border-top-color: ${colors.PRIMARY_TEXT};
  border-bottom-width: 5px;
  border-bottom-color: ${colors.PRIMARY_TEXT};
  margin-bottom: 30px;
  transform: rotate(-4deg);
  `;
  
  const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: ${colors.PRIMARY_TEXT};
`;