import { useState } from "react";
import { Search, Menu, X, MoveUpRight, Signature } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Trending", href: "#" },
    { name: "Most popular", href: "#" },
    { name: "Tech", href: "#" },
  ];

  const [active, setActive] = useState("home");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-custom border-b border-border">
      <div className="h-[45px] px-4 py-4  flex justify-center items-center bg-primary-foreground">
        <div className="h-[21px]">
          <p className="text-muted w-[415px] text-center mx-auto text-[14px]">
            Subscribe to our Newsletter For New & latest Blogs and Resources
          </p>
        </div>
        <MoveUpRight className="text-primary w-4 h-4" />
      </div>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-4 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link className="flex justify-start items-center gap-1">
                <Signature className="text-primary w-8 h-8" />
                <h2 className="text-primary text-[20px] font-semibold tracking-wide">
                  Blogify
                </h2>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 ">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={
                    link.name == active
                      ? "bg-black p-2 rounded-sm border border-[#333333] ring-[#333333]"
                      : "text-muted hover:text-primary transition-colors duration-300 font-sm "
                  }
                  onClick={() => setActive(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-64 bg-primary-foreground border-border focus:border-primary p-3 rounded-sm"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-4 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-full bg-secondary border-border focus:border-primary"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
