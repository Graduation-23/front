import {Dialog, Input} from '@rneui/themed';
import {View, Text} from 'react-native';
import {useState} from 'react';
import deleteUser from '@api/deleteUser';

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
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="회원 탈퇴" />
        <Text>회원 탈퇴 하시겠습니까?</Text>
        <Input
          placeholder="본인 비밀번호를 입력해주세요."
          value={userPw}
          onChangeText={onChangeInput}
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
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default WithdrawalDialog;
