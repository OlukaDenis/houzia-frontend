import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import HouseListItem from '../components/HouseListItem';

afterEach(cleanup);

describe('House list item', () => {
  const house = {
    name: 'House for sale Kayunga',
    description: '4 bed rooms ',
    image: 'image.png',
    price: 5020000
  }

  it('should render house name', () => {
    render(<HouseListItem house={house} />,  { wrapper: MemoryRouter });
    expect(screen.queryByText(house.name)).toBeVisible();
  });

  test('It should render house image', () => {
    render(<HouseListItem house={house} />, { wrapper: MemoryRouter });
    expect(screen.queryByTestId('image')).toHaveAttribute('src', house.image);
  });
});