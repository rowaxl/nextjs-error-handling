import { useEffect } from 'react';
import { getOperation } from '../../utils/api';

const CallAsyncErrorPage = () => {
  useEffect(function () {
    async function doTest() {
      const result = await getOperation();

      console.log(result);
    }
    doTest();
  }, []);

  return <h1>Async Error Test</h1>;
};

export default CallAsyncErrorPage;
