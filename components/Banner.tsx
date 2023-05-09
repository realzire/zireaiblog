
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl mb-5">ZireAI Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="font-bold text-red-600">
            The Most Important Blog
          </span>{" "}
          for AI news in the World
        </h2>
      </div>

        <p className="mt-5 md:mt-2 text-gray-700 max-w-md">
          Latest AI Technologies | Tutorials | Demonstrations and so much more!
        </p>
      </div>

  );
}

export default Banner;
