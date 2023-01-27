import {StyleSheet} from 'react-native';
import {AppTextBase} from './AppTextBase';

export const AppTextTitle: typeof AppTextBase = ({style, ...props}) => {
  return <AppTextBase {...props} style={[styles.title, style]} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
