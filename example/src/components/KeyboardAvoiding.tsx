import type { FC, ReactNode } from 'react';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
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

export const KeyboardAvoiding: FC<Props> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={onKeyBoardClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={defaultStyle.container}
      >
        {props.children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});
