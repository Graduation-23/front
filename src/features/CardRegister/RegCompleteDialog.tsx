import {Dialog} from '@rneui/themed';
import {AppText} from '../../components/AppText';
import {View} from 'react-native';
import {Entry} from '../../constants/screen';
import {useNavigation} from '@react-navigation/native';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
}

const RegCompleteDialog = ({visible, toggleDialog}: Props) => {
  const {navigate} = useNavigation<any>();
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
              navigate(Entry.Content);
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default RegCompleteDialog;
