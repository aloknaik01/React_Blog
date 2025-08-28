import React, { useState } from "react";
import { MoveUpRight, Signature } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState("/home");
  console.log(nav);

  function navSetter(slug) {
    setNav(slug);
  }

  const navItems = [
    {
      name: "Home",
      slug: "/home",
    },
    {
      name: "Trending",
      slug: "/trend",
    },
    {
      name: "Lifestyle",
      slug: "/lifestyle",
    },
    {
      name: "Education",
      slug: "/education",
    },
  ];
  return (
    <header className="min-w[1440px] min-h-[126px] relative ">
      <div className="h-[45px] bg-[var(--bg-primary)]  flex justify-center items-center">
        <div className="h-[21px]">
          <p className="text-[var(--text-secondary)] w-[415px] text-center  mx-auto text-[14px] ">
            Subscribe to our Newsletter For New & latest Blogs and Resources
          </p>
        </div>
        <MoveUpRight className="text-[var(--color-primary)] w-4 h-4" />
      </div>

      <nav className="h-[81px] bg-[var(--bg-secondary)] ">
        <div className="px-[80px] py-6  flex items-center justify-between">
          <Link className="flex justify-start items-center gap-1">
            <Signature className="text-[var(--color-primary)] w-8 h-8" />
            <h2 className="text-[var(--text-primary)] text-[20px] font-semibold tracking-wide">
              Blogify
            </h2>
          </Link>
          <div className="flex justify-center items-center gap-6">
            {navItems.map((items, index) => (
              <Link
                key={index}
                to={items.slug}
                className={
                  items?.slug == nav
                    ? `bg-[var(--bg-primary)] px-4 py-2 rounded-lg`
                    : `text-[var(--text-secondary)]`
                }
                onClick={() => navSetter(items?.slug)}
              >
                {items?.name}
              </Link>
            ))}
          </div>
          <div>
            <button className="bg-[var(--color-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-lg hover:bg-[var(--btn-hover)] duration-300">
              {" "}
              Contact Us
            </button>
            {/* <button className="bg-[var(--color-primary)]"> Login</button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
