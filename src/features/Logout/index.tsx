import {Dialog} from '@rneui/themed';
import {View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {AppText} from '../../components/AppText';
import {saveRefreshToken} from '../../utils/refreshToken';
import userAtom from '../../atom/userAtom';
import {useCallback} from 'react';
//import DialogActions from '../../components/DialogActions';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
  nav: any;
}

const Logout = ({visible, toggleDialog}: Props) => {
  const setUser = useSetRecoilState(userAtom);

  const handlePress = useCallback(() => {
    saveRefreshToken('').then(() => {
      setUser({} as any);
      console.log('로그아웃 로직');
      toggleDialog();
    });
  }, [setUser, toggleDialog]);

  return (
    <View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="로그아웃" />
        <AppText text="로그아웃 하시겠습니까?" />
        <Dialog.Actions>
          <Dialog.Button title="예" onPress={handlePress} />
          <Dialog.Button
            title="아니오"
            onPress={() => {
              toggleDialog();
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default Logout;
