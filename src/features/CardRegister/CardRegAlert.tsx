import {View} from 'react-native';
import {Dialog} from '@rneui/themed';
import {AppText} from '../../components/AppText';

interface Props {
  visible: boolean;
  toggleAlert: () => void;
}

export default function CardRegAlert({visible, toggleAlert}: Props) {
  return (
    <View>
      <Dialog isVisible={visible}>
        <Dialog.Title title="알림!" />
        <AppText>카드/계좌는 최대 5개까지 등록 가능합니다.</AppText>
        <Dialog.Actions>
          <Dialog.Button
            title="확인"
            onPress={() => {
              toggleAlert();
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
