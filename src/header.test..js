// src/header.test.js
import { render, screen } from '@testing-library/react';
import Header from './header';

test('renderiza o conteúdo do Header', () => {
  render(<Header />);
  expect(screen.getByText(/conteúdo/i)).toBeInTheDocument();
});