import * as React from 'react';

import {Button, SafeAreaView, Text, View} from 'react-native';

import {store} from '../../System/Store';
import {useTimer} from '../../hooks/useTimer';

export const Timer = (): React.ReactElement => {
  const clearStore = (): void => {
    store.clearStore();
  };

  const tTime = useTimer(store.getMeal());

  console.log(tTime);

  return (
    <SafeAreaView>
      <View>
        <Text>Timer</Text>
        <Button title="Clear Store" onPress={clearStore} />
      </View>
    </SafeAreaView>
  );
};
