import { useEffect } from 'react';

const ErrorComponent = () => {
  console.log('in Error Component');
  const snycError = () => {
    throw new Error('Render Error in Component');
  };

  useEffect(() => {
    snycError();
  }, []);

  return <>renderError</>;
};

const ErrorInComponentPage = () => {
  console.log('in Error Page');
  return (
    <div>
      <h1>Error Throwed when component mounted</h1>
      <ErrorComponent />
    </div>
  );
};

export default ErrorInComponentPage;
