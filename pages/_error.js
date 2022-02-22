import NextErrorComponent from 'next/error';

const MyError = ({ statusCode, err }) => {
  if (err) console.log({ err });

  return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async ({ res, err, asPath }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  });

  return errorInitialProps;
};

export default MyError;
