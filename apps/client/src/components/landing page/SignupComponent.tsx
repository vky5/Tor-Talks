// SignUpForm.tsx

"use client";

import { useState } from "react";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission (e.g., send data to the backend)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <h2 className="text-3xl font-bold text-center text-[#1F1F2E]">Sign Up</h2>
      
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 rounded-xl bg-[#1F1F2E] text-white border border-[#333] focus:outline-none"
        />
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className="w-full p-3 rounded-xl bg-[#1F1F2E] text-white border border-[#333] focus:outline-none"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 rounded-xl bg-[#1F1F2E] text-white border border-[#333] focus:outline-none"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-3 rounded-xl bg-[#1F1F2E] text-white border border-[#333] focus:outline-none"
        />
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 text-lg font-semibold text-white bg-[#FE3EAA] rounded-2xl shadow-lg hover:bg-[#6C19FF] transition-all duration-300"
        >
          {isSubmitted ? "Submit" : "Sign up"}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
