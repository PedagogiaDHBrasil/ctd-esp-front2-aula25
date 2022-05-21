import { gql } from "@apollo/client";

const INFO_PERSON = gql`
  query {
    characters {
      results {
        name
        species
        gendera
        image
      }
    }
  }
`;

export default INFO_PERSON;
