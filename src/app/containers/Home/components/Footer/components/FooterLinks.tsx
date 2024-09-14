import React from "react";

const FooterLinks = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold mt-8">Support</h3>
      <a
        href="/"
        className="text-sm mt-2 text-gray-700 hover:text-gray-900 block"
      >
        FAQ
      </a>
      <a
        href="/"
        className="text-sm mt-2 text-gray-700 hover:text-gray-900 block"
      >
        Contact us
      </a>
      <a
        href="mailto:quarrychain@gmail.com"
        className="text-sm mt-2 text-gray-700 hover:text-gray-900 block"
      >
        quarrychain@gmail.com
      </a>
    </div>
  );
};

export default FooterLinks;
