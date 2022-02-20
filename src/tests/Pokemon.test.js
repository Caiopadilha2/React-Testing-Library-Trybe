import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
  renderWithRouter(<App />);

  const namePikachu = screen.getByTestId('pokemon-name');
  expect(namePikachu).toHaveTextContent('Pikachu');

  const typePikachu = screen.getByTestId('pokemon-type');
  expect(typePikachu).toHaveTextContent('Electric');

  const weightPikachu = screen.getByTestId('pokemon-weight');
  expect(weightPikachu).toHaveTextContent('Average weight: 6.0 kg');

  const pikachuInicio = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(pikachuInicio).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('O card do Pokémon indicado na Pokédex contém um link de navegação.', () => {
  renderWithRouter(<App />);

  const linkDetails = screen.getByRole('link', { name: /More details/i });
  expect(linkDetails).toHaveAttribute('href', '/pokemons/25');
});

test('Ao clicar no link de navegação do Pokémon, é feito o redirecionamento', () => {
  renderWithRouter(<App />);

  const linkDetails = screen.getByRole('link', { name: /More details/i });
  expect(linkDetails).toHaveAttribute('href', '/pokemons/25');
  userEvent.click(linkDetails);

  const headingPikachu = screen.getByRole('heading', { name: /Pikachu details/i });
  expect(headingPikachu).toBeInTheDocument();
});

test('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
  renderWithRouter(<App />);

  const pikachuAddFav = screen.getByRole('link', { name: /More details/i });
  userEvent.click(pikachuAddFav);

  const addFavCheckbox = screen.getByRole('checkbox');
  userEvent.click(addFavCheckbox);

  const estrela = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
  expect(estrela).toHaveAttribute('src', '/star-icon.svg');
});
