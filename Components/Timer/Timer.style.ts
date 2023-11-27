import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  TimerWrapper: {
    backgroundColor: '#ABABAB',
    display: 'flex',
    alignItems: 'center',
  },
  TimerItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  TimerDigit: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'American Typewriter',
  },
  TimerUnit: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'American Typewriter',
  },
});
