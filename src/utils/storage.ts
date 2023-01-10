import AsyncStorage from '@react-native-async-storage/async-storage';
import {errorHandler} from './error';

export const isEmpty = function (value: any) {
  if (!value || (typeof value === 'string' && value.length === 0)) {
    return true;
  }

  return false;
};

export async function setItemAsync<T>(key: string, value: T) {
  if (isEmpty(key) || isEmpty(value)) {
    throw Error('Async Storage Helper Error: Empty key or value');
  }

  return await AsyncStorage.setItem(key, JSON.stringify(value)).catch(
    errorHandler,
  );
}

export async function getItemAsync<T>(key: string) {
  if (isEmpty(key)) {
    throw Error('Async Storage Helper Error: Empty key');
  }

  const value = await AsyncStorage.getItem(key).catch(errorHandler);

  if (!value) {
    throw Error('Async Storage Helper Error: Storage Value is Null');
  }

  return JSON.parse(value) as T;
}
