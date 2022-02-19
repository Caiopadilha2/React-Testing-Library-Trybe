import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemons } from '../components';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);
  const emptyPokemons = screen.getByText('No favorite pokemon found');
  expect(emptyPokemons).toBeInTheDocument();
});

test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
  renderWithRouter(<App />);

  const buttonMoreDetails = screen.getByRole('link', { name: /More details/i });
  expect(buttonMoreDetails).toBeInTheDocument();
  userEvent.click(buttonMoreDetails);

  const buttonFavoritar = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
  expect(buttonFavoritar).toBeInTheDocument();
  userEvent.click(buttonFavoritar);

  const buttonFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(buttonFavorites).toBeInTheDocument();
  userEvent.click(buttonFavorites);

  const pokemonsFavoritos = screen.getByRole('img', { name: /marked as favorite/ });
  expect(pokemonsFavoritos).toBeInTheDocument();
});
