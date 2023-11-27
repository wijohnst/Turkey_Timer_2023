import * as React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Timer} from '../Timer/Timer';
import {PrepList} from '../PrepList/PrepList';

export const TimerList = (): React.ReactElement => {
  return (
    <SafeAreaView>
      <View>
        <Timer />
        <PrepList />
      </View>
    </SafeAreaView>
  );
};
