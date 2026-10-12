import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChevronUp, SmartphoneCharging } from "lucide-react";
const Form = () => {
  const schema = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(3, "minimum 3 character is character"),
    email: yup
      .string()
      .required("email is required")
      .email("Enter a valid email"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[6-9]\d{9}$/, "enter 10 digit number"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("Form data", data);
    reset();
  };
  return (
    <>
      <div className="shadow-2xl bg-white rounded-2xl p-4 mx-5 lg:mx-15 my-7 h-130 sm:w-100 lg:w-105">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-bold text-2xl text-black flex m-2 justify-center items-center">
            <SmartphoneCharging
              size={25}
              className="shrink-0 text-blue-500 m-2"
              fill="blue-500"
            />
            Quick Service Booking
          </h1>
          <div className="lg:w-90 sm:w-60 my-5 mx-2  p-3  text-2xl h-15 border-2 border-gray-500 hover:border-blue-400 outline-none rounded-2xl">
            <input
              type="text"
              name="name"
              className=" border-0 outline-none"
              placeholder="Full name"
              {...register("name")}
            />{" "}
            <span className="text-red-500">
              {" "}
              {errors.name && <p> {errors.name.message} </p>}{" "}
            </span>
          </div>
          <div className="lg:w-90 sm:w-60 my-5 mx-3  p-3  text-2xl h-15 border-2 border-gray-500 hover:border-blue-400 outline-none rounded-2xl">
            <input type="email" className=" border-0 outline-none" name="email" placeholder="Email Address" {...register("email")} /> <span className="text-red-500">   {errors.email && <p>{errors.email.message}</p>} </span>
          </div>
          <div className="lg:w-90 sm:w-60 my-5 mx-3  p-3  text-2xl h-15 border-2 border-gray-500 hover:border-blue-400 outline-none rounded-2xl">
            <input type="text" className=" border-0 outline-none" name="phone" placeholder="Phone number" {...register("phone")} /> <span className="text-red-500">   {errors.phone && <p>{errors.phone.message}</p>} </span>
          </div>
<div className="relative lg:w-90 sm:w-60 my-5 mx-3 p-3 text-2xl h-15 border-2 border-gray-500 hover:border-blue-400 rounded-2xl">

  <select className="w-full h-full appearance-none border-0 outline-none pr-8">
    <option value="" disabled selected>Select Services</option>
    <option>AC Repair</option>
    <option>AC Installation</option>
    <option>AC Maintenance</option>
    <option>AC Selling</option>
    <option>General Enquiry</option>
  </select>

  <ChevronUp
    size={25}
    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
  />
</div>
<div className=" lg:my-5 mx-3 ">
  <button type="button" onClick={handleSubmit(onSubmit)} className="text-center border border-blue-400 bg-[#0693CB] h-15 lg:w-90 sm:w-70 text-white font-bold p-2 rounded-2xl">GET INSTANT QUOTE</button>
</div>
<div>
  <p className="text-center text-gray-500">✔ 100% Secure

✔No Hidden Charges 
</p>
</div>
        </form>
      </div>
    </>
  );
};

export default Form;
