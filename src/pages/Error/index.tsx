import { Link, useRouteError } from "react-router-dom";

type Error = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <>
      <main
        id="main"
        className="flex flex-col justify-center items-center gap-2 h-screen"
      >
        <h1 className="text-center font-bold uppercase text-2xl mb-2">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className="text-cyan-50 underline underline-offset-4" to="/">
          Go Home
        </Link>
      </main>
    </>
  );
}
