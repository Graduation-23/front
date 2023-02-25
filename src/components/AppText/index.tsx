import {TextProps} from '@rneui/base';
import {AppTextBase} from './AppTextBase';
import {AppTextSubtitle} from './AppTextSubtitle';
import {AppTextTitle} from './AppTextTitle';

export interface AppTextProps extends TextProps {
  text?: string;
  /**
   * - round-a : Cafe24Oneprettynight
   * - round-b : 온글잎 으앙
   * - round-c : 온글잎 하곰체
   * - round-d : 온글잎 케이고딩민서체
   */
  family?: 'round-a' | 'round-b' | 'round-c' | 'round-d';
  ul?: boolean;
  center?: boolean;
  viewStyle?: object;
  bold?: boolean;
  mh?: number;
  mv?: number;
}

export const AppText = Object.assign(AppTextBase, {
  Title: AppTextTitle,
  Subtitle: AppTextSubtitle,
});
