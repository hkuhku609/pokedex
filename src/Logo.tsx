import React from 'react';
type LogoType = {
  appName: string;
  logWhenClicked: () => void;
};
const Logo = ({ appName, logWhenClicked }: LogoType) => {
  return (
    <header>
      <h1>{`Welcome to the ${appName}`}</h1>
      <img
        onClick={logWhenClicked}
        src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
        alt='pic'
      />
    </header>
  );
};

export default Logo;
