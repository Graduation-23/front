import {useState} from 'react';
import {AuthenticationType} from '@api/signIn';

export default function useSignIn() {
  const [auth, setAuth] = useState<AuthenticationType>({
    id: '',
    password: '',
  });

  return {
    auth,
    hlr: {
      setId(id: string) {
        setAuth(prev => ({...prev, id}));
      },
      setPassword(password: string) {
        setAuth(prev => ({...prev, password}));
      },
    },
  };
}
