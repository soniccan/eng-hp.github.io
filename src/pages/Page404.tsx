import { Link } from 'react-router-dom';

export const Page404 = () => (
  <>
    <div>これはトップページです</div>
    <nav>
      <ul>
        <li>
          <Link to="/">トップページです</Link>
        </li>
        <li>
          <Link to="page1">Page1ページです</Link>
        </li>
      </ul>
    </nav>
  </>
);