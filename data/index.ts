import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {IMealFactory, IMenuItemFactory, Meal, PrepUnit} from './types';

export class MenuItemFactory implements IMenuItemFactory {
  constructor() {}

  private getPrepTimeInHours = (prepValue: string, prepUnit: PrepUnit) => {
    const prepNum = Number(prepValue);

    if (Number.isNaN(prepNum)) {
      console.error('prepValue is not a number');

      return 1;
    }

    switch (prepUnit) {
      case 'hours':
        return prepNum;
      case 'minutes':
        return prepNum / 60;
    }
  };

  generateMenuItem = (name: string, prepValue: string, prepUnit: PrepUnit) => {
    return {
      id: uuidv4(),
      name: name,
      prepTime: this.getPrepTimeInHours(prepValue, prepUnit),
    };
  };
}

export class MealFactory implements IMealFactory {
  constructor() {}

  generateMeal = (serviceTime: Date): Meal => {
    return {
      serviceTime,
    };
  };
}
