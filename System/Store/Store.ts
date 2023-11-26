import {MMKV} from 'react-native-mmkv';

import {MenuItem} from '../../data/types';

export const mmkv = new MMKV();

export interface IStore {
  store: MMKV;

  getMenuItems(): MenuItem[];
  setMenuItem: (menuItem: MenuItem) => void;
  getMenuItem: (menuItemName: string) => MenuItem | undefined;
  clearStore: () => void;
}

export const StorePrefixMap = {
  MENU_ITEMS: 'menuItems.',
};

export class Store implements IStore {
  store: MMKV;

  constructor(store: MMKV) {
    this.store = store;
  }

  /**
   * Returns all menu items from the store
   *
   * @returns {MenuItem[]} - menuItems
   */
  getMenuItems = (): MenuItem[] | [] => {
    const allKeys: string[] = this.store.getAllKeys();

    return allKeys.reduce((menuItems: MenuItem[], targetKey: string) => {
      const hasVal = this.store.contains(targetKey);
      const keyIsMenuItem = targetKey.includes(StorePrefixMap.MENU_ITEMS);

      if (!hasVal || !keyIsMenuItem) {
        return menuItems;
      }

      const targetValAsString = this.store.getString(targetKey) ?? '';

      return [...menuItems, JSON.parse(targetValAsString) as MenuItem];
    }, []);
  };

  /**
   * Adds a MenuItem to the store
   *
   * @param { MenuItem }menuItem
   */
  setMenuItem = (menuItem: MenuItem): void => {
    const stringifiedValue = JSON.stringify(menuItem);
    this.store.set(
      `${StorePrefixMap.MENU_ITEMS}${menuItem.name}`,
      stringifiedValue,
    );
  };

  /**
   * Accepts a menu item name and returns any matching MenuItem from the store. Returns undefined if a the item cannot be found
   *
   * @param { string }menuItemName
   * @returns {MenuItem | undefined}
   */
  getMenuItem = (menuItemName: string): MenuItem | undefined => {
    const targetKey = `${StorePrefixMap.MENU_ITEMS}${menuItemName}`;

    const hasVal = this.store.contains(targetKey);

    if (!hasVal) {
      return undefined;
    }

    const targetVal: string = this.store.getString(targetKey) ?? '';

    return JSON.parse(targetVal);
  };

  clearStore = (): void => {
    this.store.clearAll();
  };
}

export const store = new Store(mmkv);
