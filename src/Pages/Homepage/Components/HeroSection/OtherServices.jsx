import ProCard from "./ProCard"

const OtherServices = () => {
  return (
    <>
    <div className="bg-linear-to-r from-[#0A2F4B] to-[#097AAA] py-15 px-25">
      <div className="flex flex-col items-center justify-center text-center ">
                <p className="text-[#0693CB] font-bold mb-5 border border-gray-400 w-50 h-10  rounded-2xl p-2 ">WHAT WE DO</p>
                <h2 className="text-6xl font-serif font-semibold text-white mb-12">Professional Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

    <ProCard
      title="Installation"
      description="We provide professional installation services for Window, Split, Cassette, Ductable, Tower, and Package AC systems, along with VRV/VRF systems, AHU units, Cold Rooms, and Chiller Plants. Our expert team ensures proper copper piping, insulation, and safe electrical setup for efficient and long-lasting cooling performance."
    />

    <ProCard
      title="Copper Piping"
      description="High-quality copper piping services for Split AC, Cassette AC, Ductable AC, VRV/VRF systems, AHU units, and Cold Rooms. We ensure leak-proof connections, proper insulation, and pressure testing for reliable HVAC performance."
    />

    <ProCard
      title="AC Servicing"
      description="Complete AC servicing and maintenance for Window, Split, Cassette, Ductable, VRV/VRF, Package AC, AHU units, and Cold Rooms. Our service includes gas checking, coil cleaning, filter cleaning, PCB inspection, and performance testing to improve cooling efficiency and reduce breakdowns."
    />

    <ProCard
      title="Pump Down Services"
      description="Professional pump down services for safe refrigerant recovery before AC shifting or major repairs. Ensures zero gas loss and system safety for Split AC, VRV/VRF systems, and industrial cooling units."
    />

    <ProCard
      title="Water Dispenser & Cooling Repair"
      description="Repair and maintenance of Water Dispensers, RO Plants, Panel AC units, and Water Coolers including gas charging, compressor replacement, heating and cooling coil repair, PCB replacement, and complete performance optimization services."
    />

    <ProCard
      title="3 Phase Machine & Industrial Cooling Repair"
      description="Expert repair of 3 Phase machines, VRV/VRF systems, AHU units, Cold Rooms, Ice Plants, Air and Water-Cooled Chillers, and complete Chiller Plants with professional diagnostics and servicing solutions."
    />

    <ProCard
      title="Chiller Services"
      description="Professional services for Air-Cooled and Water-Cooled Chillers including installation, repair, maintenance, and performance optimization for industrial and commercial cooling systems."
    />

    <ProCard
      title="Spare Parts Supply"
      description="Supply of genuine spare parts for AC units, AHU systems, Chillers, and industrial cooling equipment including compressors, PCBs, motors, and more."
    />

    <ProCard
      title="AMC (Annual Maintenance Contract)"
      description="Comprehensive annual maintenance contracts for AC systems, AHU units, and industrial cooling equipment with regular servicing and priority breakdown support."
    />
    </div>
      </div>
    </>
  )
}

export default OtherServices