import {ButtonProps, Button} from '@rneui/base';
// import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {StyleSheet} from 'react-native';

interface ExternalLinkButtonProps extends ButtonProps {
  url: string;
}

const ExternalLinkButton = ({url, ...props}: ExternalLinkButtonProps) => {
  return (
    <Button
      {...props}
      onPress={() => {
        InAppBrowser.open(url).catch(err => console.log(err));
      }}
      buttonStyle={styles.Btn}
    />
  );
};

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: '#bbdefb',
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ExternalLinkButton;
