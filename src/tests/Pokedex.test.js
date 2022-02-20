import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test(' 1- Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
  renderWithRouter(<App />);

  const title = screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 });

  expect(title).toBeInTheDocument();
});

test(' 2- É exibido o próximo Pokémon da lista quando o botão Próximo pokémon.', () => {
  renderWithRouter(<App />);

  const pikachu = screen.getByRole('img');
  expect(pikachu).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

  const buttonNext = screen.getByRole('button', { name: /Próximo Pokémon/i });
  expect(buttonNext).toBeInTheDocument();
  userEvent.click(buttonNext);

  const charmander = screen.getByRole('img');
  expect(charmander).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');

  userEvent.click(buttonNext); // caterpie
  userEvent.click(buttonNext); // ekans
  userEvent.click(buttonNext); // Alakazam
  userEvent.click(buttonNext); // Mew
  userEvent.click(buttonNext); // Rapidash
  userEvent.click(buttonNext); // Snorlax
  userEvent.click(buttonNext); // Dragonair

  const Dragonair = screen.getByRole('img');
  expect(Dragonair).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png');

  userEvent.click(buttonNext);

  const pikachuInicio = screen.getByRole('img');
  expect(pikachuInicio).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('O botão deve conter o texto Próximo pokémon.', () => {
  renderWithRouter(<App />);
  const button = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(button).toBeInTheDocument();
});

test('Os próximos Pokémons da lista devem ser mostrados, um a um.', () => {
    renderWithRouter(<App />);

  });

  test('O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista.', () => {
    renderWithRouter(<App />);

  });

test('3 - Teste se é mostrado apenas um Pokémon por vez.', () => {
  renderWithRouter(<App />);
  const buttonMoreDetails = screen.getAllByRole('link', { name: /More details/i });
  expect(buttonMoreDetails.length).toBe(1);
});



test('4- Deve existir um botão de filtragem para cada tipo de Pokémon, sem repet', () => {
  renderWithRouter(<App />);

  const all = screen.getAllByRole('button', { name: /All/i });
  expect(all.length).toBe(1);
});

test('a Pokédex deve circular somente pelos pokémons daquele tipo.', () => {
  renderWithRouter(<App />);

  const fire = screen.getByRole('button', { name: /fire/i });
  expect(fire).toBeInTheDocument();
  userEvent.click(fire);

  const charmander = screen.getByRole('img');
  expect(charmander).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');

  const buttonNext = screen.getByRole('button', { name: /Próximo Pokémon/i });
  expect(buttonNext).toBeInTheDocument();
  userEvent.click(buttonNext);

  const rapidash = screen.getByRole('img');
  expect(rapidash).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png');
});

test('O texto do botão deve corresponder ao nome do tipo.', () => {
  renderWithRouter(<App />);

  const type = screen.getByRole('button', { name: /Fire/i });

  expect(type).toHaveTextContent('Fire');
});

test('O botão All precisa estar sempre visível.', () => {
  renderWithRouter(<App />);

  const allButton = screen.getByRole('button', { name: /All/i });

  expect(allButton).toBeVisible();
});




test('O texto do botão deve ser All.', () => {
  renderWithRouter(<App />);

  const buttonText = screen.getByRole('button', { name: /All/i });

  expect(buttonText).toHaveTextContent('All');
});

test('A Pokedéx deverá mostrar os Pokémons normalmente, sem filtros.', () => {
  renderWithRouter(<App />);

  const allButton = screen.getByRole('button', { name: /All/i });
  expect(allButton).toBeInTheDocument();
  userEvent.click(allButton);

  const pikachu = screen.getByRole('img');
  expect(pikachu).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

  const buttonNext = screen.getByRole('button', { name: /Próximo Pokémon/i });
  expect(buttonNext).toBeInTheDocument();
  userEvent.click(buttonNext);

  const charmander = screen.getByRole('img');
  expect(charmander).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
});

test('Ao carregar a página, o filtro selecionado deverá ser All.', () => {
  renderWithRouter(<App />);

  const pikachu = screen.getByRole('img');
  expect(pikachu).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

  const buttonNext = screen.getByRole('button', { name: /Próximo Pokémon/i });
  expect(buttonNext).toBeInTheDocument();
  userEvent.click(buttonNext);

  const charmander = screen.getByRole('img');
  expect(charmander).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
});
