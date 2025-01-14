import { Outlet } from 'react-router-dom';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Button from '@components/ui/Button';
import Spinner from '@components/ui/Spinner';

export default function Root() {
  return (
    <>
      <Spinner />
      <Header />
      <main id="main" className="mx-auto h-screen max-w-screen-xl">
        <Outlet />
      </main>
      <main id="main" className="mx-auto h-screen max-w-screen-xl">
        <Outlet />
      </main>
      <Footer />

      <Button type="button" variant="sroll-up" />
    </>
  );
}
