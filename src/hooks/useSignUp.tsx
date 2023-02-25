import {useState} from 'react';
import {NewAuthenticationType} from '@api/signUp';

export interface SignUpDataType extends NewAuthenticationType {
  pwForCheck: string;
  correct: boolean;
}

export default function useSignUp() {
  const [user, setUser] = useState<SignUpDataType>({
    id: '',
    password: '',
    nickname: '',
    pwForCheck: '',
    correct: true,
  });

  return {
    user,
    hlr: {
      setId(id: string) {
        setUser(prev => ({...prev, id}));
      },
      setPassword(password: string) {
        setUser(prev => ({...prev, password}));
      },
      setNickname(nickname: string) {
        setUser(prev => ({...prev, nickname}));
      },
      setPwForCheck(pwForCheck: string) {
        setUser(prev => ({
          ...prev,
          pwForCheck,
          correct: pwForCheck === prev.password,
        }));
      },
    },
    getUser() {
      return {
        id: user.id,
        password: user.password,
        nickname: user.nickname,
      } as NewAuthenticationType;
    },
  };
}
