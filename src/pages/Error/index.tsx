import { Link, useRouteError } from 'react-router-dom';

type Error = {
  statusText?: string;
  message?: string;
};

interface ErrorPageProps {
  message?: string;
}

export default function ErrorPage({ message }: ErrorPageProps) {
  const error = useRouteError() as Error;

  return (
    <>
      <main
        id='l-main'
        className='flex h-screen flex-col items-center justify-center gap-2'
      >
        <h1 className='mb-2 text-center text-2xl font-bold uppercase'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {message && (
            <>
              <i>{message}</i>
              <br />
            </>
          )}
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className='text-cyan-50 underline underline-offset-4' to='/'>
          Go Home
        </Link>
      </main>
    </>
  );
}
