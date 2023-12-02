import {IPrepItem, PrepUnit} from '../types';
import {MenuItemFactory, MealFactory} from '..';
import {PrepItemFactory} from '../PrepItem/PrepItemFactory';

export const menuItemDetails = [
  {
    name: 'Menu Item 1 - 1 Hour Prep',
    prepValue: '1',
    prepUnit: 'hours' as PrepUnit,
  },
  {
    name: 'Menu Item 2 - 2 Hour Prep',
    prepValue: '2',
    prepUnit: 'hours' as PrepUnit,
  },
  {
    name: 'Menu Item 3 - 30 Minute Prep',
    prepValue: '30',
    prepUnit: 'minutes' as PrepUnit,
  },
];

export const menuItemsStub = menuItemDetails.map(item => {
  const menuItemFactory = new MenuItemFactory();
  return menuItemFactory.generateMenuItem(
    item.name,
    item.prepValue,
    item.prepUnit,
  );
});

export const mealStub = new MealFactory().generateMeal(
  new Date('2023-12-12T12:00:00Z'),
);

export const prepItemsStub: IPrepItem[] = menuItemsStub.map(item => {
  const prepItemFactory = new PrepItemFactory();
  return prepItemFactory.generatePrepItem(item, mealStub);
});
