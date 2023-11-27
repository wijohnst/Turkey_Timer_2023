import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddItemForm} from './Components/AddItemForm/AddItemForm';
import {AddMealForm} from './Components/AddMealForm/AddMealForm';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meal Entry" component={AddMealForm} />
        <Stack.Screen name="Item Entry" component={AddItemForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
