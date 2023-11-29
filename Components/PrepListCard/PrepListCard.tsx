import * as React from 'react';
import {FlatList, Text, View} from 'react-native';

import {PrepItem} from '../../data/PrepItem/PrepItem';

import {elements} from '../../styles';
import {styles} from './PrepListCard.style';
import {PrepListMember} from './PrepListMember';

export enum HeadingTextEnum {
  DO_NOW = 'do now',
  TO_DO = 'to do',
  DONE = 'done',
}

type Props = {
  headingText: HeadingTextEnum;
  prepListItems: PrepItem[];
};

const renderPrepListMember = ({item}: {item: PrepItem}) => {
  return (
    <PrepListMember
      prepItem={item}
      actionClick={{
        buttonTitle: 'Click Me',
        handler: () => console.log('Click...'),
      }}
    />
  );
};

export const PrepListCard = ({
  headingText,
  prepListItems,
}: Props): React.ReactElement => {
  return (
    <View style={styles.PrepListCard}>
      <Text style={elements.h1}>{headingText.toUpperCase()}</Text>
      <View style={styles.FlatlistWrapper}>
        <FlatList
          data={prepListItems}
          renderItem={renderPrepListMember}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
