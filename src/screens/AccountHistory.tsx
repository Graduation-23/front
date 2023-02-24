import HistoryView from '@/features/History/HistoryView';
import {useWidgetByRange, useWidgets} from '@/query/widget';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import BookHistoryHeader from '../features/History/BookHistoryHeader';

interface AccountHistoryProps {}

const CurrentYear = new Date().getFullYear();

export default function AccountHistoryScreen({}: AccountHistoryProps) {
  const [targetYear, setTargetYear] = useState(CurrentYear);
  const {data} = useWidgets();

  return (
    <ScrollView>
      <BookHistoryHeader
        currentYear={targetYear}
        setCurrentYear={setTargetYear}
      />
      <HistoryView widgets={data || []} />
    </ScrollView>
  );
}
