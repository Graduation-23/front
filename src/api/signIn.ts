import client from './client';

export type AuthenticationType = {
  id: string;
  password: string;
};

export default function signIn(authentication: AuthenticationType) {
  return new Promise<any>((res, rej) => {
    client
      .post('/auth/authenticate', authentication)
      .then(data => res(data.data))
      .catch(rej);
  });
}
