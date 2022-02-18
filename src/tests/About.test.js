import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

// test('Teste se a página contém as informações sobre a Pokédex.', () => {

// });

test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
  renderWithRouter(<About />);

  const title = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });

  expect(title).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  const { history } = renderWithRouter(<About />);
  history.push('/about');

  const parag1 = screen.getByText(/This application simulates a Pokédex/);
  const parag2 = screen.getByText(/One can filter Pokémons by type/);

  expect(parag1).toBeInTheDocument();
  expect(parag2).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
  renderWithRouter(<About />);

  const logoEl = screen.getByRole('img');
  expect(logoEl).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
