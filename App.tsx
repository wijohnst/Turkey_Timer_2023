import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MealEntryForm} from './Components/MealEntryForm/MealEntryForm';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meal Entry" component={MealEntryForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
