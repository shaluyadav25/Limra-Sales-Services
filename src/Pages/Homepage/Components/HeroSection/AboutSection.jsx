import Card from "../../../../Pages/Homepage/Components/HeroSection/Card";

const AboutSection = () => {
  return (
    <div className="bg-[#D0EDF7] p-10">
    <div className="mx-25 bg-[#D0EDF7 p-20]">
      <p className="text-lg font-bold text-[#0B6B92] bg-[#D0EDF7] border border-[#0B6B92] rounded-3xl mt-20 mb-2 w-85 h-10 p-2 text-center">
        LIMRA Sales & Services
      </p>
      <h2 className="font-bold text-3xl text-black mb-10">
        Trusted HVAC & Cooling Experts in Uttar Pradesh
      </h2>
      <p className="text-gray-400 sm:w-100 lg:w-300 leading-8 mb-15">
        LIMRA Sales & Services is a leading HVAC and air conditioning solutions
        provider based in Uttar Pradesh, delivering reliable installation,
        maintenance, and large-scale commercial cooling projects across the
        state. With strong technical expertise and years of hands-on industry
        experience, we provide complete climate control solutions for
        residential, commercial, and industrial spaces. From standard AC
        installations to advanced VRF systems, ducting, ventilation, cold rooms,
        ice plants, and chiller plants, our team ensures every project is
        executed with precision, safety, and efficiency. We specialize in the
        installation and servicing of Window, Split, Cassette, Ductable, Package
        AC, and AHU systems, along with copper piping and complete HVAC line
        work. With a commitment to quality workmanship, transparent service, and
        long-term customer satisfaction, LIMRA Sales & Services continues to
        build trust through performance and professionalism.
      </p>

      <div className="flex flex-col lg:flex-row sm:gap-2 lg:gap-5">
        <Card number="5,000+" title="Customers" />
        <Card number="500+" title="Commercial Projects" />
        <Card number="9+" title="Years Experience" />
        <Card number="20+" title="Cities" />
      </div>
      <div className="lg:mb-40 sm:mb-20">
        <p className="font-bold text-[#0B6B92] text-center text-xl">
          Learn More About Us ➡
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
