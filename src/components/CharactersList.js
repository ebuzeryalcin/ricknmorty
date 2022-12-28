import { React, useState, useEffect } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import Character from './Character';

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useCharacters();

  useEffect(()=> {
    
    if (error) return <p>Error happened while fetching the data...</p>;
    if (loading) return <p>Loading...</p>;
   
    setCharacters(data.characters.results);
    
  }, [loading]);


  const charactersList = characters.map(character => (
    <Character key={character.id}
               {...character} 
               />
  ))
  return (
    <div className='cards-container'>
      {charactersList}
    </div>
  )
}
