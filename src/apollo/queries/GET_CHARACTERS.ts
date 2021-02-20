import { gql } from '@apollo/client';


export default gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        next
      }
      results {
        name
        id
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;
