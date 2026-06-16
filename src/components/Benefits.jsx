import vectorBg from "../assets/Vector-bg.png";
import { HeartPulse, Clock3, PawPrint } from "lucide-react";

const benefits = [
  {
    icon: <HeartPulse size={90} />,
    title: "Early Detection of\nHealth Issues",
    description:
      "AI vets can analyze symptoms provided by pet owners and flag potential health issues.",
  },
  {
    icon: <Clock3 size={90} />,
    title: "24/7\nAvailability",
    description:
      "Offers guidance anytime, especially for emergencies when vets may not be available.",
  },
  {
    icon: <PawPrint size={90} />,
    title: "Personalized Care\nRecommendations",
    description:
      "Suggests diet plans tailored to the pet's breed, age, weight, and medical history.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="relative min-h-[900px] py-28 overflow-hidden">
      {/* Background Shape */}
      <img
        src={vectorBg}
        alt="background shape"
        className="absolute inset-0 w-full h-full object-fill -z-10"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-24">
          Medical benefits of Pup Club
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                bg-[#F8F5F1]
                rounded-xl
                p-10
                text-center
                shadow-sm
                min-h-[420px]
                flex
                flex-col
                items-center
                justify-start
              "
            >
              {/* Icon */}
              <div className="text-[#C98A47] mb-8">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#333] whitespace-pre-line mb-6 leading-snug">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-8 text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;