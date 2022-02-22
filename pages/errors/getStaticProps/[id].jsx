const ErrorinGetStaticPropsPage = () => {
  console.log('ErrorinGetStaticPropsPage');

  return (
    <>
      <h1>ErrorinGetStaticPropsPage</h1>
    </>
  );
};

export default ErrorinGetStaticPropsPage;

export const getStaticPaths = () => {
  const paths = ['111', '222', '333', '500'].map((path) => ({
    params: { id: path },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  // if (id === '500') {
  //   throw new Error('Error in Static Props');
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { id },
  };
};
