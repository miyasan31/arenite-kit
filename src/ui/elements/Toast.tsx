import {
  createContext,
  memo,
  ReactNode,
  startTransition,
  useCallback,
  useContext,
  useState,
} from 'react';
import { createAreniteStyle } from '../../style';
import { FadeUp } from '../animations';
import { ActivityIndicator, Text } from '../primitives';
import { HStack } from './HStack';
import { VStack } from './VStack';

const DEFAULT_TOAST_DURATION = 4000;

export type ToastConfig = {
  id: string;
  message: string;
  type: 'loading' | 'error' | 'success';
};

export type ToastContextType = {
  toasts: ToastConfig[];
  topOffset: number;
  addToast: (toast: ToastConfig) => void;
  updateToast: (
    id: string,
    toast: Exclude<ToastConfig, 'id' | 'type' | 'duration'>
  ) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
};

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  topOffset: 0,
  addToast: () => {},
  updateToast: () => {},
  removeToast: () => {},
  clearToasts: () => {},
});

export const useToast = () => useContext(ToastContext);

const defaultOptionalToastConfig = {
  id: Math.random().toString(36),
};

export type ToastProviderProps = {
  topOffset?: number;
  children: ReactNode;
};

const ToastProvider = (props: ToastProviderProps) => {
  const { children, topOffset = 58 } = props;

  const [toasts, setToasts] = useState<ToastConfig[]>([]);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToast) => prevToast.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((toast: ToastConfig) => {
    const newToast: ToastConfig = {
      ...defaultOptionalToastConfig,
      ...toast,
    };

    startTransition(() => {
      setToasts((prevToast) => {
        return prevToast.reduce(
          (acc, cur) => {
            if (cur.id === newToast.id) {
              return acc;
            }
            return [...acc, cur];
          },
          [newToast]
        );
      });
    });

    if (newToast.type === 'loading') {
      return;
    }

    startTransition(() => {
      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((prevToast) => prevToast.id !== newToast.id)
        );
      }, DEFAULT_TOAST_DURATION);
    });
  }, []);

  const updateToast = useCallback(
    (toastId: string, updatedToast: ToastConfig) => {
      startTransition(() => {
        setToasts((prevToasts) => {
          return prevToasts.map((prevToast) => {
            if (prevToast.id === toastId) {
              return { ...prevToast, ...updatedToast };
            }
            return prevToast;
          });
        });
      });

      startTransition(() => {
        setTimeout(() => {
          setToasts((prevToasts) =>
            prevToasts.filter((prevToast) => prevToast.id !== toastId)
          );
        }, DEFAULT_TOAST_DURATION);
      });
    },
    []
  );

  return (
    <ToastContext.Provider
      value={{
        toasts,
        topOffset,
        addToast,
        updateToast,
        removeToast,
        clearToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export type ToastProps = ToastConfig;

const ToastComponent = memo((props: ToastProps) => {
  const { type, message } = props;

  const StatusIcon = {
    loading: <ActivityIndicator size={12} color="primary" />,
    success: <Text color="success">✓</Text>,
    error: <Text color="error">X </Text>,
  }[type];

  return (
    <FadeUp>
      <HStack
        gap={12}
        align={'center'}
        justify={'space-between'}
        bg="bg2"
        style={[defaultStyle.toast]}
      >
        {StatusIcon}
        <Text style={defaultStyle.message} color="color1">
          {message}
        </Text>
      </HStack>
    </FadeUp>
  );
});

const ToastsComponent = () => {
  const { toasts, topOffset } = useContext(ToastContext);

  const topOffsetStyle = {
    top: topOffset || 58,
  };

  return (
    <VStack gap={8} style={[defaultStyle.toastContainer, topOffsetStyle]}>
      {toasts.map((toast) => (
        <ToastComponent {...toast} key={toast.id} />
      ))}
    </VStack>
  );
};

const defaultStyle = createAreniteStyle({
  toastContainer: {
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
    paddingHorizontal: 8,
  },
  toast: {
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  message: {
    flex: 1,
    fontSize: 16,
  },
});

ToastsComponent.displayName = 'arenite-kit.ui.Toast';
ToastsComponent.Provider = ToastProvider;

export const Toast = ToastsComponent;
