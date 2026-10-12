const ServiceCard = ({ image, category, title, description }) => {
  return (
    <>
      <div
        className="lg:h-65 sm:h-70 p-5 rounded-2xl bg-cover hover:border-t-4 hover:border-blue-400 bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="relative flex-1 flex-col   wrap">
          <p className=" mx-2 text-lg text-white">{category}</p>
          <h2 className="font-bold mb-10  text-xl text-gray-700">{title}</h2>
          <p className="text-gray-400 mt-20">{description}</p>
          </div>
          <button
            type="button"
            className="bg-transparent border border-gray-700 font-semibold text-xl text-white rounded-2xl  mx-3 w-full h-10 "
          >
            Explore category{" "}
          </button>
        
      </div>
    </>
  );
};

export default ServiceCard;
