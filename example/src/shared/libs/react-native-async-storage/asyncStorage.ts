import AsyncStorage from '@react-native-async-storage/async-storage';

const set = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

const get = async <T>(key: string): Promise<T | null> => {
  return (await AsyncStorage.getItem(key)) as T;
};

const remove = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const asyncStorage = {
  set,
  get,
  remove,
};
