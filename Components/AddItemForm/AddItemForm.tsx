import * as React from 'react';

import {SafeAreaView, Text, TextInput, View, Button} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {SelectList} from 'react-native-dropdown-select-list';

import {elements} from '../../styles';
import {styles} from './AddItemForm.styles';

import {store} from '../../System/Store';
import {MenuItemFactory} from '../../data';
import {PrepUnit} from '../../data/types';

const prepTimeValues = [
  {key: 1, value: 'hours'},
  {key: 2, value: 'minutes'},
];

export const AddItemForm = () => {
  const navigation = useNavigation();
  const menuItemFactory = new MenuItemFactory();

  const [menuItemName, setMenuItemName] = React.useState<string>('');
  const [prepTime, setPrepTime] = React.useState<string>('');
  const [prepTimeUnit, setPrepTimeUnit] = React.useState<PrepUnit>('minutes');
  const [hasValidationError, setHasValidationError] =
    React.useState<boolean>(false);
  const [storedMenuItems, setStoredMenuItems] = React.useState(
    store.getMenuItems(),
  );

  const handleNewItem = (): void => {
    if (!hasValidationError) {
      const menuItem = menuItemFactory.generateMenuItem(
        menuItemName,
        prepTime,
        prepTimeUnit,
      );
      store.setMenuItem(menuItem);
    }
  };

  const printStore = (): void => {
    const menuItems = store.getMenuItems();
    const meal = store.getMeal();

    console.log(menuItems, meal);
  };

  const clearForm = (): void => {
    setMenuItemName('');
    setPrepTime('');
    setPrepTimeUnit('minutes');
    setHasValidationError(false);
  };

  const validateForm = (): void => {
    if (menuItemName === '' || prepTime === '') {
      setHasValidationError(true);
    } else {
      handleNewItem();
    }
  };

  const handleContinue = (): void => {
    console.log('handleContinue');
    navigation.dispatch(CommonActions.navigate('TimerList'));
  };

  return (
    <SafeAreaView>
      <View style={styles.AddItemForm}>
        <Text style={elements.h1}>Add Item to Menu</Text>
        <View style={styles.LabelInput}>
          <Text style={[elements.label, styles.MealEntryFormLabel]}>
            Item name
          </Text>
          <TextInput
            style={[elements.textInput, styles.MenuItemNameInput]}
            placeholder="What dish or prep item are you making?"
            onChangeText={setMenuItemName}
            value={menuItemName}
          />
        </View>
        <View style={styles.TimeGroup}>
          <Text style={[elements.label, styles.MealEntryFormLabel]}>
            T-Time
          </Text>
          <View style={styles.TimeUnitGroup}>
            <TextInput
              style={[elements.textInput, styles.PrepTimeInput]}
              value={prepTime}
              placeholder="How much prep + cook time?"
              onChangeText={setPrepTime}
            />
            <View style={styles.SelectWrapper}>
              <SelectList
                data={prepTimeValues}
                setSelected={setPrepTimeUnit}
                save="value"
                defaultOption={prepTimeValues[0]}
                placeholder="Select a unit"
              />
            </View>
          </View>
        </View>
        <View style={styles.FormControls}>
          <Button
            title="Add Item"
            onPress={() => validateForm()}
            disabled={hasValidationError}
          />
          <Button
            title="Continue"
            onPress={() => handleContinue()}
            disabled={storedMenuItems.length === 0}
          />
          {/* <Button title="View Store" onPress={printStore} /> */}
          {/* <Button title="Clear Store" onPress={store.clearStore} /> */}
          {/* <Button title="Clear Form" onPress={clearForm} /> */}
        </View>
      </View>
      <View style={styles.ValidationErrors}>
        <Text style={elements.errorText}>
          {hasValidationError ? 'Validation Errors Present' : ''}
        </Text>
      </View>
    </SafeAreaView>
  );
};
