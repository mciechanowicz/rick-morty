import React from 'react'
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const LoadingIndicator = ({ loading }) => {
  return (
    <>
      {loading ? (
        <ActivityIndicatorContainer>
          <ActivityIndicator size="large" />
        </ActivityIndicatorContainer>
      ) : null
    }
    </>
  )
}

export default LoadingIndicator;

const ActivityIndicatorContainer = styled.View`
  top: 50%;
`;
