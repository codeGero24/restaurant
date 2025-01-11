import { Outlet } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

export default function Root() {
  return (
    <>
      <Header />
      <main id="main" className="max-w-screen-xl mx-auto bg-gray-300 h-screen">
        <Outlet />
      </main>
      <main id="main" className="max-w-screen-xl mx-auto bg-gray-300 h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
