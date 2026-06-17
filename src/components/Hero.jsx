import { useState } from "react";
import heroDog from "../assets/hero-dog.png";
import doctor from "../assets/doctor.png";
import img1 from "../assets/Vector.png"
import img2 from "../assets/pajamas_status-health.png"
import img3 from "../assets/Group.png"
const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setOpenModal(false);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <>
      <section
        id="home"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 md:pt-10 pb-12 md:pb-20"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-[#333]">
              Make your
              <br />
              dog healthier
            </h1>

            <p
              className="mt-4 md:mt-5 text-gray-500 max-w-md text-sm sm:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Data doesn't lie. Extend your dog's healthy years with a vet in
              your pocket.
            </p>

<button
  onClick={() => setOpenModal(true)}
  className="mt-6 md:mt-8 bg-[#C98A47] text-white px-6 py-3 md:px-7 md:py-4 rounded-lg font-semibold hover:scale-105 transition"
>
              Get Advice
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 md:mt-16">
              <div>
                <div className=""><img src={img3} alt="" /></div>
                <p className="text-xs mt-2 text-gray-600 w-27.5">
                  This Service is powered by AI
                </p>
              </div>

              <div>
                <div className="text-4xl"><img src={img2} alt="" /></div>
                <p className="text-xs mt-2 text-gray-600 w-27.5">
                  Track your Dog's health virtually
                </p>
              </div>

              <div>
                <div className="text-4xl"><img src={img1} alt="" /></div>
                <p className="text-xs mt-2 text-gray-600 w-27.5">
                  Earn rewards by taking care
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
<img
  src={doctor}
  alt="doctor"
  className="absolute -right-0 md:-right-5 lg:-right-[127px] top-0 w-24 sm:w-32 lg:w-56"
/>

            <img
              src={heroDog}
              alt="dog"
              className="mx-auto w-[250px] lg:w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-black">
                  Get Expert Advice 🐶
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
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
                    type="email"
                    placeholder="Your Email"
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

                  <textarea
                    rows="4"
                    placeholder="Describe your dog's issue..."
                    required
                    className="
                      w-full
                      border
                      border-gray-300
                      p-3
                      rounded-lg
                      outline-none
                      resize-none
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
                    Submit Request
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
              </>
            ) : (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>

                <h3 className="text-2xl font-bold mb-3 text-black">
                  Thank You!
                </h3>

                <p className="text-gray-600">
                  We will contact you soon regarding your request...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
