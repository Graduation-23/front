import {useState} from 'react';
import {IDiary} from '@type/api';
import {updateDiaryEntryVariables} from '@api/updateDiary';

type IDiaryForUpdate = updateDiaryEntryVariables;

export default function useEditDiary(initialDiary: IDiary) {
  const [diary, setDiary] = useState<IDiaryForUpdate>({
    ...initialDiary,
    imageUrls: initialDiary.imageUrls || [],
    newImages: [],
  });

  function set(
    key: keyof IDiaryForUpdate,
    value?: IDiaryForUpdate[keyof IDiaryForUpdate],
  ) {
    setDiary(prev => ({...prev, [key]: value}));
  }

  return {
    diary,
    set,
    bind(key: Parameters<typeof set>[0]) {
      return set.bind(null, key) as (value: Parameters<typeof set>[1]) => void;
    },
  };
}
