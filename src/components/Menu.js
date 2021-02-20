import React, { useState } from 'react'
import styled from 'styled-components/native';

import colors from '../config/colors';

const Menu = ({ onChangeDataType }) => {
  const [selectedItem, setSelectedItem] = useState('characters');

  const onChange = (type) => {
    setSelectedItem(type);
    onChangeDataType(type);
  };

  return (
    <Container>
      <Button onPress={() => onChange('characters')}>
        <MenuItem selected={selectedItem === 'characters'}>
          Characters
        </MenuItem>
      </Button>
      <Button onPress={() => onChange('locations')}>
        <MenuItem selected={selectedItem === 'locations'}>
          Locations
        </MenuItem>
      </Button>
      <Button onPress={() => onChange('episodes')}>
        <MenuItem selected={selectedItem === 'episodes'}>
          Episodes
        </MenuItem>
      </Button>
    </Container>
  )
}

export default Menu;

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const MenuItem = styled.Text`
  color: ${colors.PRIMARY_TEXT};
  font-size: 19px;
  font-weight: bold;
  opacity: ${({ selected }) => selected ? 1 : 0.7} ;
  margin-right: 30px;
`;

const Button = styled.TouchableOpacity``;
