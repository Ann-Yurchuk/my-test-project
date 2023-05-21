import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MyLoader from '../Loader/Loader';
import Container from '../Container/Container';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fullback={<MyLoader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
