import Link from 'next/link';

const Index = () => (
  <div style={{ maxWidth: 700, margin: '0 auto' }}>
    <h2>Next.js Error handling Example 🚨</h2>

    <ul>
      <h3>404 Page Tests</h3>

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
              Open in new tab
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
              Open in new tab
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
              Open in new tab
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
              Open in new tab
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <ul>
      <h3>Error Page Tests</h3>

      <li>
        Error in Page Render
        <ul>
          <li>
            <Link href="/client/errorInPage">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/client/errorInPage" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Error in Component Render
        <ul>
          <li>
            <Link href="/client/errorinComponent">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/client/errorinComponent" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Error in getStaticProps
        <ul>
          <li>
            <Link href="/client/erroringetStaticProps">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/client/erroringetStaticProps" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Index;
