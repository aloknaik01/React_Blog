import { useState } from "react";
import { Search, Menu, X, MoveUpRight, Signature } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // const loc = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const auth = useSelector((state) => state.auth);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Trending", href: "/trending" },
    { name: "Most popular", href: "/most popular" },
    { name: "Tech", href: "/tech" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-custom border-b border-border">
      {/* Newsletter / Top Bar */}
      <div className="px-2 sm:px-4 py-2 flex justify-center items-center bg-primary-foreground">
        <p className="text-muted text-center text-xs sm:text-sm md:text-base">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </p>
        <MoveUpRight className="text-primary w-3 h-3 sm:w-4 sm:h-4 ml-2" />
      </div>

      {/* Main Header */}
      <div className="bg-secondary">
        <div className="container mx-auto px-2 sm:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center gap-1">
              <Signature className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
              <h2 className="text-primary text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                Blogify
              </h2>
            </Link>

            {/* Navigation (visible md+) */}
            <nav className="hidden lg:flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={
                    link.name.toLocaleLowerCase() === active.toLocaleLowerCase()
                      ? "bg-black px-2 py-1 rounded-sm border border-[#333333]"
                      : "text-muted hover:text-primary transition-colors duration-300 text-sm md:text-base"
                  }
                  onClick={() => setActive(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search + Auth button (show from md) */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <div className="relative w-32 sm:w-48 lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-full bg-primary-foreground border border-border focus:outline-none focus:ring-1 focus:ring-ring focus:border-primary rounded-sm py-2 text-sm"
                />
              </div>

              <button className="bg-primary px-3 sm:px-4 py-2 text-secondary rounded-sm font-semibold hover:bg-yellow-500 duration-200 text-sm sm:text-base">
                {auth.isAuthenticated ? "Logout" : "Login"}
              </button>
            </div>

            {/* Mobile Menu Button (always visible <md) */}
            <button
              className="flex lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu (only <md) */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t border-border animate-slideDown">
              <nav className="flex flex-col space-y-3 mt-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-3 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-full bg-primary-foreground border border-border focus:outline-none focus:ring-1 focus:ring-ring focus:border-primary rounded-sm py-2 text-sm"
                />
              </div>

              <button className="mt-3 w-full bg-primary px-3 py-2 text-secondary rounded-sm font-semibold hover:bg-yellow-500 duration-200 text-sm">
                {auth.isAuthenticated ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
