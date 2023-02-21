import fetchWidgetById from '@/api/widget/fetchWidgetById';
import issueWidget from '@/api/widget/issueWidget';
import updateWidget from '@/api/widget/updateWidget';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import fetchWidget, {WidgetRangeType} from '../api/widget/fetchWidget';

const GROUP = 'widget';

export const useIssueWidget = () => {
  const queryClient = useQueryClient();

  return useMutation([GROUP], issueWidget, {
    onSuccess: () => queryClient.invalidateQueries(GROUP),
  });
};

export const useWidgetById = (id: number, enableRefetching: boolean = true) => {
  return useQuery([GROUP, id], () => fetchWidgetById(id), {
    enabled: enableRefetching,
  });
};

export const useWidget = (type: WidgetRangeType) => {
  return useQuery([GROUP], () => fetchWidget(type));
};

export const useUpdateWidget = (id: number) => {
  return useMutation([GROUP, id], updateWidget);
};
