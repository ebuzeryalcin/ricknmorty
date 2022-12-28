import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
   query GetCharacter($id: ID!) {
   character(id: $id) {
       name
       image
       status
       species
       location {
         name
       }
       episode {
         name
         episode
       }
   }
 }`;

export const useCharacterDetails = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });

  return {
    error,
    loading,
    data
  }
}