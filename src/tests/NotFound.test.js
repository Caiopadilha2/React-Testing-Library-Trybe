import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

test('Teste se página contém um heading h2 com o texto Page requested not found.', () => {
  renderWithRouter(<NotFound />);
  const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
  expect(notFound).toBeInTheDocument();
});

test('Teste se página mostra a imagem.', () => {
  renderWithRouter(<NotFound />);
  const imgEl = screen.getByRole('img', { name: /Pikachu crying because the page/i });
  expect(imgEl).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
