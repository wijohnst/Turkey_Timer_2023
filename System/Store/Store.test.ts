import {MMKV} from 'react-native-mmkv';

import {Store, IStore, MenuItem} from './Store';

import {describe, expect, it} from '@jest/globals';

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
});
