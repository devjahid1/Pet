import { useEffect, useState } from "react";
import { User } from "lucide-react";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState("");

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
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold tracking-wide">
            PUP<span className="text-[#C98A47]">🐶</span>CLUB
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a
            href="#home"
            className="cursor-pointer hover:text-[#C98A47] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="cursor-pointer hover:text-[#C98A47] transition"
          >
            About
          </a>

          <a
            href="#benefits"
            className="cursor-pointer hover:text-[#C98A47] transition"
          >
            Benefits
          </a>

          <a
            href="#testimonials"
            className="cursor-pointer hover:text-[#C98A47] transition"
          >
            Testimonials
          </a>
        </div>

        {/* Right Side */}
        {!isLoggedIn ? (
          <button
            onClick={() => setOpenModal(true)}
            className="
              bg-[#C98A47]
              text-white
              px-5
              py-2.5
              rounded-lg
              font-semibold
              hover:scale-105
              transition
            "
          >
            Sign Up
          </button>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="
                w-12
                h-12
                rounded-full
                bg-[#C98A47]
                text-white
                flex
                items-center
                justify-center
              "
            >
              <User size={20} />
            </button>

            {showDropdown && (
              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-48
                  bg-white
                  rounded-xl
                  shadow-xl
                  overflow-hidden
                  z-50
                "
              >
                <div className="px-4 py-3 border-b font-medium text-black">
                  {userName || "Dog Owner"}
                </div>

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-gray-100
                    text-black
                  "
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

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