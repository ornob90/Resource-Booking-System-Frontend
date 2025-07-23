import { TbBrandBooking } from "react-icons/tb";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
        {/* Logo */}
        <div className="flex flex-col items-start gap-2">
          <div className="bg-dark text-white p-3 rounded-full ">
            <TbBrandBooking  size={50}/>
          </div>
          <p className="text-xs text-gray-500">Smart Resource Booking</p>
        </div>

        {/* Site Links */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/">Resources</Link>
            </li>
            <li>
              <Link href="/">Bookings</Link>
            </li>
            <li>
              <Link href="/">Calendar</Link>
            </li>
            <li>
              <Link href="/">Analytics</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/">Return Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social & Rights */}
        <div className="flex flex-col items-end justify-between h-full text-right">
          <p className="text-xs text-gray-500 mb-2">
            © {new Date().getFullYear()} BookSmart. All rights reserved.
          </p>
          <div className="flex gap-3 text-xl">
            <a
              href="https://github.com/ornob90/"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kazi-towfiq-7b0a08266/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/Towfiquer.ornob.7/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
