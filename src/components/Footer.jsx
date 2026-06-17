import logo from "../assets/dlogo.png";
const Footer = () => {
  return (
    <footer className="bg-[#041d2e] text-white py-16 mt-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="PupClub Logo"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-gray-300 leading-8 max-w-sm">
              If you notice anything that concerns your dog's health, feel free
              to ask our AI vet. We are always here to help you keep your pet
              healthy and happy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Navigation</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#benefits" className="hover:text-white">
                  Benefits
                </a>
              </li>

              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Services</h3>

            <ul className="space-y-3 text-gray-300">
              <li>AI Vet Chat</li>
              <li>Pet Health Tracking</li>
              <li>Pet Care Guidance</li>
              <li>Rewards Program</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-400">
          <p className="text-sm text-gray-400 text-center">
            Crafted with ❤️ by{" "}
            <a
              href="https://krafticode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#ffffff] hover:underline"
            >
              Krafti Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
