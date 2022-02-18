import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

// test('Teste se a página contém as informações sobre a Pokédex.', () => {

// });

test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
  const { history } = renderWithRouter(<About />);
  history.push('/about');

  const title = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });

  expect(title).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  const { history } = renderWithRouter(<About />);
  history.push('/about');

  const parag1 = screen.getByRole('article',
    { name: 'This application simulates a Pokédex, a digital encyclopedia containing all Pokémons' });
  const parag2 = screen.getByRole('article',
    { name: 'One can filter Pokémons by type, and see more details for each one of them'});

  expect(parag1).toBeInTheDocument();
  expect(parag2).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
  const { history } = renderWithRouter(<About />);
  history.push('/about');

  const logoEl = screen.getByRole('img', { name: 'Pokédex' });
  expect(logoEl).toBeInTheDocument();
});
