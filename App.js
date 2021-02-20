import React from 'react';
import { SafeAreaView } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

import HomeScreen from './src/screens/HomeScreen';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql/',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#292D34'}}>
        <HomeScreen />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
