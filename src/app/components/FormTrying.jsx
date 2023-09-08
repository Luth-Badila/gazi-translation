// components/RegisterForm.js
"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation logic goes here
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data or perform other actions
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username) {
      errors.username = "Username is required";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // You can use a regular expression or a library like validator.js to validate email
    // For simplicity, we'll use a basic example
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="p-5 flex flex-col gap-3 border rounded-md border-[#daa520]">
      <h1 className="text-3xl text-center">Form Pemesanan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block white font-bold">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            className={`py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#daa520] appearance-none focus:outline-none focus:ring-0 focus:border-[#c49829] ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && <p className="text-red-500 mt-1">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`border rounded-md p-2 w-full text-black ${errors.email ? "border-red-500" : "border-gray-300"}`} />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold">
            Password
          </label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`border rounded-md p-2 w-full text-black ${errors.password ? "border-red-500" : "border-gray-300"}`} />
          {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
        </div>
        <div className="mt-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
