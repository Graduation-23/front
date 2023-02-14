import {IDiary} from '../../types/api';
import client from './client';

interface updateDiaryEntryVariables extends IDiary {}

export default function updateDiary({id, ...entry}: updateDiaryEntryVariables) {
  return new Promise((resolve, reject) => {
    client
      .put(`/diary/${id}`, entry)
      .then(r => resolve(r.data.data))
      .catch(reject);
  });
}
