import { useEffect } from 'react';
import { useRouter } from 'next/router';

const UseEffectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log({ id });

  useEffect(() => {
    if (id === '404') router.push('/404');
  }, [id]);

  return (
    <>
      <h1>Post {id}</h1>
    </>
  );
};

export default UseEffectPage;
