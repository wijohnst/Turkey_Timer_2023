import * as React from 'react';

import {IPrepItemFactory, MenuItem, Meal} from '../types';

import {PrepItem} from './PrepItem';

export class PrepItemFactory implements IPrepItemFactory {
  constructor() {}

  generatePrepItem = (menuItem: MenuItem, meal: Meal) => {
    return new PrepItem(menuItem, meal, new Date());
  };
}
