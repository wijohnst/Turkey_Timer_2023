import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  PrepListMember: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextWrapper: {
    flexGrow: 1,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  MemberText: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  HighLight: {
    backgroundColor: 'red',
    color: 'white',
  },
});

export const getHighlightStyle = (isHighlighted: boolean) => {
  return {
    ...(isHighlighted && styles.HighLight),
  };
};
