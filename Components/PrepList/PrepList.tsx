import * as React from 'react';
import {Text, View} from 'react-native';
import {store} from '../../System/Store';

export const PrepList = (): React.ReactElement => {
  const menuItems = store.getMenuItems();

  return <View></View>;
};
