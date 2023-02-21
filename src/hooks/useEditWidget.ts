import {useCallback, useState} from 'react';

type WidgetKey = keyof Widget.Type;

export default function useEditWidget(initial: Widget.Type) {
  const [widget, setWidget] = useState<Omit<Widget.Type, 'totalCost'>>(initial);

  const set = useCallback(
    (key: WidgetKey, value: Widget.Type[WidgetKey]) => {
      setWidget(prev => ({...prev, [key]: value}));
    },
    [setWidget],
  );

  const bind = useCallback(
    (key: WidgetKey) => {
      return set.bind(null, key);
    },
    [set],
  );

  return {
    widget,
    set,
    bind,
  };
}
