import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center   p-5">
      <div className="text-center bg-white  p-8 rounded-lg ">
        <img
          className="mx-auto mb-4 animate-pulse"
          width="100"
          height="100"
          src="https://img.icons8.com/external-line-vectorslab/100/external-Error-404-web-and-seo-line-vectorslab.png"
          alt="external-Error-404-web-and-seo-line-vectorslab"
        />

        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist. It might have been
          moved or deleted.
        </p>

        <Link
          to="/"
          className="inline-block transition-all rounded-md mt-10 min-w-44 border border-black duration-500 syne py-2 px-4  text-black hover:from-blue-500 hover:to-purple-500 ease-in-out transform hover:scale-105"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
