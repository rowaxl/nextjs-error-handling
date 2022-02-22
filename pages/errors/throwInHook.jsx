import { someHookMightError } from '../../utils/hook';

const ThrowErrorInHook = () => {
  const { result } = someHookMightError();
  console.log('ThrowErrorInHook');

  return (
    <>
      <h1>Some Sync Logic Error will be thrown</h1>
    </>
  );
};

export default ThrowErrorInHook;
