import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './AddMealForm.styles';
import {elements} from '../../styles';

export const AddMealForm = (): React.ReactElement => {
  const [mealDate, setMealDate] = React.useState<Date>(new Date('2023-12-25'));
  const [serviceTime, setServiceTime] = React.useState<Date>(
    new Date('2023-12-25 14:00:00'),
  );

  return (
    <SafeAreaView>
      <View style={styles.AddMealForm}>
        <Text style={elements.h1}>Add a new meal</Text>
        <View style={styles.LabelInput}>
          <Text style={[elements.label]}>When is your meal?</Text>
          <View style={styles.DatePickerWrapper}>
            <DateTimePicker value={mealDate} />
          </View>
        </View>
        <View style={styles.LabelInput}>
          <Text style={[elements.label]}>
            When will you be serving your meal?
          </Text>
          <View style={styles.DatePickerWrapper}>
            <DateTimePicker value={serviceTime} mode="time" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
