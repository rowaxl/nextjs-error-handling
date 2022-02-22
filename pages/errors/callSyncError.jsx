import { useEffect } from 'react';
import { someLogicThrowError } from '../../utils/logic';

const CallSyncErrorPage = () => {
  useEffect(() => {
    someLogicThrowError();
  }, []);

  return (
    <>
      <h1>Some Sync Logic Error will be thrown</h1>
    </>
  );
};

export default CallSyncErrorPage;
