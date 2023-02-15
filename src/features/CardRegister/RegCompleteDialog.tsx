import {Dialog} from '@rneui/themed';
import {AppText} from '../../components/AppText';
import {View} from 'react-native';
import {Entry} from '../../constants/screen';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
  nav: any;
}

const RegCompleteDialog = ({visible, toggleDialog, nav}: Props) => {
  return (
    <View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="알림!" />
        <AppText>
          생일과 카드/계좌는 설정 탭에서 추가 및 변경 가능합니다.
        </AppText>
        <Dialog.Actions>
          <Dialog.Button
            title="확인"
            onPress={() => {
              toggleDialog();
              //nav.navigate('Birth');
              nav.navigate(Entry.Content);
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default RegCompleteDialog;
