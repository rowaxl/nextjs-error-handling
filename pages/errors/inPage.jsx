import { useEffect } from 'react';

const ErrorInPage = () => {
  console.log('Test Page');
  useEffect(() => {
    throw new Error('Client error in useEffect');
  }, []);

  return <h1>Client Test 3</h1>;
};

export default ErrorInPage;
