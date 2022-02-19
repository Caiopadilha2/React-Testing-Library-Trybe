import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../components';
import renderWithRouter from './renderWithRouter';

test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);
  const emptyPokemons = screen.getByText('No favorite pokemon found');
  expect(emptyPokemons).toBeInTheDocument();
});

test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
});
