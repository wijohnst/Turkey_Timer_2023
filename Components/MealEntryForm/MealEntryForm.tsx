import * as React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import {elements} from '../../styles';
import {styles} from './MealEntryForm.style';

export const MealEntryForm = () => {
  return (
    <SafeAreaView>
      <View style={styles.MealEntryForm}>
        <Text style={elements.h1}>Add Item to Menu</Text>
        <View style={styles.LabelInput}>
          <Text style={[elements.label, styles.MealEntryFormLabel]}>
            Item name
          </Text>
          <TextInput
            style={elements.textInput}
            placeholder="What dish or prep item are you making?"
          />
        </View>
        <View style={styles.TimeGroup}>
          <Text style={[elements.label, styles.MealEntryFormLabel]}>
            T-Time
          </Text>
          <View style={styles.TimeUnitGroup}>
            <TextInput
              style={elements.textInput}
              placeholder="How much prep + cook time?"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
