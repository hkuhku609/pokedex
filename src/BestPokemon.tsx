import React from 'react';
type BestPokemonProps = {
  abilities: string[];
};
const BestPokemon = ({ abilities }: BestPokemonProps) => {
  return (
    <div>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
      <p>My favorite Pokemon is Squirtle</p>
    </div>
  );
};

export default BestPokemon;
