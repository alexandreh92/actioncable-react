import React, {
  createContext,
  useMemo,
  useImperativeHandle,
  forwardRef,
} from 'react';

import * as ActionCable from 'actioncable';

interface ActionCableContextProps {
  consumer: ActionCable.Cable;
}

export const ActionCableContext = createContext<ActionCableContextProps>(
  {} as ActionCableContextProps,
);

interface ActionCableProviderProps {
  children: React.ReactNode;
  url: string;
}

interface ActionCableProviderHandles {
  consumer: ActionCable.Cable;
}

export const ActionCableProvider = forwardRef<
  ActionCableProviderHandles,
  ActionCableProviderProps
>(({ children, url }, ref) => {
  const consumer = useMemo(() => ActionCable.createConsumer(url), [url]);

  const value = useMemo(
    () => ({
      consumer,
    }),
    [consumer],
  );

  useImperativeHandle(ref, () => ({ consumer }), [consumer]);

  return (
    <ActionCableContext.Provider value={value}>
      {children}
    </ActionCableContext.Provider>
  );
});
