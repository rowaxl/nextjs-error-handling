const GetStaticPropsPage = ({ id }) => {
  console.log({ id });
  return (
    <>
      <h1>Post {id}</h1>
    </>
  );
};

export default GetStaticPropsPage;

export const getStaticPaths = () => {
  const paths = ['111', '222', '333'].map((path) => ({
    params: { id: path },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  return {
    props: { id },
  };
};
