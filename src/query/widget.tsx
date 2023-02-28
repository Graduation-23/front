import deleteWidget from '@/api/widget/deleteWidget';
import fetchWidget from '@/api/widget/fetchWidget';
import fetchWidgetById from '@/api/widget/fetchWidgetById';
import fetchWidgetByRange, {
  FetchSearchOptions,
} from '@/api/widget/fetchWidgetByRange';
import issueWidget from '@/api/widget/issueWidget';
import updateWidget from '@/api/widget/updateWidget';
import Utils from '@/utils';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import fetchWidgetWithDate from '../api/widget/fetchWidgetWithDate';

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

export const useWidgetWithDate = (date: Date) => {
  const [year, month] = Utils.destructDate(date);
  return useQuery([GROUP, year, month], () => fetchWidgetWithDate(year, month));
};

export const useWidgets = () => {
  return useQuery([GROUP], fetchWidget);
};

export const useWidgetByRange = (options: FetchSearchOptions | null) => {
  return useQuery([GROUP, options], () => {
    if (options) {
      return fetchWidgetByRange(options);
    }
    return [];
  });
};

export const useUpdateWidget = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation([GROUP, id], updateWidget, {
    onSuccess: () => queryClient.invalidateQueries(GROUP),
  });
};

export const useDeleteWidget = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, number>([GROUP], deleteWidget, {
    onSuccess: () => queryClient.invalidateQueries(GROUP),
  });
};
