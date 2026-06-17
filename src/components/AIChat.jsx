import { Menu, Search, Maximize, Smile, Link2, Mic } from "lucide-react";

const AIChat = () => {
  return (
<section className="bg-[#ffffff] py-12 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] leading-tight font-bold text-[#333] max-w-md">
              Ask your questions to our AI vet?
            </h2>

            <p
  className="mt-6 md:mt-10 text-gray-600 text-base md:text-lg max-w-md leading-7 md:leading-9"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
              If you notice anything that concerns your dogs health,
              feel free to ask our AI in the following chat.
              It will be able to help you in these cases.
            </p>
          </div>

         <div className="bg-[#242A31] rounded-2xl p-4 h-[480px]">

            <div className="grid grid-cols-[140px_1fr] h-full">

              {/* SIDEBAR */}
              <div className="border-r border-slate-600 pr-3">

                <div className="flex justify-between text-sky-400 mb-10">
                  <Menu size={18} />
                  <Search size={18} />
                </div>

                <h4 className="text-white text-sm font-semibold mb-4">
                  Recent
                </h4>

                <div className="space-y-3 text-gray-300 text-sm">

                  <div className="bg-gray-600 px-2 py-2 rounded">
                    Pet Care in.....
                  </div>

                  <div>Dog have cough</div>

                  <div>AI vet progress</div>

                  <div>Is dog fever cont...</div>

                  <div>Feeding dog in...</div>
                </div>

                <div className="border-t border-slate-600 mt-14 pt-5">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/100"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />

                    <div>
                      <p className="text-white text-sm">
                        Rayhan D
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* CHAT AREA */}
              <div className="relative pl-2">

                <div className="flex justify-between">
                  <div className="text-white font-bold text-xl">
                    🐶 Pup Club
                  </div>

                  <Maximize
                    className="text-slate-400"
                    size={20}
                  />
                </div>

                {/* Message Box */}
                <div className="absolute bottom-0 -left-2 lg:left-3 sm: right-0">

                  <div className="flex items-center gap-3">

                    <Smile
                      className="text-sky-400"
                      size={22}
                    />

                    <Link2
                      className="text-sky-400"
                      size={22}
                    />

                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="
                        flex-1
                        bg-[#1F73A8]
                        text-white
                        rounded-xl
                        px-5
                        py-3
                        outline-none
                        placeholder:text-slate-200
                      "
                    />

                    <Mic
                      className="text-sky-400"
                      size={22}
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AIChat;
