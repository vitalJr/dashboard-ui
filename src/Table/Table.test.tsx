import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import Table, { ColumnDefinitionType } from './Table';

export interface Cat {
  name: string;
  age: number;
  gender: string;
  color: string;
  activityLevel?: string;
  favoriteFood?: string;
}

export const CAT_COLUMNS: ColumnDefinitionType<Cat, keyof Cat>[] = [
  {
    key: 'name',
    header: 'Name',
    width: 150,
  },
  {
    key: 'age',
    header: 'Age in years',
  },
  {
    key: 'color',
    header: 'Color',
  },
];

export const CAT_DATA: Cat[] = [
  {
    name: 'Mittens',
    color: 'black',
    age: 2,
    gender: 'female',
    activityLevel: 'hight',
    favoriteFood: 'milk',
  },
  {
    name: 'Mons',
    color: 'grey',
    age: 2,
    gender: 'male',
    favoriteFood: 'old socks',
    activityLevel: 'medium',
  },
  {
    name: 'Luna',
    color: 'black',
    age: 2,
    gender: 'female',
    activityLevel: 'medium',
    favoriteFood: 'fish',
  },
  {
    name: 'Bella',
    color: 'grey',
    age: 1,
    gender: 'female',
    activityLevel: 'high',
    favoriteFood: 'mice',
  },
  {
    name: 'Oliver',
    color: 'orange',
    age: 1,
    gender: 'male',
    activityLevel: 'low',
    favoriteFood: 'fish',
  },
];

describe('Table component', () => {
  it('should render a default Table', () => {
    render(<Table columns={CAT_COLUMNS} data={CAT_DATA} />);

    expect(screen.findByText('Oliver')).toBeTruthy();
  });
});
