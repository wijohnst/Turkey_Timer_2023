import * as React from 'react';

import {Button, SafeAreaView, Text, View} from 'react-native';

import {store} from '../../System/Store';

export const Timer = (): React.ReactElement => {
  const clearStore = (): void => {
    store.clearStore();
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Timer</Text>
        <Button title="Clear Store" onPress={clearStore} />
      </View>
    </SafeAreaView>
  );
};
