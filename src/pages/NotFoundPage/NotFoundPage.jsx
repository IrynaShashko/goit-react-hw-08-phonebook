import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <section>
        <h2>Page not found</h2>
        <Link to="/">To Main page</Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
