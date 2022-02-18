import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';

// test('Teste se a página contém as informações sobre a Pokédex.', () => {

// });

test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
  render(<App />);

  const title = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });

  expect(title).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  
    const parag1 = screen.getByRole('article',
    { name: /This application simulates a Pokédex/i });
  const parag2 = screen.getByRole('article',
    { name: /One can filter Pokémons by type/i });

  expect(parag1).toBeInTheDocument();
  expect(parag2).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
  
    const logoEl = screen.getByRole('img', { name: 'Pokédex' });
  expect(logoEl).toBeInTheDocument();
});
