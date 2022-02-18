import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('O primeiro link deve possuir o texto Home.', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: 'Home' });
  expect(home).toBeInTheDocument();
});

test('O segundo link deve possuir o texto About.', () => {
  renderWithRouter(<App />);
  const about = screen.getByRole('link', { name: 'About' });
  expect(about).toBeInTheDocument();
});

test('O terceiro link deve possuir o texto Favorite Pokémons.', () => {
  renderWithRouter(<App />);
  const favorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(favorites).toBeInTheDocument();
});

test('Teste se a aplicação é redir para a página inicial ao clicar no link Home.', () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  userEvent.click(homeLink);
  const title = screen.getByRole('heading', { name: 'Encountered pokémons' });
  expect(title).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página de About, na URL /about', () => {
  renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);
  const title = screen.getByRole('heading', { name: 'About Pokédex' });
  expect(title).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados', () => {
  renderWithRouter(<App />);
  const favoritesLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  userEvent.click(favoritesLink);
  const title = screen.getByRole('heading', { name: /Favorite Pokémons/i });
  expect(title).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página Not Found', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/blablabla');
  const notFound = screen.getByText(/Page requested not found/i);
  expect(notFound).toBeInTheDocument();
});
