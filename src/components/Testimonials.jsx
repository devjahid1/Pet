import dogIllustration from "../assets/testimonial-dog.png";

const testimonials = [
  {
    name: "Jordan L.",
    role: "Tech Enthusiast & Pet Owner",
  },
  {
    name: "Rimon ",
    role: "Pet Owner",
  },
  {
    name: "Morgan",
    role: "Pet Owner",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[##ffffff] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Title */}
        <div className="mb-14">
          <h2 className="text-[65px] leading-[1.1] font-bold text-[#2F343B] max-w-md">
            The way Pupclub is helping dog owners
          </h2>
        </div>

        {/* Dog Image */}
        <img
          src={dogIllustration}
          alt=""
          className="
            hidden lg:block
            absolute
            right-[-120px]
            top-[-30px]
            w-[520px]
            z-0
          "
        />

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#4EA8E8]
                rounded-2xl
                p-8
                text-center
                min-h-[420px]
                flex
                flex-col
                justify-between
              "
            >
              <div>

                <div className="text-left text-4xl text-[#0B3350]">
                  ❝
                </div>

                <p className="text-[#0B3350] text-[20px] italic font-semibold leading-[1.6] mt-2">
                  The AI vet combines the best of technology and pet care.
                  I've never felt more confident about my pet's health
                </p>

                <div className="text-right text-4xl text-[#0B3350]">
                  ❞
                </div>

              </div>

              <div>

                <div className="text-yellow-400 text-xl mb-5">
                  ★★★★★
                </div>

                <h4 className="font-bold text-2xl text-black">
                  {item.name}
                </h4>

                <p className="text-[#18486B] mt-2">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;