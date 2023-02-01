import client, {setRefreshToken} from './client';

export default function requestRevokeToken(refreshToken: string) {
  // setRefreshToken
  setRefreshToken(refreshToken);
  // request
  return new Promise((resolve, reject) => {
    client
      .post('/auth/revoke')
      .then(value => resolve(value.data))
      .catch(reject);
  });
}
