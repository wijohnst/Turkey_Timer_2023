import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddItemForm} from './Components/AddItemForm/AddItemForm';
import {AddMealForm} from './Components/AddMealForm/AddMealForm';
import {Timer} from './Components/Timer/Timer';

import {store} from './System/Store';

const App = () => {
  const Stack = createNativeStackNavigator();

  const getInitialRouteName = (): string => {
    const meal = store.getMeal();
    const menuItems = store.getMenuItems();

    if (!meal) {
      return 'Meal';
    }

    if (meal && menuItems.length === 0) {
      return 'Item';
    }

    return 'Timer';
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={getInitialRouteName()}>
        <Stack.Screen name="Meal" component={AddMealForm} />
        <Stack.Screen name="Item" component={AddItemForm} />
        <Stack.Screen name="Timer" component={Timer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
