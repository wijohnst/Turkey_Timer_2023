import * as React from 'react';
import {View} from 'react-native';

import {store} from '../../System/Store';

import {HeadingTextEnum, PrepListCard} from '../PrepListCard/PrepListCard';
import {PrepItemFactory} from '../../data/PrepItem/PrepItemFactory';
import {MealFactory, MenuItemFactory} from '../../data';

export const PrepList = (): React.ReactElement => {
  const menuItems = store.getMenuItems();

  const prepItemFactory = new PrepItemFactory();
  const menuItemFactory = new MenuItemFactory();
  const mealFactory = new MealFactory();

  return (
    <View>
      <PrepListCard
        headingText={HeadingTextEnum.DO_NOW}
        prepListItems={[
          prepItemFactory.generatePrepItem(
            menuItemFactory.generateMenuItem('menu-item-name', '1', 'hours'),
            mealFactory.generateMeal(new Date('2023-12-25T00:00:00.000Z')),
          ),
        ]}
      />
    </View>
  );
};
