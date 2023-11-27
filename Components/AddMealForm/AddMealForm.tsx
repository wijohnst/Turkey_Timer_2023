import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {styles} from './AddMealForm.styles';
import {elements} from '../../styles';

export const AddMealForm = (): React.ReactElement => {
  return (
    <SafeAreaView>
      <View style={styles.AddMealForm}>
        <Text style={elements.h1}>Add a new meal</Text>
        <View style={styles.LabelInput}>
          <Text style={[elements.label]}>What date is your meal?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
