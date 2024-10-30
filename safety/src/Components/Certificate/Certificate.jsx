
import React, { useState } from "react";
import AboutUsLayer from "../Layers/About_usLayer";
import Clients from "../Clients/Clients";
import axios from "axios";
import toast from "react-hot-toast";

const Certificate = () => {
  const [errmass, setErrMass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState(null);  // Set default to null
  const [formData, setFormData] = useState({
    certificateCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getApi = async (formData) => {
    try {
      console.log(formData.certificateCode);
      setIsLoading(true);
      setErrMass(""); // Clear previous errors
      const { data } = await axios.post(
        `https://camp-coding.site/safty/api/company-certificates/${formData.certificateCode}`
      );
      console.log(data);
      setData(data); // Store the data
      setIsValid(data.valid); // Update validity status
    
    } catch (error) {
      setIsValid(false);
      setErrMass(error?.response?.data?.message || "An error occurred");
      toast.error(error?.response?.data?.message || "Invalid code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getApi(formData);  // Call the API function
  };

  return (
    <>
      <AboutUsLayer />

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-[#F0940D] w-[50%] mx-auto p-6 rounded-lg shadow-md text-center">
          <h2 className="text-white text-lg mb-4">Enter certificate code</h2>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              className="p-2 rounded-md border border-gray-300 w-full max-w-xs"
              placeholder="Enter certificate code"
              name="certificateCode"
              value={formData.certificateCode}
              onChange={handleChange}
            />
            <button
              onClick={handleSubmit}
              className="bg-white text-[#F0940D] px-4 py-2 rounded-md hover:bg-gray-100 transition-all"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {/* Display data based on search result */}
        {data ? (
          <div className="mt-8 ">
            {isValid ? (
              <div className="flex justify-center items-center">
                <div className="bg-green-500 mb-[20px] flex justify-center items-center w-[200px] text-white font-bold rounded-t px-2 py-2">
                  Valid
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div className="bg-red-500 mb-[20px] flex justify-center items-center w-[200px] text-white font-bold rounded-t px-2 py-2">
                  Not Valid
                </div>
              </div>
            )}

            {/* Display certificate image */}
            {data.certificatePhotoUrl && (
              <img
                src={data.certificatePhotoUrl}
                alt="Certificate"
                className="w-[50%] rounded-lg shadow-lg mx-auto"
              />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p className="font-bold mt-[30px] text-[25px]">
              Search to see your certificate
            </p>
          </div>
        )}
      </div>
      <Clients />
    </>
  );
};

export default Certificate;
