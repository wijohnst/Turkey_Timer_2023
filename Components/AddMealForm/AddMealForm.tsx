import * as React from 'react';

import {Text, View, SafeAreaView, Button} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './AddMealForm.styles';
import {elements} from '../../styles';
import {ValidationError} from '../../app/types';
import {MealFactory} from '../../data';
import {store} from '../../System/Store';

const validationErrorsMap: Record<string, ValidationError> = {
  MISSING_MEAL_DATE: {
    type: 'required',
    message: 'Please select a meal date',
  },
  MISSING_SERVICE_TIME: {
    type: 'required',
    message: 'Please select a service time',
  },
};

export const AddMealForm = (): React.ReactElement => {
  const [serviceTime, setServiceTime] = React.useState<Date | undefined>(
    new Date('2023-12-25'),
  );

  const [validationErrors, setValidationErrors] = React.useState<
    ValidationError[] | null
  >(null);

  const mealFactory = new MealFactory();
  const navigation = useNavigation();

  const handleAddMeal = (): void => {
    if (serviceTime !== undefined) {
      const meal = mealFactory.generateMeal(serviceTime);

      store.setMeal(meal);
      navigation.dispatch(CommonActions.navigate('Item'));
    }
  };

  const validateForm = (): void => {
    const errors: ValidationError[] = [];

    if (serviceTime === null) {
      errors.push(validationErrorsMap.MISSING_MEAL_DATE);
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors(null);
      handleAddMeal();
    }
  };

  const handlePrintStore = (): void => {
    console.log(store.getMeal(), store.getMenuItems());
  };

  const handleClearStore = (): void => {
    store.clearStore();
  };

  return (
    <SafeAreaView>
      <View style={styles.AddMealForm}>
        <Text style={elements.h1}>Add a new meal</Text>
        <View style={styles.LabelInput}>
          <Text style={[elements.label]}>When is your meal?</Text>
          <View style={styles.DatePickerWrapper}>
            <DateTimePicker
              mode="datetime"
              value={serviceTime ?? new Date()}
              onChange={(_event, selectedDate) => setServiceTime(selectedDate)}
            />
          </View>
        </View>
        <View style={styles.ControlsWrapper}>
          <Button title="Add Meal" onPress={() => validateForm()} />
          <Button title="Print Store" onPress={() => handlePrintStore()} />
          <Button title="Clear Store" onPress={() => handleClearStore()} />
        </View>
        <View style={styles.ValidationErrors}>
          <Text style={[elements.errorText]}>
            {validationErrors !== null ? `${validationErrors[0].message}` : ''}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
