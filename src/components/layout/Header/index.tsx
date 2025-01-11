import React from "react";
import Logo from "@components/ui/Logo";
import Navbar from "@components/layout/Navbar";
import "./Header.scss";
import { clsx } from "clsx";
import HeroHeader from "@components/ui/HeroHeader";

const Header: React.FC = React.memo(() => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header id="l-header" className="relative lg:max-w-screen-xl lg:mx-auto">
        <div
          className={clsx([
            "flex flex-wrap items-center justify-between top-0 left-0 bg-dark w-full z-10 px-5 py-3 ",
            "transition-all duration-500",
            isScrolled
              ? "fixed shadow-lg lg:bg-dark"
              : "lg:absolute lg:bg-transparent"
          ])}
        >
          <Logo />
          <Navbar />
        </div>
        <HeroHeader />
      </header>
    </>
  );
});

export default Header;
