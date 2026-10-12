import ServiceCard from "../../../../Pages/Homepage/Components/HeroSection/ServiceCard";
import ac from "../../../../assets/split-ac-DTly3zZd.png"
import Cassette from "../../../../assets/cassette-ac-Bxt1yonX.png"
import Window from "../../../../assets/window-ac-QsYCzHax.png"
import Tower from "../../../../assets/tower-ac-CRoanDAt.png"
import water from "../../../../assets/water-cooler-dispenser-xqYNjZ5T.png"
import vrf from "../../../../assets/vrf-Bwc1zYSg.png"
const ServicesSection = () => {
  return (
    <>
    <div className="bg-[#E7F7FD] p-10">
      <div className="mx-25">
        <p className="text-lg font-bold text-[#0B6B92] bg-[#D0EDF7] border border-[#0B6B92] rounded-3xl mt-20 mb-4 w-85 h-10 p-2 text-center">
          SHOP BY TOP CATEGORIES
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-15">
          <div>
            <h2 className="font-bold lg:text-4xl sm:text-2xl">
              Don’t Miss Out – Shop Trending Cooling Products Today
            </h2>
          </div>
          <div>
            <button className="border border-gray-400 text-center rounded-2xl h-10 w-50">
              View all product➡{" "}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceCard image={ac}  category="RESIDENTIAL"
  title="Split AC"
  description="High-efficiency cooling for your home and office." />
            <ServiceCard image={Window}  category="RESIDENTIAL"
    title="Window AC"
    description="Compact and powerful cooling solutions for any room." />
            <ServiceCard  image={Cassette}  category="COMMERCIAL"
    title="Cassette AC"
    description="Unobtrusive ceiling-mounted cooling for large spaces." />
            <ServiceCard image={Tower} category="Commercial"
title="Tower AC"
description="Elegant floor-standing units with high cooling capacity." />
            <ServiceCard image={water} category="Industrial"
title="Water Cooler and Dispenser"
description="Pure, chilled water for offices and public spaces." />
            <ServiceCard image={vrf} category="Advanced Industrial"
title="VRF"
description="Advanced Variable Refrigerant Flow systems for complex buildings." />


        </div>
      </div>
      </div>
    </>
  );
};

export default ServicesSection;
