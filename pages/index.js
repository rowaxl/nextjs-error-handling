import Link from 'next/link';

const Index = () => (
  <div style={{ maxWidth: 700, margin: '0 auto' }}>
    <h2>Next.js Error handling Example 🚨</h2>
    <ol>
      <li>Client exceptions</li>
      <ol>
        <li>
          Test how 404 error works
          <Link href="/client/test404">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test404" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          Test how _error pages works
          <Link href="/client/error">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/error" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          There is an exception during React lifecycle that is caught by
          Next.js's React Error Boundary. In this case, when the component
          mounts. This should cause _error.js to render and record Error('Client
          Test 3') in Sentry.{' '}
          <Link href="/client/test3">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test3" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          There is an unhandled Promise rejection during React lifecycle. In
          this case, when the component mounts. Sentry should record
          Error('Client Test 4').{' '}
          <Link href="/client/test4">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test4" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          An Error is thrown from an event handler. Sentry should record
          Error('Client Test 5'). (This page also demonstrates how to manually
          instrument your code for performance monitoring.){' '}
          <Link href="/client/test5">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test5" target="_blank">
            Open in a new tab
          </a>
        </li>
      </ol>
    </ol>
  </div>
);

export default Index;
