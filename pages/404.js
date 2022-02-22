import Error from 'next/error';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  console.log({ path: router.asPath });
  // Opinionated: do not record an exception in Sentry for 404
  return <Error statusCode={404} />;
}
