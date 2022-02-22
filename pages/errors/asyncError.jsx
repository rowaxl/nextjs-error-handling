import { useEffect } from 'react';

const AsyncError = () => {
  useEffect(function () {
    async function doTest() {
      const doAsyncWork = () => Promise.reject(new Error('Async Error'));
      await doAsyncWork();
    }
    doTest();
  }, []);

  return <h1>Client Test 4</h1>;
};

export default AsyncError;
