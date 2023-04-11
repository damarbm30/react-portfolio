const Header = () => {
  return (
    <header className="w-full py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#" className="text-gradient text-2xl font-bold">
            DAMAR
          </a>
          <button className="btn btn-sm">
            <a href="/cv.pdf" download>
              My Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
