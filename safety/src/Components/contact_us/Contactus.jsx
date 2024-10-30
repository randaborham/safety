import React from "react";
import { useState } from "react";
import img from "../../Assets/Ellipse 28@2x.png";
import titleimg from "../../Assets/Frame 95 (1).png";
import { CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { z } from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Validation
export const formSchema = z.object({
  userName: z
    .string()
    .min(3, "Please insert a name with more than 3 characters"),
  userEmail: z.string().email("Please insert a valid email address"),
  userPhone: z.string().min(11, "Please insert a valid phone number"),
  message: z.string().min(1, "Please insert a message"),
});

export default function Contactus() {
  const [errmass, seterrmass] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const errors = result.error.format();
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    await getApi(formData);
    console.log(formData);
  };

  async function getApi(formData) {
    console.log(formData);
    seterrmass("");
    setisLoading(true);
    let { data } = await axios
      .post(`https://camp-coding.site/safty/api/contact-us-mails`, formData)
      .catch((err) => {
        setisLoading(false);
        seterrmass(err.response.data.message);
      });

    setisLoading(false);

    if (data.status === "success") {
      toast.success("Message sent successfully");
    } else {
      toast.error("Error sending message");
    }
  }

  return (
    <>
      <div className="header bg-[#FFF7F7] lg:grid grid-cols-12">
        <div className="px-12 col-span-6 pt-[95px] ">
          <img src={titleimg} className="" alt="header" />
          <p className="tracking-tight mb-[60px] mt-[30px] font-Roboto text-[16px] font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            cupiditate quae maiores quia earum vel libero eligendi ab veniam
            quam, aliquid reprehenderit dolorum saepe, repudiandae veritatis
            placeat omnis rem adipisci!
          </p>
          <button className="flex items-center textNav text-[white] font-semibold  px-6 sm:px-6 py-3 bg-[#F0940D] transition duration-500 ease-in-out rounded-lg">
            Our Services
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6 pt-1 ms-2"
              viewBox="0 0 31 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16671 12L29.8334 12M29.8334 12L19.0834 22.75M29.8334 12L19.0834 1.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="col-span-6 pt-[120px]">
          <div className="flex justify-end">
            <img src={img} className="w-[460px]" alt="title" />
          </div>
        </div>
      </div>
      <div className="text">
        <div className="title flex flex-col justify-center items-center">
          <h3 className="font-medium font-Roboto text-[54px] mt-[30px]">
            Get Touch
          </h3>
          <p className="text-[#F0940D] font-medium tracking-wide lg:px-[0px] px-[30px] mt-[30px]">
            Contact us for assistance or questions ons we’re here to help with
            ans inquiries you have
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-0 gap-[20px] flex flex-col lg:px-[200px] px-[10px] my-[60px]">
        <div className="lg:col-span-4  text-[#F0940D] relative pe-[40px] ">
          <div className="absolute left-[20px] bg-[white] top-[-10px] w-[40px] h-[40px] border border-[#F0940D] flex justify-center items-center rounded-full">
            <CiPhone className="text-[#F0940D]" />
          </div>
          <div className="border flex flex-col rounded pt-[40px] ps-[10px] pb-[20px] border-[#F0940D]">
            <p className="font-medium">Contact Phone Number</p>
            <Link>Mobile: +20-115-794-7206</Link>
            <Link>Whatsapp:+20-106-622-6205</Link>
            <Link>Tel&Fax:+20-222-601-038</Link>
          </div>
        </div>
        <div className="col-span-4 text-[#F0940D] relative pe-[40px] ">
          <div className="absolute left-[20px] bg-[white] top-[-10px] w-[40px] h-[40px] border  border-[#F0940D] flex justify-center items-center rounded-full">
            <FaLocationDot className="text-[#F0940D]" />
          </div>
          <div className="border flex flex-col lg:h-[157px] rounded w-full pt-[40px] ps-[10px] pb-[20px]  border-[#F0940D]">
            <p className="font-medium">Our Location</p>
            <Link>
              26 A Khader El Touny St., Apart. 109, Nasr City, Cairo, Egypt
            </Link>
          </div>
        </div>
        <div className="col-span-4  text-[#F0940D] relative pe-[40px] ">
          <div className="absolute left-[20px] bg-[white] top-[-10px] w-[40px] h-[40px] border border-[#F0940D] flex justify-center items-center rounded-full">
            <MdEmail className="text-[#F0940D]" />
          </div>
          <div className="border flex flex-col  h-[157px] rounded pt-[40px] ps-[10px] pb-[20px] border-[#F0940D]">
            <p className="font-medium">Email address</p>
            <Link>info@cschse.com</Link>
          </div>
        </div>
      </div>
      <div className="text">
        <div className="title flex flex-col justify-center items-center">
          <p className="text-[#F0940D] font-bold lg:text-[36px]">
            We’re Ready To Help You Send Us Message
          </p>
        </div>
      </div>

      <div className="form lg:w-[75%] m-auto">
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
              {formErrors.userName && (
                <p className="text-red-500 text-xs">
                  {formErrors.userName._errors[0]}
                </p>
              )}
            </div>

            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                />
                {formErrors.userEmail && (
                  <p className="text-red-500 text-xs">
                    {formErrors.userEmail._errors[0]}
                  </p>
                )}
              </div>

              <div className="col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="userPhone"
                  value={formData.userPhone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                />
                {formErrors.userPhone && (
                  <p className="text-red-500 text-xs">
                    {formErrors.userPhone._errors[0]}
                  </p>
                )}
              </div>
            </div>

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.message && (
              <p className="text-red-500 text-xs">
                {formErrors.message._errors[0]}
              </p>
            )}

            <div className="flex items-center justify-center mt-[20px]">
              <button className="flex items-center text-white font-semibold px-6 sm:px-6 py-3 bg-[#F0940D] transition duration-500 ease-in-out rounded-lg">
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54693.32347913447!2d31.36721730213617!3d31.044835892557263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1689106145767!5m2!1sen!2seg"
          width="100%"
          height={450}
          style={{ border: 0 }}
          title="map"
        />
      </div>
    </>
  );
}
