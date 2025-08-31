import React, { useEffect, useState } from "react";
import { MoveUpRight, Signature } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authThunks";
import toast from "react-hot-toast";
const Navbar = () => {
  const [nav, setNav] = useState("/home");
  console.log(nav);
  // const [auth, setAuth] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  function handleLogout() {
    dispatch(logoutUser());
    toast.success("Logged out Successfully");
    navigate("/login");
  }

  function navigateToLogin() {
    navigate("/login");
  }
  function navSetter(slug) {
    setNav(slug);
  }

  useEffect(() => {
    // setAuth()
  }, [dispatch]);

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
          <div className="flex justify-center items-center gap-4">
            <button className="bg-[var(--color-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-lg hover:bg-[var(--btn-hover)] duration-300">
              Contact Us
            </button>
            <div>
              {!auth.isAuthenticated ? (
                <button
                  className="bg-[var(--color-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-lg hover:bg-[var(--btn-hover)] duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-[var(--color-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-lg hover:bg-[var(--btn-hover)] duration-300"
                  onClick={navigateToLogin}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
