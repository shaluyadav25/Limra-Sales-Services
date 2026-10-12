import { Wrench } from "lucide-react";

const ProCard = ({ title, description }) => {
  return (
    <div className="bg-[#1C405C] rounded-2xl p-8 w-full min-h-80 border border-gray-500 hover:border-sky-400 transition duration-300">

      <div className="bg-[#31566F] rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
        <Wrench size={28} className="text-sky-300" />
      </div>

      <h1 className="mb-3 text-white font-semibold text-xl">
        {title}
      </h1>

      <p className="text-sky-300 leading-6 tracking-wide">
        {description}
      </p>

    </div>
  );
};

export default ProCard;