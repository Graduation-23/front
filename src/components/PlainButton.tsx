import {Button, ButtonProps} from '@rneui/base';
import {StyleSheet} from 'react-native';

interface PlainButtonProps extends ButtonProps {
  debug?: boolean;
}

const PlainButton = ({style, debug, ...props}: PlainButtonProps) => {
  return (
    <Button
      {...props}
      buttonStyle={[styles.base, debug && styles.debug, style]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'transparent',
  },
  debug: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default PlainButton;
