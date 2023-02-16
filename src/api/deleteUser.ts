import client from './client';

export default function deleteUser(password: string) {
  return new Promise<any>((resolve, reject) => {
    client
      .delete(`/user/${password}`)
      .then(res => resolve(res.data))
      .catch(reject);
  });
}
