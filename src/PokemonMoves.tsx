import React, { useEffect, useState } from 'react';

type PokemonMovesType = {
  pokemonId: number | string;
};
type pokemonDataType = {
  name: string;
  moves: { move: { name: string } }[];
};
function PokemonMoves({ pokemonId }: PokemonMovesType) {
  const [pokemonData, setPokemonData] = useState<pokemonDataType>(
    {} as pokemonDataType
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
        const data = await response.json();
        console.log(data);
        setPokemonData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [pokemonId]);
  return (
    <div>
      {!!Object.keys(pokemonData).length && (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonMoves;
