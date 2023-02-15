import {StyleSheet} from 'react-native';
import {AppTextBase} from './AppTextBase';

export const AppTextSubtitle: typeof AppTextBase = ({style, ...props}) => {
  return <AppTextBase {...props} style={[styles.title, style]} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
