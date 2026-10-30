import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('по умолчанию сайт на русском', () => {
  render(<App />);
  expect(screen.getAllByText('О НАС').length).toBeGreaterThan(0);
  expect(document.documentElement.lang).toBe('ru');
});

test('переключатель переводит сайт на узбекский и запоминает выбор', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'UZ' }));

  expect(screen.getAllByText('BIZ HAQIMIZDA').length).toBeGreaterThan(0);
  expect(screen.getByText('Kompaniyamizning afzalliklari')).toBeInTheDocument();
  expect(screen.queryByText('Наша миссия')).not.toBeInTheDocument();
  expect(document.documentElement.lang).toBe('uz');
  expect(document.title).toBe('TASTROY — kvartira va uylarni taʼmirlaş');
  expect(localStorage.getItem('tastroy-lang')).toBe('uz');

  fireEvent.click(screen.getByRole('button', { name: 'RU' }));
  expect(screen.getByText('Наша миссия')).toBeInTheDocument();
});
