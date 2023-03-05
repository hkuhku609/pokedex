import React, { useState } from 'react';

function PokemonCity() {
  const [city, setCity] = useState<string>('');
  const updateCity = (city: string): void => {
    setCity(city);
  };

  return (
    <div>
      <input
        type='text'
        value={city}
        onChange={(e) => updateCity(e.target.value)}
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
