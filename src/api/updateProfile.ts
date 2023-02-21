import client from './client';
import logger from '@/utils/logger';
import {File} from '@type/file';

export default function updateProfile(profile: File) {
  const form = new FormData();

  form.append('profilePic', profile);

  return new Promise(resolve => {
    client
      .put(`/user/profile-pic`, form, {
        headers: {'Content-Type': 'multipart/form-data', Accept: '*/*'},
      })
      .then(res => resolve(res.data.data))
      .catch(logger.error);
  });
}
