import {Dialog, Input} from '@rneui/themed';
import {View, Text} from 'react-native';
import {useState} from 'react';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
}

const WithdrawalDialog = ({visible, toggleDialog}: Props) => {
  const [userId, setUserId] = useState('');
  const onChangeInput = (text: string) => {
    setUserId(text);
  };
  return (
    <View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="회원 탈퇴" />
        <Text>회원 탈퇴 하시겠습니까?</Text>
        <Input
          placeholder="본인 ID를 작성해주세요."
          value={userId}
          onChangeText={onChangeInput}
        />
        <Dialog.Actions>
          <Dialog.Button
            title="취소"
            onPress={() => {
              toggleDialog();
              console.log('취소');
            }}
          />
          <Dialog.Button
            title="탈퇴"
            onPress={() => {
              if (userId === 'id') {
                toggleDialog();
                console.log(userId, '탈퇴!');
              } else {
                console.log(userId, '안대');
              }
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default WithdrawalDialog;
