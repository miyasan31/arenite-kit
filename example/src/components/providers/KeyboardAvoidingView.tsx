import type { FC, ReactNode } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView as NativeKeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export const onKeyBoardClose = () => {
  Keyboard.dismiss();
};

type Props = {
  children: ReactNode;
};

export const KeyboardAvoidingView: FC<Props> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={onKeyBoardClose}>
      <NativeKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={defaultStyle.container}
      >
        {props.children}
      </NativeKeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});
