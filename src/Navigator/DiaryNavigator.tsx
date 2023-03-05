import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppText} from '@components/AppText';
import {Diary} from '@constants/screen';
import DiaryReadScreen from '@screens/DiaryReadScreen';
import DiaryScreen from '@screens/DiaryScreen';
import DiaryWriteScreen from '@screens/DiaryWriteScreen';
import DiaryWriteButton from '@features/Diary/Header/DiaryWriteButton';
import DiaryUpdateButton from '@features/Diary/Header/DiaryUpdateButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Stack = createNativeStackNavigator();

export default function DiaryNavigator() {
  return (
    <Stack.Navigator initialRouteName={Diary.Main}>
      <Stack.Screen
        name={Diary.Main}
        component={DiaryScreen}
        options={{
          headerTitle() {
            return <AppText.Subtitle family="round-d" text="Diary" />;
          },
          headerRight() {
            return <DiaryWriteButton />;
          },
        }}
      />
      <Stack.Screen
        name={Diary.Write}
        component={DiaryWriteScreen}
        options={({route, navigation}) => ({
          headerBackVisible: false,
          headerTitle() {
            return <AppText.Subtitle family="round-d" text="Write" />;
          },
          headerRight() {
            return (
              <Icon
                name="done"
                size={25}
                onPress={() => {
                  if (route && navigation) {
                    navigation.navigate(Diary.Read, {
                      diaryId: (route.params as any)?.diaryId,
                    });
                  }
                }}
                style={{color: '#1393cf'}}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name={Diary.Read}
        component={DiaryReadScreen}
        options={({route}) => ({
          headerTitle() {
            return <AppText.Subtitle family="round-d" text="Today's" />;
          },
          headerRight() {
            return <DiaryUpdateButton id={(route.params as any).diaryId} />;
          },
        })}
      />
    </Stack.Navigator>
  );
}
