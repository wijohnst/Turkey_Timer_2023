import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {elements} from '../../styles';
import {styles} from './MealEntryForm.style';

export const MealEntryForm = () => {
  return (
    <SafeAreaView>
      <View style={styles.MealEntryForm}>
        <Text style={elements.h1}>Add Item to Menu</Text>
      </View>
    </SafeAreaView>
  );
};
