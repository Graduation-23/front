import {Dialog, Input} from '@rneui/themed';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';
import deleteUser from '@/api/deleteUser';
import {AppText} from '@/components/AppText';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
}

const WithdrawalDialog = ({visible, toggleDialog}: Props) => {
  const [userPw, setUserPw] = useState('');
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
        <AppText family="round-b">정말 탈퇴 하시겠습니까?</AppText>
        <TextInput
          placeholder="본인 비밀번호를 입력해주세요."
          value={userPw}
          onChangeText={onChangeInput}
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
              deleteUser({password: userPw});
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
