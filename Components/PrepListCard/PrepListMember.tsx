import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {PrepItem} from '../../data/PrepItem/PrepItem';
import {styles, getHighlightStyle} from './PrepListMember.style';

type ActionClick = {
  buttonTitle: string;
  handler: () => void;
};
type Props = {
  prepItem: PrepItem;
  actionClick: ActionClick;
};

export const PrepListMember = ({
  prepItem,
  actionClick,
}: Props): React.ReactElement => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
    actionClick.handler();
  };

  return (
    <View style={[styles.PrepListMember]}>
      <View style={[styles.TextWrapper, getHighlightStyle(isPressed)]}>
        <Text
          style={[styles.MemberText]}
          onLongPress={() => setIsPressed(!isPressed)}>
          {prepItem.name}
        </Text>
      </View>
      {isPressed && (
        <View>
          <Button title={actionClick.buttonTitle} onPress={handleClick} />
        </View>
      )}
    </View>
  );
};
