import Link from 'next/link';

const Index = () => (
  <div style={{ maxWidth: 700, margin: '0 auto' }}>
    <h2>Next.js Error handling Example 🚨</h2>

    <ul>
      <h3>404 Page Exceptions</h3>

      <li>
        Unexist static path
        <ul>
          <li>
            <Link href="/client/nowhere">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/client/nowhere" target="_blank">
              Open new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Unexist dynamic path (router.push in useEffect)
        <ul>
          <li>
            <Link href="/useEffect/404">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/useEffect/404" target="_blank">
              Open new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Unexist dynamic path (getServerSideProps)
        <ul>
          <li>
            <Link href="/getServerSideProps/404">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/getServerSideProps/404" target="_blank">
              Open new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Unexist dynamic path (getStaticProps / getStaticPaths)
        <ul>
          <li>
            <Link href="/getStaticPaths/404">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/getStaticPaths/404" target="_blank">
              Open new tab
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Index;
