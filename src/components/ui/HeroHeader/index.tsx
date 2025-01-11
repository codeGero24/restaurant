import "./HeroHeader.scss";

export default function HeroHeader() {
  return (
    <>
      <div className="hero-header lg:max-w-screen-xl lg:mx-auto">
        {/* Content */}
        <div className="z-9 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-primary">Restoran</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience the best dining experience with exquisite dishes crafted to
            perfection.
          </p>
          <div className="flex space-x-4">
            <a
              href="#menu"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              View Menu
            </a>
            <a
              href="#reservation"
              className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
