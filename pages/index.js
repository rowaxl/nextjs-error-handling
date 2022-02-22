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
            <Link href="/errors/inPage">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/inPage" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Error in Component Render
        <ul>
          <li>
            <Link href="/errors/inComponent">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/inComponent" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Error in outside of Page Render
        <ul>
          <li>
            <Link href="/errors/outsideOfPage">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/outsideOfPage" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Error in getServerSideProps
        <ul>
          <li>
            <Link href="/errors/getServerSideProps/500">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/getServerSideProps/500" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Throwing Error Randomly
        <ul>
          <li>
            <Link href="/errors/randomlyThrow">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/randomlyThrow" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Throwing Runtime Error
        <ul>
          <li>
            <Link href="/errors/onClick">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/onClick" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Throwing Sync Logic Error
        <ul>
          <li>
            <Link href="/errors/callSyncError">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/callSyncError" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Throwing Sync Logic Error in Hook
        <ul>
          <li>
            <Link href="/errors/throwInHook">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/throwInHook" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Throwing Async Logic Error (with axios)
        <ul>
          <li>
            <Link href="/errors/callAsyncError">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/callAsyncError" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>

      <li>
        Throw Asnyc Error in outside of Page Render
        <ul>
          <li>
            <Link href="/errors/outsideOfPage">
              <a>Navigation</a>
            </Link>
          </li>
          <li>
            <a href="/errors/outsideOfPage" target="_blank">
              Open in new tab
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Index;
