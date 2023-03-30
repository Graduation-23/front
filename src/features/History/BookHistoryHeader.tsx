import {AppText} from '@/components/AppText';

import {Platform, StyleSheet, View} from 'react-native';

interface BookHistoryHeaderProps {}

export default function BookHistoryHeader({}: BookHistoryHeaderProps) {
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  yearText: {
    width: '90%',
    padding: 10,
    backgroundColor: '#c8e6fe',
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
});
