import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cookiespolicy = () => {
  return (
    <div className="min-h-screen p-5 bg-gray-100">
      <div className="px-4 md:px-10 lg:px-20 py-8 bg-white shadow-md rounded-md max-w-3xl mx-auto mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Our Cookies Policy
        </h1>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          We use cookies to enhance your experience on our Website and App.
          Cookies are small data files stored on your device by our servers,
          allowing us to personalize and optimize your interactions with our
          platform. These cookies enable us to remember your preferences, like
          login details and language settings, making future visits more
          convenient and tailored to your needs.
          <br />
          <br />
          They also help us analyze user behavior, providing insights that
          improve our services and create a more user-friendly experience. We
          utilize two main types of cookies: session cookies and persistent
          cookies. Session cookies are temporary and are deleted when you close
          your browser, supporting smooth navigation and interaction on our
          site. Persistent cookies, however, remain on your device for a set
          duration, letting us recognize you on future visits and offer a more
          customized experience based on prior interactions.
          <br />
          <br />
          Additionally, we may use third-party cookies from external services
          for analytics, advertising, and social media integration. These
          cookies help us understand how you interact with our site and deliver
          content that matches your interests. Note that these third-party
          cookies are subject to their respective providers' privacy policies,
          not ours.
          <br />
          <br />
          You have full control over your cookie settings via your browser.
          While most browsers accept cookies by default, you can adjust these
          settings to block cookies or receive notifications when cookies are
          set. Disabling cookies may impact the functionality of our Website and
          App, potentially limiting access to certain features or services. Even
          if cookies are disabled, you can still browse our site, although some
          features or areas may be restricted.
          <br />
          <br />
          For detailed instructions on managing cookies, consult your browser’s
          help section, which offers guidance for your specific browser. By
          continuing to use our Website and App, you consent to our use of
          cookies as outlined in this policy. We may update our cookie practices
          periodically to improve your experience, and any changes will be
          reflected here.
          <br />
          <br />
          We encourage you to review this section regularly to stay informed
          about our use of cookies and other tracking technologies, ensuring
          transparency in how we handle your data and protect your privacy.
        </p>
      </div>
    </div>
  );
};

export default Cookiespolicy;
