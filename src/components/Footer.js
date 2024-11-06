import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto p-6 md:p-10 bg-blue-500 text-white">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-semibold uppercase">Important links</h1>
          <ul className="space-y-2 text-sm md:text-base px-10 pt-10">
            <Link to="/cookiespolicy" className="hover:underline">
              Cookies Policy
            </Link>
            <br />
            <Link to="/fairplaypolicy" className="hover:underline">
              Fair Play Policy
            </Link>
            <br />
            <Link to="/refundpolicy" className="hover:underline">
              Refund Policy
            </Link>
            <li>Legalities</li>
            <Link to="/termsconditions" className="hover:underline">
              Terms & conditions
            </Link>
            <br />
            <Link to="/privacypolicy" className="hover:underline">
              Privacy & Policy
            </Link>
            <br />
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <strong className="text-3xl md:text-5xl text-blue-900">
              18+
            </strong>
            <h1 className="text-xl md:text-3xl pt-2 md:pt-4">Important Notice</h1>
          </div>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Participation in this platform requires users to be 18 years or older. Please be aware that fantasy sports carry financial risks and could become addictive. This platform does not encourage fantasy sports as a means of employment or income. Engage responsibly and according to your own judgment. We do not accept responsibility for any legal or rule violations.
          </p>
        </div>
      </div>
      <p className="text-center pt-7">© 2024 Pitchmaster. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
