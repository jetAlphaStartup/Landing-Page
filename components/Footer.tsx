import { Crown } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#111116] text-white py-12 sm:py-16 px-4 sm:px-8">
      <Container type="internal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <div className="flex">
              <div className="text-white rounded-lg inline-block lowercase leading-[1.1] shadow-lg cursor-default">
                <div className="flex relative top-0.5 text-2xl items-center justify-center  space-x-2">
                  <div className="p-1 rounded-md bg-white">
                    <Crown className="text-black" />{" "}
                  </div>
                  <span>jethings</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              We help ambitious businesses turn into big names
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 tracking-tight">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  J-Optic
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  J-Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  J-Optic-Pro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  J-Mall
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Jet-Next
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 tracking-tight">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Our story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Podcasts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  PR package
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 tracking-tight">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Anti-Spam Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
