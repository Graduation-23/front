import client from './client';

export type IUser = {
  id: string;
  nickname: string;
  created: Date;
  accessType: string;
  fresh: boolean;
};

export default function fetchUserInfo(fresh = false) {
  return new Promise<IUser>((resolve, reject) => {
    client
      .get('/user/')
      .then(response => {
        response.data.data.fresh = fresh;
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
