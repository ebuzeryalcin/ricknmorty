import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { AppBar, InputBase, Toolbar } from '@material-ui/core';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "@mui/material";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function SearchField() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log({
    loading,
    error,
    data,
    called,
  });

  return (
    <div>
      {/* <AppBar position="static" color="white">
        <InputBase
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          startAdornment={<SearchRoundedIcon color="primary" />}
          placeholder="Search..."
        />
        <button onClick={() => getLocations()}>Search</button>
      </AppBar> */}

    <AppBar position="static" color="white">
      <Toolbar style={{ justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <InputBase style={{ width: '50%'}}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          startAdornment={
            <SearchRoundedIcon color="secondary" />
          }
          placeholder="Character name"
        />
        <Button onClick={() => getLocations()} color="secondary">
          Search
        </Button>
      </Toolbar>
    </AppBar>

      {loading && <div>spinner</div>}
      {error && <div>There is an error</div>}
      {data && (
        <ul>
          <h3 className="li-color">Locations:</h3>
          {data.characters.results.map((character) => {
            return <li className="li-color">{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
