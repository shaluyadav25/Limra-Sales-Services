import allac from "../../../../assets/allac.png";
import vrf from "../../../../assets/acc.png";
const SolutionSection = () => {
  return (
    <>
      <div className="mx-25 my-15">
        <div className="flex justify-center items-center mb-7">
          <p className="text-lg font-bold text-[#0B6B92] bg-[#D0EDF7] border border-[#0B6B92] rounded-3xl mt-20 mb-2 w-85 h-10 p-2 text-center">
            COMPLETE HVAC SOLUTION
          </p>
        </div>
        <p className="text-gray-600 text-center mb-10">
          From residential comfort to large commercial projects, we've got you
          covered.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="lg:h-140 lg:w-140 sm:w-90 sm:h-100 border border-gray-500 rounded-2xl mb-10">
            <img
              src={allac}
              className="h-50 mb-10 w-full border-t-4 rounded-2xl border-purple-900"
              alt="ac"
            />
            <h4 className="font-bold text-2xl mx-3 mb-12">
              Residential Solutions
            </h4>
            <ul className="mx-10 mb-10">
              <li>🔵 Split ACs Up to 3 ton</li>
              <li>🔵 Window ACs</li>
              <li>🔵 Portable ACs</li>
              <li>🔵 Water Coolers & Dispensers</li>
              <li>🔵 Air Purifiers & Water Softeners</li>
            </ul>
            <div className="flex justify-center gap-2">
              <button className="bg-[#074662] border border-[#074662] rounded-xl text-xl font-semibold text-center text-white h-10 w-170 mx-10">Get Quote</button>
              <button className=" border border-gray-400 rounded-xl text-xl font-semibold text-center text-[#074662] h-10 w-170 mx-10">View product</button>
            </div>
          </div>
          <div className="lg:h-140 lg:w-140 sm:w-90 sm:h-100 border border-gray-500 rounded-2xl mb-10">
            <img
              src={vrf}
              className="h-50 w-full rounded-2xl border-t-4 border-purple-900 mb-10"
              alt="erf"
            />
            <h4 className="font-bold text-2xl mx-3 mb-12">
              Commercial & VRF Systems
            </h4>
            <ul className="mx-10 mb-10">
              <li>🔵 Daikin VRF Systems</li>
              <li>🔵 Cassette & Ductable ACs</li>
              <li>🔵 Chillers & Heat Pumps</li>
              <li>🔵 Tower ACs</li>
              <li>🔵 Ventilation & Fresh Air Systems</li>
            </ul>
            <div className="flex justify-center gap-4">
              <button className="bg-[#074662] border border-[#074662] rounded-xl text-xl font-semibold text-center text-white h-10 w-170 mx-10">Get Quote</button>
              <button className=" border border-gray-400 rounded-xl text-xl font-semibold text-center text-[#074662] h-10 w-170 mx-10">View product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionSection;
