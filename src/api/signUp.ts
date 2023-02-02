import client from './client';

export type NewAuthenticationType = {
  id: string;
  password: string;
  nickname: string;
};

export default function signUp(authentication: NewAuthenticationType) {
  return new Promise((res, rej) => {
    client
      .post('/auth/signup', authentication)
      .then(data => res(data.data))
      .catch(rej);
  });
}
