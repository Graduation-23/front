import {atom} from 'recoil';
import {IFinance} from '@type/api';

const financeAtom = atom<IFinance[] | null>({
  key: 'financeAtom',
  default: null,
});

export default financeAtom;
