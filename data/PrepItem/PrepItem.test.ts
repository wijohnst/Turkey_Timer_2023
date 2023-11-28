import {describe, it, expect, jest} from '@jest/globals';
import {IPrepItem, MenuItem, Meal} from '../types';
import {MenuItemFactory, MealFactory} from '../index';

import {PrepItem} from './PrepItem';

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

const menuItemStub: MenuItem = new MenuItemFactory().generateMenuItem(
  'menu_item_name',
  '1',
  'hours',
);

const mealStub: Meal = new MealFactory().generateMeal(
  new Date('2023-12-25T00:00:00.000Z'),
);

describe('PrepItem', () => {
  let sut: IPrepItem;

  const getSut = (now?: Date): IPrepItem => {
    return new PrepItem(menuItemStub, mealStub, now ?? new Date());
  };

  it('should be defined', () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  it('should return the correct prepTime', () => {
    sut = getSut();

    expect(sut.prepTime).toEqual(1);
  });

  it('should return the correct time till start', () => {
    sut = new PrepItem(
      menuItemStub,
      mealStub,
      new Date('2023-12-24T00:00:00.000Z'),
    );

    const timeTillStart = sut.timeTillStart;

    expect(timeTillStart).toEqual({
      years: 0,
      months: 0,
      days: 1,
      hours: 1,
      minutes: 0,
      seconds: 0,
    });
  });
});
