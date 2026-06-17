import petImg from "../assets/pet-demo.png";

const pixelFont = {
  fontFamily: "Pixelify Sans, sans-serif",
};

const statusData = [
  { title: "Health", active: 10, color: "bg-green-600" },
  { title: "Hunger", active: 4, color: "bg-[#8F2A2A]" },
  { title: "Cleanliness", active: 7, color: "bg-[#D17A36]" },
  { title: "Mood", active: 6, color: "bg-[#D17A36]" },
  { title: "Happiness", active: 10, color: "bg-green-600" },
];

const rewards = [
  {
    title: "Pet Master",
    orange: 82,
    stars: "⭐⭐⭐",
    points: "50",
  },
  {
    title: "Care Taker",
    orange: 55,
    stars: "⭐⭐",
    points: "20",
  },
  {
    title: "Healthstar",
    orange: 92,
    stars: "⭐",
    points: "10",
  },
];

const activities = [
  {
    title: "Sleep",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  },
  {
    title: "Walk",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  },
  {
    title: "Eat",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  },
  {
    title: "Grooming",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7",
  },
  {
    title: "Exercise",
    img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
  },
  {
    title: "Vet",
    img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
  },
];

const PetDashboard = () => {
  return (
    <section id="about" className="bg-[#F6F3EF] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333]">
            Take care of your Dog!
          </h2>

          <p
            className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            PupClub is an AI vet that never miss any important data and is
            always there for your dog
          </p>
        </div>

        {/* Top Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={pixelFont}>
          {/* Status */}
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-center text-[#0A5B92] text-3xl font-bold mb-4">
              Status Bar
            </h3>

            <div className="border-2 border-[#0A5B92] rounded-2xl p-4 bg-white">
              {statusData.map((item, idx) => (
                <div key={idx} className="mb-5">
                  <p className="text-sm font-semibold mb-2">{item.title}</p>

                  <div className="flex">
                    {[...Array(11)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-7 flex-1 border border-gray-300 ${
                          i < item.active ? item.color : "bg-[#D9D9D9]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pet */}
          <div className="col-span-12 lg:col-span-5">
            <h3 className="text-center text-[#0A5B92] text-4xl font-bold mb-4">
              Your Pet
            </h3>

            <div className="border-2 border-[#0A5B92] rounded-3xl overflow-hidden">
              <img
                src={petImg}
                alt="Pet"
                className="w-full h-[390px] object-cover"
              />
            </div>
          </div>

          {/* Activity */}
          <div className="col-span-12 lg:col-span-4">
            <h3 className="text-center text-[#0A5B92] text-3xl font-bold mb-4">
              Activity Timer
            </h3>

            <div className="border-2 border-[#0A5B92] rounded-2xl p-3 bg-white">
              <div className="grid grid-cols-2 gap-2">
                {activities.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative h-28 rounded-md overflow-hidden"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20"></div>

                    <span className="absolute bottom-2 right-2 text-white text-sm font-semibold">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="grid grid-cols-12 gap-6 mt-8" style={pixelFont}>
          {/* Actions */}
          <div className="col-span-12 lg:col-span-8 border-2 border-[#0A5B92] rounded-2xl p-6 bg-white">
            <h3 className="text-center text-[#0A5B92] text-4xl font-bold mb-8">
              Actions
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              <button className="w-36 h-36 rounded-full bg-[#9A2525] text-white text-xl font-bold">
                Feed
              </button>

              <button className="w-36 h-36 rounded-full bg-[#248539] text-white text-xl font-bold">
                Clean
              </button>

              <button className="w-36 h-36 rounded-full bg-[#33879A] text-white text-xl font-bold">
                Pet
              </button>

              <button className="w-36 h-36 rounded-full bg-[#5A39A4] text-white text-xl font-bold">
                Play
              </button>
            </div>

            <button className="w-full mt-8 bg-[#DDD4C8] py-5 rounded-xl font-semibold text-lg">
              Customize
            </button>
          </div>

          {/* Rewards */}
          <div className="col-span-12 lg:col-span-4 border-2 border-[#0A5B92] rounded-2xl p-5 bg-white">
            <h3 className="text-[#0A5B92] text-3xl font-bold mb-6">Rewards</h3>

            {rewards.map((item, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span>{item.stars}</span>
                  <span className="text-sm text-gray-500">
                    {item.points} 🏅
                  </span>
                </div>

                <p className="mb-2 text-lg">{item.title}</p>

                <div className="flex h-5 rounded overflow-hidden">
                  <div
                    style={{ width: `${item.orange}%` }}
                    className="bg-[#E09A56]"
                  />

                  <div
                    style={{ width: `${100 - item.orange}%` }}
                    className="bg-[#004E86]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDashboard;
