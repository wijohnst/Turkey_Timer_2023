import * as React from 'react';

import {Button, SafeAreaView, FlatList, View, Text} from 'react-native';

import {store} from '../../System/Store';
import {useTimer} from '../../hooks/useTimer';
import {styles} from './Timer.style';

export const Timer = (): React.ReactElement => {
  const clearStore = (): void => {
    store.clearStore();
  };

  const tTime = useTimer(store.getMeal());

  return (
    <SafeAreaView>
      <View style={styles.TimerWrapper}>
        <FlatList
          data={Object.entries(tTime).filter(
            item => item[1] !== 0 && !['seconds'].includes(item[0]),
          )}
          renderItem={({index, item}) => <TimerItem item={item} />}
          horizontal={true}
        />
      </View>
      {/* <Button title="Clear Store" onPress={clearStore} /> */}
    </SafeAreaView>
  );
};

type TimerItemProps = {
  item: [string, number];
};

const TimerItem = ({item}: TimerItemProps) => {
  const [unit, value] = item;
  return (
    <View style={styles.TimerItemWrapper}>
      <Text style={styles.TimerDigit}>{value}</Text>
      <Text style={styles.TimerUnit}>{unit.toUpperCase()}</Text>
    </View>
  );
};
