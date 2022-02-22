const GetServerSidePropsPage = (
  {
    // id
  }
) => {
  // console.log({ id });

  return (
    <>
      <h1>{/* Post {id} */}</h1>
    </>
  );
};

export default GetServerSidePropsPage;

// export const getServerSideProps = async (ctx) => {
//   const { id } = ctx.query;

//   if (id === '500') {
//     throw new Error('Error in getServerSideProps');
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { id },
//   };
// };
