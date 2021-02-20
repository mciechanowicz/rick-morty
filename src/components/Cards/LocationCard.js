import React from 'react'
import styled from 'styled-components/native';

import colors from '../../config/colors';

const LocationCard = ({ locationName, locationType, locationDimension }) => {
  return (
    <TouchableContainer>
      <Container>
        <Name>{locationName}</Name>
        <Spacing />
        <LocationType>Type: <LocationText>{locationType}</LocationText></LocationType>
        <Spacing />
        <Row>
          <DimensionsTitle>Dimension:</DimensionsTitle>
          <DimensionsText>{locationDimension}</DimensionsText>
        </Row>
      </Container>
    </TouchableContainer>
  )
}

export default LocationCard;

const TouchableContainer = styled.TouchableOpacity``;

const Container = styled.View`
  background: ${colors.PRIMARY_GRAY};
  width: 100%;
  height: 140px;
  border-radius: 10px;
  padding: 15px;
  overflow: hidden;
`;

const Name = styled.Text`
  font-size: 24px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
`;

const LocationType = styled.Text`
  font-size: 18px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
  margin-bottom: 5px;
`;

const LocationText = styled.Text`
  font-size: 16px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
  opacity: 0.7;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const DimensionsTitle = styled.Text`
  font-size: 18px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
`;

const DimensionsText = styled.Text`
  font-size: 16px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
  opacity: 0.7;
  margin-left: 5px;
`;

const Spacing = styled.View`
  margin-bottom: 5px;
`;