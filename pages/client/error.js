import { useEffect } from 'react';

const ErrorComponent = () => {
  const snycError = () => {
    throw new Error('Render Error');
  };

  useEffect(() => {
    snycError();
  }, []);

  return <>renderError</>;
};

const Test1 = () => {
  return (
    <div>
      <h1>Error Throwed when component mounted</h1>
      <ErrorComponent />
    </div>
  );
};

export default Test1;
