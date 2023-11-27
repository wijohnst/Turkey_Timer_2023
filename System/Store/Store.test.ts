import {MMKV} from 'react-native-mmkv';

import {Store, IStore} from './Store';

import {Meal, MenuItem} from '../../data/types';

import {describe, expect, it, jest} from '@jest/globals';
import {MealFactory} from '../../data';

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

const menuItemStub: MenuItem = {
  id: '1',
  name: 'Foo',
  prepTime: 1,
};

describe('Store', () => {
  let sut: IStore;

  const getSut = (): IStore => {
    return new Store(new MMKV());
  };

  describe('getMenuItems', () => {
    it('✅ should be defined', () => {
      sut = getSut();

      expect(sut.getMenuItems).toBeDefined();
    });

    it('✅ should return an array of MenuItems', () => {
      sut = getSut();

      sut.setMenuItem(menuItemStub);
      sut.setMenuItem({...menuItemStub, name: 'Bar'});

      expect(sut.getMenuItems()).toEqual([
        menuItemStub,
        {...menuItemStub, name: 'Bar'},
      ]);
    });
  });

  describe('setMenuItem', () => {
    it('✅ should be defined', () => {
      sut = getSut();

      expect(sut.setMenuItem).toBeDefined();
    });

    it('✅ should set the menuItem', () => {
      sut = getSut();

      sut.setMenuItem(menuItemStub);
    });
  });

  describe('getMenuItem', () => {
    it('✅ should be defined', () => {
      sut = getSut();

      expect(sut.getMenuItem).toBeDefined();
    });

    it('✅ should return a menu item', () => {
      sut = getSut();

      sut.setMenuItem(menuItemStub);
      sut.setMenuItem({...menuItemStub, name: 'Bar'});

      expect(sut.getMenuItem(menuItemStub.name)).toEqual(menuItemStub);
    });

    it('✅ should return undefined', () => {
      sut = getSut();

      expect(sut.getMenuItem('Should not exist')).toEqual(undefined);
    });
  });

  describe('getMeal', () => {
    it('✅ should be defined', () => {
      sut = getSut();

      expect(sut.getMeal).toBeDefined();
    });

    it('✅ should return a meal', () => {
      sut = getSut();

      const mealStub = new MealFactory().generateMeal(
        new Date('2021-01-01T00:00:00.000Z'),
      );
      sut.setMeal(mealStub);

      expect(sut.getMeal()).toEqual(mealStub);
    });

    it('✅ should return undefined', () => {
      sut = getSut();

      expect(sut.getMeal()).toEqual(undefined);
    });
  });

  describe('setMeal', () => {
    it('✅ should be defined', () => {
      sut = getSut();

      expect(sut.setMeal).toBeDefined();
    });
  });
});
