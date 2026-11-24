import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  window.scrollTo = () => {};
});

test('по умолчанию сайт на русском', () => {
  render(<App />);
  expect(screen.getAllByText('Главная').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ремонт квартир под ключ в Ташкенте');
  expect(document.documentElement.lang).toBe('ru');
});

test('переключатель переводит сайт на узбекский и запоминает выбор', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'UZ' }));

  expect(screen.getAllByText('Bosh sahifa').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('kalit topşiriş');
  expect(document.documentElement.lang).toBe('uz');
  expect(document.title).toBe('TASTROY — Toşkentda kvartiralarni kalit topşiriş asosida taʼmirlaş');
  expect(localStorage.getItem('tastroy-lang')).toBe('uz');

  fireEvent.click(screen.getByRole('button', { name: 'RU' }));
  expect(screen.getAllByText('Главная').length).toBeGreaterThan(0);
});

test('калькулятор считает стоимость по площади и типу ремонта', () => {
  render(<App />);
  // по умолчанию: 60 м², капитальный ($140–180)
  expect(screen.getByText('$8 400 – $10 800')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Площадь квартиры'), { target: { value: '100' } });
  fireEvent.click(screen.getByRole('button', { name: /Косметический/ }));
  expect(screen.getByText('$10 000 – $14 000')).toBeInTheDocument();
});
