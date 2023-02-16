import {IDiary} from '../../types/api';
import logger from '../utils/logger';
import client from './client';

export interface updateDiaryEntryVariables extends IDiary {
  newImages: Blob[];
}

export default function updateDiary(entry: updateDiaryEntryVariables) {
  const form = new FormData();

  for (const key in entry) {
    const item = (entry as any)[key];

    if (!Array.isArray(item)) {
      form.append(key, item);
    } else {
      item.forEach((el, i) => {
        form.append(`${key}[${i}]`, el);
        console.log(el);
      });
    }
  }

  return new Promise(resolve => {
    client
      .put(`/diary/${entry.id}`, form, {
        headers: {'Content-Type': 'multipart/form-data', Accept: '*/*'},
      })
      .then(r => resolve(r.data.data))
      .catch(logger.log);
  });
}
