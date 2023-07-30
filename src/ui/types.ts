export type OmitKeyReplacer<
  O,
  R extends {
    [K in keyof O]?: keyof R extends keyof O ? any : never;
  }
> = Omit<O, keyof R> & R;
