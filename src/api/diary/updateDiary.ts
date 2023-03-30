import {IDiary} from '@type/api';
import logger from '@utils/logger';
import client from '@api/client';
import Utils from '@/utils/index';
import {File} from '@type/file';

export interface updateDiaryEntryVariables extends IDiary {
  newImages: File[];
}

export default function updateDiary(entry: updateDiaryEntryVariables) {
  const form = Utils.transformObjToForm(entry);
  console.log(form);

  return new Promise(resolve => {
    client
      .put(`/diary/${entry.id}`, form, {
        headers: {'Content-Type': 'multipart/form-data', Accept: '*/*'},
      })
      .then(r => resolve(r.data.data))
      .catch(logger.error);
  });
}
