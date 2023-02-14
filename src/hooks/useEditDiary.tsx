import {useState} from 'react';
import {IDiary} from '../../types/api';

export default function useEditDiary(initialDiary: IDiary) {
  const [diary, setDiary] = useState<IDiary>(initialDiary);

  function set(key: keyof IDiary, value?: IDiary[keyof IDiary]) {
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
