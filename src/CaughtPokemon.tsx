import React, { useState } from 'react';
type CaughtPokemonType = {
  todayDate: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addToList: () => void;
  caught: string[];
  setCaught: React.Dispatch<React.SetStateAction<string[]>>;
};
const CaughtPokemon = ({
  todayDate,
  count,
  setCount,
  addToList,
  caught,
  setCaught
}: CaughtPokemonType) => {
  const [pokemonNameInput, setPokemonNameInput] = useState<string>('');
  const incertment = (): void => {
    setCount((prev) => prev + 1);
    addToList();
  };
  const handleInputChange = (pokemonName: string): void => {
    if (pokemonName === '') return;
    setPokemonNameInput(pokemonName);
  };
  const catchPokemon = () => {
    setCount((prev) => prev + 1);
    setCaught([...caught, pokemonNameInput]);
    setPokemonNameInput('');
  };

  return (
    <div>
      <p>{`Caught ${count} Pokemon on ${todayDate}`}</p>
      <input
        type='text'
        value={pokemonNameInput}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
