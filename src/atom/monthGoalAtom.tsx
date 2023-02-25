import {atom} from 'recoil';
import {IGoal} from '@type/api';

const monthGoalAtom = atom<IGoal[] | null>({
  key: 'monthGoalAtom',
  default: null,
});

export default monthGoalAtom;
