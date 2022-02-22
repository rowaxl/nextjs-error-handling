import { useEffect } from 'react';

const ErrorInPage = () => {
  console.log('Test Page');
  useEffect(() => {
    const callError = () => {
      throw new Error('Client error in useEffect');
    };

    Math.floor(Math.random() * 10) % 2 === 0 && callError();
  }, []);

  return <h1>Random Error</h1>;
};

export default ErrorInPage;
