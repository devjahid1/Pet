import dogIllustration from "../assets/testimonial-dog.png";

const testimonials = [
  {
    name: "Jordan L.",
    desc: "The AI vet gave me instant answers when my dog wasn’t feeling well. It saved me time, reduced stress, and helped me make the right decisions for my pet.",
    role: "Tech Enthusiast & Pet Owner",
  },
  {
    name: "Rimon",
    desc: "Getting expert pet advice has never been this easy. The platform is fast, reliable, and always available whenever I need guidance.",
    role: "Pet Owner",
  },
  {
    name: "Morgan",
    desc: "I love how simple and accurate the AI vet is. It feels like having a trusted pet specialist available 24/7 right from my phone.",
    role: "Pet Owner",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[##ffffff] md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Title */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[65px] leading-tight font-bold text-[#2F343B] max-w-xl">
            The way Pupclub is helping dog owners
          </h2>
        </div>

        {/* Dog Image */}
<img
  src={dogIllustration}
  alt="Dog Illustration"
  className="
    hidden lg:block
    absolute
    right-[-80px]
    xl:right-[-120px]
    top-0
    w-[380px]
    xl:w-[520px]
    z-0
  "
/>

        {/* Cards */}
        <div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
  style={{ fontFamily: "Poppins, sans-serif" }}
>

          {testimonials.map((item, index) => (
            <div
              key={index}
className="
  bg-[#4EA8E8]
  rounded-2xl
  p-6 md:p-8
  text-center
  min-h-[320px]
  md:min-h-[420px]
  flex
  flex-col
  justify-between
"
            >
              <div>

                <div className="text-left text-4xl text-[#0B3350]">
                  ❝
                </div>

                <p className="text-[#0B3350] text-base md:text-[20px] italic font-semibold leading-relaxed mt-2">
                  {item.desc}
                </p>

                <div className="text-right text-4xl text-[#0B3350]">
                  ❞
                </div>

              </div>

              <div>

                <div className="text-yellow-400 text-xl mb-5">
                  ★★★★★
                </div>

                <h4 className="font-bold text-xl md:text-2xl text-black">
                  {item.name}
                </h4>

                <p className="text-[#18486B] mt-2 text-sm md:text-base">
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
