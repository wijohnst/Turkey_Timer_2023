import {describe, expect, it, jest} from '@jest/globals';
import {IPrepItemFactory} from '../types';

import {MenuItemFactory, MealFactory} from '..';

jest.mock('uuid', () => {
  const base = '9134e286-6f71-427a-bf00-';
  let current = 100000000000;

  return {
    v4: () => {
      const uuid = base + current.toString();
      current++;

      return uuid;
    },
  };
});

const menuItemStub = new MenuItemFactory().generateMenuItem(
  'menu-item-test',
  '1',
  'hours',
);

const mealStub = new MealFactory().generateMeal(
  new Date('2023-12-25T00:00:00.000Z'),
);

import {PrepItemFactory} from './PrepItemFactory';

describe('PrepItemFactory', () => {
  let sut: IPrepItemFactory;

  const getSut = (): IPrepItemFactory => {
    return new PrepItemFactory();
  };

  it('✅ should be defined', () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });
});
