import {IDiary} from '../../types/api';
import client from './client';

interface updateDiaryEntryVariables extends IDiary {}

export default function updateDiary(entry: updateDiaryEntryVariables) {
  const form = new FormData();

  for (const key in entry) {
    const item = (entry as any)[key];

    if (!Array.isArray(item)) {
      form.append(key, item);
    } else {
      item.forEach((el, i) => {
        form.append(`${key}[${i}]`, el);
      });
    }
  }

  return new Promise((resolve, reject) => {
    client
      .put(`/diary/${entry.id}`, form, {
        headers: {'Content-Type': 'multipart/form-data', Accept: '*/*'},
      })
      .then(r => resolve(r.data.data))
      .catch(reject);
  });
}
