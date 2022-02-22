import { useEffect } from 'react';

export const someHookMightError = () => {
  const result = '123';

  useEffect(() => {
    try {
      throw new Error('Error in Hook');
    } catch (e) {
      throw e;
    }
  }, []);

  return { result };
};
