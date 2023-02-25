import {ButtonProps, Button} from '@rneui/base';
import {Linking} from 'react-native';
// import InAppBrowser from 'react-native-inappbrowser-reborn';

interface ExternalLinkButtonProps extends ButtonProps {
  url: string;
}

const ExternalLinkButton = ({url, ...props}: ExternalLinkButtonProps) => {
  return (
    <Button
      {...props}
      onPress={() => {
        Linking.openURL(url);
        // InAppBrowser.open(url).catch(err => console.log(err));
      }}
    />
  );
};

export default ExternalLinkButton;
