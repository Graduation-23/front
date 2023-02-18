import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppText} from '@components/AppText';
import {Diary} from '@constants/screen';
import DiaryReadScreen from '@screens/DiaryReadScreen';
import DiaryScreen from '@screens/DiaryScreen';
import DiaryWriteScreen from '@screens/DiaryWriteScreen';
import DiaryWriteButton from '@features/Diary/Header/DiaryWriteButton';
import DiaryUpdateButton from '@features/Diary/Header/DiaryUpdateButton';

const Stack = createNativeStackNavigator();

export default function DiaryNavigator() {
  return (
    <Stack.Navigator initialRouteName={Diary.Main}>
      <Stack.Screen
        name={Diary.Main}
        component={DiaryScreen}
        options={{
          title: '일기',
          headerRight() {
            return <DiaryWriteButton />;
          },
        }}
      />
      <Stack.Screen
        name={Diary.Write}
        component={DiaryWriteScreen}
        options={{
          headerTitle() {
            return <AppText.Subtitle family="round-b" text="읽기 편집" />;
          },
        }}
      />
      <Stack.Screen
        name={Diary.Read}
        component={DiaryReadScreen}
        options={({route}) => ({
          headerRight() {
            return <DiaryUpdateButton id={(route.params as any).diaryId} />;
          },
        })}
      />
    </Stack.Navigator>
  );
}
