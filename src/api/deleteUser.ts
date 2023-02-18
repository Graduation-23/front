import client from './client';

export default function deleteUser(password: {password: string}) {
  return new Promise<any>((resolve, reject) => {
    client
      .delete('/user', {params: password})
      .then(res => resolve(res.data))
      .catch(() => console.log(reject, '왕'));
  });
}
