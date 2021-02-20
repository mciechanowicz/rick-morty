import React from 'react'
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import CharacterCard from './Cards/CharacterCard';
import LocationCard from './Cards/LocationCard';
import EpisodeCard from './Cards/EpisodeCard';

const FlatlistComponent = ({ data, dataType, onEndReached }) => {

  const renderItem = ({ item }) => {
    if (dataType === 'characters') {
      return (
        <CharacterCard
          characterName={item.name}
          characterImage={item.image}
          status={item.status}
          location={item.location.name}
          species={item.species}
        />
      )
    };
    if (dataType === 'locations') {
      return (
        <LocationCard
          locationName={item.name}
          locationType={item.type}
          locationDimension={item.dimension}
        />
      )
    };
    if (dataType === 'episodes') {
      return (
        <EpisodeCard
        episodeName={item.name}
        episodeNumber={item.episode}
        episodeDate={item.air_date}
        />
      )
    };
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <Spacing />}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={2}
    />
  )
}

export default FlatlistComponent;

const Spacing = styled.View`
  margin-bottom: 30px;
`;
