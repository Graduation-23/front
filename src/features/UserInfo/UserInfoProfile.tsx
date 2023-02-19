import fetchUserInfo from '@/api/fetchUserInfo';
import userAtom from '@/atom/userAtom';
import {AppText} from '@/components/AppText';
import ImageUpload from '@/components/ImageUpload';
import {useUpdateProfile} from '@/query/user';
import {Photo} from '@/utils/photo';
import {Image} from 'react-native';
import {useRecoilState} from 'recoil';

type UserInfoProfileProps = {};

export default function UserInfoProfile({}: UserInfoProfileProps) {
  const {mutateAsync: save} = useUpdateProfile();
  const [user, setUser] = useRecoilState(userAtom);

  const setImages = (Profile: Photo[]) => {
    if (Array.isArray(Profile) && Profile.length === 1) {
      if (Profile[0]) {
        save(Profile[0]).then(() => {
          fetchUserInfo().then(setUser);
        });
      }
    }
  };
  console.log(user?.profilePicUrl);

  return (
    <>
      <ImageUpload selectionLimit={1} setNewImages={setImages}>
        {user?.profilePicUrl ? (
          <Image
            source={{uri: user.profilePicUrl}}
            style={{width: '100%', height: '100%'}}
          />
        ) : (
          <AppText.Subtitle text="Profile" />
        )}
      </ImageUpload>
      {/* <TouchableOpacity
        onPress={() => {
          
        }}>
        <AppText text="저장" />
      </TouchableOpacity> */}
    </>
  );
}