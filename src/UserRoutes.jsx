import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() =>
  import('./pages/MyContactsPage/MyContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<MyContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
