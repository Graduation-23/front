import {TextProps} from 'react-native';
import {AppTextBase} from './AppTextBase';
import {AppTextTitle} from './AppTextTitle';

export interface AppTextProps extends TextProps {
  children: string;
  /**
   * - round-a : Cafe24Oneprettynight
   * - round-b : 온글잎 으앙
   * - round-c : 온글잎 하곰체
   * - round-d : 온글잎 케이고딩민서체
   */
  family?: 'round-a' | 'round-b' | 'round-c' | 'round-d';
}

export const AppText = Object.assign(AppTextBase, {
  Title: AppTextTitle,
});
