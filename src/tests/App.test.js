import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de nav.', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/');

  const home = screen.getByRole('link', { name: 'Home' });
  expect(home).toBeInTheDocument();
  const about = screen.getByRole('link', { name: 'About' });
  expect(about).toBeInTheDocument();
  const favorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(favorites).toBeInTheDocument();
});
