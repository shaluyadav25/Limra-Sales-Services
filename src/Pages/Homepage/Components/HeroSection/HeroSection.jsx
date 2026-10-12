import { Star } from "lucide-react";
import Form from "../../../../Pages/Homepage/Components/HeroSection/Form";

const HeroSection = () => {
  return (
    <div className="min-h-screen  w-full bg-linear-to-r from-[#0A2F4B] to-[#097AAA] mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-5 py-1 lg:px-10">

        <div className="w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white p-1 lg:pt-7 lg:px-10 font-serif sm:py-10 lg:leading-13">
            Smart AC Sales & Services <br />
            Powered by Technology
          </h1>

          <div className="ml-5 lg:ml-10">
            <p className="text-gray-300 text-base sm:text-xl lg:text-2xl mb-2">
              Don't wait in heat –{" "}
              <span className="text-blue-300">
                get instant AC service today
              </span>
            </p>
          </div>

          <div className="ml-5 lg:ml-10">
            <p className="text-gray-300 text-sm sm:text-base">
              Real-time booking | Same-day service | Certified technicians
            </p>

            <p className="text-lg sm:text-xl text-gray-300 font-medium">
              Experience fast, reliable & hassle-free cooling solutions
            </p>
          </div>

          <div className="mx-5 lg:mx-8 my-5 flex flex-col lg:flex-row gap-3">
            <button
              type="button"
              className="min-h-14 rounded-xl text-lg font-bold text-white text-center w-full lg:w-70 bg-[#0693CB]"
            >
              Book Services Instantly
            </button>

            <button
              type="button"
              className="bg-transparent min-h-14 rounded-xl text-lg font-bold text-white hover:border-[#0693CB] text-center w-full lg:w-60 border-2 border-gray-400"
            >
              Get Instant Quote
            </button>
          </div>

          <div className="mt-1 ml-5 lg:ml-10">
            <p className="text-white text-xl">
              Talk to Expert Now →
            </p>
          </div>

          <div className="my-6 mx-5 lg:mx-0">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-transparent text-sm lg:text-lg text-white border-2 border-gray-500 rounded-2xl w-full lg:ml-10 max-w-150 min-h-12 px-7 py-2"
            >
              <Star
                size={20}
                className="shrink-0 text-blue-400 fill-blue-400"
              />

              <p className="font-bold">
                4.8 Rating | 10,000+ Services | 30 Min Response
              </p>
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <Form />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
