import './App.css';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import Logo from './Logo';
import { useState } from 'react';
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';

function App() {
  const appName: string = "Susan's Pokedex";
  const abilities: string[] = ['Anticipation', 'Adaptability', 'Run-Away'];
  const todayDate = new Date().toLocaleDateString();
  const logWhenClicked = (): void => {
    console.log(`message`);
  };
  const [count, setCount] = useState<number>(0);
  const [caught, setCaught] = useState<string[]>([]);

  const pokemonList = ['Pikachu', 'Eevee', 'Spearow', 'Butterfree', 'Ditto'];

  const addToList = () => {
    const random = Math.floor(Math.random() * pokemonList.length);
    setCaught([...caught, pokemonList[random]]);
  };
  return (
    <div className='App'>
      <Logo appName={appName} logWhenClicked={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon
        todayDate={todayDate}
        count={count}
        setCount={setCount}
        addToList={addToList}
        caught={caught}
        setCaught={setCaught}
      />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
