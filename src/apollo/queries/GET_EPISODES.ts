import { gql } from '@apollo/client';

export default gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        episode
        air_date
      }
      info {
        next
      }
    }
  }
`;
