import updateBirth from '@/api/updateBirth';
import updateProfile from '@/api/updateProfile';
import {useQueryClient, useMutation} from 'react-query';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(['user-info'], updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('user-info');
    },
  });
  return mutation;
};

export const useUpdateBirth = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(['user-info'], updateBirth, {
    onSuccess: () => {
      queryClient.invalidateQueries('user-info');
    },
  });
  return mutation;
};
