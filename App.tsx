import * as React from 'react';

import {Text, SafeAreaView, View} from 'react-native';

import {styles} from './App.style';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.app}>
        <Text>Turkey Timer 2023</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
