import { gql } from '@apollo/client';

export default gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      results {
        id
        name
        type
        dimension
      }
      info {
        next
      }
    }
  }
`;
