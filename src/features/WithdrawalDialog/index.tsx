import {Dialog} from '@rneui/themed';
import {View, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';
import deleteUser from '@/api/deleteUser';
import {AppText} from '@/components/AppText';
import {useSetRecoilState} from 'recoil';
import userAtom from '@/atom/userAtom';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
}

const WithdrawalDialog = ({visible, toggleDialog}: Props) => {
  const [userPw, setUserPw] = useState('');
  const setUser = useSetRecoilState(userAtom);

  const onChangeInput = (text: string) => {
    setUserPw(text);
  };
  return (
    <View>
      <Dialog
        isVisible={visible}
        onBackdropPress={toggleDialog}
        overlayStyle={styles.DialogContainer}>
        <AppText.Title family="round-b" text="회원 탈퇴" style={styles.Title} />
        <AppText family="round-b">
          탈퇴를 원하시면 비밀번호를 입력해주세요.
        </AppText>
        <TextInput
          placeholder="비밀번호를 입력"
          value={userPw}
          onChangeText={onChangeInput}
          secureTextEntry={true}
          style={styles.Input}
        />
        <Dialog.Actions>
          <Dialog.Button
            title="취소"
            onPress={() => {
              toggleDialog();
            }}
          />
          <Dialog.Button
            title="탈퇴"
            onPress={() => {
              deleteUser({password: userPw}).then(() => {
                console.log('??');
                setUser(null);
              });
              toggleDialog();
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default WithdrawalDialog;

const styles = StyleSheet.create({
  DialogContainer: {
    borderRadius: 20,
  },
  Title: {
    marginBottom: 10,
  },
  Input: {
    fontFamily: 'Ownglyph_yoxaiov-Rg',
    fontSize: 20,
    borderBottomWidth: 0.5,
  },
});
