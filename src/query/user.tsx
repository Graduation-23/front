import updateBirth from '@/api/updateBirth';
import updateProfile from '@/api/updateProfile';
import {useQueryClient, useMutation} from 'react-query';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(['user-info'], updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('user-info');
      console.log('프로필 넣기 성공');
    },
    onError: () => {
      console.log('프로필 넣기 실패');
    },
  });
  return mutation;
};

export const useUpdateBirth = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(['user-info'], updateBirth, {
    onSuccess: () => {
      queryClient.invalidateQueries('user-info');
      console.log('생일 등록 성공');
    },
    onError: () => {
      console.log('생일 등록 실패');
    },
  });
  return mutation;
};
