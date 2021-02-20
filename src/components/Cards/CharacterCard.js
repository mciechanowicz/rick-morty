import React from 'react'
import styled from 'styled-components/native';

import colors from '../../config/colors';

const CharacterCard = ({ characterName, characterImage, status, location, species }) => {
  return (
    <TouchableContainer>
      <Container>
        <ImageContainer>
          <CharacterImage
            resizeMode="cover"
            source={{ uri: characterImage }}
          />
        </ImageContainer>
        <Informations>
          <InfoContainer>
            <Name>{characterName}</Name>
            <Spacing />
            <StatusContainer>
              <Status>{status}</Status>
              <Indicator status={status} />
            </StatusContainer>
            <Spacing />
            <LocationTitle>Loaction:</LocationTitle>
            <LocationText>{location}</LocationText>
            <Spacing />
            <Row>
              <SpeciesTitle>Species:</SpeciesTitle>
              <SpeciesText>{species}</SpeciesText>
            </Row>
          </InfoContainer>
        </Informations>
      </Container>
    </TouchableContainer>
  )
}

export default CharacterCard;

const TouchableContainer = styled.TouchableOpacity``;

const Container = styled.View`
  background: ${colors.PRIMARY_GRAY};
  width: 100%;
  height: 200px;
  border-radius: 10px;
  flex-direction: row;
`;

const CharacterImage = styled.Image`
  flex: 1;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const ImageContainer = styled.View`
  flex: 0.4;
`;

const Informations = styled.View`
  flex: 0.6;
`;

const Name = styled.Text`
  font-size: 24px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
`;

const InfoContainer = styled.View`
  padding: 15px;
`;

const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Status = styled.Text`
  font-size: 18px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
`;

const Indicator = styled.View`
  background: ${({ status }) => status === 'Alive' ? colors.PRIMARY_GREEN : status ==='Dead' ?  colors.PRIMARY_RED : colors.PRIMARY_DARK};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-left: 5px;
`;

const LocationTitle = styled.Text`
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

const SpeciesTitle = styled.Text`
  font-size: 18px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
`;

const SpeciesText = styled.Text`
  font-size: 16px;
  color: ${colors.PRIMARY_TEXT};
  font-weight: bold;
  opacity: 0.7;
  margin-left: 5px;
`;

const Spacing = styled.View`
  margin-bottom: 5px;
`;