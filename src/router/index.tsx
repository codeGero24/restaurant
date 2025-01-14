import { Outlet } from 'react-router-dom';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Button from '@components/ui/Button';
import Spinner from '@components/ui/Spinner';

export default function Root() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Spinner />
        <Button type="button" variant="sroll-up" />
        <Header />
        <main id="l-main" className="bg-gray-50 min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
