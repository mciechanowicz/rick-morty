import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { useQuery, useLazyQuery } from '@apollo/client';

import colors from '../config/colors';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FlatlistComponent from '../components/FlatlistComponent';
import LoadingIndicator from '../components/LoadingIndicator';
import GET_CHARACTERS from '../apollo/queries/GET_CHARACTERS';
import GET_EPISODES from '../apollo/queries/GET_EPISODES';
import GET_LOCATIONS from '../apollo/queries/GET_LOCATIONS';

const HomeScreen = () => {
  const [dataType, setDataType] = useState('characters');

  const { data: charactersData, loading: loadingCharacters, error: fetchingCharactersError, fetchMore: fetchMoreCharacters } = useQuery(GET_CHARACTERS, { variables: { page: 1 } });
  const [getLocations, { data: locationsData, loading: loadingLocations, error: fetchingLocationsError, fetchMore: fetchMoreLocations }] = useLazyQuery(GET_LOCATIONS);
  const [getEpisodes, { data: episodesData, loading: loadingEpisodes, error: fetchingEpisodesError, fetchMore: fetchMoreEpisodes }] = useLazyQuery(GET_EPISODES);

  const characters = charactersData?.characters?.results;
  const locations = locationsData?.locations?.results;
  const episodes = episodesData?.episodes?.results;

  const onChangeDataType = (type) => {
    setDataType(type);
    type === 'locations' ? getLocations() : type === 'episodes' ? getEpisodes() : null;
  };

  const loadMoreCharacters = () => {
    if (charactersData.characters.info.next === null) return null;
    fetchMoreCharacters({
      variables: { page: charactersData.characters.info.next },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const newCharacters = Object.assign({}, {
          characters: {
            __typename: "Characters",
            info: {
              ...fetchMoreResult.characters.info
            },
            results: [
              ...prev.characters.results, ...fetchMoreResult.characters.results
            ]
          }
        });
        return newCharacters
      }
    });
  };

  const loadMoreLocations = () => {
    if (locationsData.locations.info.next === null) return null;
    fetchMoreLocations({
      variables: { page: locationsData.locations.info.next },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const newLocations = Object.assign({}, {
          locations: {
            __typename: "Locations",
            info: {
              ...fetchMoreResult.locations.info
            },
            results: [
              ...prev.locations.results, ...fetchMoreResult.locations.results
            ]
          }
        });
        return newLocations
      }
    });
  };

  const loadMoreEpisodes = () => {
    if (episodesData.episodes.info.next === null) return null;
    fetchMoreEpisodes({
      variables: { page: episodesData.episodes.info.next },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const newEpisodes = Object.assign({}, {
          episodes: {
            __typename: "Episodes",
            info: {
              ...fetchMoreResult.episodes.info
            },
            results: [
              ...prev.episodes.results, ...fetchMoreResult.episodes.results
            ]
          }
        });
        return newEpisodes
      }
    });
  };

  if (fetchingCharactersError || fetchingLocationsError || fetchingEpisodesError) return <Text>Error fetching data!</Text>
  return (
    <Container>
      <Header />
      <Menu onChangeDataType={onChangeDataType} />
        <LoadingIndicator loading={loadingCharacters || loadingLocations || loadingEpisodes} />
        <FlatlistComponent
          data={dataType === 'characters' ? characters : dataType === 'locations' ? locations : episodes}
          dataType={dataType}
          onEndReached={dataType === 'characters' ? loadMoreCharacters : dataType === 'locations' ? loadMoreLocations : loadMoreEpisodes}
        />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background: ${colors.BACKGROUND};
  padding: 20px;
`;
