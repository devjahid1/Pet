import { useEffect, useState } from "react";
import { User, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn");
    const savedUser = localStorage.getItem("userName");

    if (savedLogin === "true") {
      setIsLoggedIn(true);
      setUserName(savedUser || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", userName);

    setIsLoggedIn(true);
    setOpenModal(false);

    alert(`Welcome to PupClub ${userName}!`);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");

    setIsLoggedIn(false);
    setShowDropdown(false);
    setUserName("");
  };

  return (
    <>
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 md:py-6 flex items-center justify-between">
  {/* Logo */}
  <div className="flex items-center">
    <img
      src={logo}
      alt="PupClub Logo"
      className="h-10 sm:h-12 w-auto"
    />
  </div>

  {/* Desktop Menu */}
  <div
    className="hidden md:flex items-center gap-8 text-sm font-medium"
    style={{ fontFamily: "Quicksand, sans-serif" }}
  >
    <a href="#home" className="hover:text-[#C98A47] transition">
      Home
    </a>

    <a href="#about" className="hover:text-[#C98A47] transition">
      About
    </a>

    <a href="#benefits" className="hover:text-[#C98A47] transition">
      Benefits
    </a>

    <a href="#testimonials" className="hover:text-[#C98A47] transition">
      Testimonials
    </a>
  </div>

  {/* Right Side */}
  <div className="flex items-center gap-3">
    {!isLoggedIn ? (
      <button
        onClick={() => setOpenModal(true)}
        className="hidden md:block bg-[#C98A47] text-white px-5 py-2.5 rounded-lg font-semibold hover:scale-105 transition"
      >
        Sign Up
      </button>
    ) : (
      <div className="hidden md:block relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-12 h-12 rounded-full bg-[#C98A47] text-white flex items-center justify-center"
        >
          <User size={20} />
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl overflow-hidden z-50">
            <div className="px-4 py-3 border-b font-medium text-black">
              {userName || "Dog Owner"}
            </div>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 text-black"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    )}

    {/* Hamburger */}
    <button
      onClick={() => setMobileMenu(!mobileMenu)}
      className="md:hidden text-[#333]"
    >
      {mobileMenu ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>
</nav>

{mobileMenu && (
  <div className="md:hidden px-4 pb-4">
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-4">
      <a
        href="#home"
        onClick={() => setMobileMenu(false)}
        className="font-medium"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMobileMenu(false)}
        className="font-medium"
      >
        About
      </a>

      <a
        href="#benefits"
        onClick={() => setMobileMenu(false)}
        className="font-medium"
      >
        Benefits
      </a>

      <a
        href="#testimonials"
        onClick={() => setMobileMenu(false)}
        className="font-medium"
      >
        Testimonials
      </a>

      {!isLoggedIn ? (
        <button
          onClick={() => {
            setOpenModal(true);
            setMobileMenu(false);
          }}
          className="bg-[#C98A47] text-white py-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>
      ) : (
        <>
          <div className="border-t pt-3 text-sm text-gray-600">
            {userName}
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-3 rounded-lg font-semibold"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  </div>
)}

      {/* Signup Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-black">
              Join PupClub 🐶
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Owner Name"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="
                  w-full
                  border
                  border-gray-300
                  p-3
                  rounded-lg
                  outline-none
                  text-black
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="
                  w-full
                  border
                  border-gray-300
                  p-3
                  rounded-lg
                  outline-none
                  text-black
                "
              />

              <input
                type="text"
                placeholder="Dog Name"
                required
                className="
                  w-full
                  border
                  border-gray-300
                  p-3
                  rounded-lg
                  outline-none
                  text-black
                "
              />

              <input
                type="text"
                placeholder="Dog Breed"
                required
                className="
                  w-full
                  border
                  border-gray-300
                  p-3
                  rounded-lg
                  outline-none
                  text-black
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-[#C98A47]
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                "
              >
                Join PupClub
              </button>
            </form>

            <button
              onClick={() => setOpenModal(false)}
              className="
                w-full
                mt-4
                text-gray-500
                hover:text-black
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
