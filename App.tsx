import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddItemForm} from './Components/AddItemForm/AddItemForm';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meal Entry" component={AddItemForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
